import Link from "next/link";

export const metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site da MB Digital Tech.",
};

export default function TermosPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">← Voltar ao site</Link>
        <span>Termos</span>
        <h1>Termos de Uso</h1>
        <p className="legal-intro">
          Estes termos tratam do uso do site institucional da MB Digital Tech e dos formulários disponíveis nele.
        </p>

        <article className="legal-content">
          <h2>1. Finalidade do site</h2>
          <p>
            O site apresenta serviços, projetos, formas de trabalho e canais para solicitar propostas ou enviar avaliações. O conteúdo não constitui uma proposta comercial definitiva por si só.
          </p>

          <h2>2. Solicitações de orçamento</h2>
          <p>
            O envio de um briefing não cria obrigação de contratação para nenhuma das partes. Escopo, prazo, valores, entregas e condições serão definidos posteriormente em proposta ou instrumento próprio.
          </p>

          <h2>3. Informações fornecidas pelo usuário</h2>
          <p>
            Quem utiliza os formulários deve fornecer informações verdadeiras e evitar o envio de dados confidenciais que não sejam necessários para a análise inicial do projeto.
          </p>

          <h2>4. Propriedade intelectual</h2>
          <p>
            Textos, identidade visual, interfaces e materiais próprios exibidos neste site pertencem à MB Digital Tech ou são utilizados de forma autorizada. Projetos de clientes permanecem sujeitos aos contratos e direitos aplicáveis a cada relação.
          </p>

          <h2>5. Avaliações</h2>
          <p>
            O envio de uma avaliação não garante sua publicação. Conteúdo poderá ser recusado quando não for possível verificar o vínculo com um projeto, quando expuser informação confidencial ou quando violar direitos de terceiros.
          </p>

          <h2>6. Disponibilidade</h2>
          <p>
            Funcionalidades podem ser alteradas, suspensas ou aprimoradas durante a evolução do produto, especialmente recursos ainda identificados como em implantação.
          </p>

          <p className="legal-updated">Última atualização: 16 de setembro de 2026.</p>
        </article>
      </div>
    </main>
  );
}
