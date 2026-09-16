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
            A área do cliente será o ponto de acompanhamento de projetos da MB Digital Tech: etapas, arquivos, solicitações, entregas e histórico.
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
              <span>Acesso seguro</span>
              <h2>Entrar</h2>
            </div>
            <span className={styles.status}>EM CONSTRUÇÃO</span>
          </div>

          <form className={styles.form}>
            <label>
              E-mail
              <input type="email" placeholder="voce@empresa.com" disabled />
            </label>
            <label>
              Senha
              <input type="password" placeholder="••••••••" disabled />
            </label>
            <button type="button" disabled>Entrar na área do cliente</button>
          </form>

          <p className={styles.note}>
            A interface já está prevista no produto. Autenticação, banco de dados e permissões serão implementados quando definirmos o escopo final desta área.
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <span>MB Digital Tech · 2026</span>
        <span>Software · Automação · IA</span>
      </footer>
    </main>
  );
}
