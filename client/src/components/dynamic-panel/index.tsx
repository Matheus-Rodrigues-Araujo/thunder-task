import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TextContent } from "../text-content";

import "./styles.css";

const DynamicPanel = () => {
  return (
    <div className="ds-panel h-44 w-full bg-gradient-to-r to-blue-800 via-cyan-600 from-cyan-400 flex items-center justify-between px-5">
      <div className="flex flex-col justify-center">
        <h2 className="text-4xl text-white font-bold">Bem vindo, André!</h2>
        <TextContent>
          Comece a gerenciar seus trabalhos individuais ou de sua equipe.
        </TextContent>
      </div>

      <div
        className="
    w-72 h-12 flex items-center justify-center border bg-white
  text-black rounded-3xl transition 200 ease-in hover:border-cyan-400
  hover:bg-black hover:text-cyan-400"
      >
        <Link to="tasks" className="flex items-center gap-3">
          <FaPlus size="1.2rem" /> Nova área de trabalho{" "}
        </Link>
      </div>
    </div>
  );
};

export default DynamicPanel;
