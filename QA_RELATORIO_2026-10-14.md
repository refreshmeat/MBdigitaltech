# MB Digital Tech | Auditoria de produção

**Execução:** 14/10/2026 (horário de Brasília; servidor UTC 15/10).
**Site:** https://mbdigitaltech.com.br
**Ambiente:** Nexora / Hetzner, Next.js 16.4.1.

## Testes aprovados
- **61/61 verificações automatizadas:** telas de 320, 390, 768, 980, 1440 e 1920 px; menu, WhatsApp, terminal interativo (nome do projeto, três abas, execução), arquivos, navegação, formulários e respostas de APIs para entradas inválidas.
- **Links:** 362 ocorrências de links nas páginas, 23 destinos internos distintos, nenhum link interno quebrado.
- **SEO:** 20 URLs do sitemap, 20 títulos/canonicals válidos, descrições e H1, sem duplicações na auditoria técnica. Páginas privadas auxiliares com noindex. Redirecionamentos do domínio e HTTPS corretos.
- **Favicon:** /favicon.ico (144x144) e /icon.png (128x128) retornando HTTP 200, referenciados no HTML, não bloqueados no robots.txt. Solicitação de indexação da home confirmada no Google Search Console. Aparição no resultado depende de novo processamento do Google.
- **Formulário de orçamento:** validação client-side; API valida entradas; envio real HTTP 200; gravação confirmada em public.project_briefings e registro de QA removido.
- **E-mail:** recebimento IMAP e envio SMTP autenticado para Gmail testados; TLS validado; serviço antirrelay testado.
- **Segurança técnica:** Next.js 16.4.1 (atualizado por vulnerabilidade crítica na versão anterior), cabeçalhos HSTS, nosniff, Referrer-Policy, X-Frame-Options e Permissions-Policy. npm audit --omit=dev reporta zero vulnerabilidades nas dependências de produção.
- **Infraestrutura:** 7 contêineres antigos de site e 16 tags obsoletas removidos, somente site atual e uma versão anterior parada para rollback. Disco 72% ocupado após limpeza. Backup local diário do correio instalado e primeira cópia verificada.

## Pendências que impedem declarar 100% operacional
1. **Avisos de orçamento (alta prioridade):** /api/orcamento salva no PostgreSQL, mas retorna delivery=database; não envia alerta automático à caixa de contato.
2. **Avaliações:** submissão válida em /api/avaliacoes retorna HTTP 503 (not_configured); fluxo de notificação externo indisponível.
3. **Backup externo (recuperação de desastre):** cópia diária local existe, mas ainda não há recuperação independente da VPS confirmada.
4. **DNS DMARC:** política p=none permanece de monitoramento; avaliar endurecimento depois de estabilizar as origens de envio.
5. **Dependências de desenvolvimento:** npm audit geral indica cinco avisos altos transitivos no ecossistema de eslint-config-next; não fazem parte das dependências de produção. Não aplicar downgrade sugerido automaticamente.

## Experimento rejeitado
Foi testado um fallback SMTP sem credenciais para notificações locais. Tanto no PC quanto no candidato dentro do Nexora, as mensagens foram entregues à pasta **Junk Mail** por falharem autenticações SPF/DMARC. O candidato **não foi colocado em produção**; contêiner e imagem foram excluídos e as alterações descartadas. O site atual mantém o caminho já testado de gravação em banco, aguardando envio autenticado configurado corretamente.

## Política de publicação
Nenhuma das pendências deve ser anunciada como resolvida sem teste real de ponta a ponta e recebimento na Caixa de Entrada. O favicon foi entregue corretamente; a decisão de exibição no Google não depende do site.

*Relatório técnico gerado durante a auditoria via JARVIS.*
