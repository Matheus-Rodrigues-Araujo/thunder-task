import { FaPlus } from "react-icons/fa6";
import { TextContent } from "../text-content";
import Button from "../button";

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

      <Button action={() => console.log("Button clicked!")}>
        <FaPlus size="1.2rem" />
        Nova área de trabalho
      </Button>
    </div>
  );
};

export default DynamicPanel;
