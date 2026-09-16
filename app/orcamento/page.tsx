import Link from "next/link";
import type { Metadata } from "next";
import QuoteForm from "./QuoteForm";
import styles from "./orcamento.module.css";

export const metadata: Metadata = {
  title: "Solicitar orçamento | MB Digital Tech",
  description:
    "Conte o que você quer construir e gere um briefing inicial para um projeto de software, site, automação, SaaS, bot, integração ou solução com IA.",
};

export default function OrcamentoPage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand} aria-label="MB Digital Tech - início">
          <span className={styles.mark}>MB</span>
          <span className={styles.brandText}>
            <strong>MB</strong>
            <small>DIGITAL TECH</small>
          </span>
        </Link>
        <Link href="/" className={styles.back}>← Voltar ao site</Link>
      </header>

      <section className={styles.hero}>
        <div>
          <span className={styles.kicker}>Começar um projeto</span>
          <h1>
            Conte a ideia.
            <span>A gente organiza o problema.</span>
          </h1>
          <p>
            Este briefing inicial ajuda a entender o que precisa ser construído antes de falar em tecnologia, prazo ou orçamento fechado. Quanto melhor o contexto, menos tempo a gente desperdiça adivinhando requisito.
          </p>
        </div>

        <aside className={styles.heroAside}>
          <span>O que acontece depois</span>
          <strong>Briefing → análise → conversa → proposta</strong>
          <p>
            O formulário ainda usa e-mail como canal provisório. Depois ele será conectado ao fluxo comercial definitivo da MB Digital Tech.
          </p>
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
