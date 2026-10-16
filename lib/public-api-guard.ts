// Guardrails para endpoints públicos sem autenticação (formulários e telemetria).
// Limite por processo: não substitui proteção na borda em instalações com múltiplas réplicas.
type Counter = { count: number; expires: number };
const counters = new Map<string, Counter>();
const WINDOW_MS = 15 * 60_000;
const MAX_KEYS = 4096;

function clientKey(request: Request) {
  // A infraestrutura Caddy é o proxy confiável e informa o IP de origem.
  const forwarded = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim();
  const remote = forwarded || request.headers.get("x-real-ip")?.trim() || "unknown";
  return /^[a-fA-F0-9:.]{3,80}$/.test(remote) ? remote : "unknown";
}

export function publicRateLimit(request: Request, scope: string, maxPerWindow = 12): Response | null {
  const now = Date.now();
  const key = scope + ":" + clientKey(request);
  let record = counters.get(key);
  if (!record || record.expires <= now) {
    if (counters.size >= MAX_KEYS) {
      for (const [entry, value] of counters) {
        if (value.expires <= now) counters.delete(entry);
      }
      if (counters.size >= MAX_KEYS) counters.delete(counters.keys().next().value!);
    }
    record = { count: 0, expires: now + WINDOW_MS };
    counters.set(key, record);
  }
  record.count++;
  if (record.count <= maxPerWindow) return null;
  return Response.json(
    { ok: false, error: "rate_limited" },
    { status: 429, headers: { "Retry-After": String(Math.max(1, Math.ceil((record.expires - now) / 1000))) } },
  );
}

export async function boundedJson(request: Request, limit = 20_000): Promise<unknown | Response> {
  const declaredSize = Number(request.headers.get("content-length") || "0");
  if (!Number.isFinite(declaredSize) || declaredSize > limit) {
    return Response.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  }
  const mediaType = request.headers.get("content-type")?.split(";")[0]?.trim().toLowerCase();
  if (mediaType !== "application/json") {
    return Response.json({ ok: false, error: "content_type" }, { status: 415 });
  }

  const reader = request.body?.getReader();
  if (!reader) return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  const chunks: Uint8Array[] = [];
  let size = 0;
  try {
    for (;;) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.byteLength;
      if (size > limit) {
        await reader.cancel().catch(() => {});
        return Response.json({ ok: false, error: "payload_too_large" }, { status: 413 });
      }
      chunks.push(value);
    }
    const bytes = new Uint8Array(size);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.length;
    }
    const parsed: unknown = JSON.parse(new TextDecoder("utf-8", { fatal: true }).decode(bytes));
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
    }
    return parsed;
  } catch {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  } finally {
    reader.releaseLock();
  }
}
