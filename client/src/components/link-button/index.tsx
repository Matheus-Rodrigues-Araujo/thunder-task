import { ReactNode } from "react";
import { Link } from "react-router-dom";

interface LinkButtonProps {
  children: ReactNode;
  route: string;
}

export const LinkButton = ({ children, route }: LinkButtonProps) => {
  return (
    <Link className="link-button" to={route}>
      {children}
    </Link>
  );
};
