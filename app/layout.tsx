import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MB Digital Tech | Software, Automação e IA",
  description:
    "Soluções digitais sob medida: sites, sistemas, SaaS, automações, integrações, bots e inteligência artificial.",
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
