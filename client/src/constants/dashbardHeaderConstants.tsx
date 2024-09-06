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
    to: "/dashboard/tasks",
    icon: <FaTasks />,
    label: "Tarefas",
  },
  {
    to: "/dashboard/projects",
    icon: <FaProjectDiagram />,
    label: "Projetos",
  },
  {
    to: "/dashboard/teams",
    icon: <FaUsers />,
    label: "Times",
  },
  {
    to: "/dashboard/profile",
    icon: <FaUser />,
    label: "Meu Perfil",
  },
  {
    to: "/dashboard/help",
    icon: <FaQuestionCircle />,
    label: "Ajuda",
  },
];
