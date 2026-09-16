"use client";

import { FormEvent, useMemo, useState } from "react";
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
};

const initialState: FormState = {
  name: "",
  company: "",
  email: "",
  whatsapp: "",
  projectType: "",
  stage: "",
  budget: "",
  deadline: "",
  description: "",
};

const projectLabels: Record<string, string> = {
  site: "Site / landing page",
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

export default function QuoteForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [copied, setCopied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const update = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setSubmitted(false);
  };

  const briefing = useMemo(() => {
    const lines = [
      "NOVO BRIEFING — MB DIGITAL TECH",
      "",
      `Nome: ${form.name || "Não informado"}`,
      `Empresa: ${form.company || "Não informado"}`,
      `E-mail: ${form.email || "Não informado"}`,
      `WhatsApp: ${form.whatsapp || "Não informado"}`,
      "",
      `Tipo de projeto: ${projectLabels[form.projectType] || "Não informado"}`,
      `Momento atual: ${stageLabels[form.stage] || "Não informado"}`,
      `Faixa de investimento: ${budgetLabels[form.budget] || "Não informado"}`,
      `Prazo: ${deadlineLabels[form.deadline] || "Não informado"}`,
      "",
      "Descrição do projeto:",
      form.description || "Não informado",
    ];

    return lines.join("\n");
  }, [form]);

  const requiredComplete = Boolean(
    form.name &&
      form.email &&
      form.projectType &&
      form.stage &&
      form.description.trim().length >= 20,
  );

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);

    if (!requiredComplete) return;

    const subject = encodeURIComponent(
      `Novo projeto — ${projectLabels[form.projectType] || "MB Digital Tech"}`,
    );
    const body = encodeURIComponent(briefing);

    window.location.href = `mailto:contato@mbdigitaltech.com.br?subject=${subject}&body=${body}`;
  };

  const copyBriefing = async () => {
    if (!requiredComplete) {
      setSubmitted(true);
      return;
    }

    try {
      await navigator.clipboard.writeText(briefing);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.formSection}>
        <div className={styles.sectionNumber}>01</div>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeading}>
            <span>Contato</span>
            <h2>Primeiro, quem está por trás da ideia?</h2>
          </div>

          <div className={styles.twoColumns}>
            <label>
              Seu nome <b>*</b>
              <input
                value={form.name}
                onChange={(event) => update("name", event.target.value)}
                placeholder="Como podemos te chamar?"
                autoComplete="name"
              />
            </label>
            <label>
              Empresa
              <input
                value={form.company}
                onChange={(event) => update("company", event.target.value)}
                placeholder="Nome da empresa ou projeto"
                autoComplete="organization"
              />
            </label>
            <label>
              E-mail <b>*</b>
              <input
                type="email"
                value={form.email}
                onChange={(event) => update("email", event.target.value)}
                placeholder="voce@empresa.com"
                autoComplete="email"
              />
            </label>
            <label>
              WhatsApp
              <input
                value={form.whatsapp}
                onChange={(event) => update("whatsapp", event.target.value)}
                placeholder="(21) 99999-9999"
                inputMode="tel"
                autoComplete="tel"
              />
            </label>
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.sectionNumber}>02</div>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeading}>
            <span>Projeto</span>
            <h2>O que você quer construir?</h2>
          </div>

          <div className={styles.optionGrid}>
            {Object.entries(projectLabels).map(([value, label]) => (
              <label className={styles.choice} key={value}>
                <input
                  type="radio"
                  name="projectType"
                  value={value}
                  checked={form.projectType === value}
                  onChange={(event) => update("projectType", event.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.sectionNumber}>03</div>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeading}>
            <span>Contexto</span>
            <h2>Em que ponto esse projeto está?</h2>
          </div>

          <div className={styles.optionGridTwo}>
            {Object.entries(stageLabels).map(([value, label]) => (
              <label className={styles.choice} key={value}>
                <input
                  type="radio"
                  name="stage"
                  value={value}
                  checked={form.stage === value}
                  onChange={(event) => update("stage", event.target.value)}
                />
                <span>{label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.formSection}>
        <div className={styles.sectionNumber}>04</div>
        <div className={styles.sectionContent}>
          <div className={styles.sectionHeading}>
            <span>Escopo</span>
            <h2>Investimento, prazo e o que precisa acontecer.</h2>
          </div>

          <div className={styles.twoColumns}>
            <label>
              Faixa de investimento
              <select
                value={form.budget}
                onChange={(event) => update("budget", event.target.value)}
              >
                <option value="">Selecionar</option>
                {Object.entries(budgetLabels).map(([value, label]) => (
                  <option value={value} key={value}>{label}</option>
                ))}
              </select>
            </label>
            <label>
              Prazo desejado
              <select
                value={form.deadline}
                onChange={(event) => update("deadline", event.target.value)}
              >
                <option value="">Selecionar</option>
                {Object.entries(deadlineLabels).map(([value, label]) => (
                  <option value={value} key={value}>{label}</option>
                ))}
              </select>
            </label>
          </div>

          <label className={styles.descriptionLabel}>
            Conte sobre o projeto <b>*</b>
            <textarea
              value={form.description}
              onChange={(event) => update("description", event.target.value)}
              placeholder="Qual problema precisa ser resolvido? O que você imagina que o produto precisa fazer? Se já existe algo, conte o que está funcionando e o que precisa mudar."
              rows={8}
            />
            <small>{form.description.trim().length}/20 caracteres mínimos</small>
          </label>
        </div>
      </div>

      {submitted && !requiredComplete && (
        <div className={styles.validation} role="alert">
          Preencha nome, e-mail, tipo de projeto, momento atual e uma descrição com pelo menos 20 caracteres.
        </div>
      )}

      <div className={styles.submitArea}>
        <div>
          <strong>Seu briefing fica pronto antes do primeiro contato.</strong>
          <p>
            O envio por e-mail é provisório até definirmos o canal comercial oficial. Você também pode copiar o briefing completo.
          </p>
        </div>
        <div className={styles.submitActions}>
          <button className={styles.copyButton} type="button" onClick={copyBriefing}>
            {copied ? "Briefing copiado" : "Copiar briefing"}
          </button>
          <button className={styles.submitButton} type="submit">
            Preparar e-mail <span>↗</span>
          </button>
        </div>
      </div>
    </form>
  );
}
