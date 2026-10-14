import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import WhatsAppLink from "../../WhatsAppLink";
import { serviceBySlug, servicePages } from "../../../lib/seo-services";

type Props={params:Promise<{slug:string}>};
export function generateStaticParams(){return servicePages.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata> {
 const {slug}=await params;const s=serviceBySlug(slug);if(!s)return {};
 return {title:s.seoTitle,description:s.description,keywords:s.keywords,
  alternates:{canonical:`/servicos/${s.slug}`},
  openGraph:{type:"website",title:s.seoTitle,description:s.description,url:`/servicos/${s.slug}`},
  twitter:{card:"summary_large_image",title:s.seoTitle,description:s.description}};
}
export default async function ServiceDetail({params}:Props){
 const {slug}=await params;const s=serviceBySlug(slug);if(!s)notFound();
 const base=(process.env.NEXT_PUBLIC_SITE_URL||"https://mbdigitaltech.com.br").replace(/\/$/,"");
 const pageUrl=`${base}/servicos/${s.slug}`;
 const graph={"@context":"https://schema.org","@graph":[
  {"@type":"BreadcrumbList","itemListElement":[
    {"@type":"ListItem","position":1,"name":"Início","item":base},
    {"@type":"ListItem","position":2,"name":"Serviços","item":`${base}/servicos`},
    {"@type":"ListItem","position":3,"name":s.title,"item":pageUrl}]},
  {"@type":"Service","name":s.title,"serviceType":s.title,"description":s.description,"url":pageUrl,
   "provider":{"@id":`${base}/#organizacao`},
   "audience":{"@type":"Audience","audienceType":"Pessoas físicas, profissionais autônomos e empresas"},
   "areaServed":{"@type":"Country","name":"Brasil"},
   "availableChannel":{"@type":"ServiceChannel","serviceUrl":"https://wa.me/5521985773165"}}
 ]};
 const message=`Olá! Encontrei no site da MB Digital Tech o serviço de ${s.title.toLowerCase()}. Gostaria de explicar o que preciso e pedir um orçamento.`;
 const related=s.related.map(r=>serviceBySlug(r)).filter((x):x is NonNullable<typeof x>=>Boolean(x));
 return <main className="seo-page">
 <script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(graph).replace(/</g,"\\u003c")}} />
 <header className="seo-header"><div className="container seo-header-inner">
   <Link href="/" aria-label="MB Digital Tech, início"><Image src="/mb-digital-tech-logo.png" width={499} height={98} alt="MB Digital Tech" className="seo-logo" priority /></Link>
   <nav aria-label="Navegação"><Link href="/">Início</Link><Link href="/servicos">Todos os serviços</Link><Link href="/orcamento">Orçamento</Link></nav>
   <WhatsAppLink source="header" className="seo-nav-cta" message={message}>Falar no WhatsApp ↗</WhatsAppLink>
 </div></header>
 <section className="seo-hero seo-detail-hero"><div className="container">
  <nav className="seo-breadcrumb" aria-label="Você está aqui"><Link href="/">Início</Link><span>›</span><Link href="/servicos">Serviços</Link><span>›</span><span>{s.title}</span></nav>
  <div className="seo-hero-content"><span className="seo-eyebrow">{s.group} • Para pessoas e empresas</span>
   <h1>{s.title}<span> do seu jeito.</span></h1><p>{s.intro}</p>
   <div className="seo-actions"><WhatsAppLink source="hero" className="seo-button seo-button-primary" message={message}>Pedir orçamento pelo WhatsApp ↗</WhatsAppLink><Link href="/orcamento" className="seo-button seo-button-outline">Solicitar pelo formulário</Link></div>
   <p className="seo-note">Você fala diretamente com a equipe. Atendimento online para todo o Brasil, inclusive pessoas físicas e autônomos.</p>
  </div></div></section>
 <div className="container seo-sections">
  <section className="seo-detail-block"><div className="seo-section-title"><span>Isso parece com sua necessidade?</span><h2>Quando esse serviço faz sentido</h2></div>
   <div className="seo-need-grid">{s.intent.map((v,i)=><div key={i} className="seo-need"><span aria-hidden="true">✓</span><p>{v}</p></div>)}</div>
  </section>
  <section className="seo-detail-block"><div className="seo-section-title"><span>O que planejamos juntos</span><h2>O que pode entrar no seu projeto</h2><p>O escopo é combinado antes do desenvolvimento. Cada necessidade é avaliada individualmente, sem pacote engessado.</p></div>
   <div className="seo-deliverables">{s.deliverables.map((v,i)=><div key={i}><span>{String(i+1).padStart(2,"0")}</span><p>{v}</p></div>)}</div>
  </section>
  <section className="seo-info-strip"><div><span>01</span><strong>Você explica</strong><p>Descreva a ideia, o problema ou mande referências.</p></div>
   <div><span>02</span><strong>Definimos o escopo</strong><p>Entendemos prioridades, funcionalidades e prazo.</p></div>
   <div><span>03</span><strong>Enviamos uma proposta</strong><p>Você avalia etapas e valores antes de contratar.</p></div>
  </section>
  <section className="seo-detail-block seo-faq"><div className="seo-section-title"><span>Dúvidas antes de contratar</span><h2>Perguntas frequentes</h2></div>
   {s.faq.map(([q,a])=><details key={q}><summary>{q}</summary><p>{a}</p></details>)}
   <details><summary>Vocês atendem pessoas físicas ou só empresas?</summary><p>Atendemos pessoas físicas, profissionais autônomos e empresas. O atendimento é online, então você pode conversar com a equipe de qualquer região do Brasil.</p></details>
  </section>
  <section className="seo-detail-block"><div className="seo-section-title"><span>Talvez seja isso que você procura</span><h2>Outras soluções relacionadas</h2></div>
   <div className="seo-grid seo-related">{related.map(rel=><article key={rel.slug} className="seo-service-card">
      <h3><Link href={`/servicos/${rel.slug}`}>{rel.title}</Link></h3><p>{rel.description}</p><Link href={`/servicos/${rel.slug}`} className="seo-text-link">Conhecer este serviço ↗</Link>
    </article>)}</div>
  </section>
  <section className="seo-last-cta"><h2>Quer saber quanto custa no seu caso?</h2><p>O valor depende das funcionalidades e da complexidade. Conte o que você precisa para receber uma proposta adequada, sem adivinhação nem compromisso.</p>
   <WhatsAppLink source="footer" className="seo-button seo-button-primary" message={message}>Conversar com a MB Digital Tech ↗</WhatsAppLink></section>
 </div><footer className="seo-footer"><div className="container"><Link href="/">MB Digital Tech</Link><span>Rio de Janeiro • Atendimento online no Brasil</span><Link href="/servicos">Todos os serviços</Link><Link href="/privacidade">Privacidade</Link></div></footer>
 </main>
}
