export type ServicePage = { slug:string; group:string; title:string; seoTitle:string; description:string; intro:string; intent:string[]; deliverables:string[]; faq:[string,string][]; related:string[]; keywords:string[] };

export const servicePages: ServicePage[] = [
  {
    "slug": "criacao-de-sites",
    "group": "Sites e vendas",
    "title": "Criação de sites profissionais",
    "seoTitle": "Criação de Sites Profissionais | Orçamento",
    "description": "Precisa criar um site profissional? Desenvolvemos sites para pessoas, profissionais e empresas, com visual responsivo, contato fácil e estrutura para SEO.",
    "intro": "Seu cliente procura no Google, abre um perfil e quer saber se pode confiar em você. Um site próprio ajuda a explicar seus serviços, mostrar informações organizadas e transformar visitas em conversas. Criamos páginas para quem está começando e para negócios que já precisam renovar sua presença online.",
    "intent": [
      "Quero fazer um site profissional para minha empresa.",
      "Sou autônomo e preciso mostrar meu trabalho na internet.",
      "Tenho um site antigo e quero algo mais moderno.",
      "Preciso de um site que facilite pedidos pelo WhatsApp."
    ],
    "deliverables": [
      "Estrutura de páginas pensada para quem vai contratar.",
      "Design responsivo para celular, tablet e computador.",
      "Formulários ou chamadas para WhatsApp conforme o projeto.",
      "Configuração técnica de títulos, descrições e URLs para buscas."
    ],
    "faq": [
      [
        "Quanto custa para criar um site?",
        "O orçamento depende da quantidade de páginas, recursos, conteúdo e integrações. Um site institucional simples tem necessidades diferentes de um portal com login e funcionalidades."
      ],
      [
        "Preciso ter um domínio para começar?",
        "Não. Podemos orientar a escolha do domínio e definir a hospedagem durante o planejamento. Os custos de serviços externos são informados separadamente."
      ]
    ],
    "related": [
      "landing-pages",
      "sites-para-autonomos",
      "lojas-virtuais"
    ],
    "keywords": [
      "criação de sites",
      "fazer site profissional",
      "contratar quem faz site",
      "empresa que cria site",
      "desenvolvedor de sites"
    ]
  },
  {
    "slug": "landing-pages",
    "group": "Sites e vendas",
    "title": "Landing pages e páginas de vendas",
    "seoTitle": "Criação de Landing Page | Página para Captar Clientes",
    "description": "Contrate a criação de landing page para serviços, campanhas e vendas. Páginas rápidas com mensagens claras, CTA para WhatsApp e foco em conversão.",
    "intro": "Uma landing page tem um trabalho específico: fazer o visitante entender sua oferta e dar o próximo passo. Em vez de dispersar a atenção em dezenas de menus, organizamos a proposta, as objeções frequentes e o contato em uma página direta.",
    "intent": [
      "Preciso de uma página para anunciar meus serviços.",
      "Quero receber contatos de uma campanha no Google ou Instagram.",
      "Vou lançar um produto ou evento e preciso de uma página.",
      "Quero uma página de vendas simples com botão do WhatsApp."
    ],
    "deliverables": [
      "Proposta clara e chamada para ação em destaque.",
      "Estrutura para apresentar benefícios, dúvidas e diferenciais.",
      "Versão otimizada para navegação no celular.",
      "Integração com formulário, WhatsApp ou ferramenta de medição, quando contratada."
    ],
    "faq": [
      [
        "Qual a diferença entre site e landing page?",
        "O site pode reunir várias páginas e apresentar toda a marca. A landing page costuma focar uma oferta ou objetivo, com menos caminhos e uma conversão principal."
      ],
      [
        "Vocês criam a página para tráfego pago?",
        "Sim, podemos estruturar a página de destino para campanhas. A gestão dos anúncios e o investimento na mídia são serviços separados e precisam ser combinados."
      ]
    ],
    "related": [
      "criacao-de-sites",
      "lojas-virtuais",
      "seo-para-sites"
    ],
    "keywords": [
      "criar landing page",
      "criação de página de vendas",
      "contratar landing page",
      "página de captura de leads",
      "página para anunciar no google"
    ]
  },
  {
    "slug": "lojas-virtuais",
    "group": "Sites e vendas",
    "title": "Criação de loja virtual e e-commerce",
    "seoTitle": "Criar Loja Virtual | Desenvolvimento de E-commerce",
    "description": "Quer vender online? Criamos lojas virtuais com catálogo, jornada de compra e integrações definidas para seu negócio. Peça orçamento pelo WhatsApp.",
    "intro": "Vender pela internet envolve muito mais que colocar fotos de produtos em uma tela. É preciso organizar categorias, descrever o que é vendido, facilitar a compra e definir como o cliente vai pagar ou pedir atendimento.",
    "intent": [
      "Quero abrir uma loja online para meus produtos.",
      "Já vendo pelo WhatsApp e preciso de um catálogo profissional.",
      "Preciso conectar pagamento, estoque ou pedidos.",
      "Minha loja atual precisa de melhorias na experiência de compra."
    ],
    "deliverables": [
      "Catálogo e categorias adequados ao volume de produtos.",
      "Páginas de produto claras e navegação responsiva.",
      "Fluxo de pedido e pagamento definido no projeto.",
      "Integrações comerciais conforme plataforma, taxas e disponibilidade."
    ],
    "faq": [
      [
        "Posso começar com poucos produtos?",
        "Sim. É possível desenhar uma primeira versão enxuta e ampliar o catálogo depois, desde que a plataforma escolhida permita a expansão."
      ],
      [
        "A loja já vem com meios de pagamento?",
        "Podemos implementar a integração com um provedor de pagamentos compatível. Cadastro, taxas e aprovação dependem do provedor contratado."
      ]
    ],
    "related": [
      "criacao-de-sites",
      "landing-pages",
      "integracao-de-sistemas"
    ],
    "keywords": [
      "criar loja virtual",
      "desenvolvimento de ecommerce",
      "empresa para montar loja online",
      "contratar loja virtual",
      "site para vender produtos"
    ]
  },
  {
    "slug": "sites-para-autonomos",
    "group": "Sites e vendas",
    "title": "Sites para autônomos e profissionais",
    "seoTitle": "Site para Autônomo e Profissional Liberal | Orçamento",
    "description": "Site para psicólogo, professor, prestador de serviço, profissional liberal ou autônomo. Apresente seu trabalho e facilite contatos pelo WhatsApp.",
    "intro": "Você não precisa ser dono de uma empresa para ter um site. Professores, terapeutas, técnicos, fotógrafos, consultores e outros profissionais podem ter uma página própria para apresentar o que fazem e como contratar.",
    "intent": [
      "Sou profissional liberal e preciso de um site pessoal.",
      "Quero aparecer quando pesquisarem meu nome ou meu serviço.",
      "Preciso organizar serviços, horários e contato.",
      "Quero receber mensagens de clientes sem depender só das redes sociais."
    ],
    "deliverables": [
      "Apresentação profissional e descrição objetiva dos serviços.",
      "Seções de informações, perguntas comuns e contato.",
      "Botões para WhatsApp e links relevantes para seu público.",
      "Design que funciona bem em telas pequenas."
    ],
    "faq": [
      [
        "Posso fazer um site sem CNPJ?",
        "Sim. Pessoas físicas e profissionais autônomos também podem contratar o desenvolvimento do próprio site."
      ],
      [
        "O site funciona para atendimento online?",
        "Podemos incluir links de agendamento, formulários e canais de contato, respeitando necessidades específicas da sua profissão."
      ]
    ],
    "related": [
      "criacao-de-sites",
      "landing-pages",
      "identidade-visual"
    ],
    "keywords": [
      "site para autônomo",
      "site para profissional liberal",
      "criar site pessoal profissional",
      "site para prestador de serviços",
      "site para psicólogo professor consultor"
    ]
  },
  {
    "slug": "desenvolvimento-de-aplicativos",
    "group": "Software sob medida",
    "title": "Desenvolvimento de aplicativos",
    "seoTitle": "Desenvolvimento de Aplicativos | Criar App Sob Medida",
    "description": "Quer criar um aplicativo para Android, web ou outro dispositivo? Conte sua ideia e solicite um orçamento de desenvolvimento de app sob medida.",
    "intro": "Um aplicativo pode facilitar reservas, organizar uma comunidade, oferecer um serviço ou transformar uma ideia em produto. Antes de programar, definimos quem vai usar, quais são as funções essenciais e o que faz sentido construir na primeira versão.",
    "intent": [
      "Tenho uma ideia de aplicativo e preciso de desenvolvedores.",
      "Quero criar um app para meus clientes.",
      "Preciso de um aplicativo para uso interno.",
      "Já comecei um app e preciso evoluir funcionalidades."
    ],
    "deliverables": [
      "Mapeamento do público e dos fluxos principais.",
      "Protótipo e definição do primeiro conjunto de funcionalidades.",
      "Desenvolvimento e testes para as plataformas contratadas.",
      "Orientação sobre publicação, manutenção e evolução."
    ],
    "faq": [
      [
        "Quanto custa desenvolver um aplicativo?",
        "Depende das telas, regras de negócio, integrações e plataformas. Projetos com login, pagamentos e dados complexos demandam mais etapas do que um aplicativo simples."
      ],
      [
        "É possível começar por um MVP?",
        "Sim. Um produto mínimo viável ajuda a validar as funções centrais antes de investir em todas as ideias de uma vez."
      ]
    ],
    "related": [
      "sistemas-sob-medida",
      "desenvolvimento-saas",
      "design-ui-ux"
    ],
    "keywords": [
      "criar aplicativo",
      "contratar desenvolvedor de aplicativos",
      "quanto custa fazer um app",
      "programador de aplicativo",
      "app sob medida"
    ]
  },
  {
    "slug": "sistemas-sob-medida",
    "group": "Software sob medida",
    "title": "Sistemas personalizados para negócios",
    "seoTitle": "Desenvolvimento de Sistemas Sob Medida | Orçamento",
    "description": "Precisa de um sistema de gestão, cadastro, atendimento ou controle? Desenvolvemos software personalizado para sua operação com orçamento por projeto.",
    "intro": "Quando as planilhas e ferramentas separadas deixam de acompanhar sua rotina, um sistema sob medida pode reunir informações e reduzir retrabalho. O ponto de partida é entender a operação, não empurrar funcionalidades desnecessárias.",
    "intent": [
      "Preciso contratar um programador para desenvolver um sistema.",
      "Quero controlar clientes, pedidos ou serviços em um lugar.",
      "Minha empresa tem processos que não cabem em um software pronto.",
      "Preciso de login, permissões e banco de dados."
    ],
    "deliverables": [
      "Levantamento do processo e dos usuários.",
      "Telas, regras de negócio e permissões conforme escopo.",
      "Banco de dados, relatórios e integrações quando necessários.",
      "Testes e orientação para o uso da solução entregue."
    ],
    "faq": [
      [
        "Vocês fazem sistemas de gestão personalizados?",
        "Sim. Podemos planejar módulos de cadastro, agenda, atendimento, controle operacional ou outras rotinas definidas com o cliente."
      ],
      [
        "Posso pedir só uma parte do sistema?",
        "Sim. Podemos dividir a solução em fases, priorizando o que mais resolve sua necessidade."
      ]
    ],
    "related": [
      "automacao-de-processos",
      "integracao-de-sistemas",
      "desenvolvimento-saas"
    ],
    "keywords": [
      "desenvolver sistema para empresa",
      "contratar programador",
      "sistema personalizado",
      "software sob medida",
      "sistema de gestão sob medida"
    ]
  },
  {
    "slug": "desenvolvimento-saas",
    "group": "Software sob medida",
    "title": "Desenvolvimento de SaaS e plataformas web",
    "seoTitle": "Desenvolvimento de SaaS | Criar Plataforma Online",
    "description": "Criação de SaaS e plataformas web por assinatura, com usuários, planos e funcionalidades sob medida. Desenvolva seu MVP com uma equipe técnica.",
    "intro": "Criar uma plataforma que outras pessoas vão usar e pagar exige pensar no produto inteiro: cadastro, acesso, funcionalidades, dados, cobrança e suporte. Trabalhamos por etapas para sair da ideia e chegar a uma aplicação testável.",
    "intent": [
      "Quero criar um SaaS ou plataforma para vender assinaturas.",
      "Preciso de um MVP para validar uma startup.",
      "Meu negócio precisa de portal com contas de usuário.",
      "Tenho uma plataforma e quero implementar novos módulos."
    ],
    "deliverables": [
      "Definição do MVP e dos fluxos de usuário.",
      "Arquitetura de aplicação, autenticação e persistência de dados.",
      "Painel administrativo e funcionalidades previstas no escopo.",
      "Integrações de pagamento e serviços externos quando contratadas."
    ],
    "faq": [
      [
        "Vocês desenvolvem plataformas com assinatura?",
        "Podemos incluir planos e cobrança recorrente em uma plataforma, considerando limitações e taxas do provedor de pagamento escolhido."
      ],
      [
        "É preciso desenvolver tudo para lançar?",
        "Não. Normalmente faz sentido começar pelas funções principais e validar o uso antes de adicionar módulos secundários."
      ]
    ],
    "related": [
      "desenvolvimento-de-aplicativos",
      "sistemas-sob-medida",
      "integracao-de-sistemas"
    ],
    "keywords": [
      "criar saas",
      "desenvolvimento SaaS",
      "contratar programador startup",
      "desenvolvimento de plataforma web",
      "criar sistema por assinatura"
    ]
  },
  {
    "slug": "automacao-de-processos",
    "group": "Automação e IA",
    "title": "Automação de tarefas e processos",
    "seoTitle": "Automação de Processos | Automatizar Tarefas e Planilhas",
    "description": "Automatize planilhas, tarefas repetitivas, cadastros, relatórios e rotinas entre aplicativos. Atendimento para pessoas e empresas de todo o Brasil.",
    "intro": "Copiar informações entre telas, conferir planilhas e repetir as mesmas ações consome tempo. Primeiro identificamos o fluxo, suas exceções e os riscos. Depois avaliamos se uma automação pode executar as etapas com segurança e acompanhamento.",
    "intent": [
      "Quero automatizar uma planilha de Excel ou Google Sheets.",
      "Preciso automatizar cadastros e relatórios.",
      "Tenho tarefas repetitivas no computador.",
      "Quero ligar sistemas e eliminar digitação duplicada."
    ],
    "deliverables": [
      "Mapeamento de entradas, regras e saídas do processo.",
      "Automação do fluxo acordado, com tratamento de falhas.",
      "Registro de execução e pontos de validação quando aplicável.",
      "Orientação para manutenção e mudanças futuras."
    ],
    "faq": [
      [
        "É possível automatizar uma tarefa no meu computador?",
        "Depende do programa, das permissões e da estabilidade das telas ou APIs. Analisamos o cenário antes de definir a abordagem."
      ],
      [
        "A automação substitui todos os trabalhos manuais?",
        "Não necessariamente. Etapas que exigem revisão humana ou decisões sensíveis podem continuar sob confirmação da pessoa responsável."
      ]
    ],
    "related": [
      "integracao-de-sistemas",
      "chatbot-whatsapp",
      "inteligencia-artificial"
    ],
    "keywords": [
      "automatizar tarefas repetitivas",
      "automação de processos",
      "automatizar planilhas excel",
      "automação para empresa",
      "contratar automação de processos"
    ]
  },
  {
    "slug": "chatbot-whatsapp",
    "group": "Automação e IA",
    "title": "Chatbot e automação de WhatsApp",
    "seoTitle": "Chatbot para WhatsApp | Atendimento Automatizado",
    "description": "Criação de chatbot e automação de atendimento no WhatsApp com fluxos, qualificação de contatos e integrações compatíveis com a plataforma.",
    "intro": "Quando chegam muitas perguntas iguais ou os pedidos ficam espalhados, um fluxo de atendimento pode ajudar a organizar respostas e encaminhar a conversa à pessoa certa. Planejamos automações respeitando as regras oficiais do WhatsApp e o atendimento humano.",
    "intent": [
      "Quero responder perguntas frequentes automaticamente.",
      "Preciso organizar pedidos que chegam no WhatsApp.",
      "Quero qualificar contatos antes de falar com minha equipe.",
      "Quero conectar atendimento ao meu sistema de clientes."
    ],
    "deliverables": [
      "Mapeamento das perguntas e etapas de atendimento.",
      "Fluxos de mensagens e encaminhamento para pessoas.",
      "Integração oficial com sistemas ou provedores, quando viável.",
      "Testes de conversa e regras de exceção."
    ],
    "faq": [
      [
        "Vocês criam bot para WhatsApp Business?",
        "Podemos avaliar integrações e provedores compatíveis com as regras da plataforma. A disponibilidade de recursos, cobrança e aprovação depende da solução utilizada."
      ],
      [
        "O cliente consegue falar com uma pessoa?",
        "Sim, podemos planejar uma opção clara de atendimento humano, evitando deixar o visitante preso em respostas automáticas."
      ]
    ],
    "related": [
      "automacao-de-processos",
      "integracao-de-sistemas",
      "inteligencia-artificial"
    ],
    "keywords": [
      "criar chatbot whatsapp",
      "bot whatsapp atendimento",
      "automação de whatsapp para empresas",
      "atendimento automático whatsapp",
      "integrar whatsapp sistema"
    ]
  },
  {
    "slug": "inteligencia-artificial",
    "group": "Automação e IA",
    "title": "Soluções com inteligência artificial",
    "seoTitle": "Inteligência Artificial para Empresas | Soluções Sob Medida",
    "description": "Use inteligência artificial para busca de informações, apoio ao atendimento e fluxos automatizados. Integração responsável de IA ao seu sistema.",
    "intro": "A IA pode apoiar tarefas como buscar informações em documentos, classificar solicitações e oferecer respostas assistidas. A escolha depende dos dados, dos custos de uso e da necessidade de conferência humana. Começamos pela dor real, não pelo nome da tecnologia.",
    "intent": [
      "Quero colocar IA dentro do meu sistema.",
      "Preciso pesquisar informações em documentos com ajuda de IA.",
      "Quero um assistente para minhas rotinas.",
      "Quero avaliar se IA resolve um problema do meu negócio."
    ],
    "deliverables": [
      "Análise de utilidade, limites e dados envolvidos.",
      "Protótipo do fluxo assistido por IA quando fizer sentido.",
      "Integração com serviços ou modelos conforme escopo.",
      "Regras para revisão, privacidade e monitoramento de respostas."
    ],
    "faq": [
      [
        "Vocês implementam inteligência artificial personalizada?",
        "Podemos criar recursos que integrem modelos e ferramentas existentes com dados e processos do cliente, avaliando privacidade, custos e limitações."
      ],
      [
        "A IA acerta sempre?",
        "Não. É importante definir testes, revisão e limites para evitar confiar automaticamente em respostas incorretas."
      ]
    ],
    "related": [
      "chatbot-whatsapp",
      "automacao-de-processos",
      "sistemas-sob-medida"
    ],
    "keywords": [
      "inteligência artificial para empresas",
      "criar assistente IA",
      "integrar IA em sistema",
      "automação com inteligência artificial",
      "consultoria implementação IA"
    ]
  },
  {
    "slug": "integracao-de-sistemas",
    "group": "Automação e IA",
    "title": "Integrações de sistemas e APIs",
    "seoTitle": "Integração de Sistemas e APIs | Pagamentos e Dados",
    "description": "Integre sistemas, bancos de dados, APIs e serviços de pagamento ou atendimento. Desenvolvimento de conectores sob medida e sincronização de dados.",
    "intro": "Quando uma informação precisa ser digitada em dois lugares, ou um serviço não conversa com o outro, uma integração pode resolver. Avaliamos documentação, autenticação, formato dos dados, limites e erros antes de conectar as plataformas.",
    "intent": [
      "Preciso integrar meu sistema com uma API.",
      "Quero conectar pagamentos ao meu site ou aplicativo.",
      "Preciso sincronizar dados entre duas ferramentas.",
      "Quero desenvolver uma API para meu sistema."
    ],
    "deliverables": [
      "Levantamento das APIs, permissões e regras de acesso.",
      "Mapeamento dos dados e tratamentos de erro.",
      "Implementação e testes de envio e recebimento.",
      "Documentação de utilização e pontos de manutenção."
    ],
    "faq": [
      [
        "Dá para integrar qualquer sistema?",
        "Nem sempre. O sistema precisa oferecer algum meio técnico autorizado de integração, como API, arquivo ou recurso suportado pelo fornecedor."
      ],
      [
        "Vocês integram pagamentos?",
        "Podemos trabalhar com provedores compatíveis, respeitando suas APIs, regras, taxas e exigências de cadastro."
      ]
    ],
    "related": [
      "sistemas-sob-medida",
      "automacao-de-processos",
      "lojas-virtuais"
    ],
    "keywords": [
      "integração de sistemas",
      "desenvolver API",
      "contratar integração API",
      "integrar pagamento site",
      "sincronizar dados sistemas"
    ]
  },
  {
    "slug": "identidade-visual",
    "group": "Design e melhorias",
    "title": "Identidade visual e design digital",
    "seoTitle": "Identidade Visual e Design Digital | Peça Orçamento",
    "description": "Precisa de logo, identidade visual ou peças digitais para seu projeto? Converse com nossa equipe de design e solicite uma proposta.",
    "intro": "Uma identidade visual precisa representar seu trabalho de forma coerente. Antes de definir cores, fontes e peças, conversamos sobre público, uso e referências. O objetivo é criar uma linguagem que funcione tanto em redes sociais quanto no site ou aplicativo.",
    "intent": [
      "Quero criar ou atualizar minha identidade visual.",
      "Preciso de um logotipo para meu negócio.",
      "Quero materiais digitais com uma aparência profissional.",
      "Minha marca mudou e preciso organizar o visual."
    ],
    "deliverables": [
      "Conversa sobre público, posicionamento e referências.",
      "Proposta visual alinhada ao uso definido no escopo.",
      "Arquivos digitais preparados para os formatos contratados.",
      "Orientações de aplicação de identidade, quando previstas."
    ],
    "faq": [
      [
        "Vocês fazem logotipo e identidade visual?",
        "Sim. Definimos juntos se o projeto pede somente um logotipo, um conjunto de peças ou um sistema de identidade mais completo."
      ],
      [
        "Vocês também fazem o site depois?",
        "Sim. Podemos conectar o desenvolvimento visual à criação do site para manter consistência entre os canais."
      ]
    ],
    "related": [
      "design-ui-ux",
      "criacao-de-sites",
      "landing-pages"
    ],
    "keywords": [
      "criar identidade visual",
      "fazer logo profissional",
      "design gráfico para empresa",
      "contratar designer",
      "identidade visual para autônomo"
    ]
  },
  {
    "slug": "design-ui-ux",
    "group": "Design e melhorias",
    "title": "Design de interfaces UI/UX",
    "seoTitle": "Design UI/UX | Protótipo de Site e Aplicativo",
    "description": "Design de telas, protótipos e melhorias na experiência de uso de sites e aplicativos. Interfaces claras com foco nas necessidades do usuário.",
    "intro": "Uma interface bonita não resolve se a pessoa não entende onde clicar. Trabalhamos a organização das telas, a hierarquia das informações e a jornada de uso, buscando reduzir dúvidas antes do desenvolvimento.",
    "intent": [
      "Preciso desenhar as telas de um aplicativo.",
      "Meu site é confuso e quero melhorar a navegação.",
      "Quero prototipar um sistema antes de programar.",
      "Preciso revisar formulários e fluxos de usuários."
    ],
    "deliverables": [
      "Mapeamento da jornada e das tarefas principais.",
      "Estrutura de telas e hierarquia de informações.",
      "Protótipos e layouts conforme escopo contratado.",
      "Recomendações de usabilidade e acessibilidade."
    ],
    "faq": [
      [
        "O que é UI/UX?",
        "UI trata da interface com que a pessoa interage. UX envolve a experiência e o caminho que ela percorre para completar uma tarefa."
      ],
      [
        "Preciso contratar programação junto com o design?",
        "Não. Podemos avaliar um trabalho só de design ou integrar as etapas em um projeto de desenvolvimento completo."
      ]
    ],
    "related": [
      "desenvolvimento-de-aplicativos",
      "sistemas-sob-medida",
      "identidade-visual"
    ],
    "keywords": [
      "contratar designer ui ux",
      "design de aplicativo",
      "prototipar aplicativo",
      "melhorar experiência do site",
      "design de interface"
    ]
  },
  {
    "slug": "manutencao-de-sites",
    "group": "Design e melhorias",
    "title": "Correção de erros e manutenção de sites",
    "seoTitle": "Manutenção de Sites | Corrigir Erros e Melhorar Site",
    "description": "Seu site está quebrado, lento ou desatualizado? Avaliamos bugs, manutenção, melhorias de design e integrações existentes. Solicite diagnóstico.",
    "intro": "Nem sempre você precisa começar um site do zero. Se páginas pararam de funcionar, formulários não enviam mensagens ou algo ficou lento depois de uma atualização, podemos investigar a causa e propor uma correção.",
    "intent": [
      "Preciso consertar meu site que está com erro.",
      "Meu formulário ou botão de contato parou de funcionar.",
      "Quero atualizar um site sem refazer tudo.",
      "Preciso melhorar o desempenho ou a versão para celular."
    ],
    "deliverables": [
      "Diagnóstico inicial das falhas relatadas.",
      "Plano de correção com escopo e riscos conhecidos.",
      "Ajustes e testes nos ambientes acessíveis.",
      "Recomendações de atualização e prevenção de novos problemas."
    ],
    "faq": [
      [
        "Vocês corrigem sites criados por outra pessoa?",
        "Podemos avaliar, desde que haja acesso autorizado e seja possível trabalhar com a tecnologia usada no site. Algumas plataformas têm limitações próprias."
      ],
      [
        "Vocês garantem que vão corrigir qualquer bug?",
        "A solução depende da causa, acesso e infraestrutura. Primeiro avaliamos o problema e informamos o que é viável."
      ]
    ],
    "related": [
      "seo-para-sites",
      "criacao-de-sites",
      "integracao-de-sistemas"
    ],
    "keywords": [
      "consertar site",
      "manutenção de site",
      "corrigir erro de site",
      "arrumar site quebrado",
      "site lento solução"
    ]
  },
  {
    "slug": "seo-para-sites",
    "group": "Design e melhorias",
    "title": "SEO para sites e otimização de buscas",
    "seoTitle": "SEO para Sites | Otimização Técnica e Conteúdo",
    "description": "Otimize títulos, páginas, navegação, conteúdo e estrutura técnica do seu site para buscas relevantes. Auditoria SEO sem promessas de primeiro lugar.",
    "intro": "Seu site pode estar bonito e ainda assim ser difícil de encontrar. O SEO ajuda mecanismos de busca a entender quais páginas respondem a quais pesquisas. Nosso foco é tornar os serviços claros, corrigir barreiras técnicas e facilitar o contato de quem realmente procura por eles.",
    "intent": [
      "Meu site não aparece no Google.",
      "Quero otimizar o SEO do meu site.",
      "Preciso melhorar títulos, descrições e páginas de serviço.",
      "Quero entender quais buscas podem trazer novos clientes."
    ],
    "deliverables": [
      "Auditoria de indexação, rastreamento e páginas importantes.",
      "Revisão de títulos, descrições, URLs e conteúdo.",
      "Orientação ou implementação de sitemap e Search Console.",
      "Plano de melhorias de páginas e acompanhamento de métricas, conforme contratação."
    ],
    "faq": [
      [
        "SEO faz meu site aparecer em primeiro lugar?",
        "Não há garantia de posição, cliques nem prazo fixo. Trabalhamos fatores sob nosso controle e acompanhamos os resultados reais no Search Console."
      ],
      [
        "Preciso produzir um blog?",
        "Não necessariamente. Páginas claras de serviço e conteúdo útil para quem vai contratar podem ser mais apropriados que um blog genérico."
      ]
    ],
    "related": [
      "criacao-de-sites",
      "landing-pages",
      "manutencao-de-sites"
    ],
    "keywords": [
      "contratar SEO site",
      "otimização seo",
      "site não aparece google",
      "melhorar posicionamento no google",
      "auditoria SEO site"
    ]
  }
];

export function serviceBySlug(slug:string) {return servicePages.find(s=>s.slug===slug)}
