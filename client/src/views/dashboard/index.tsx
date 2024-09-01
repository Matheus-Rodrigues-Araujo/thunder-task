import { Brand } from "../../components/brand";
import {
  Link,
  // , Outlet
} from "react-router-dom";
import {
  RiHomeFill,
  RiTeamFill,
  RiTaskFill,
  RiUser3Fill,
  RiDoorOpenFill,
} from "react-icons/ri";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <header className="flex flex-col px-5 min-h-screen border-r">
        <div className="h-20 flex items-center justify-center">
          <Brand variant="primary" />
        </div>
        <div className="flex flex-col gap-3 py-5 justify-between h-full">
          <div>
            <Link
              to="/dashboard"
              title="tasks"
              className="flex gap-3 text-gray-600 hover:bg-cyan-600 hover:text-white px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <RiHomeFill size="1.2rem" />
              Dashboard
            </Link>
            <Link
              to="tasks"
              title="tasks"
              className="flex gap-3 text-gray-600 hover:bg-cyan-600 hover:text-white px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <RiTaskFill size="1.2rem" />
              Tasks
            </Link>
            <Link
              to="tasks"
              title="tasks"
              className="flex gap-3 text-gray-600 hover:bg-cyan-600 hover:text-white px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <RiTeamFill size="1.2rem" />
              Teams
            </Link>
            <Link
              to="profile"
              title="profile"
              className="flex gap-3 text-gray-600 hover:bg-cyan-600 hover:text-white px-2 py-2 text-xl font-bold transition duration-200 ease-in"
            >
              <RiUser3Fill size="1.2rem" />
              Profile
            </Link>
          </div>
          <Link
            to="profile"
            title="profile"
            className="flex gap-3 items-center text-gray-600 hover:bg-cyan-600 hover:text-white px-2  text-xl font-bold transition duration-200 ease-in"
          >
            <RiDoorOpenFill /> Log out
          </Link>
        </div>
      </header>
      <main className="min-h-screen"></main>
    </div>
  );
};

export default Dashboard;
