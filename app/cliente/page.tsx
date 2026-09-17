import Link from "next/link";
import styles from "./cliente.module.css";

export const metadata = {
  title: "Área do Cliente | MB Digital Tech",
};

export default function ClientePage() {
  return (
    <main className={styles.page}>
      <div className={styles.grid} aria-hidden="true" />

      <header className={styles.header}>
        <Link href="/" className={styles.brand}>
          <span className={styles.mark}>MB</span>
          <span>
            <strong>MB</strong>
            <small>DIGITAL TECH</small>
          </span>
        </Link>
        <Link href="/" className={styles.back}>← Voltar ao site</Link>
      </header>

      <section className={styles.content}>
        <div className={styles.intro}>
          <span className={styles.kicker}>Portal do cliente</span>
          <h1>Seu projeto, organizado em um só lugar.</h1>
          <p>
            Esta é a prévia do portal privado da MB Digital Tech. Ele será ativado quando a primeira versão autenticada entrar no escopo operacional da empresa.
          </p>

          <div className={styles.features}>
            <div><span>01</span><strong>Status do projeto</strong><small>Acompanhe a evolução e as próximas etapas.</small></div>
            <div><span>02</span><strong>Arquivos e entregas</strong><small>Materiais do projeto reunidos com contexto.</small></div>
            <div><span>03</span><strong>Solicitações</strong><small>Centralize ajustes, dúvidas e novos pedidos.</small></div>
          </div>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <div>
              <span>Portal do cliente</span>
              <h2>Em preparação</h2>
            </div>
            <span className={styles.status}>PRÓXIMA FASE</span>
          </div>

          <div className={styles.note}>
            Não exibimos um login falso só para parecer que a área já está ativa. Quando autenticação, banco de dados e permissões entrarem em produção, este espaço passa a ser o acesso real dos clientes.
          </div>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>MB Digital Tech · 2026</span>
        <span>Software · Automação · IA</span>
      </footer>
    </main>
  );
}
