import { Brand } from "../../components/brand";
import { Sidebar } from "../sidebar";
import { Link } from "react-router-dom";
import ToggleIcon from "../../components/toggle-icon";

import { HEADER_ITEMS } from "../../constants/headerConstants";
import { useSidebar } from "../../hooks/useSidebar";

interface HeaderProps {
  handleScroll: (section: string) => void;
}

export const Header = ({ handleScroll }: HeaderProps) => {
  {
    const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

    const handleSidebar = () => {
      setIsSidebarOpen(!isSidebarOpen);
    };

    return (
      <>
        <header className="header shadow-[0_-5px_10px_2px_black] h-24 px-10 flex fixed top-0 left-0 w-full z-20 bg-secondary-white">
          <div className="header-wrapper w-full flex justify-between items-center">
            <Brand variant="primary" />
            <nav data-testid="header-nav" className="header-nav">
              {HEADER_ITEMS.map(({ to, label }) => (
                <Link
                  key={label}
                  to={to}
                  onClick={() => handleScroll(label.toLowerCase())}
                >
                  {label}
                </Link>
              ))}
            </nav>
            <ToggleIcon handleSidebar={handleSidebar} />
          </div>
        </header>
        <Sidebar
          items={HEADER_ITEMS}
          isSidebarOpen={isSidebarOpen}
          handleScroll={handleScroll}
        />
      </>
    );
  }
};
