import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  children: ReactNode;
  route: string;
}

export const LinkButton = ({ children, route }: LinkButtonProps) => {
  return (
    <div
      className="
  link-button font-bold text-white text-xl 
  w-44 h-12 bg-cyan-400 rounded-3xl
  flex justify-center items-center 
  transition 200 ease-in cursor-pointer
  hover:bg-cyan-500 hover:text-white"
    >
      <Link to={route}>{children}</Link>
    </div>
  );
};
