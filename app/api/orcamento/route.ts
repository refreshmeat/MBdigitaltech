import { sendMbNotification } from "../../../lib/mail-notifications";
import { Pool } from "pg";

const leadPool = process.env.DATABASE_URL
  ? new Pool({ connectionString: process.env.DATABASE_URL, max: 3, connectionTimeoutMillis: 8000 })
  : null;

type QuotePayload = {
  name?: string;
  company?: string;
  email?: string;
  whatsapp?: string;
  projectType?: string;
  stage?: string;
  budget?: string;
  deadline?: string;
  description?: string;
  website?: string;
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const projectLabels: Record<string, string> = {
  site: "Site / landing page",
  app: "Aplicativo",
  design: "Design ou UI/UX",
  system: "Sistema sob medida",
  saas: "Produto SaaS",
  automation: "Automação",
  bot: "Bot / chatbot",
  ai: "Solução com IA",
  integration: "API / integração",
  evolution: "Evolução de projeto existente",
  other: "Outro",
};

const stageLabels: Record<string, string> = {
  idea: "Ainda é uma ideia",
  scope: "Já tenho escopo ou referências",
  existing: "Já existe algo funcionando",
  rescue: "Existe um projeto que precisa ser corrigido ou retomado",
};

const budgetLabels: Record<string, string> = {
  open: "Quero entender o investimento primeiro",
  starter: "Até R$ 3 mil",
  medium: "R$ 3 mil a R$ 8 mil",
  advanced: "R$ 8 mil a R$ 20 mil",
  custom: "Acima de R$ 20 mil",
};

const deadlineLabels: Record<string, string> = {
  flexible: "Sem prazo fechado",
  month: "Até 30 dias",
  quarter: "1 a 3 meses",
  long: "Mais de 3 meses",
  urgent: "Tenho urgência",
};

function clean(value: unknown, max = 5000) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

export async function POST(request: Request) {
  const length = Number(request.headers.get("content-length") || "0");
  if (length > 20000) return Response.json({ ok: false, error: "payload_too_large" }, { status: 413 });
  const payload = (await request.json().catch(() => null)) as QuotePayload | null;
  if (!payload) {
    return Response.json({ ok: false, error: "invalid_payload" }, { status: 400 });
  }

  if (clean(payload.website, 200)) {
    return Response.json({ ok: true });
  }

  const name = clean(payload.name, 120);
  const company = clean(payload.company, 160);
  const email = clean(payload.email, 180);
  const whatsapp = clean(payload.whatsapp, 80);
  const projectType = clean(payload.projectType, 80);
  const stage = clean(payload.stage, 80);
  const budget = clean(payload.budget, 80);
  const deadline = clean(payload.deadline, 80);
  const description = clean(payload.description, 5000);

  const whatsappDigits = whatsapp.replace(/\D/g, "");
  const validEmail = emailPattern.test(email);
  const validWhatsapp = whatsappDigits.length >= 10 && whatsappDigits.length <= 13;

  if (
    name.length < 2 ||
    (!validEmail && !validWhatsapp) ||
    (email.length > 0 && !validEmail) ||
    (whatsapp.length > 0 && !validWhatsapp) ||
    !projectLabels[projectType] ||
    (stage.length > 0 && !stageLabels[stage]) ||
    description.length < 8
  ) {
    return Response.json({ ok: false, error: "validation" }, { status: 400 });
  }

  let saved = false;
  if (leadPool) {
    try {
      await leadPool.query(
        `INSERT INTO public.project_briefings
         (name, company, email, whatsapp, project_type, stage, budget, deadline, description)
         VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9)`,
        [name, company, email, whatsapp, projectType, stage, budget, deadline, description],
      );
      saved = true;
    } catch (error) {
      console.error("Falha ao registrar briefing no Nexora:", error instanceof Error ? error.message : "erro");
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL;
  const from = process.env.RESEND_FROM;

  const text = [
    "NOVO PEDIDO DE ORÇAMENTO — MB DIGITAL TECH",
    "",
    `Nome: ${name}`,
    `Empresa: ${company || "Não informada"}`,
    `E-mail: ${email}`,
    `WhatsApp: ${whatsapp || "Não informado"}`,
    "",
    `Tipo de projeto: ${projectLabels[projectType]}`,
    `Momento atual: ${stageLabels[stage]}`,
    `Faixa de investimento: ${budgetLabels[budget] || "Não informada"}`,
    `Prazo: ${deadlineLabels[deadline] || "Não informado"}`,
    "",
    "Descrição do projeto:",
    description,
  ].join("\n");

  try {
    await sendMbNotification({ subject: `Novo projeto — ${projectLabels[projectType]}`, text, ...(validEmail ? { replyTo: email } : {}) });
    return Response.json({ ok: true, delivery: "smtp-auth" });
  } catch (error) {
    console.error("Notificação SMTP não entregue:", error instanceof Error ? error.message : "erro");
  }

  if (apiKey && to && from) {
    try {
      const response = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
        body: JSON.stringify({
          from, to: [to],
          ...(validEmail ? { reply_to: email } : {}),
          subject: `Novo projeto — ${projectLabels[projectType]}`,
          text,
        }),
        signal: AbortSignal.timeout(12000),
      });
      if (response.ok) return Response.json({ ok: true, delivery: "resend" });
    } catch (error) {
      console.error("Notificação Resend falhou:", error instanceof Error ? error.message : "erro");
    }
  }

  return saved
    ? Response.json({ ok: true, delivery: "database" })
    : Response.json({ ok: false, error: "delivery" }, { status: 502 });
}
