import { ReactElement } from "react";
import {
  FaTachometerAlt,
  FaTasks,
  FaProjectDiagram,
  FaQuestionCircle,
  FaUser,
  FaUsers,
} from "react-icons/fa";

interface DashboardLinksProps {
  to: string;
  title: string;
  icon: ReactElement;
  label: string;
}

export const DASHBOARD_LINKS: DashboardLinksProps[] = [
  {
    to: "/dashboard",
    title: "Dashboard",
    icon: <FaTachometerAlt />,
    label: "Painel",
  },
  {
    to: "tasks",
    title: "Tasks",
    icon: <FaTasks />,
    label: "Tarefas",
  },
  {
    to: "projects",
    title: "Projects",
    icon: <FaProjectDiagram />,
    label: "Projetos",
  },
  {
    to: "teams",
    title: "Teams",
    icon: <FaUsers />,
    label: "Times",
  },
  {
    to: "profile",
    title: "Profile",
    icon: <FaUser />,
    label: "Meu Perfil",
  },
  {
    to: "help",
    title: "Help",
    icon: <FaQuestionCircle />,
    label: "Ajuda",
  },
];
