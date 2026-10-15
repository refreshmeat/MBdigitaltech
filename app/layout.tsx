import type { Metadata } from "next";
import "./globals.css";
import "./navigation.css";
import "./home-extra.css";
import "./legal.css";
import "./audit-polish.css";
import "./conversion.css";
import "./home-redesign.css";
import "./tech-playground.css";
import "./servicos/servicos.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organizacao`,
  name: "MB Digital Tech",
  url: siteUrl,
  description: "Equipe de profissionais para sites, aplicativos, sistemas sob medida, automações, design e SEO para pessoas físicas e empresas.",
  logo: `${siteUrl}/mb-digital-tech-logo.png`,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55-21-98577-3165",
    contactType: "sales",
    areaServed: "BR",
    availableLanguage: "Portuguese",
  },
  areaServed: { "@type": "Country", name: "Brasil" },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Criação de Sites, Aplicativos e Sistemas | MB Digital Tech",
    template: "%s | MB Digital Tech",
  },
  description:
    "Precisa de um site, loja virtual, landing page, aplicativo, sistema, automação ou design? Atendimento para pessoas e negócios. Peça orçamento por WhatsApp.",
  keywords: [
    "desenvolvimento de software",
    "sites para empresas",
    "criação de sites",
    "desenvolvimento de aplicativos",
    "design UI/UX",
    "sites",
    "sistemas sob medida",
    "SaaS",
    "automação",
    "inteligência artificial",
    "chatbots",
    "APIs",
    "integrações",
    "MB Digital Tech",
  ],
  authors: [{ name: "MB Digital Tech" }],
  creator: "MB Digital Tech",
  publisher: "MB Digital Tech",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "MB Digital Tech",
    title: "Criação de Sites, Aplicativos e Sistemas | MB Digital Tech",
    description:
      "Sites, aplicativos, sistemas e automações com atendimento para pessoas e empresas. Fale com a nossa equipe.",
    images: [{ url: "/mb-digital-tech-social.png", width: 1200, height: 630, alt: "MB Digital Tech: soluções para pessoas e negócios" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/mb-digital-tech-social.png"],
    title: "Criação de Sites, Aplicativos e Sistemas | MB Digital Tech",
    description:
      "Sites, aplicativos, sistemas e automações com atendimento para pessoas e empresas. Fale com a nossa equipe.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema).replace(/</g, "\\u003c") }}
        />
        {children}
      </body>
    </html>
  );
}
