import Link from "next/link";

export const metadata = {
  title: "Política de Privacidade",
  description: "Política de privacidade da MB Digital Tech.",
};

export default function PrivacidadePage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <Link className="legal-back" href="/">← Voltar ao site</Link>
        <span>Privacidade</span>
        <h1>Política de Privacidade</h1>
        <p className="legal-intro">
          Esta política explica de forma simples quais dados podem ser enviados pelo site e para que eles são usados.
        </p>

        <article className="legal-content">
          <h2>1. Dados enviados voluntariamente</h2>
          <p>
            Ao preencher um briefing de projeto ou uma avaliação, você pode informar nome, empresa, e-mail, telefone, detalhes do projeto e outras informações que decidir compartilhar.
          </p>

          <h2>2. Finalidade</h2>
          <p>
            Esses dados são usados para analisar solicitações comerciais, responder contatos, conduzir projetos e verificar avaliações antes de eventual publicação.
          </p>

          <h2>3. Avaliações</h2>
          <p>
            Avaliações não são publicadas automaticamente. Quando houver autorização, o conteúdo poderá ser revisado apenas para remover dados pessoais, informações confidenciais ou elementos que não devam ficar públicos.
          </p>

          <h2>4. Compartilhamento</h2>
          <p>
            A MB Digital Tech não vende dados pessoais. Informações poderão ser processadas por provedores técnicos necessários ao funcionamento do site, hospedagem e entrega de mensagens.
          </p>

          <h2>5. Segurança e retenção</h2>
          <p>
            São adotadas medidas técnicas compatíveis com o estágio e a natureza do serviço. Os dados devem ser mantidos apenas pelo tempo necessário para atendimento, execução de projeto, obrigações aplicáveis ou defesa de direitos.
          </p>

          <h2>6. Seus direitos</h2>
          <p>
            O titular pode solicitar acesso, correção ou exclusão de dados pessoais, observadas as hipóteses legais de conservação. O canal oficial de privacidade será informado junto ao contato comercial antes do lançamento público.
          </p>

          <h2>7. Atualizações</h2>
          <p>
            Esta política pode ser atualizada quando novas funcionalidades, integrações ou formas de tratamento de dados forem adicionadas ao site.
          </p>

          <p className="legal-updated">Última atualização: 16 de setembro de 2026.</p>
        </article>
      </div>
    </main>
  );
}
