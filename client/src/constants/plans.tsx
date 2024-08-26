// plans.ts

export interface Plan {
  id?: number;
  name: string;
  description: string;
  price: string;
  features: string[];
}

export const plans: Plan[] = [
  {
    id: 1,
    name: "Plano Básico",
    description:
      "Ideal para indivíduos que precisam organizar tarefas e projetos pessoais de forma prática e eficiente.",
    price: "Gratuito",
    features: [
      "Gerenciamento de tarefas",
      "Projetos ilimitados",
      "Relatórios básicos",
      "Integração com calendário",
    ],
  },
  {
    id: 2,
    name: "Plano Empresarial Essencial",
    description:
      "Perfeito para empresas que necessitam de uma solução simples para gestão de tarefas e colaboração.",
    price: "R$ 49,90/mês",
    features: [
      "Colaboração em equipe",
      "Atribuição de tarefas",
      "Integração com comunicação",
      "Relatórios avançados",
    ],
  },
  {
    id: 3,
    name: "Plano Empresarial Pro",
    description:
      "Solução avançada para empresas que precisam de maior controle, automação e eficiência em suas operações.",
    price: "R$ 99,90/mês",
    features: [
      "Automação de tarefas",
      "Integração com CRM",
      "Gestão de produtividade",
      "Suporte prioritário",
    ],
  },
  {
    id: 4,
    name: "Plano Empresarial Premium",
    description:
      "Ideal para grandes empresas que necessitam de uma solução robusta, completa e totalmente personalizável.",
    price: "R$ 199,90/mês",
    features: [
      "Integração com ERP",
      "Dashboards personalizados",
      "Segurança avançada",
      "Suporte dedicado",
    ],
  },
];
