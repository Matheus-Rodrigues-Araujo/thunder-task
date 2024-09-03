import { Link } from "react-router-dom";

import { Brand } from "../../components/brand";
import SignOutLink from "../../components/sign-out-link";
import { FaArrowCircleLeft } from "react-icons/fa";

import { DASHBOARD_LINKS } from "../../constants/dashbardHeaderConstants";

const DashboardAside = () => {
  return (
    <aside className="hidden lg:flex flex-col min-h-screen border-r">
      <div className="h-20 center gap-3">
        <Brand variant="primary" />
        <FaArrowCircleLeft className="sidebar-toggle-icon duration" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="grid gap-5">
          {DASHBOARD_LINKS.map(({ label, to, icon }) => (
            <Link key={label} to={to} title={label} className="ds-header-link">
              {icon}
              {label}
            </Link>
          ))}
        </div>
        <SignOutLink />
      </div>
    </aside>
  );
};

export default DashboardAside;
