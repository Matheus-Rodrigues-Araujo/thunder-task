import { NavLink } from "react-router-dom";

import "./styles.css";
import { Brand } from "../../components/brand";
import { Overlay } from "../../components/overlay";
import { FaSignOutAlt } from "react-icons/fa";

import { DASHBOARD_LINKS } from "../../constants/dashbardHeaderConstants";

const DashboardSidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  return (
    <>
      <aside
        className={`sidebar ${isSidebarOpen ? "open" : "close"} lg:static lg:translate-x-0`}
      >
        <div className="h-20 center gap-3">
          <Brand variant="primary" />
        </div>
        <div className="flex flex-col justify-between flex-1">
          <div className="grid">
            {DASHBOARD_LINKS.map(({ label, to, icon }) => (
              <NavLink
                end
                key={label}
                to={to}
                title={label}
                className={({ isActive }) =>
                  `nav-link gap-1 ${isActive ? "active" : "hover:bg-primary-aqua hover:text-secondary-white"}`
                }
              >
                {icon}
                <span>{label}</span>
              </NavLink>
            ))}
          </div>
          <NavLink to="/" title="Log out" className="nav-link mb-2">
            <FaSignOutAlt />
            Log out
          </NavLink>
        </div>
      </aside>
      {isSidebarOpen && <Overlay />}
    </>
  );
};

export default DashboardSidebar;
