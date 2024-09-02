import { FaEdit } from "react-icons/fa";
import { FaPlus, FaEye, FaTrash, FaCalendar } from "react-icons/fa6";

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
    <div className="h-42 gap-3 max-w-[780px] grid border bg-slate-900 rounded-md">
      <div className="grid gap-3 items-center p-3">
        <div className="flex items-center gap-3">
          <div>
            <h4 className="text-4xl text-cyan-400 font-bold">{name}</h4>
          </div>
          <p className="rounded-xl h-7 w-32 text-center px-2 font-bold border border-white text-white">
            {totalProjects > 1
              ? `${totalProjects} projects`
              : `${totalProjects} project`}
          </p>
        </div>
        <p className="flex gap-3 text-white font-light text-sm">
          <FaCalendar size="1.2rem" />
          Created at {createdAt}
        </p>
      </div>
      <div className="flex gap-3 justify-evenly text-white border-t p-3">
        <button className="h-8 flex-1 border rounded-md flex justify-center items-center transition 200 ease-in hover:text-cyan-400 hover:border-cyan-400">
          <FaPlus size="1.2rem" />
        </button>
        <button className="h-8 flex-1 border rounded-md flex justify-center items-center transition 200 ease-in hover:text-cyan-400 hover:border-cyan-400">
          <FaEye size="1.2rem" />
        </button>
        <button className="h-8 flex-1 border rounded-md flex justify-center items-center transition 200 ease-in hover:text-cyan-400 hover:border-cyan-400">
          <FaEdit size="1.2rem" />
        </button>
        <button className="h-8 flex-1 border rounded-md flex justify-center items-center transition 200 ease-in hover:text-cyan-400 hover:border-cyan-400">
          <FaTrash size="1.2rem" />
        </button>
      </div>
    </div>
  );
};

export default WorkSpaceCard;
