export type Project = {
  id: string;
  name: string;
  category: string;
  status: string;
  summary: string;
  problem: string;
  solution: string;
  highlights: string[];
  stack: string[];
};

export const projects: Project[] = [
  {
    id: "ergen",
    name: "Ergen",
    category: "Legal tech · IA · automação",
    status: "Produto próprio em desenvolvimento",
    summary:
      "Plataforma jurídica criada para concentrar pesquisa, organização de conhecimento, automação de fluxos e recursos de inteligência artificial em um único produto.",
    problem:
      "Rotinas jurídicas costumam espalhar pesquisa, documentos, jurisprudência, acompanhamento e tarefas entre ferramentas diferentes, aumentando retrabalho e perda de contexto.",
    solution:
      "Arquitetura de produto pensada para reunir fluxos jurídicos, conhecimento especializado, integrações e IA em uma experiência única, com evolução incremental e documentação contínua.",
    highlights: [
      "Arquitetura preparada para múltiplos módulos jurídicos",
      "Integrações e coleta estruturada de dados públicos",
      "Camada de IA orientada por conhecimento jurídico",
      "Fluxos de pesquisa, organização e automação",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs", "IA", "Automação"],
  },
  {
    id: "clinicflow",
    name: "ClinicFlow",
    category: "SaaS · agenda · automação",
    status: "Produto próprio em desenvolvimento",
    summary:
      "SaaS de gestão e automação para pequenos negócios de atendimento, com agenda, clientes, serviços e estrutura preparada para integrações de comunicação.",
    problem:
      "Negócios de atendimento perdem tempo alternando entre agenda, mensagens, cadastros e controles manuais que não conversam entre si.",
    solution:
      "Produto web centralizado com agenda operacional, cadastro de clientes e serviços, prevenção de conflitos de horário e base multi-nicho para expansão futura.",
    highlights: [
      "Agenda com bloqueio de conflitos",
      "Cadastro de clientes e serviços",
      "Onboarding multi-nicho",
      "Base preparada para automação de atendimento",
    ],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "Supabase", "Calendário", "Automação"],
  },
];
