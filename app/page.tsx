import Image from "next/image";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import MobileMenu from "./MobileMenu";
import { projects } from "@/lib/projects";

const services = [
  {
    number: "01",
    title: "Sites e lojas online",
    text: "Landing pages, portfólios, páginas profissionais, sites institucionais e experiências feitas para converter.",
  },
  {
    number: "02",
    title: "Aplicativos e sistemas",
    text: "Aplicativos web, plataformas, SaaS, painéis e sistemas personalizados para suas necessidades.",
  },
  {
    number: "03",
    title: "Automações e IA",
    text: "Assistentes, bots, integrações inteligentes e rotinas que economizam tempo no dia a dia.",
  },
  {
    number: "04",
    title: "Design e UI/UX",
    text: "Identidade visual, interfaces, protótipos, materiais digitais e experiências fáceis de usar.",
  },
  {
    number: "05",
    title: "APIs e integrações",
    text: "Conexões entre ferramentas, bancos de dados, pagamentos, WhatsApp e sistemas existentes.",
  },
  {
    number: "06",
    title: "Melhorias e correções",
    text: "Resolvemos erros, modernizamos projetos, melhoramos desempenho e retomamos ideias paradas.",
  },
];

const steps = [
  ["01", "Você conta a ideia", "Pode ser uma necessidade simples ou um projeto inteiro. Queremos entender o objetivo."],
  ["02", "Alinhamos a solução", "Avaliamos possibilidades, prazo e investimento antes de iniciar."],
  ["03", "Desenvolvemos e entregamos", "Construímos, testamos e acompanhamos a solução até funcionar."],
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
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
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
              <div className="eyebrow"><span className="status-dot" aria-hidden="true" /> Tecnologia para pessoas e negócios</div>
              <h1>Tecnologia para você <span>e para o seu negócio.</span></h1>
              <p>
                Tem uma ideia, um problema para resolver ou um projeto para melhorar?
                Criamos sites, aplicativos, sistemas, design e automações sob medida,
                seja para uso pessoal, para sua profissão ou para sua empresa.
              </p>
              <div className="hero-actions">
                <WhatsAppLink source="hero" className="button button-primary">
                  Conversar sobre meu projeto <span aria-hidden="true">↗</span>
                </WhatsAppLink>
                <a className="button button-secondary" href="#solucoes">Ver soluções</a>
              </div>
              <p className="hero-helper">Atendemos pessoas físicas, profissionais autônomos e negócios de todos os tamanhos.</p>
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
                <h2>Você traz a necessidade. Nós encontramos o caminho.</h2>
              </div>
              <p>
                De uma página pessoal a uma plataforma completa. Reunimos especialistas
                em desenvolvimento, front-end, back-end, design e experiência do usuário
                conforme cada projeto precisa.
              </p>
            </div>
            <div className="services-grid">
              {services.map((service) => (
                <article className="service-card" key={service.number}>
                  <span className="service-number">{service.number}</span>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </article>
              ))}
            </div>
            <div className="services-action">
              <p>Não encontrou exatamente o que precisa? Conte sua ideia.</p>
              <WhatsAppLink source="services" className="inline-action">Falar com nossa equipe ↗</WhatsAppLink>
            </div>
          </div>
        </section>

        <section className="section showcase-section" id="projetos">
          <div className="container">
            <div className="section-heading split-heading">
              <div>
                <span className="section-kicker">Projetos próprios</span>
                <h2>Tecnologia que já colocamos em prática.</h2>
              </div>
              <p>Conheça alguns projetos de desenvolvimento e infraestrutura que demonstram o tipo de solução que construímos.</p>
            </div>
            <div className="home-cases">
              {projects.slice(0, 2).map((project) => (
                <article className="home-case" key={project.id}>
                  <div className="home-case-top">
                    <span>{project.category}</span>
                    <small>{project.status}</small>
                  </div>
                  <h3>{project.name}</h3>
                  <p>{project.summary}</p>
                  <Link href={`/projetos#${project.id}`}>Conhecer o projeto <span aria-hidden="true">↗</span></Link>
                </article>
              ))}
            </div>
            <div className="section-link-row">
              <Link href="/projetos" className="inline-action">Ver todos os projetos ↗</Link>
            </div>
          </div>
        </section>

        <section className="section process-section" id="processo">
          <div className="container">
            <div className="section-heading compact-heading">
              <span className="section-kicker">Simples, do começo ao fim</span>
              <h2>Como funciona?</h2>
              <p className="heading-copy">Uma conversa é suficiente para começar. Não precisa chegar com tudo definido.</p>
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
              <h2>Precisa de uma solução? Vamos conversar.</h2>
              <p>Pode ser para você, sua profissão ou seu negócio. Conte o que imagina e ajudamos a definir os próximos passos.</p>
              <div className="cta-actions">
                <WhatsAppLink source="footer" className="button button-light">Chamar no WhatsApp <span aria-hidden="true">↗</span></WhatsAppLink>
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
            <a href="#solucoes">Soluções</a>
            <Link href="/projetos">Projetos</Link>
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
