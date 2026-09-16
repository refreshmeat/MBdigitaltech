import Link from "next/link";

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
          </nav>

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
              <div>
                <strong>Web</strong>
                <span>Produtos modernos</span>
              </div>
              <div>
                <strong>IA</strong>
                <span>Automação inteligente</span>
              </div>
              <div>
                <strong>API</strong>
                <span>Sistemas conectados</span>
              </div>
            </div>
          </div>

          <div className="hero-visual" aria-label="Fluxo de desenvolvimento MB Digital Tech">
            <div className="visual-topbar">
              <div className="visual-dots"><span /><span /><span /></div>
              <span>mb.system / build</span>
              <span className="live-label">LIVE</span>
            </div>
            <div className="visual-code">
              <span className="code-comment">// transformando necessidade em produto</span>
              <p><span className="code-key">const</span> project = <span className="code-string">"sua ideia"</span>;</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">understand</span>(project);</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">architect</span>();</p>
              <p><span className="code-key">await</span> mb.<span className="code-method">build</span>();</p>
              <p><span className="code-key">return</span> <span className="code-string">"produto real"</span>;</p>
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
          <div className="section-heading">
            <span className="section-kicker">Projetos</span>
            <h2>Não é sobre empilhar tecnologia. É sobre fazer ela resolver alguma coisa.</h2>
            <p className="heading-copy">
              Esta área será alimentada com cases completos, mostrando desafio, estratégia, implementação e resultado. Nada de portfólio decorativo com três screenshots e meia dúzia de siglas.
            </p>
          </div>

          <div className="project-stage">
            <div className="project-stage-grid" aria-hidden="true" />
            <div className="project-copy">
              <span className="project-label">CASE FORMAT / EM PREPARAÇÃO</span>
              <h3>Projetos apresentados como produto, não como enfeite.</h3>
              <p>
                Cada case terá contexto, funcionalidades, arquitetura, tecnologias utilizadas e evolução do projeto. Os projetos reais serão adicionados após a seleção do que pode ser publicado.
              </p>
              <div className="project-tags">
                <span>Problema</span><span>Solução</span><span>Stack</span><span>Resultado</span>
              </div>
            </div>
            <div className="project-interface" aria-hidden="true">
              <div className="interface-sidebar">
                <span className="mini-logo">MB</span>
                <i className="selected" /><i /><i /><i /><i />
              </div>
              <div className="interface-main">
                <div className="interface-header"><span /><span /></div>
                <div className="interface-title" />
                <div className="interface-subtitle" />
                <div className="interface-cards"><span /><span /><span /></div>
                <div className="interface-chart"><i /><i /><i /><i /><i /><i /><i /></div>
              </div>
            </div>
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
              O objetivo agora é simples de explicar e trabalhoso de executar: entender problemas reais e transformar tecnologia em algo que funcione de verdade para quem precisa usar.
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
            <span className="section-kicker">Avaliações</span>
            <h2>Feedback de cliente tem que ser real. Então aqui não tem depoimento inventado.</h2>
          </div>
          <div className="review-placeholder">
            <div className="review-stars">☆ ☆ ☆ ☆ ☆</div>
            <p>
              A estrutura de avaliações será conectada à área do cliente para permitir depoimentos verificados e publicação controlada.
            </p>
            <span>Funcionalidade planejada</span>
          </div>
        </div>
      </section>

      <section className="section cta-section" id="contato">
        <div className="container cta-box">
          <div className="cta-grid" aria-hidden="true" />
          <div className="cta-content">
            <span className="section-kicker light">Seu próximo projeto</span>
            <h2>Tem uma ideia, um processo ruim ou um sistema que deveria existir?</h2>
            <p>
              A gente começa entendendo o problema. Depois decide o que precisa ser construído.
            </p>
            <div className="cta-actions">
              <Link className="button button-light" href="/orcamento">
                Montar briefing do projeto <span>↗</span>
              </Link>
              <Link className="button button-outline-light" href="/cliente">
                Já sou cliente
              </Link>
            </div>
            <small className="contact-note">O canal comercial definitivo ainda será definido antes da publicação.</small>
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
            <a href="#projetos">Projetos</a>
            <a href="#sobre">Sobre</a>
            <Link href="/orcamento">Solicitar orçamento</Link>
          </div>
          <div className="footer-meta">
            <span>© 2026 MB Digital Tech</span>
            <span>Rio de Janeiro · Brasil</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
