import { FaPlus } from "react-icons/fa6";
import Button from "../button";

import "./styles.css";

const DynamicPanel = () => {
  return (
    <div className="ds-panel h-44 w-full bg-secondary-gradient grid md:grid-cols-2 items-center p-5">
      <div className="flex flex-col justify-center">
        <h2 className="text-3xl lg:text-4xl text-secondary-white font-bold">
          Bem vindo, André!
        </h2>
        <p className="text-white font-semibold">
          Comece a gerenciar seus trabalhos individuais ou de sua equipe.
        </p>
      </div>
      <div className="flex items-center justify-center md:justify-end">
        <Button action={() => console.log("Button clicked!")}>
          <FaPlus size="1.2rem" />
          Nova área de trabalho
        </Button>
      </div>
    </div>
  );
};

export default DynamicPanel;
