import { IconType } from "react-icons";
import { FaFlag, FaPeopleGroup, FaClockRotateLeft } from "react-icons/fa6";
import { SiMlflow } from "react-icons/si";

export interface Service {
  id?: number;
  name: string;
  icon: IconType;
  subtitle: string;
  description: string;
}

// Criando um array com os serviços
export const SERVICES_ITEMS: Service[] = [
  {
    id: 1,
    name: "Gerenciamento de projetos",
    icon: FaFlag,
    subtitle: "Organize e Planeje seus objetivos",
    description:
      "Permitir que os usuários criem, editem e organizem tarefas e subtarefas, atribuam prazos, prioridades e etiquetas. Oferecer funcionalidades para criar e gerenciar projetos, dividir projetos em tarefas e subtarefas, e acompanhar o progresso.",
  },
  {
    id: 2,
    name: "Colaboração e Comunicação",
    icon: FaPeopleGroup,
    subtitle: "Trabalhe sozinho ou em Equipe",
    description:
      "Permitir que os usuários compartilhem tarefas e projetos com outros membros da equipe, atribuam responsabilidades e acompanhem o progresso em tempo real. Oferecer a possibilidade de adicionar comentários, notas e anexos às tarefas.",
  },
  {
    id: 3,
    name: "Integração e Automação",
    icon: SiMlflow,
    subtitle: "Sincronize e Automatize",
    description:
      "Conectar-se com outras ferramentas e aplicativos, como calendários, e-mails e plataformas de comunicação, para sincronização de dados e produtividade. Permitir a criação de fluxos de trabalho automatizados, como lembretes, notificações e atualizações automáticas.",
  },
  {
    id: 4,
    name: "Gerenciamento de Tempo",
    icon: FaClockRotateLeft,
    subtitle: "Controle e gerecie seu Tempo",
    description:
      "Fornecer funcionalidades para rastrear o tempo gasto em tarefas e projetos. Permitir a definição de prazos, a criação de cronogramas e o monitoramento do tempo real para aumentar a produtividade.",
  },
];
