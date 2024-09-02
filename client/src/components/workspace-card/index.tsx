import { FaEdit } from "react-icons/fa";
import { FaPlus, FaEye, FaTrash, FaCalendar } from "react-icons/fa6";
import { TextContent } from "../text-content";

import "./styles.css";

interface WorkSpaceCardProps {
  name: string;
  totalProjects: number;
  createdAt: string;
}

const WorkSpaceCard = ({
  name,
  totalProjects,
  createdAt,
}: WorkSpaceCardProps) => {
  return (
    <div className="workspace-card h-42 gap-3 bg-gradient-to-r from-cyan-500 via-[#2aa7e6] to-cyan-400 grid border rounded-md">
      {/* linear-gradient(359deg, #0081c0, var(--cyan)) */}
      <div className="ws-wrapper grid gap-3 items-center p-3">
        <div className="ws-top flex items-center gap-3">
          <h4 className="text-4xl font-bold text-white">{name}</h4>
          <TextContent>
            {/* className="h-7 w-32 text-center px-2 font-bold" */}
            {totalProjects > 1
              ? `${totalProjects} projects`
              : `${totalProjects} project`}
          </TextContent>
        </div>
        <div className="ws-bottom">
          <TextContent>
            <FaCalendar size="1.2rem" />
            Created at {createdAt}
          </TextContent>
        </div>
      </div>
      <div className="bg-slate-200 flex gap-3 justify-evenly  border-t p-3">
        <button className="ws-btn">
          <FaPlus size="1.2rem" />
        </button>
        <button className="ws-btn ">
          <FaEye size="1.2rem" />
        </button>
        <button className="ws-btn ">
          <FaEdit size="1.2rem" />
        </button>
        <button className="ws-btn ">
          <FaTrash size="1.2rem" />
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
