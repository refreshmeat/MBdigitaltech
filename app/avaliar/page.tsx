import Link from "next/link";
import ReviewForm from "./ReviewForm";
import styles from "./avaliar.module.css";

export const metadata = {
  title: "Avaliar projeto",
  description: "Envie uma avaliação verificada sobre um projeto realizado com a MB Digital Tech.",
};

export default function AvaliarPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/">← MB Digital Tech</Link>
        <Link href="/orcamento">Novo projeto ↗</Link>
      </header>

      <section className={styles.hero}>
        <span>AVALIAÇÃO VERIFICADA</span>
        <h1>Trabalhou com a gente? Conta como foi.</h1>
        <p>
          As avaliações não entram automaticamente no site. Primeiro verificamos se o projeto existiu e removemos dados que não devam ser publicados.
        </p>
      </section>

      <section className={styles.panel}>
        <ReviewForm />
        <aside>
          <span>Como funciona</span>
          <ol>
            <li>Você envia a avaliação.</li>
            <li>Confirmamos o projeto e o contato.</li>
            <li>Revisamos apenas dados pessoais ou informações confidenciais.</li>
            <li>O depoimento aprovado pode aparecer no site.</li>
          </ol>
          <p>Nada de fabricar cinco estrelas com gente imaginária. A internet já tem mentira suficiente.</p>
        </aside>
      </section>
    </main>
  );
}
