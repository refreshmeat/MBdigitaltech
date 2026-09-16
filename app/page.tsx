import Link from "next/link";
import { projects } from "@/lib/projects";

const services = [
  {
    number: "01",
    title: "Sites & plataformas",
    text: "Sites institucionais, landing pages, portais e aplicações web com foco em experiência, desempenho e conversão.",
  },
  {
    number: "02",
    title: "Sistemas sob medida",
    text: "Painéis, CRMs, fluxos internos e ferramentas construídas em torno do processo real da sua empresa.",
  },
  {
    number: "03",
    title: "Automação & IA",
    text: "Bots, agentes, atendimento automatizado, processamento de dados e rotinas que eliminam trabalho repetitivo.",
  },
  {
    number: "04",
    title: "Produtos SaaS",
    text: "Da arquitetura ao produto funcionando: autenticação, banco de dados, assinaturas, dashboards e escala.",
  },
  {
    number: "05",
    title: "APIs & integrações",
    text: "Conectamos sistemas, serviços externos, mensageria, pagamentos, bancos de dados e ferramentas de negócio.",
  },
  {
    number: "06",
    title: "Evolução de produtos",
    text: "Entramos em projetos existentes para corrigir, modernizar, integrar e levar o software para a próxima fase.",
  },
];

const capabilities = [
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "APIs",
  "IA",
  "Automação",
  "Integrações",
];

const process = [
  ["01", "Entender", "Mapeamos o problema, o objetivo e o que realmente precisa ser construído."],
  ["02", "Projetar", "Definimos arquitetura, experiência, prioridades e o caminho de desenvolvimento."],
  ["03", "Construir", "Desenvolvemos em ciclos curtos, com validação contínua e decisões documentadas."],
  ["04", "Entregar", "Publicamos, acompanhamos e deixamos o produto preparado para continuar evoluindo."],
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="container header-inner">
          <a href="#top" className="brand" aria-label="MB Digital Tech - início">
            <span className="brand-mark">MB</span>
            <span className="brand-copy">
              <strong>MB</strong>
              <span>DIGITAL TECH</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Navegação principal">
            <a href="#solucoes">Soluções</a>
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <a href="#processo">Como trabalhamos</a>
            <a href="#avaliacoes">Avaliações</a>
          </nav>

          <details className="mobile-menu">
            <summary>Menu</summary>
            <nav className="mobile-menu-panel" aria-label="Navegação mobile">
              <a href="#solucoes">Soluções <span>↘</span></a>
              <a href="#projetos">Projetos <span>↘</span></a>
              <a href="#sobre">Sobre <span>↘</span></a>
              <a href="#processo">Como trabalhamos <span>↘</span></a>
              <a href="#avaliacoes">Avaliações <span>↘</span></a>
              <Link href="/cliente">Área do cliente <span>↗</span></Link>
              <Link className="mobile-menu-primary" href="/orcamento">
                Solicitar orçamento <span>↗</span>
              </Link>
            </nav>
          </details>

          <Link className="header-login" href="/cliente">
            Área do cliente <span>↗</span>
          </Link>
        </div>
      </header>

      <section className="hero" id="top">
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />

        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow">
              <span className="status-dot" />
              Software, automação e inteligência artificial
            </div>
            <h1>
              Tecnologia feita para o que sua empresa
              <span> ainda não consegue fazer.</span>
            </h1>
            <p>
              Criamos produtos digitais sob medida, de uma ideia inicial a sistemas completos. Sem soluções genéricas para problemas que não são genéricos.
            </p>
            <div className="hero-actions">
              <Link className="button button-primary" href="/orcamento">
                Tirar um projeto do papel <span>↗</span>
              </Link>
              <a className="button button-secondary" href="#solucoes">
                Ver o que fazemos
              </a>
            </div>
            <div className="hero-proof">
              <div><strong>Web</strong><span>Produtos modernos</span></div>
              <div><strong>IA</strong><span>Automação inteligente</span></div>
              <div><strong>API</strong><span>Sistemas conectados</span></div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Fluxo de desenvolvimento MB Digital Tech">
            <div className="visual-topbar">
              <div className="visual-dots"><span /><span /><span /></div>
              <span>mb.system / build</span>
              <span className="live-label">LIVE</span>
            </div>
            <div className="visual-code">
              <span className="code-comment">{"// transformando necessidade em produto"}</span>
              <p><span className="code-key">const</span> project = <span className="code-string">&quot;sua ideia&quot;</span>;</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">understand</span>(project);</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">architect</span>();</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">build</span>();</p>
              <p><span className="code-key">return</span> <span className="code-string">&quot;produto real&quot;</span>;</p>
            </div>
            <div className="visual-flow">
              <div className="flow-card active"><small>INPUT</small><strong>Problema</strong></div>
              <span className="flow-line" />
              <div className="flow-card"><small>PROCESS</small><strong>Engenharia</strong></div>
              <span className="flow-line" />
              <div className="flow-card result"><small>OUTPUT</small><strong>Produto</strong></div>
            </div>
            <div className="visual-footer">
              <span><i /> arquitetura pronta para evoluir</span>
              <strong>100%</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="tech-strip" aria-label="Tecnologias e capacidades">
        <div className="strip-track">
          {[...capabilities, ...capabilities].map((item, index) => (
            <span key={`${item}-${index}`}><i />{item}</span>
          ))}
        </div>
      </section>

      <section className="section" id="solucoes">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">O que construímos</span>
              <h2>Uma empresa de tecnologia para problemas que pedem mais do que um template.</h2>
            </div>
            <p>
              Podemos entrar no começo de uma ideia ou no meio de um projeto que já existe. O foco é construir o que faz sentido para o negócio, sem limitar a solução a uma única tecnologia.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-number">{service.number}</div>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="card-arrow">↗</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section showcase-section" id="projetos">
        <div className="container">
          <div className="section-heading split-heading">
            <div>
              <span className="section-kicker">Projetos reais</span>
              <h2>Produto próprio também serve para provar como a gente pensa.</h2>
            </div>
            <p>
              Os cases abaixo são produtos próprios em desenvolvimento. Mostramos apenas o que pode ser público, sem transformar portfólio em exposição de informação interna.
            </p>
          </div>

          <div className="home-cases">
            {projects.map((project) => (
              <article className="home-case" key={project.id}>
                <div className="home-case-top">
                  <span>{project.category}</span>
                  <small>{project.status}</small>
                </div>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="home-case-tags">
                  {project.stack.slice(0, 5).map((item) => <span key={item}>{item}</span>)}
                </div>
                <Link href={`/projetos#${project.id}`}>Ver case completo <span>↗</span></Link>
              </article>
            ))}
          </div>

          <div className="section-link-row">
            <Link className="button button-secondary" href="/projetos">Ver página de projetos ↗</Link>
          </div>
        </div>
      </section>

      <section className="section origin-section" id="sobre">
        <div className="container origin-grid">
          <div className="origin-visual">
            <span className="origin-ring ring-one" />
            <span className="origin-ring ring-two" />
            <span className="origin-core">MB</span>
            <span className="origin-node node-one">hardware</span>
            <span className="origin-node node-two">software</span>
            <span className="origin-node node-three">automação</span>
          </div>
          <div className="origin-copy">
            <span className="section-kicker">Nossa origem</span>
            <h2>Da Baumgarten Informática para uma frente inteira dedicada a construir tecnologia.</h2>
            <p>
              A MB Digital Tech nasce da evolução de uma atuação já ligada à tecnologia. A experiência com hardware, software e suporte abre espaço para uma nova frente: desenvolvimento de produtos digitais, automações e soluções personalizadas.
            </p>
            <p>
              O objetivo é entender problemas reais e transformar tecnologia em algo que funcione de verdade para quem precisa usar.
            </p>
          </div>
        </div>
      </section>

      <section className="section process-section" id="processo">
        <div className="container">
          <div className="section-heading compact-heading">
            <span className="section-kicker">Como trabalhamos</span>
            <h2>Do “tenho uma ideia” ao “está funcionando”.</h2>
          </div>
          <div className="process-grid">
            {process.map(([number, title, text]) => (
              <article className="process-step" key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section reviews-section" id="avaliacoes">
        <div className="container reviews-grid">
          <div>
            <span className="section-kicker">Avaliações verificadas</span>
            <h2>Feedback bom é feedback de quem realmente trabalhou com a gente.</h2>
            <div className="review-actions">
              <Link className="button button-primary" href="/avaliar">Deixar uma avaliação ↗</Link>
            </div>
          </div>
          <div className="review-placeholder">
            <div className="review-stars">☆ ☆ ☆ ☆ ☆</div>
            <p>
              Clientes podem enviar avaliações pelo próprio site. Antes de qualquer depoimento ser publicado, o projeto e o contato são verificados.
            </p>
            <span>Publicação moderada</span>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contato">
        <div className="container cta-box">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-content">
            <span className="section-kicker light">Seu próximo projeto</span>
            <h2>Tem uma ideia, um processo ruim ou um sistema que deveria existir?</h2>
            <p>A gente começa entendendo o problema. Depois decide o que precisa ser construído.</p>
            <div className="cta-actions">
              <Link className="button button-light" href="/orcamento">
                Montar briefing do projeto <span>↗</span>
              </Link>
              <Link className="button button-outline-light" href="/cliente">Já sou cliente</Link>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <a href="#top" className="brand footer-brand">
              <span className="brand-mark">MB</span>
              <span className="brand-copy"><strong>MB</strong><span>DIGITAL TECH</span></span>
            </a>
            <p>Software, automação e soluções digitais sob medida.</p>
          </div>
          <div className="footer-links">
            <a href="#solucoes">Soluções</a>
            <Link href="/projetos">Projetos</Link>
            <Link href="/avaliar">Avaliar</Link>
            <Link href="/orcamento">Solicitar orçamento</Link>
          </div>
          <div className="footer-meta">
            <span>© 2026 MB Digital Tech</span>
            <span>Rio de Janeiro · Brasil</span>
            <Link href="/privacidade">Privacidade</Link>
            <Link href="/termos">Termos</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
