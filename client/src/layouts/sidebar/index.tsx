import { Brand } from "../../components/brand";
import { Link } from "react-router-dom";
import { Overlay } from "../../components/overlay";
import { DashboardLinksProps } from "../../constants/dashbardHeaderConstants";
import { HeaderItemsProps } from "../../constants/headerConstants";

export type SidebarItem = DashboardLinksProps | HeaderItemsProps;

export interface SidebarProps {
  items: SidebarItem[];
  isSidebarOpen: boolean;
  handleScroll: (section: string) => void;
}

export const Sidebar = ({
  items,
  isSidebarOpen,
  handleScroll,
}: SidebarProps) => {
  return (
    <>
      <div
        data-testid="sidebar"
        className={`sidebar items-center ${isSidebarOpen ? "open" : "close"} lg:hidden`}
      >
        <div className="flex flex-col gap-6 mt-5 flex-grow">
          <Brand variant="primary" />
          <nav className="sidebar-nav flex flex-col justify-between flex-1">
            <ul className="flex flex-col gap-5 ">
              {items.map(({ to, label }) => (
                <li key={label} className="w-full">
                  <Link
                    to={to}
                    key={label}
                    onClick={() => handleScroll(label)}
                    className={
                      label.toLowerCase() === "sign up"
                        ? "bg-primary-cyan rounded-md p-2 text-secondary-white"
                        : "hover:text-primary-cyan"
                    }
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
      {isSidebarOpen && <Overlay data-testid="overlay" />}
    </>
  );
};
