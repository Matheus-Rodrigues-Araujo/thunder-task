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
    <div className="workspace-card grid h-42 gap-3 bg-primary-gradient border rounded-md">
      {/* linear-gradient(359deg, #0081c0, var(--cyan)) */}
      <div className="ws-wrapper grid gap-3 items-center p-3">
        <div className="ws-top flex items-center gap-3">
          <h4 className="text-4xl font-bold text-secondary-white">{name}</h4>
          <div className="h-7 w-36 center text-primary-cerulean bg-secondary-white font-bold border-2 border-secondary-white rounded-full">
            <p className="text-center text-sm border-2 border-primary-cyan w-full rounded-full">
              {totalProjects > 1
                ? `${totalProjects} projects`
                : `${totalProjects} project`}
            </p>
          </div>
        </div>
        <div className="ws-bottom">
          <p className="flex items-center text-secondary-white gap-3">
            <FaCalendar color="white" />
            Created at {createdAt}
          </p>
        </div>
      </div>
      <div className="bg-secondary-lightGray flex flex-wrap gap-3 justify-evenly p-3">
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
