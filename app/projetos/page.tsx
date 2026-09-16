import Link from "next/link";
import { projects } from "@/lib/projects";
import styles from "./projetos.module.css";

export const metadata = {
  title: "Projetos",
  description:
    "Conheça projetos próprios da MB Digital Tech e a forma como transformamos problemas em produtos digitais.",
};

export default function ProjetosPage() {
  return (
    <main className={styles.page}>
      <header className={styles.header}>
        <Link href="/" className={styles.back}>← MB Digital Tech</Link>
        <Link href="/orcamento" className={styles.cta}>Solicitar orçamento ↗</Link>
      </header>

      <section className={styles.hero}>
        <span>PROJETOS / CASES</span>
        <h1>Produto de verdade tem contexto, decisões e evolução.</h1>
        <p>
          Aqui mostramos projetos próprios que representam o tipo de problema que sabemos atacar.
          Sem inventar cliente, métrica ou resultado só para encher portfólio.
        </p>
      </section>

      <section className={styles.projects}>
        {projects.map((project, index) => (
          <article className={styles.project} id={project.id} key={project.id}>
            <div className={styles.projectMeta}>
              <span>0{index + 1}</span>
              <small>{project.category}</small>
              <b>{project.status}</b>
            </div>

            <div className={styles.projectBody}>
              <h2>{project.name}</h2>
              <p className={styles.summary}>{project.summary}</p>

              <div className={styles.problemSolution}>
                <div>
                  <span>Problema</span>
                  <p>{project.problem}</p>
                </div>
                <div>
                  <span>Solução</span>
                  <p>{project.solution}</p>
                </div>
              </div>

              <div className={styles.detailGrid}>
                <div>
                  <span>Destaques</span>
                  <ul>
                    {project.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <span>Stack</span>
                  <div className={styles.tags}>
                    {project.stack.map((item) => <em key={item}>{item}</em>)}
                  </div>
                </div>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className={styles.footerCta}>
        <span>SEU PROJETO PODE SER O PRÓXIMO</span>
        <h2>Tem um problema que software deveria resolver?</h2>
        <p>Monte um briefing em poucos minutos e organize o primeiro contato.</p>
        <Link href="/orcamento">Começar briefing ↗</Link>
      </section>
    </main>
  );
}
