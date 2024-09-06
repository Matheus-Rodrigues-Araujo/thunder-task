import { NavLink } from "react-router-dom";

import { Brand } from "../../components/brand";
import { FaArrowCircleLeft, FaSignOutAlt } from "react-icons/fa";

import { DASHBOARD_LINKS } from "../../constants/dashbardHeaderConstants";

const DashboardSidebar = () => {
  return (
    <aside className="hidden lg:flex flex-col min-h-screen border-r px-3">
      <div className="h-20 center gap-3">
        <Brand variant="primary" />
        <FaArrowCircleLeft className="sidebar-toggle-icon duration" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="grid gap-5">
          {DASHBOARD_LINKS.map(({ label, to, icon }) => (
            <NavLink
              end
              key={label}
              to={to}
              title={label}
              className={({ isActive }) =>
                `nav-link gap-1 ${isActive ? "active" : ""}`
              }
            >
              {icon}
              {label}
            </NavLink>
          ))}
        </div>
        <NavLink
          to="/"
          title="Log out"
          className="flex items-center gap-1 mb-10"
        >
          <FaSignOutAlt />
          Log out
        </NavLink>
      </div>
    </aside>
  );
};

export default DashboardSidebar;
