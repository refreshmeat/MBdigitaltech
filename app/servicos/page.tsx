import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import WhatsAppLink from "../WhatsAppLink";
import { servicePages } from "../../lib/seo-services";

export const metadata: Metadata = {
 title: "Serviços de Tecnologia: Sites, Apps, Sistemas, IA e Design",
 description: "Encontre quem crie seu site, loja virtual, aplicativo, sistema, automação, chatbot, integração ou design. Atendimento para pessoas e negócios em todo o Brasil.",
 alternates: { canonical: "/servicos" },
 openGraph: { title: "Serviços de Tecnologia | MB Digital Tech", description: "Do site pessoal ao software sob medida: veja os serviços e peça orçamento diretamente pelo WhatsApp.", url: "/servicos" }
};
const grupos = ["Sites e vendas", "Software sob medida", "Automação e IA", "Design e melhorias"];
export default function ServicosPage() {
 return <main className="seo-page">
  <header className="seo-header"><div className="container seo-header-inner">
    <Link href="/" aria-label="MB Digital Tech - página inicial"><Image src="/mb-digital-tech-logo.png" width={499} height={98} alt="MB Digital Tech" className="seo-logo" priority /></Link>
    <nav aria-label="Navegação"><Link href="/">Início</Link><Link href="/servicos" aria-current="page">Serviços</Link><Link href="/orcamento">Orçamento</Link></nav>
    <WhatsAppLink source="header" className="seo-nav-cta">Falar no WhatsApp ↗</WhatsAppLink>
  </div></header>
  <section className="seo-hero"><div className="container seo-hero-content"><span className="seo-eyebrow">Para você, seu trabalho ou seu negócio</span>
   <h1>O que você precisa <span>criar ou resolver?</span></h1>
   <p>Não precisa saber o nome da tecnologia. Se você quer vender pela internet, criar um aplicativo, automatizar tarefas ou consertar um sistema, encontre abaixo a solução mais próxima do que procura. Nossa equipe atende pessoas físicas, autônomos e empresas de todo o Brasil.</p>
   <div className="seo-actions"><WhatsAppLink source="hero" className="seo-button seo-button-primary" message="Olá! Preciso de ajuda com um projeto digital e quero conversar sobre um orçamento.">Contar o que preciso ↗</WhatsAppLink><Link href="/orcamento" className="seo-button seo-button-outline">Prefiro um formulário</Link></div>
  </div></section>
  <div className="container seo-sections">{grupos.map(grupo => <section className="seo-group" key={grupo} aria-label={grupo}>
   <div className="seo-section-title"><span>Serviços</span><h2>{grupo}</h2></div>
   <div className="seo-grid">{servicePages.filter(s=>s.group===grupo).map(s=><article className="seo-service-card" key={s.slug}>
     <h3><Link href={`/servicos/${s.slug}`}>{s.title}</Link></h3><p>{s.description}</p>
     <Link href={`/servicos/${s.slug}`} className="seo-text-link" aria-label={`Ver detalhes e orçamento: ${s.title}`}>Como funciona e orçamento ↗</Link>
   </article>)}</div>
  </section>)}
  <section className="seo-last-cta"><h2>Não encontrou o serviço exato?</h2><p>Conte o problema em palavras simples. A equipe avalia se conseguimos ajudar, sem obrigar você a escolher uma solução técnica antes da conversa.</p><WhatsAppLink source="footer" className="seo-button seo-button-primary" message="Olá! Não sei qual serviço preciso. Posso explicar meu projeto?">Explicar minha ideia no WhatsApp ↗</WhatsAppLink></section>
 </div><footer className="seo-footer"><div className="container"><Link href="/">MB Digital Tech</Link><span>Rio de Janeiro • Atendimento online em todo o Brasil</span><Link href="/privacidade">Privacidade</Link></div></footer>
 </main>;
}
