import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import WhatsAppLink from "./WhatsAppLink";
import MobileMenu from "./MobileMenu";
import TechPlayground from "./TechPlayground";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const services = [
  { slug: "criacao-de-sites", title: "Criação de sites", text: "Sites profissionais e páginas para divulgar seu negócio.", icon: "web" },
  { slug: "lojas-virtuais", title: "Lojas virtuais", text: "Venda produtos e receba pedidos pela internet.", icon: "store" },
  { slug: "desenvolvimento-de-aplicativos", title: "Aplicativos", text: "Apps para clientes, empresas e novas ideias.", icon: "app" },
  { slug: "sistemas-sob-medida", title: "Sistemas personalizados", text: "Agendamentos, gestão e plataformas sob medida.", icon: "system" },
  { slug: "automacao-de-processos", title: "Automação", text: "Menos tarefas repetitivas, mais tempo para você.", icon: "bolt" },
  { slug: "inteligencia-artificial", title: "Inteligência artificial", text: "Chatbots, atendimento e soluções com IA.", icon: "ai" },
  { slug: "identidade-visual", title: "Design gráfico", text: "Logotipos, identidade visual e materiais digitais.", icon: "design" },
  { slug: "manutencao-de-sites", title: "Manutenção e melhorias", text: "Correções, atualizações e evolução de sites.", icon: "tools" },
] as const;

function ServiceIcon({ kind }: { kind: string }) {
  const paths: Record<string, string> = {
    web: "M3 5h18v14H3z M3 9h18 M7 7h.01 M10 7h.01",
    store: "M4 10l2-6h12l2 6v10H4V10z M4 10c1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 1 2 3 2 4 0 M9 20v-6h6v6",
    app: "M8 2h8a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z M10 18h4",
    system: "M3 4h18v16H3z M3 10h18 M9 10v10 M5.5 7h.01 M8 7h.01",
    bolt: "M13 2L4 13h7l-1 9 10-12h-7z",
    ai: "M12 3v3 M12 18v3 M3 12h3 M18 12h3 M6 6l2 2 M16 16l2 2 M18 6l-2 2 M8 16l-2 2 M12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10z",
    design: "M4 18l13-13 3 3L7 21H4z M14 8l3 3 M4 5h6 M7 2v6",
    tools: "M14 7a5 5 0 0 0-6 6L3 18l3 3 5-5a5 5 0 0 0 6-6l-3 2-3-3z",
  };
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[kind]} />
    </svg>
  );
}

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
            <a href="#servicos">Serviços</a>
            <a href="#como-trabalhamos">Como trabalhamos</a>
            <Link href="/orcamento">Orçamento</Link>
          </nav>
          <WhatsAppLink source="header" className="header-whatsapp mb-header-contact" label="Conversar no WhatsApp">
            <svg viewBox="0 0 24 24" fill="none" width="21" height="21" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20.4 11.5a8.5 8.5 0 0 1-12.5 7.5L3 20l1.2-4.5A8.5 8.5 0 1 1 20.4 11.5Z" />
              <path d="M8.4 8.4c-.4.4-.7 1-.4 1.8.7 1.9 2.1 3.5 4 4.5 1.3.7 2.4.5 3.1-.2l.5-.7-2.3-1.3-.9 1c-1.4-.6-2.5-1.7-3-3.1l.9-.9-1.4-2.1-.5 1Z" />
            </svg>
            <span className="mb-header-contact-label">Falar conosco</span>
          </WhatsAppLink>
          <MobileMenu />
        </div>
      </header>

      <main id="conteudo">
        <section className="mb-hero" aria-labelledby="mb-hero-title">
          <div className="container mb-hero-inner mb-hero-with-lab">
            <div className="mb-hero-copy">
            <p className="mb-hero-kicker">MB DIGITAL TECH · SOLUÇÕES PARA O SEU NEGÓCIO</p>
            <h1 id="mb-hero-title">Sua ideia merece <span>sair do papel.</span></h1>
            <p className="mb-hero-description">Criação de sites, aplicativos, sistemas e automações para quem quer fazer acontecer. Você conta o que precisa, a gente encontra o melhor caminho.</p>
            <div className="mb-hero-actions">
              <WhatsAppLink source="hero" className="mb-btn mb-btn-primary" message="Olá! Quero tirar um projeto do papel e gostaria de conversar sobre a minha ideia.">
                Conversar sobre meu projeto <span aria-hidden="true">↗</span>
              </WhatsAppLink>
              <a className="mb-btn mb-btn-secondary" href="#servicos">Conhecer os serviços <span aria-hidden="true">↓</span></a>
            </div>
            </div>
            <TechPlayground />
          </div>
        </section>

        <section className="mb-services" id="servicos" aria-labelledby="mb-services-title">
          <div className="container">
            <div className="mb-section-heading">
              <span className="mb-section-kicker">O QUE FAZEMOS</span>
              <h2 id="mb-services-title">Como podemos ajudar?</h2>
              <p>Encontre o serviço que procura. Simples assim.</p>
            </div>
            <div className="mb-service-grid">
              {services.map((service) => (
                <Link key={service.slug} className="mb-service-tile" href={"/servicos/" + service.slug} aria-label={service.title + ". Ver detalhes do serviço"}>
                  <span className="mb-service-icon"><ServiceIcon kind={service.icon} /></span>
                  <span className="mb-service-content">
                    <strong>{service.title}</strong>
                    <span>{service.text}</span>
                  </span>
                  <span className="mb-service-arrow" aria-hidden="true">↗</span>
                </Link>
              ))}
            </div>
            <div className="mb-more-services"><Link href="/servicos">Ver todos os serviços <span aria-hidden="true">↗</span></Link></div>
          </div>
        </section>

        <section className="mb-approach" id="como-trabalhamos" aria-labelledby="mb-approach-title">
          <div className="container mb-approach-inner">
            <div>
              <span className="mb-section-kicker">NOSSO JEITO DE TRABALHAR</span>
              <h2 id="mb-approach-title">Nada de contratar no escuro.</h2>
            </div>
            <div className="mb-approach-copy">
              <p>Primeiro entendemos sua ideia e definimos uma proposta clara. Quando o tipo de projeto permite, mostramos um protótipo para você avaliar antes de contratar o desenvolvimento.</p>
              <p>Sem soluções genéricas: cada entrega é pensada para a necessidade real do seu negócio.</p>
            </div>
          </div>
        </section>

        <section className="mb-final-contact" id="contato">
          <div className="container mb-final-inner">
            <div>
              <span className="mb-final-kicker">VAMOS CONVERSAR?</span>
              <h2>Tem um projeto em mente?</h2>
              <p>Conte sua ideia. A gente ajuda a transformar em algo real.</p>
            </div>
            <div className="mb-final-actions">
              <WhatsAppLink source="footer" className="mb-btn mb-btn-light" message="Olá! Tenho um projeto em mente e gostaria de conversar com a MB Digital Tech.">
                Falar no WhatsApp <span aria-hidden="true">↗</span>
              </WhatsAppLink>
              <Link href="/orcamento" className="mb-btn mb-btn-outline">Pedir orçamento pelo site</Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer mb-home-footer">
        <div className="container footer-grid">
          <div>
            <Link href="/" className="brand brand-logo footer-brand" aria-label="MB Digital Tech, início">
              <Image src="/mb-digital-tech-logo.png" alt="MB Digital Tech" width={499} height={98} />
            </Link>
            <p>Tecnologia sob medida para pessoas e negócios. Atendimento em todo o Brasil.</p>
          </div>
          <nav className="footer-links" aria-label="Links do rodapé">
            <a href="#servicos">Serviços</a>
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
