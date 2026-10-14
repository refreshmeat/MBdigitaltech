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
    name: "ERGEN",
    category: "Legal tech · dados · automação",
    status: "Produto próprio em desenvolvimento",
    summary: "Plataforma jurídica com pesquisa de legislação e jurisprudência, organização de processos e ferramentas para produção de documentos.",
    problem: "Profissionais jurídicos precisam consultar bases dispersas e alternar entre ferramentas para organizar cada caso.",
    solution: "Reunir pesquisa jurídica, gestão do caso e produção de documentos em uma experiência integrada.",
    highlights: ["Pesquisa de legislação e jurisprudência", "Organização de clientes e processos", "Ferramentas para documentos", "Arquitetura modular"],
    stack: ["Next.js", "TypeScript", "PostgreSQL", "APIs", "Automação"],
  },
  {
    id: "nexora",
    name: "Nexora",
    category: "Infraestrutura · banco de dados",
    status: "Ferramenta própria em uso",
    summary: "Painel desktop para administrar bancos PostgreSQL, projetos, acessos, backups e monitoramento em infraestrutura privada.",
    problem: "Manter dados e projetos separados exige controle de permissões, backups e infraestrutura.",
    solution: "Um painel para acompanhar recursos e administrar bancos e acessos com isolamento por projeto.",
    highlights: ["Ambientes separados por projeto", "Backups e restauração", "Monitoramento operacional", "Acesso remoto seguro"],
    stack: ["Python", "PostgreSQL", "Docker", "SSH"],
  },
  {
    id: "jarvis",
    name: "JARVIS",
    category: "Automação · inteligência artificial",
    status: "Ferramenta própria em evolução",
    summary: "Assistente de automação que conecta comandos inteligentes a tarefas no computador e integrações locais.",
    problem: "Atividades repetitivas entre aplicativos consomem tempo e dificultam processos.",
    solution: "Orquestrar comandos e tarefas por meio de uma camada de automação conectada a ferramentas reais.",
    highlights: ["Automação de rotinas", "Integração entre ferramentas", "Execução local", "Fluxos assistidos por IA"],
    stack: ["Python", "Node.js", "Windows", "IA", "Integrações"],
  },
];
