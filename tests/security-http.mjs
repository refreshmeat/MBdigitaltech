import assert from "node:assert/strict";

const base = process.env.MB_SECURITY_URL || "http://127.0.0.1:3137";
const headers = { "content-type": "application/json", "x-forwarded-for": "192.0.2.79" };
const report = [];
async function probe(path, body, expected, extra = {}) {
  const res = await fetch(base + path, {
    method: "POST",
    headers: { ...headers, ...extra },
    body: typeof body === "string" ? body : JSON.stringify(body),
    signal: AbortSignal.timeout(9000),
  });
  report.push({ path, expected, status: res.status });
  assert.equal(res.status, expected, `${path}: HTTP ${res.status} esperado ${expected}`);
  return res;
}
async function main() {
  for (const path of ["/", "/servicos", "/orcamento"]) {
    const r = await fetch(base + path);
    assert.equal(r.status, 200);
    const csp = r.headers.get("content-security-policy") || "";
    assert.match(csp, /object-src 'none'/);
    assert.match(csp, /frame-ancestors 'none'/);
    assert.match(csp, /form-action 'self'/);
  }
  await probe("/api/orcamento", "[]", 400);
  await probe("/api/orcamento", "{", 400);
  await probe("/api/orcamento", { description: "x".repeat(25000) }, 413);
  await probe("/api/avaliacoes", { rating: "NaN", project: "Teste", name: "Teste", email: "qa@example.invalid", review: "Sem risco, nota inválida do teste automatizado.", consent: true }, 400);
  await probe("/api/avaliacoes", { rating: 4.5, project: "Teste", name: "Teste", email: "qa@example.invalid", review: "Sem risco, nota inválida do teste automatizado.", consent: true }, 400);
  await probe("/api/avaliacoes", { name: "x", review: "a".repeat(30000) }, 413);
  await probe("/api/cta", {}, 400);
  await probe("/api/cta", { source: "hero", padding: "X".repeat(2000) }, 413);
  await probe("/api/cta", { source: "hero" }, 415, { "content-type": "text/plain" });
  // Chave isolada para não impactar visitantes; chamadas inválidas não geram registros.
  const limited = { ...headers, "x-forwarded-for": "198.51.100.211" };
  for (let i = 0; i < 12; i++) {
    const res = await probe("/api/orcamento", {}, 400, limited);
    assert.ok(res.status !== 429);
  }
  const blocked = await probe("/api/orcamento", {}, 429, limited);
  assert.ok(Number(blocked.headers.get("retry-after")) > 0);
  console.log("SECURITY_HTTP_AUDIT_OK", JSON.stringify({ checks: report.length + 3, errors: 0 }));
}
main().catch((e) => { console.error("SECURITY_HTTP_AUDIT_FAILED", e.message); process.exitCode = 2; });
