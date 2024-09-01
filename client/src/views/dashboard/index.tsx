import { Brand } from "../../components/brand";
import { Link } from "react-router-dom";

import "./styles.css";

import {
  FaTachometerAlt,
  FaTasks,
  FaProjectDiagram,
  FaUser,
  FaQuestionCircle,
  FaUsers,
  FaSignOutAlt,
  FaPlus,
} from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <header className="flex flex-col  min-h-screen border-r">
        <div className="h-20 flex items-center justify-center ">
          <Brand variant="primary" />
        </div>
        <div className="flex flex-col gap-3 justify-between pl-5 flex-1">
          <div>
            <Link
              to="/dashboard"
              title="tasks"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaTachometerAlt size="1.2rem" />
              Painel
            </Link>
            <Link
              to="tasks"
              title="tasks"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaTasks size="1.2rem" />
              Tarefas
            </Link>
            <Link
              to="projects"
              title="projects"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaProjectDiagram size="1.2rem" color="r" />
              Projetos
            </Link>
            <Link
              to="teams"
              title="tasks"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaUsers size="1.2rem" />
              Times
            </Link>
            <Link
              to="profile"
              title="profile"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaUser size="1.2rem" />
              Meu Perfil
            </Link>

            <Link
              to="help"
              title="profile"
              className="flex gap-3 items-center text-gray-600 hover:text-cyan-400 px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <FaQuestionCircle size="1.2rem" />
              Ajuda
            </Link>
          </div>
          <Link
            to="/"
            title="Log out"
            className="flex gap-3 items-center mb-5 text-gray-600 hover:text-cyan-400 px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <FaSignOutAlt /> Log out
          </Link>
        </div>
      </header>
      <main className="min-h-screen">
        <div className="h-20 flex border-b items-center w-full justify-between px-5">
          <h1 className="text-black font-bold text-3xl">Painel</h1>
          <div className="flex items-center justify-center">
            <div className="flex items-center gap-3">
              <div
                className="h-8 w-8 rounded-full bg-gray-400"
                style={{
                  backgroundImage: "url('/user.png')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex flex-col">
                <p className="font-semibold text-sm">André</p>
                <p className="font-light text-sm">andre@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="h-40 w-full bg-black flex items-center justify-between px-5"
          style={{
            backgroundImage:
              "linear-gradient(150deg, black, var(--cyan), black)",
          }}
        >
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl text-white font-bold">Bem vindo, André!</h2>
            <p className="text-lg text-white font-light">
              Comece a gerenciar seus trabalhos individuais ou de sua equipe.
            </p>
          </div>

          <div className="flex items-center justify-center border bg-white rounded-3xl w-72 h-12">
            <Link to="tasks" className="flex items-center gap-3 text-black">
              <FaPlus size="1.2rem" /> Nova área de trabalho{" "}
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
