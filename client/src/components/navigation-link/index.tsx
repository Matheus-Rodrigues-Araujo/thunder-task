import { Link } from "react-router-dom";
import "./styles.css";

export interface NavigationLinkProps {
  route: string;
  name: string;
  scrollTo?: () => void;
}

export const NavigationLink = ({
  route,
  name,
  scrollTo,
}: NavigationLinkProps) => {
  return (
    <Link
      to={route}
      title={name}
      onClick={scrollTo}
      className={`nav-link ${
        name === "Sign Up" &&
        "link-button nav-link-sign-btn"
      } px-2 py-2`}
    >
      {name}
      {name !== "Sign Up" && <div className="bg-primary-cerulean"></div>}
    </Link>
  );
};
