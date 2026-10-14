import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import MobileMenu from "./MobileMenu";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  {
    number: "01",
    title: "Sites e lojas online",
    text: "Para divulgar seu trabalho, receber contatos, vender ou apresentar sua empresa com profissionalismo.",
    message: "Olá! Gostaria de um orçamento para criar um site ou loja online.",
  },
  {
    number: "02",
    title: "Aplicativos e sistemas",
    text: "Soluções sob medida para organizar serviços, facilitar o atendimento ou tirar uma ideia do papel.",
    message: "Olá! Quero conversar sobre um aplicativo ou sistema sob medida.",
  },
  {
    number: "03",
    title: "Automações e IA",
    text: "Automatize tarefas e conecte ferramentas para reduzir trabalho repetitivo.",
    message: "Olá! Preciso automatizar uma tarefa ou integrar inteligência artificial.",
  },
  {
    number: "04",
    title: "Design e UI/UX",
    text: "Interfaces, identidade visual e materiais digitais com atenção à clareza e à experiência de uso.",
    message: "Olá! Gostaria de falar sobre design ou UI/UX.",
  },
  {
    number: "05",
    title: "APIs e integrações",
    text: "Faça seus sistemas conversarem: pagamentos, atendimento, bancos de dados e APIs.",
    message: "Olá! Preciso de uma API ou integração entre sistemas.",
  },
  {
    number: "06",
    title: "Melhorias e correções",
    text: "Seu site ou sistema já existe? Podemos investigar erros, atualizar e implementar melhorias.",
    message: "Olá! Tenho um site ou sistema que precisa de correções ou melhorias.",
  },
];

const steps = [
  ["01", "Conte o que você precisa", "Pode ser pelo WhatsApp, mesmo que a ideia ainda não esteja totalmente definida."],
  ["02", "Planejamos e orçamos", "Conversamos sobre o escopo, a abordagem, os valores e os próximos passos."],
  ["03", "Criamos e acompanhamos", "Nossa equipe desenvolve, testa e orienta você na entrega."],
];

const capabilities = ["Sites", "Aplicativos", "Design", "Sistemas", "Automação", "Inteligência artificial"];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <header className="site-header">
        <div className="container header-inner">
          <Link href="/" className="brand brand-logo" aria-label="MB Digital Tech, página inicial">
            <Image src="/mb-digital-tech-logo.png" alt="MB Digital Tech" width={499} height={98} priority />
          </Link>
          <nav className="desktop-nav" aria-label="Menu principal">
            <a href="#solucoes">Serviços</a>
            <a href="#equipe">Nossa equipe</a>
            <a href="#processo">Como funciona</a>
            <Link href="/orcamento">Orçamento</Link>
          </nav>
          <WhatsAppLink source="header" className="header-whatsapp" label="Conversar pelo WhatsApp">
            <span className="whatsapp-dot" aria-hidden="true" />
            <span className="header-whatsapp-text">Conversar no WhatsApp</span>
            <span className="header-whatsapp-arrow" aria-hidden="true">↗</span>
          </WhatsAppLink>
          <MobileMenu />
        </div>
      </header>

      <main id="conteudo">
        <section className="hero" id="top">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />
          <div className="container hero-inner">
            <div className="hero-copy">
              <div className="eyebrow"><span className="status-dot" aria-hidden="true" /> Sites, sistemas, design e automação</div>
              <h1>Seu projeto digital, <span>feito para funcionar.</span></h1>
              <p>
                Criamos sites, aplicativos, sistemas, design e automações para você,
                seu trabalho ou seu negócio. Conte sua ideia e converse diretamente
                com a nossa equipe de profissionais de tecnologia.
              </p>
              <div className="hero-actions">
                <WhatsAppLink source="hero" className="button button-primary" message="Olá! Gostaria de um orçamento para um projeto digital. Podemos conversar?">
                  Pedir orçamento no WhatsApp <span aria-hidden="true">↗</span>
                </WhatsAppLink>
                <a className="button button-secondary" href="#solucoes">Ver soluções</a>
              </div>
              <p className="hero-helper">Atendimento para pessoas físicas, profissionais e empresas. Converse sem compromisso.</p>
            </div>

            <div className="hero-visual" aria-label="Ilustração de uma ideia transformada em solução digital">
              <div className="visual-topbar">
                <div className="visual-dots" aria-hidden="true"><span /><span /><span /></div>
                <span>mb.system / build</span>
                <span className="live-label">IDEIA → SOLUÇÃO</span>
              </div>
              <div className="visual-code">
                <span className="code-comment">{"// tecnologia para o seu próximo projeto"}</span>
                <p><span className="code-key">const</span> ideia = <span className="code-string">&quot;o que você precisa&quot;</span>;</p>
                <p><span className="code-key">await</span> mb.<span className="code-method">entender</span>(ideia);</p>
                <p><span className="code-key">await</span> mb.<span className="code-method">planejar</span>();</p>
                <p><span className="code-key">await</span> mb.<span className="code-method">desenvolver</span>();</p>
                <p><span className="code-key">return</span> <span className="code-string">&quot;solução funcionando&quot;</span>;</p>
              </div>
              <div className="visual-flow" aria-hidden="true">
                <div className="flow-card active"><small>INÍCIO</small><strong>Sua necessidade</strong></div>
                <span className="flow-line" />
                <div className="flow-card"><small>PROCESSO</small><strong>Especialistas</strong></div>
                <span className="flow-line" />
                <div className="flow-card result"><small>RESULTADO</small><strong>Solução</strong></div>
              </div>
            </div>
          </div>
        </section>

        <div className="tech-strip" aria-label="Áreas de atuação">
          <div className="container capabilities-row">
            {capabilities.map((capability) => <span key={capability}>{capability}</span>)}
          </div>
        </div>

        <section className="section solutions-section" id="solucoes">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">O que podemos fazer</span>
                <h2>Da sua ideia à solução digital que você precisa.</h2>
              </div>
              <p>
                Você não precisa entender de programação para começar.
                Explicamos as opções e reunimos os profissionais adequados
                para cada etapa do projeto.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                  <WhatsAppLink source="services" message={service.message} className="service-link" label={`Pedir orçamento para ${service.title}`}>
                    Pedir orçamento <span aria-hidden="true">↗</span>
                  </WhatsAppLink>
                </article>
              ))}
            </div>
            <div className="services-action">
              <p>Não encontrou exatamente o que precisa? Conte sua ideia.</p>
              <WhatsAppLink source="services" className="inline-action">Falar com nossa equipe ↗</WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="section possibilities-section" id="possibilidades">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">O que podemos criar para você</span>
                <h2>Tem um objetivo? A gente ajuda a tirar do papel.</h2>
              </div>
              <p>Algumas necessidades que podemos atender. Não precisa saber qual tecnologia usar, basta explicar o que você quer resolver.</p>
            </div>
            <div className="possibilities-grid">
              <article className="possibility-card">
                <span className="possibility-label">PRESENÇA DIGITAL</span>
                <h3>Quero apresentar meu trabalho na internet.</h3>
                <p>Um site profissional, página de serviços, catálogo ou loja para facilitar o contato com seu público.</p>
                <WhatsAppLink source="examples" message="Olá! Preciso de um site para apresentar meu trabalho. Podemos conversar?" className="inline-action">
                  Conversar sobre meu site ↗
                </WhatsAppLink>
              </article>
              <article className="possibility-card">
                <span className="possibility-label">ROTINA MAIS SIMPLES</span>
                <h3>Quero perder menos tempo com tarefas repetitivas.</h3>
                <p>Integrações, automações e ferramentas para organizar informações e reduzir processos manuais.</p>
                <WhatsAppLink source="examples" message="Olá! Gostaria de automatizar algumas tarefas do meu dia a dia." className="inline-action">
                  Explorar uma automação ↗
                </WhatsAppLink>
              </article>
              <article className="possibility-card">
                <span className="possibility-label">PRODUTO SOB MEDIDA</span>
                <h3>Tenho uma ideia de aplicativo ou sistema.</h3>
                <p>Da primeira conversa ao desenvolvimento, estruturamos a solução conforme seu objetivo e orçamento.</p>
                <WhatsAppLink source="examples" message="Olá! Tenho uma ideia de aplicativo ou sistema e gostaria de um orçamento." className="inline-action">
                  Contar minha ideia ↗
                </WhatsAppLink>
              </article>
            </div>
          </div>
        </section>

        <section className="section team-section" id="equipe">
          <div className="container team-panel">
            <div className="team-copy">
              <span className="section-kicker">Trabalho em equipe</span>
              <h2>Profissionais diferentes. Um objetivo: resolver o seu problema.</h2>
              <p>Na MB Digital Tech, seu projeto conta com profissionais da área de tecnologia. Combinamos competências de desenvolvimento, design e automação conforme cada necessidade.</p>
              <WhatsAppLink source="team" className="inline-action" message="Olá! Gostaria de conhecer melhor os serviços da equipe MB Digital Tech.">
                Falar com nossa equipe ↗
              </WhatsAppLink>
            </div>
            <div className="team-skills" aria-label="Competências de atuação">
              <div><span>01</span><strong>Desenvolvimento</strong><small>Sites, front-end, back-end e sistemas</small></div>
              <div><span>02</span><strong>Design e experiência</strong><small>Identidade visual, interfaces e usabilidade</small></div>
              <div><span>03</span><strong>Automação e integração</strong><small>Fluxos, APIs e inteligência artificial</small></div>
            </div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <div className="section-heading compact-heading">
              <span className="section-kicker">Simples, do começo ao fim</span>
              <h2>Como funciona?</h2>
              <p className="heading-copy">Sem burocracia para explicar sua ideia. O projeto começa com uma conversa.</p>
            </div>
            <div className="process-grid">
              {steps.map(([number, title, description]) => (
                <article className="process-step" key={number}>
                  <span>{number}</span>
                  <h3>{title}</h3>
                  <p>{description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contato">
          <div className="container cta-box">
            <div className="cta-grid" aria-hidden="true" />
            <div className="cta-content">
              <span className="section-kicker light">Seu projeto começa aqui</span>
              <h2>Seu próximo projeto pode começar com uma mensagem.</h2>
              <p>Seja um site pessoal, uma loja ou um sistema para seu negócio, nossa equipe está pronta para ouvir sua ideia e discutir possibilidades.</p>
              <div className="cta-actions">
                <WhatsAppLink source="footer" className="button button-light">Pedir orçamento pelo WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink>
                <Link href="/orcamento" className="button button-outline-light">Prefiro pedir orçamento pelo site</Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand brand-logo footer-brand" aria-label="MB Digital Tech, início">
              <Image src="/mb-digital-tech-logo.png" alt="MB Digital Tech" width={499} height={98} />
            </Link>
            <p>Soluções digitais para pessoas e negócios. Atendimento online em todo o Brasil.</p>
          </div>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#solucoes">Serviços</a>
            <a href="#equipe">Equipe</a>
            <Link href="/orcamento">Orçamento</Link>
            <WhatsAppLink source="footer">WhatsApp: (21) 98577-3165</WhatsAppLink>
          </nav>
          <div className="footer-meta">
            <span>© 2026 MB Digital Tech</span>
            <span>Rio de Janeiro · Brasil</span>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos de uso</Link>
          </div>
        </div>
      </footer>

      <WhatsAppLink source="floating" className="floating-whatsapp" label="Abrir WhatsApp para conversar sobre meu projeto" title="Conversar pelo WhatsApp">
        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20.4 11.5a8.5 8.5 0 0 1-12.5 7.5L3 20l1.2-4.5A8.5 8.5 0 1 1 20.4 11.5Z"/>
          <path d="M8.4 8.4c-.4.4-.7 1-.4 1.8.7 1.9 2.1 3.5 4 4.5 1.3.7 2.4.5 3.1-.2l.5-.7-2.3-1.3-.9 1c-1.4-.6-2.5-1.7-3-3.1l.9-.9-1.4-2.1-.5 1Z"/>
        </svg>
      </WhatsAppLink>
    </>
  );
}
