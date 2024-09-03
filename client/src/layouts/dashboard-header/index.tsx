import { Link } from "react-router-dom";

import { Brand } from "../../components/brand";

import { FaSignOutAlt } from "react-icons/fa";

import { DASHBOARD_LINKS } from "../../constants/dashbardHeaderConstants";

const DashboardHeader = () => {
  return (
    <header className="flex flex-col  min-h-screen border-r">
      <div className="h-20 flex items-center justify-center ">
        <Brand variant="primary" />
      </div>
      <div className="flex flex-col justify-between flex-1">
        <div className="grid gap-5">
          {DASHBOARD_LINKS.map(({ label, to, title, icon }) => (
            <Link key={label} to={to} title={title} className="ds-header-link">
              {icon}
              {label}
            </Link>
          ))}
        </div>
        <Link to="/" title="Log out" className="ds-header-link mb-5">
          <FaSignOutAlt size="1.2rem" />
          Log out
        </Link>
      </div>
    </header>
  );
};

export default DashboardHeader;
