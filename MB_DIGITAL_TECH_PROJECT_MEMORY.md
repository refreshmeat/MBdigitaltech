# MB Digital Tech — Memória do Projeto

Este documento é a memória viva do projeto **MB Digital Tech**. Ele deve ser atualizado sempre que novas decisões relevantes forem tomadas sobre marca, posicionamento, site, funcionalidades, arquitetura, conteúdo ou direção visual.

## 1. Identidade da marca

- Nome atual: **MB Digital Tech**.
- Origem: evolução da atuação da **Baumgarten Informática**, que é mais associada a hardware, manutenção e suporte técnico.
- A MB Digital Tech será a frente focada em desenvolvimento e soluções digitais.
- Posicionamento desejado: empresa capaz de desenvolver soluções sob medida, indo muito além de sites simples.
- Logo aprovada: versão com monograma MB em azul/ciano, circuitos no M, texto `MB DIGITAL TECH` com `DIGITAL TECH` propositalmente mais fino e slogan `AUTOMATE • INNOVATE • BUILD TOMORROW`.
- Regra: não redesenhar, engrossar ou reinterpretar a logo aprovada. Alterações futuras devem partir do arquivo aprovado pelo usuário.

## 2. Serviços e escopo da empresa

A MB Digital Tech deve transmitir capacidade para desenvolver projetos como:

- sites institucionais;
- landing pages;
- sistemas web;
- plataformas personalizadas;
- SaaS;
- bots e chatbots;
- automações;
- integrações entre sistemas;
- APIs;
- soluções com inteligência artificial;
- ferramentas internas para empresas;
- evolução e recuperação de projetos existentes;
- outros projetos de software sob medida.

A comunicação da empresa não deve limitar a marca a uma única tecnologia ou tipo de projeto.

## 3. Objetivo do site

O site deve funcionar como a principal vitrine comercial da MB Digital Tech, reduzindo a dependência de plataformas como Workana.

O visitante deve perceber rapidamente que a empresa entende de tecnologia, consegue desenvolver projetos modernos e personalizados, possui capacidade técnica ampla, trabalha com soluções completas e é profissional e confiável.

## 4. Direção visual

- visual muito tecnológico;
- aparência moderna, sofisticada e profissional;
- fundo branco como base;
- elementos tecnológicos sutis;
- evitar excesso de neon, poluição visual e aparência genérica de template;
- grid suave, gradientes discretos, microinterações e detalhes inspirados na logo;
- prioridade para legibilidade, responsividade e sensação premium.

## 5. Estrutura implementada

### Home

A Home possui:

- header fixo;
- hero principal;
- proposta de valor;
- animações e elementos técnicos leves;
- faixa de tecnologias;
- seção de serviços;
- seção de projetos reais;
- origem da empresa;
- processo de trabalho;
- área de avaliações;
- CTA de orçamento;
- rodapé com links legais.

### Projetos

Existe uma página `/projetos` com cases públicos de produtos próprios, incluindo **Ergen** e **ClinicFlow**. Os textos foram escritos para mostrar problema, solução, escopo e stack sem expor informações internas sensíveis.

### Orçamento

Existe uma rota `/orcamento` com briefing guiado.

O formulário coleta nome, empresa, e-mail, WhatsApp opcional, tipo de projeto, estágio atual, faixa de investimento, prazo e descrição. O envio real é feito por API em `/api/orcamento` usando **Resend** quando as variáveis de ambiente estão configuradas.

O endpoint possui validação, limites de tamanho e honeypot antispam.

### Avaliações

Existe uma rota `/avaliar` e API `/api/avaliacoes`.

Clientes podem enviar avaliação com nota, projeto, contato e depoimento. A publicação não é automática: a proposta é verificar o vínculo com um projeto real antes de publicar. Isso evita depoimentos falsos ou spam.

### Área do cliente

A rota `/cliente` existe como prévia visual do futuro portal privado.

A interface prevê acompanhamento de status, arquivos, entregas e solicitações. Autenticação, banco de dados, permissões e dados reais ainda não foram ativados porque dependem da definição do escopo final dessa área.

### Jurídico e SEO

Foram adicionados:

- `/privacidade`;
- `/termos`;
- página 404 customizada;
- `sitemap.ts`;
- `robots.ts`;
- metadata global;
- Open Graph básico;
- configuração de URL pública por `NEXT_PUBLIC_SITE_URL`.

## 6. Stack atual

- Next.js 16;
- React 19;
- TypeScript;
- CSS próprio;
- ESLint;
- APIs Route Handler do Next.js;
- Resend para envio transacional;
- GitHub Actions para lint + build.

## 7. Estado de qualidade

O repositório possui workflow de CI em `.github/workflows/ci.yml`.

O fluxo valida instalação, lint e build. Os últimos ciclos relevantes passaram com sucesso antes da integração final da logo. A integração da logo deve ser validada pelo mesmo CI antes do primeiro deploy público.

## 8. Configuração de produção

Arquivo `.env.example` define:

- `NEXT_PUBLIC_SITE_URL`;
- `RESEND_API_KEY`;
- `RESEND_FROM`;
- `CONTACT_EMAIL`.

Para publicação real, será necessário definir domínio, hospedagem e credenciais do serviço de e-mail. Isso não deve ser inventado no código.

## 9. Decisões importantes

- não publicar depoimentos falsos;
- não inventar clientes, resultados ou métricas;
- usar projetos próprios reais no portfólio;
- manter fundo claro e linguagem tecnológica;
- separar o site comercial da futura área autenticada;
- manter o briefing de orçamento estruturado;
- não expor segredos, documentos internos ou dados privados dos produtos;
- toda decisão relevante deve ser registrada neste arquivo.

## 10. Estado atual — 17/09/2026

A V1 comercial está estruturalmente pronta em código para revisão visual e publicação.

Já estão implementados: Home, portfólio, briefing de orçamento, backend de contato, avaliações moderadas, páginas legais, SEO básico, responsividade, página 404, CI e a integração da logo aprovada na Home.

Antes de considerar o site publicamente lançado, faltam apenas ações externas de operação: escolher/configurar hospedagem, apontar o domínio, cadastrar as variáveis de ambiente de produção e validar o endereço remetente no Resend. A área do cliente permanece propositalmente como módulo futuro, não como uma falsa autenticação de demonstração.

## Atualização de 14/10/2026

- Site comercial está publicado na infraestrutura Nexora/Hetzner: https://mbdigitaltech.46-225-114-87.sslip.io/
- Banco de dados exclusivo: `mb_digital_tech`, formulário persistido e métricas de CTA WhatsApp.
- Logo aprovada recuperada dos arquivos originais do Windows e restaurada no site; favicon e imagem social gerados a partir da identidade original.
- Comunicação agora inclui pessoas físicas, autônomos e empresas; CTAs diretos para (21) 98577-3165.
- Home simplificada: ~6.002 → 3.113 px no desktop e 9.328 → 4.122 px no celular (390 px).
- QA via Playwright Chromium: sem imagens quebradas, sem erros JS, responsivo a 320/390/1440 px, rotas públicas e APIs testadas, sitemap e noindex das páginas ainda inativas revisados.
- Auditoria técnica detalhada em `SITE_AUDIT_REPORT_2026-10-14.md`. E-mail transacional e domínio próprio continuam pendentes.

## Revisão comercial e foco em conversão — 14/10/2026

- **Objetivo:** captar clientes de serviços digitais, tanto pessoas físicas e autônomos quanto empresas. Não usar o site como vitrine de produtos pessoais.
- **Posicionamento:** MB Digital Tech atende por meio de uma equipe de profissionais de tecnologia. Não afirmar número de membros, certificações, clientes ou resultados sem provas.
- **Marca:** logo com monograma MB + palavras DIGITAL TECH, sem MB repetido.
- **Site público:** https://mbdigitaltech.46-225-114-87.sslip.io/, hospedado na Nexora/Hetzner em contêiner próprio.
- **Home comercial:** serviços (sites, apps/sistemas, automações, design/UI/UX, APIs e melhorias); exemplos de necessidades do cliente, apresentados como possibilidades, não cases já entregues; equipe; etapas; CTAs.
- **Portfólio pessoal removido:** sem referências a ERGEN, JARVIS ou Nexora na vitrine comercial; `/projetos` redireciona permanentemente para `/#solucoes`, fora do sitemap; `lib/projects.ts` removido.
- **WhatsApp:** +55 21 98577-3165, botões com mensagens específicas para cada serviço e métricas de cliques por origem na tabela `contact_events`. Cliques não equivalem a conversas efetivamente enviadas.
- **Orçamento:** formulário curto; nome, WhatsApp **ou** e-mail, categoria e resumo; detalhes adicionais opcionais. Backend atualizado para aceitar contato por qualquer um dos canais e gravar em `mb_digital_tech.public.project_briefings`.
- **SEO:** metadados coerentes com serviços para pessoas e empresas, canonical da home e orçamento, sitemap limpo e dados estruturados de organização; não inventar avaliações.
- **QA:** Next.js build e ESLint sem erros. Playwright testou 1440, 390 e 320 px, links WhatsApp, âncoras, imagens, menus e ausência de erros JS. Formulário validado em cenários de WhatsApp apenas e e-mail apenas com API simulada (sem criar contatos de teste no banco).
- **Pendências comerciais:** adquirir domínio próprio, vincular Search Console e configurar alertas de novos pedidos no banco/e-mail transacional; o formulário salva os pedidos no banco, mas ainda não manda notificação por e-mail.
- **Decisões de produto:** manter navegação simples e orientada a orçamento; não reintroduzir blog, produtos pessoais, depoimentos fictícios ou portfólio de clientes não autorizados.
