import nodemailer from "nodemailer";

const mailbox = "contato@mbdigitaltech.com.br";

export async function sendMbNotification(input: {
  subject: string;
  text: string;
  replyTo?: string;
}) {
  const password = process.env.MB_MAIL_PASSWORD;
  if (!password) throw new Error("Senha SMTP autenticada não configurada");

  const client = nodemailer.createTransport({
    host: "mail.mbdigitaltech.com.br",
    port: 587,
    secure: false,
    requireTLS: true,
    auth: { user: mailbox, pass: password },
    tls: {
      servername: "mail.mbdigitaltech.com.br",
      minVersion: "TLSv1.2",
      rejectUnauthorized: true,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  try {
    const result = await client.sendMail({
      from: `MB Digital Tech <${mailbox}>`,
      to: mailbox,
      ...(input.replyTo ? { replyTo: input.replyTo } : {}),
      subject: input.subject,
      text: input.text,
    });

    if (!result.accepted.includes(mailbox)) {
      throw new Error("Destinatário não aceito pelo servidor");
    }
  } finally {
    client.close();
  }
}
