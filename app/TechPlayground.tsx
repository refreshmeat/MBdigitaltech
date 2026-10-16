"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

type DemoKind = "site" | "app" | "automacao";

type DemoConfig = {
  title: string;
  method: string;
  action: string;
  goal: string;
  platform: string;
  button: string;
};

const demos: Record<DemoKind, DemoConfig> = {
  site: {
    title: "Site",
    method: "criarSite",
    action: "publicar",
    goal: "conquistar clientes",
    platform: "web",
    button: "Ver site",
  },
  app: {
    title: "Aplicativo",
    method: "criarAplicativo",
    action: "testar",
    goal: "organizar agendamentos",
    platform: "mobile",
    button: "Abrir app",
  },
  automacao: {
    title: "Automação",
    method: "criarAutomacao",
    action: "ativar",
    goal: "responder clientes",
    platform: "integracoes",
    button: "Ativar fluxo",
  },
};

function SitePreview({ name }: { name: string }) {
  return (
    <div className="mb-lab-site mb-lab-result" aria-label="Exemplo de site profissional">
      <div className="mb-lab-site-nav"><strong>{name}</strong><span>Início</span><span>Serviços</span><span>Contato</span></div>
      <div className="mb-lab-site-body">
        <div>
          <span className="mb-lab-site-eyebrow">SEU NEGÓCIO NA INTERNET</span>
          <strong>Sua presença digital, do seu jeito.</strong>
          <Link className="mb-lab-site-btn" href="/servicos/criacao-de-sites">Conhecer serviços ↗</Link>
        </div>
        <div className="mb-lab-site-graphic" aria-hidden="true"><span/><span/><span/></div>
      </div>
    </div>
  );
}

function AppPreview({ name }: { name: string }) {
  return (
    <div className="mb-lab-app mb-lab-result" aria-label="Exemplo de aplicativo de agendamentos">
      <div className="mb-lab-phone">
        <span className="mb-lab-phone-bar" aria-hidden="true" />
        <small>BEM-VINDO AO APP</small>
        <strong>{name}</strong>
        <span className="mb-lab-phone-note">Gerencie tudo em um só lugar</span>
        <div className="mb-lab-phone-date"><span>AGENDAMENTO</span><strong>15 OUT</strong><small>14h30 · Disponível</small></div>
        <div className="mb-lab-phone-cta">Novo agendamento ↗</div>
      </div>
      <div className="mb-lab-app-note"><span className="mb-lab-app-dot"/> Interface para o seu negócio</div>
    </div>
  );
}

function AutomationPreview({ name }: { name: string }) {
  return (
    <div className="mb-lab-flow mb-lab-result" aria-label="Exemplo de automação de atendimento">
      <strong>{name}</strong>
      <span className="mb-lab-flow-subtitle">Fluxo de atendimento automático</span>
      <div className="mb-lab-flow-node"><span className="mb-lab-flow-node-icon">↗</span><div><strong>Mensagem recebida</strong><small>WhatsApp · Novo contato</small></div><span className="mb-lab-flow-check">✓</span></div>
      <span className="mb-lab-flow-connector" aria-hidden="true"/>
      <div className="mb-lab-flow-node"><span className="mb-lab-flow-node-icon">⚡</span><div><strong>Dados organizados</strong><small>Cliente adicionado ao sistema</small></div><span className="mb-lab-flow-check">✓</span></div>
      <span className="mb-lab-flow-connector" aria-hidden="true"/>
      <div className="mb-lab-flow-node"><span className="mb-lab-flow-node-icon">✓</span><div><strong>Resposta enviada</strong><small>Sem trabalho manual</small></div><span className="mb-lab-flow-check">✓</span></div>
    </div>
  );
}

export default function TechPlayground() {
  const [kind, setKind] = useState<DemoKind>("site");
  const [name, setName] = useState("Meu Projeto");
  const [running, setRunning] = useState(false);
  const [runCount, setRunCount] = useState(0);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const changeKind = (next: DemoKind) => {
    if (timer.current) clearTimeout(timer.current);
    setKind(next);
    setRunning(false);
  };

  const execute = () => {
    if (timer.current) clearTimeout(timer.current);
    setRunning(true);
    timer.current = setTimeout(() => {
      setRunning(false);
      setRunCount((v) => v + 1);
    }, 850);
  };

  const projectName = name.trim() || "Meu Projeto";
  const config = demos[kind];

  return (
    <div className="mb-lab" aria-label="Laboratório interativo MB Digital Tech">
      <div className="mb-lab-top">
        <span className="mb-lab-window-dots" aria-hidden="true"><i/><i/><i/></span>
        <span>MB DIGITAL TECH <span className="mb-lab-top-muted">/ playground</span></span>
        <span className="mb-lab-live"><i/> LIVE DEMO</span>
      </div>
      <div className="mb-lab-tabs" role="group" aria-label="Escolha o tipo de projeto">
        {(["site", "app", "automacao"] as const).map((id) => (
          <button key={id} type="button" className={"mb-lab-tab" + (kind === id ? " is-active" : "")}
            aria-pressed={kind === id} onClick={() => changeKind(id)}>
            {demos[id].title}
          </button>
        ))}
      </div>
      <div className="mb-lab-editor">
        <div className="mb-lab-editor-heading"><span>projeto.ts</span><span>CÓDIGO ILUSTRATIVO</span></div>
        <div className="mb-lab-code" aria-label="Exemplo de código para o tipo de projeto selecionado">
          <div><span className="mb-lab-ln">01</span><span className="mb-lab-purple">const</span> projeto = <span className="mb-lab-teal">mb</span>.<span className="mb-lab-blue">{config.method}</span>({"{"}</div>
          <div><span className="mb-lab-ln">02</span>  nome: <span className="mb-lab-green">&quot;{projectName}&quot;</span>,</div>
          <div><span className="mb-lab-ln">03</span>  objetivo: <span className="mb-lab-green">&quot;{config.goal}&quot;</span>,</div>
          <div><span className="mb-lab-ln">04</span>  plataforma: <span className="mb-lab-green">&quot;{config.platform}&quot;</span></div>
          <div><span className="mb-lab-ln">05</span>{"}"});</div>
          <div><span className="mb-lab-ln">06</span><span className="mb-lab-purple">await</span> projeto.<span className="mb-lab-blue">{config.action}</span>();<span className="mb-lab-cursor" aria-hidden="true"/></div>
        </div>
      </div>
      <div className="mb-lab-control-bar">
        <label htmlFor="mb-lab-project-name">Personalize o projeto</label>
        <div className="mb-lab-controls">
          <input id="mb-lab-project-name" type="text" maxLength={24} value={name}
            onChange={(event) => setName(event.target.value)} placeholder="Nome do projeto"
            aria-label="Nome do projeto para a demonstração"/>
          <button type="button" className="mb-lab-run" disabled={running} onClick={execute}>
            <span aria-hidden="true">{running ? "◌" : "▶"}</span> {running ? "Simulando..." : "Executar"}
          </button>
        </div>
      </div>
      <div className="mb-lab-output">
        <div className="mb-lab-output-head">
          <span>PRÉVIA INTERATIVA</span>
          <span className="mb-lab-output-status" role="status" aria-live="polite">
            <i/>{running ? "Gerando exemplo..." : runCount ? "Simulação concluída" : "Pronto para testar"}
          </span>
        </div>
        <div className={"mb-lab-preview" + (running ? " is-running" : "")}>
          {kind === "site" ? <SitePreview name={projectName}/> : kind === "app" ? <AppPreview name={projectName}/> : <AutomationPreview name={projectName}/>}
        </div>
      </div>
      <p className="mb-lab-caption">Experimente os exemplos acima. São simulações visuais, não projetos reais.</p>
    </div>
  );
}
