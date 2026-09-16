import Link from "next/link";

export default function NotFound() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <span>ERRO 404</span>
        <h1>Essa rota foi parar em outro universo.</h1>
        <p className="legal-intro">
          A página não existe, mudou de endereço ou algum humano digitou o link errado. Acontece com frequência alarmante.
        </p>
        <div style={{ marginTop: 28 }}>
          <Link className="button button-primary" href="/">Voltar para a Home ↗</Link>
        </div>
      </div>
    </main>
  );
}
