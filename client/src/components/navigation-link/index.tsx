import { Link } from "react-router-dom";
import "./styles.css";

export interface NavigationLinkProps {
  route: string;
  name: string;
}

export const NavigationLink = ({
  route,
  name,
}: NavigationLinkProps) => {
  return (
    <Link
      to={route}
      title={name}
      className={`nav-link ${
        name === "Sign Up"
          ? "bg-cyan-500 hover:bg-cyan-600 text-white rounded-[3rem]"
          : "text-gray-600"
      } px-2 py-2 text-xl font-bold transition duration-200 ease-in`}
    >
      {name}
      {name !== "Sign Up" && <div className="bg-cyan-500"></div>}
    </Link>
  );
};
