import type { Metadata } from "next";
import "./globals.css";
import "./navigation.css";
import "./home-extra.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "MB Digital Tech | Software, Automação e IA",
    template: "%s | MB Digital Tech",
  },
  description:
    "Soluções digitais sob medida: sites, sistemas, SaaS, automações, integrações, bots e inteligência artificial.",
  keywords: [
    "desenvolvimento de software",
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
    title: "MB Digital Tech | Software, Automação e IA",
    description:
      "Sites, sistemas, SaaS, automações, integrações e soluções com inteligência artificial sob medida.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MB Digital Tech | Software, Automação e IA",
    description:
      "Sites, sistemas, SaaS, automações, integrações e soluções com inteligência artificial sob medida.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
