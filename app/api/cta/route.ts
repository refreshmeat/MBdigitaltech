import { Pool } from "pg";

const allowedSources = new Set([
  "header", "hero", "services", "projects", "footer", "floating", "mobile", "quote",
]);

const pool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL, max: 2, connectionTimeoutMillis: 5000 })
  : null;

export async function POST(request: Request) {
  const data = await request.json().catch(() => null);
  const source = typeof data?.source === "string" ? data.source : "";
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
