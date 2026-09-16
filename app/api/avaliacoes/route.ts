type ReviewPayload = {
  name?: string;
  company?: string;
  project?: string;
  email?: string;
  rating?: number;
  review?: string;
  consent?: boolean;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const payload = (await request.json().catch(() => null)) as ReviewPayload | null;
  if (!payload) {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const company = clean(payload.company, 160);
  const project = clean(payload.project, 180);
  const email = clean(payload.email, 180);
  const review = clean(payload.review, 3500);
  const rating = Number(payload.rating);

  if (
    name.length < 2 ||
    !emailPattern.test(email) ||
    project.length < 2 ||
    review.length < 20 ||
    rating < 1 ||
    rating > 5 ||
    payload.consent !== true
  ) {
    return Response.json({ ok: false, error: "validation" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM;

  if (!apiKey || !to || !from) {
    return Response.json({ ok: false, code: "not_configured" }, { status: 503 });
  }

  const text = [
    "NOVA AVALIAÇÃO — MB DIGITAL TECH",
    "",
    `Nome: ${name}`,
    `Empresa: ${company || "Não informada"}`,
    `E-mail: ${email}`,
    `Projeto: ${project}`,
    `Nota: ${rating}/5`,
    `Autorizou publicação: sim`,
    "",
    "Depoimento:",
    review,
    "",
    "AÇÃO: verificar se o contato corresponde a um projeto real antes de publicar.",
  ].join("\n");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Avaliação ${rating}/5 — ${project}`,
      text,
    }),
  });

  if (!response.ok) {
    return Response.json({ ok: false, error: "delivery" }, { status: 502 });
  }

  return Response.json({ ok: true });
}
