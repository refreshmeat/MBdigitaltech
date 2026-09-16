import type { Metadata } from "next";
import "./globals.css";
import "./navigation.css";

export const metadata: Metadata = {
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
