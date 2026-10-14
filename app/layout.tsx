import type { Metadata } from "next";
import "./globals.css";
import "./navigation.css";
import "./home-extra.css";
import "./legal.css";
import "./audit-polish.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MB Digital Tech | Sites, Apps, Design e Automação",
    template: "%s | MB Digital Tech",
  },
  description:
    "Criação de sites, aplicativos, design, sistemas e automações para pessoas, profissionais e empresas. Conte seu projeto e fale com a MB Digital Tech pelo WhatsApp.",
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
    title: "MB Digital Tech | Sites, Apps, Design e Automação",
    description:
      "Sites, aplicativos, design e automações para você, sua profissão e seu negócio.",
    images: [{ url: "/mb-digital-tech-social.png", width: 1200, height: 630, alt: "MB Digital Tech: soluções para pessoas e negócios" }],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/mb-digital-tech-social.png"],
    title: "MB Digital Tech | Sites, Apps, Design e Automação",
    description:
      "Sites, aplicativos, design e automações para você, sua profissão e seu negócio.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
