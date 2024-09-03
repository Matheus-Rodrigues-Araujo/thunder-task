import { ReactElement } from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaProjectDiagram,
  FaQuestionCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";

export interface DashboardLinksProps {
  to: string;
  icon: ReactElement;
  label: string;
}

export const DASHBOARD_LINKS: DashboardLinksProps[] = [
  {
    to: "/dashboard",
    icon: <FaTachometerAlt />,
    label: "Painel",
  },
  {
    to: "tasks",
    icon: <FaTasks />,
    label: "Tarefas",
  },
  {
    to: "projects",
    icon: <FaProjectDiagram />,
    label: "Projetos",
  },
  {
    to: "teams",
    icon: <FaUsers />,
    label: "Times",
  },
  {
    to: "profile",
    icon: <FaUser />,
    label: "Meu Perfil",
  },
  {
    to: "help",
    icon: <FaQuestionCircle />,
    label: "Ajuda",
  },
];
