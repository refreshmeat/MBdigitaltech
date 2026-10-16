import { Pool } from "pg";
import { boundedJson, publicRateLimit } from "../../../lib/public-api-guard";

const allowedSources = new Set([
  "header", "hero", "services", "examples", "team", "footer", "floating", "mobile", "quote",
]);

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL, max: 2, connectionTimeoutMillis: 5000 })
  : null;

export async function POST(request: Request) {
  const throttled = publicRateLimit(request, "cta", 120);
  if (throttled) return throttled;
  const parsed = await boundedJson(request, 1024);
  if (parsed instanceof Response) return parsed;
  const source = typeof (parsed as { source?: unknown }).source === "string"
    ? (parsed as { source: string }).source
    : "";
  if (!allowedSources.has(source)) {
    return Response.json({ ok: false }, { status: 400 });
  }

  if (!pool) {
    return Response.json({ ok: false }, { status: 503 });
  }

  try {
    await pool.query("INSERT INTO public.contact_events(source) VALUES($1)", [source]);
    return Response.json({ ok: true });
  } catch {
    return Response.json({ ok: false }, { status: 503 });
  }
}
