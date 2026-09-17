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
