import { Link } from "react-router-dom";

import { Brand } from "../../components/brand";

import {
  FaTachometerAlt,
  FaTasks,
  FaProjectDiagram,
  FaQuestionCircle,
  FaSignOutAlt,
  FaUser,
  FaUsers,
} from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <header className="flex flex-col  min-h-screen border-r">
      <div className="h-20 flex items-center justify-center ">
        <Brand variant="primary" />
      </div>
      <div className="flex flex-col justify-between pl-5 flex-1">
        <div className="grid gap-5">
          <Link
            to="/dashboard"
            title="tasks"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaTachometerAlt size="1.2rem" />
            Painel
          </Link>
          <Link
            to="tasks"
            title="tasks"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaTasks size="1.2rem" />
            Tarefas
          </Link>
          <Link
            to="projects"
            title="projects"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaProjectDiagram size="1.2rem" color="r" />
            Projetos
          </Link>
          <Link
            to="teams"
            title="tasks"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaUsers size="1.2rem" />
            Times
          </Link>
          <Link
            to="profile"
            title="profile"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaUser size="1.2rem" />
            Meu Perfil
          </Link>

          <Link
            to="help"
            title="profile"
            className="flex gap-3 items-center text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaQuestionCircle size="1.2rem" />
            Ajuda
          </Link>
        </div>
        <Link
          to="/"
          title="Log out"
          className="flex gap-3 items-center mb-5 text-secondary-mediumGray hover:text-primary-cyan px-2  text-xl font-bold transition duration-200 ease-in"
        >
          <FaSignOutAlt /> Log out
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
