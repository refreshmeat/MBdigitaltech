"use client";

import { FormEvent, useMemo, useState } from "react";
import Link from "next/link";
import WhatsAppLink from "../WhatsAppLink";
import styles from "./orcamento.module.css";

type FormState = {
  name: string;
  company: string;
  email: string;
  whatsapp: string;
  projectType: string;
  stage: string;
  budget: string;
  deadline: string;
  description: string;
  website: string;
};

const initialForm: FormState = {
  name: "", company: "", email: "", whatsapp: "", projectType: "",
  stage: "", budget: "", deadline: "", description: "", website: "",
};

const projectOptions = [
  ["site", "Site, loja ou página profissional"],
  ["app", "Aplicativo"],
  ["system", "Sistema ou plataforma"],
  ["design", "Design ou UI/UX"],
  ["automation", "Automação ou inteligência artificial"],
  ["integration", "API ou integração"],
  ["evolution", "Melhorar um projeto existente"],
  ["other", "Ainda não sei / outro"],
] as const;

const optionalBudgets = [
  ["", "Prefiro conversar primeiro"],
  ["starter", "Até R$ 3 mil"],
  ["medium", "R$ 3 mil a R$ 8 mil"],
  ["advanced", "R$ 8 mil a R$ 20 mil"],
  ["custom", "Acima de R$ 20 mil"],
] as const;

type Status = "idle" | "sending" | "success" | "error";

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialForm);
  const [status, setStatus] = useState<Status>("idle");
  const [submitted, setSubmitted] = useState(false);

  const update = (key: keyof FormState, value: string) => {
    setForm((previous) => ({ ...previous, [key]: value }));
    if (status !== "idle") setStatus("idle");
  };

  const email = form.email.trim();
  const digits = form.whatsapp.replace(/\D/g, "");
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validWhatsApp = digits.length >= 10 && digits.length <= 13;
  const ready =
    form.name.trim().length >= 2 &&
    (validEmail || validWhatsApp) &&
    (!email || validEmail) &&
    (!form.whatsapp.trim() || validWhatsApp) &&
    Boolean(form.projectType) &&
    form.description.trim().length >= 8;

  const message = useMemo(() => {
    const project = projectOptions.find(([code]) => code === form.projectType)?.[1] || "um projeto digital";
    if (!ready) return "Olá! Vim pelo site da MB Digital Tech e gostaria de um orçamento. Podemos conversar?";
    return [
      "Olá! Gostaria de um orçamento com a MB Digital Tech.",
      `Nome: ${form.name.trim()}`,
      `Serviço: ${project}`,
      `Ideia: ${form.description.trim()}`,
      form.company.trim() ? `Empresa/projeto: ${form.company.trim()}` : "",
      form.deadline ? `Prazo: ${form.deadline}` : "",
    ].filter(Boolean).join("\n");
  }, [form, ready]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    if (!ready || status === "sending") return;

    setStatus("sending");
    try {
      const response = await fetch("/api/orcamento", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus(response.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.quickIntro}>
        <span className={styles.quickKicker}>PEDIR ORÇAMENTO</span>
        <h2>Conte o básico. O resto a gente conversa.</h2>
        <p>Não precisa preencher um briefing enorme para começar. Seu pedido vai direto para análise da nossa equipe.</p>
      </div>

      <div className={styles.quickFields}>
        <div className={styles.twoColumns}>
          <label>
            Seu nome <b>*</b>
            <input value={form.name} onChange={(e) => update("name", e.target.value)}
              autoComplete="name" placeholder="Como podemos te chamar?" maxLength={120} />
          </label>
          <label>
            WhatsApp
            <input value={form.whatsapp} onChange={(e) => update("whatsapp", e.target.value)}
              autoComplete="tel" inputMode="tel" placeholder="(21) 99999-9999" maxLength={25} />
          </label>
        </div>
        <div className={styles.emailRow}>
          <label>
            E-mail (opcional, se informou o WhatsApp)
            <input type="email" value={form.email} onChange={(e) => update("email", e.target.value)}
              autoComplete="email" placeholder="seuemail@exemplo.com" maxLength={180} />
          </label>
          <p>Informe pelo menos um contato: WhatsApp ou e-mail.</p>
        </div>
        <label>
          O que você precisa? <b>*</b>
          <select value={form.projectType} onChange={(e) => update("projectType", e.target.value)}>
            <option value="">Selecione o serviço</option>
            {projectOptions.map(([code, title]) => <option key={code} value={code}>{title}</option>)}
          </select>
        </label>
        <label>
          Conte sua ideia em poucas palavras <b>*</b>
          <textarea value={form.description} onChange={(e) => update("description", e.target.value)}
            rows={4} maxLength={5000}
            placeholder="Por exemplo: quero um site para divulgar meus serviços e receber contatos pelo WhatsApp." />
        </label>

        <details className={styles.optionalDetails}>
          <summary>Tenho mais detalhes para contar (opcional)</summary>
          <div className={styles.optionalGrid}>
            <label>
              Empresa ou nome do projeto
              <input value={form.company} onChange={(e) => update("company", e.target.value)}
                maxLength={160} placeholder="Se houver" />
            </label>
            <label>
              Situação atual
              <select value={form.stage} onChange={(e) => update("stage", e.target.value)}>
                <option value="">Não informado</option>
                <option value="idea">Ainda é uma ideia</option>
                <option value="scope">Já tenho referências</option>
                <option value="existing">Já existe algo funcionando</option>
                <option value="rescue">Preciso corrigir ou retomar um projeto</option>
              </select>
            </label>
            <label>
              Faixa de investimento
              <select value={form.budget} onChange={(e) => update("budget", e.target.value)}>
                {optionalBudgets.map(([code, title]) => <option value={code} key={title}>{title}</option>)}
              </select>
            </label>
            <label>
              Prazo desejado
              <select value={form.deadline} onChange={(e) => update("deadline", e.target.value)}>
                <option value="">Ainda não sei</option>
                <option value="urgent">Tenho urgência</option>
                <option value="month">Até 30 dias</option>
                <option value="quarter">1 a 3 meses</option>
                <option value="long">Mais de 3 meses</option>
                <option value="flexible">Sem prazo fechado</option>
              </select>
            </label>
          </div>
        </details>
        <label className={styles.honeypot} aria-hidden="true">
          Website <input value={form.website} onChange={(e) => update("website", e.target.value)}
            tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {submitted && !ready && (
        <div className={styles.validation} role="alert">
          Informe seu nome, um WhatsApp ou e-mail válido, o serviço e uma breve descrição da ideia.
        </div>
      )}
      {status === "success" && (
        <div className={styles.success} role="status">
          Recebemos seu pedido! As informações já estão registradas para nossa análise.
        </div>
      )}
      {status === "error" && (
        <div className={styles.validation} role="alert">
          Não conseguimos registrar agora. Use o botão do WhatsApp abaixo para falar com a equipe e não perder sua solicitação.
        </div>
      )}

      <div className={styles.quickSubmit}>
        <p>Seus dados serão usados apenas para responder ao pedido. Consulte a nossa <Link href="/privacidade">política de privacidade</Link>.</p>
        <div className={styles.quickActions}>
          <button type="submit" className={styles.submitButton} disabled={status === "sending" || status === "success"}>
            {status === "sending" ? "Enviando..." : status === "success" ? "Pedido registrado" : "Enviar pedido de orçamento"} <span aria-hidden="true">↗</span>
          </button>
          <WhatsAppLink source="quote" className={styles.whatsappButton} message={message}>
            Prefiro conversar no WhatsApp ↗
          </WhatsAppLink>
        </div>
      </div>
    </form>
  );
}
