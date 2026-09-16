# MB Digital Tech — Memória do Projeto

Este documento é a memória viva do projeto **MB Digital Tech**. Ele deve ser atualizado sempre que novas decisões relevantes forem tomadas sobre marca, posicionamento, site, funcionalidades, arquitetura, conteúdo ou direção visual.

## 1. Identidade da marca

- Nome atual: **MB Digital Tech**.
- Origem: evolução da atuação da **Baumgarten Informática**, que é mais associada a hardware, manutenção e suporte técnico.
- A MB Digital Tech será a frente focada em desenvolvimento e soluções digitais.
- Posicionamento desejado: empresa capaz de desenvolver soluções sob medida, indo muito além de sites simples.

## 2. Serviços e escopo da empresa

A MB Digital Tech deve transmitir capacidade para desenvolver projetos como:

- sites institucionais;
- landing pages;
- sistemas web;
- plataformas personalizadas;
- SaaS;
- bots;
- chatbots;
- automações;
- integrações entre sistemas;
- APIs;
- soluções com inteligência artificial;
- ferramentas internas para empresas;
- outros projetos de software sob medida.

A comunicação da empresa não deve limitar a marca a uma única tecnologia ou tipo de projeto.

## 3. Objetivo do site

O site deve funcionar como a principal vitrine comercial da MB Digital Tech, reduzindo a dependência de plataformas como Workana.

O visitante deve entrar no site e perceber rapidamente que:

- a empresa entende de tecnologia;
- consegue desenvolver projetos modernos e personalizados;
- possui capacidade técnica ampla;
- trabalha com soluções completas;
- é profissional e confiável;
- está preparada para atender desde projetos menores até sistemas mais complexos.

## 4. Direção visual

Decisões já tomadas:

- visual **muito tecnológico**;
- aparência moderna, sofisticada e profissional;
- preferência por **fundo branco**;
- evitar visual excessivamente carregado;
- usar elementos tecnológicos sutis para dar personalidade;
- o site deve parecer atual e premium, sem cair naquele clichê de site tech cheio de neon piscando como painel de nave espacial de filme ruim.

Ideias que podem ser exploradas:

- linhas finas;
- circuitos discretos;
- grids suaves;
- partículas leves;
- animações de entrada;
- microinterações;
- gradientes sutis;
- elementos geométricos;
- detalhes inspirados na identidade visual da logo.

Ainda não está definido quais desses elementos serão usados.

## 5. Estrutura e áreas desejadas

Algumas áreas já foram mencionadas como desejáveis:

### Página inicial

Deve apresentar a empresa, proposta de valor, serviços e acesso rápido aos principais conteúdos.

### Projetos / portfólio

Área para mostrar projetos já desenvolvidos ou em desenvolvimento.

O objetivo não é apenas listar tecnologias, mas mostrar:

- qual problema existia;
- qual solução foi desenvolvida;
- quais recursos foram implementados;
- quais tecnologias foram utilizadas;
- qual foi o resultado ou objetivo do projeto.

### Avaliações de clientes

Deve existir uma área onde clientes possam deixar avaliações sobre o trabalho realizado.

Ainda precisa ser decidido:

- se qualquer usuário poderá enviar uma avaliação;
- se somente clientes autenticados poderão avaliar;
- se avaliações passarão por aprovação antes de aparecer no site;
- se haverá nota por estrelas;
- se haverá resposta da empresa à avaliação.

### História / origem da empresa

Deve existir uma área explicando a origem da MB Digital Tech e sua relação com a Baumgarten Informática.

A ideia é contar a evolução da empresa de uma forma profissional, sem transformar a página em uma autobiografia interminável que ninguém pediu.

### Área do cliente

Foi decidido que o site deve ter uma **área privada para clientes**.

Possibilidades a explorar futuramente:

- login de cliente;
- acompanhamento de projeto;
- status do desenvolvimento;
- arquivos do projeto;
- documentos;
- contratos;
- propostas;
- faturas ou pagamentos;
- mensagens;
- solicitação de alterações;
- histórico do projeto;
- entregas;
- suporte.

Nada disso está fechado ainda. A existência da área do cliente está decidida, mas seu escopo será definido depois.

## 6. Experiência desejada

O site não deve parecer apenas um cartão de visitas.

A intenção é criar uma experiência que transmita capacidade técnica real e que possa evoluir para uma plataforma mais completa de relacionamento com clientes.

O visitante deve conseguir entender facilmente:

- o que a MB Digital Tech faz;
- que tipos de projeto desenvolve;
- como trabalha;
- quais projetos já realizou;
- como entrar em contato;
- como solicitar orçamento.

Clientes existentes devem futuramente conseguir acessar informações específicas de seus próprios projetos.

## 7. Pontos ainda em aberto

Ainda precisamos decidir:

- arquitetura completa do site;
- mapa de páginas;
- menu principal;
- slogan definitivo;
- texto principal da home;
- identidade visual completa;
- paleta de cores;
- tipografia;
- estilo das animações;
- layout da home;
- funcionamento da área do cliente;
- funcionamento das avaliações;
- formulário de orçamento;
- se haverá blog ou conteúdo técnico;
- tecnologias que serão usadas no desenvolvimento;
- hospedagem;
- banco de dados;
- autenticação;
- painel administrativo;
- integrações externas;
- estratégia de SEO;
- analytics;
- deploy;
- política de privacidade e termos.

## 8. Regra para evolução do projeto

Nenhuma decisão importante deve ficar apenas perdida em conversa.

Sempre que uma decisão relevante for tomada, este documento deve ser atualizado para refletir o estado atual do projeto.

Quando houver mudança de ideia, não apagar contexto importante sem necessidade. Registrar a decisão atual e, quando fizer sentido, o motivo da mudança.

Este arquivo deve funcionar como fonte principal de contexto para continuar o projeto em conversas futuras ou em outras ferramentas de desenvolvimento.

## 9. Implementação inicial — 16/09/2026

O desenvolvimento do site foi iniciado na branch `main`.

### Stack inicial

- **Next.js 16** com App Router;
- **React 19**;
- **TypeScript**;
- CSS próprio, sem framework visual neste primeiro momento, para manter controle total sobre a identidade;
- ESLint configurado.

A escolha mantém o projeto preparado para evoluir depois para autenticação, banco de dados, painel de cliente, APIs e outras funcionalidades sem precisar refazer a base.

### Primeira versão da Home

Foi criada uma primeira versão visual com:

- header fixo;
- identidade provisória em texto/monograma enquanto a logo final ainda será integrada;
- hero principal com proposta de valor;
- visual tecnológico em fundo branco;
- grid sutil, gradientes discretos e microdetalhes inspirados em interfaces técnicas;
- seção de tecnologias/capacidades;
- seção de serviços;
- área de projetos/cases preparada sem inventar cases ou resultados;
- seção sobre a origem da MB Digital Tech a partir da Baumgarten Informática;
- processo de trabalho em quatro etapas;
- área de avaliações preparada sem avaliações fictícias;
- CTA final;
- rodapé.

### Área do cliente

A rota `/cliente` foi criada como uma prévia visual.

Ela já apresenta a direção de produto para:

- acompanhamento de status;
- arquivos e entregas;
- solicitações do cliente.

O formulário de login está propositalmente desativado porque autenticação, banco de dados e regras de acesso ainda não foram definidos.

### Decisões tomadas durante esta etapa

- não publicar depoimentos falsos apenas para preencher o layout;
- não inventar resultados ou clientes no portfólio;
- manter a interface tecnológica sem abandonar o fundo claro escolhido;
- construir desde o início em uma stack que possa receber funcionalidades reais depois.

### Próximos pontos imediatos

- integrar a logo final da MB Digital Tech;
- revisar os textos da Home;
- decidir quais projetos reais podem aparecer como cases;
- definir canal oficial de contato e formulário de orçamento;
- decidir o escopo da primeira versão funcional da área do cliente;
- definir autenticação e banco de dados quando a área do cliente entrar em implementação real;
- testar build, responsividade e acessibilidade antes do primeiro deploy.
