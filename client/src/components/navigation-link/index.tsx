import { ReactElement } from "react";
import { Link } from "react-router-dom";
import "./styles.css";

export interface NavigationLinkProps {
  to: string;
  label: string;
  icon?: ReactElement;
  scrollTo?: () => void;
}

export const NavigationLink = ({
  to,
  label,
  icon,
  scrollTo,
}: NavigationLinkProps) => {
  return (
    <Link
      to={to}
      title={label}
      onClick={scrollTo}
      className={`nav-link ds-header-link ${label === "Sign Up" && "link-button nav-link-sign-btn"}`}
    >
      {icon && icon}
      {label}
      {label !== "Sign Up" && <div className="bg-primary-cerulean"></div>}
    </Link>
  );
};
