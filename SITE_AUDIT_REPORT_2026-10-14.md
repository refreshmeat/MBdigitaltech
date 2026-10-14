# Auditoria técnica e comercial | MB Digital Tech
Data: 14/10/2026
Ambiente: Nexora / Hetzner / Docker / Caddy / Next.js 16

## Objetivo
Melhorar a geração de contatos, preservar a identidade visual e simplificar a jornada para pessoas físicas, autônomos e empresas, sem redesenhar o site aprovado.

## Diagnóstico encontrado
1. Logo ausente do diretório public e requisição original 404.
2. Comunicação da primeira dobra restrita a empresas.
3. Nenhum botão principal de WhatsApp.
4. Home extensa: aproximadamente 6.002 px (desktop 1440) e 9.328 px (celular 390).
5. Navegação mobile não fechava depois de selecionar âncora.
6. Links e seções que desviavam da conversão para páginas ainda incompletas.
7. Metadados e sitemap incluíam áreas inativas; títulos de certas páginas repetiam a marca.
8. Falta de monitoramento de cliques em WhatsApp.
9. Direito de contato na página de privacidade indicava canal futuro, embora o site já estivesse público.
10. Problema operacional no Caddy: a montagem somente leitura do Caddyfile mantinha inode/configuração antiga após substituição atômica do arquivo no host.

## Correções realizadas
- Recuperada a marca a partir do arquivo gráfico original aprovado, encontrado no computador, preservando cores e tipografia; disponibilizado lockup horizontal otimizado.
- Criados ícone do aplicativo e imagem Open Graph (1200x630).
- Reformulada a mensagem principal: atendimento a pessoas, profissionais e negócios, sem pressupor CNPJ.
- WhatsApp 55 21 98577-3165 em destaque na navegação, capa, serviços, rodapé, botão flutuante e página de orçamento; links com mensagem inicial e abertura em nova guia.
- Registro voluntário de eventos por origem em tabela exclusiva `mb_digital_tech.public.contact_events`; o contato funciona mesmo se o registro do clique falhar.
- Home simplificada: menos seções, cards menores, exemplos de projetos sem depoimentos inventados, etapa de contato mais objetiva.
- Menu mobile com fechamento automático ao escolher seção.
- SEO: títulos, descrições, palavras-chave, Open Graph, favicon, sitemap e exclusão de páginas inativas do índice.
- Acesso à política de privacidade e canal de solicitação de direitos via WhatsApp.
- Formulário armazenando os contatos no banco Nexora (já implantado anteriormente); opção adicional de enviar briefing por WhatsApp.
- Feita recriação controlada apenas do contêiner gateway para que a configuração em disco e a montada coincidam.

## Resultados medidos: navegador real (Playwright/Chromium)
| Verificação | Resultado |
| --- | --- |
| Home pública HTTPS | HTTP 200 |
| Imagem de logo, favicon, OG | HTTP 200 |
| Carregamento de imagens | Sem imagens quebradas após lazy loading |
| Erros JS / respostas HTTP incorretas na home | Nenhum detectado |
| Menu mobile (390 e 320 px) | Abre e fecha ao navegar |
| Rolagem horizontal (desktop, 390 e 320 px) | Nenhuma |
| Links WhatsApp na home | 7, todos com número correto |
| Links WhatsApp no orçamento | 2 |
| Altura home no desktop 1440 px | 6.002 → 3.113 px |
| Altura home no celular 390 px | 9.328 → 4.122 px (−55,8%) |
| /projetos /orcamento /privacidade /termos | HTTP 200 |
| /cliente /avaliar | HTTP 200 e noindex/nofollow |
| /sitemap.xml e /robots.txt | HTTP 200 |
| API registro de clique | POST 200 com origem válida, 400 inválida |
| API de orçamento | POST 200 e persistência no banco confirmada |
| Teste de orçamento | Excluído após confirmação |
| ESLint | 0 erros, 0 avisos após exclusão de fragmentos antigos de logo |
| Build Next.js de produção | Concluído |
| Isolamento | Banco mb_digital_tech, contêiner exclusivo para o site |

## Pontos ainda dependentes de decisões comerciais
- Contratação do domínio próprio e atualização de URL canônica/sitemap.
- Configuração de e-mail transacional e alertas (recebimento dos pedidos já funciona no banco).
- Integração Search Console e análise de conversões quando domínio definitivo estiver configurado.
- Recursos de avaliações e portal do cliente permanecem em preparação, fora do fluxo de venda e fora da indexação.
- Monitoramento futuro de conversões por origem e ajustes com base em dados reais, sem inventar depoimentos ou taxas de venda.

## Fonte e operação
- Código versionado no repositório `refreshmeat/MBdigitaltech`.
- Banco e gateway administrados na infraestrutura da Nexora.
- Material técnico de testes de navegador mantido no PC, em `C:\Users\RefreshMeat\MBdigitaltech-audit-20261014`.
- Para futuras trocas de rota: o Caddyfile é bind mount read-only; após substituir o arquivo do host, recriar o serviço gateway para remontar o arquivo, validando a configuração e preservando os demais serviços.
