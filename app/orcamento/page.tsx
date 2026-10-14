import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import styles from "./orcamento.module.css";
import WhatsAppLink from "../WhatsAppLink";

export const metadata: Metadata = {
  alternates: { canonical: "/orcamento" },
  title: "Solicitar orçamento",
  description:
    "Peça um orçamento para criação de sites, aplicativos, sistemas, design e automações. Atendimento para pessoas físicas e empresas pela equipe MB Digital Tech.",
};

export default function OrcamentoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="MB Digital Tech - início">
          <Image src="/mb-digital-tech-logo.png" alt="MB Digital Tech" width={499} height={98} className={styles.logoImage} priority />
        </Link>
        <Link href="/" className={styles.back}>← Voltar ao site</Link>
      </header>

      <section className={styles.hero}>
        <div>
          <span className={styles.kicker}>Começar um projeto</span>
          <h1>
            Vamos tirar sua ideia do papel.
            <span>Peça um orçamento.</span>
          </h1>
          <p>
            Preencha só o essencial. Nossa equipe analisa o que você precisa e conversa com você sobre possibilidades, escopo e valores. Atendemos pessoas físicas, profissionais e empresas.
          </p>
        </div>

        <aside className={styles.heroAside}>
          <span>Quer resolver mais rápido?</span>
          <strong>Converse diretamente com a equipe.</strong>
          <p>Se preferir, descreva sua ideia pelo WhatsApp. Você não precisa preencher o formulário para começar.</p>
          <WhatsAppLink source="quote" className={styles.whatsappLink}
            message="Olá! Gostaria de um orçamento com a MB Digital Tech. Podemos conversar?">
            Conversar no WhatsApp ↗
          </WhatsAppLink>
        </aside>
      </section>

      <section className={styles.formWrap}>
        <QuoteForm />
      </section>

      <footer className={styles.footer}>
        <span>MB Digital Tech · Software, automação e IA</span>
        <span>Rio de Janeiro · Brasil</span>
      </footer>
    </main>
  );
}
