import { Brand } from "../../components/brand";
import { Sidebar } from "../sidebar";

import { NavigationLink } from "../../components/navigation-link";
import ToggleIcon from "../../components/toggle-icon";

import { HEADER_ITEMS } from "../../constants/headerConstants";
import { useSidebar } from "../../hooks/useSidebar";
import { RefObject } from "react";

interface HeaderProps {
  scrollTo: (ref: RefObject<HTMLElement>) => void;
  heroRef: RefObject<HTMLElement>;
  servicesRef: RefObject<HTMLElement>;
  plansRef: RefObject<HTMLElement>;
}

export const Header = ({
  scrollTo,
  heroRef,
  servicesRef,
  plansRef,
}: HeaderProps) => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

   const handleScroll = (section: string) => {
    switch (section) {
      case "home":
        scrollTo(heroRef);
        break;
      case "services":
        scrollTo(servicesRef);
        break;
      case "plans":
        scrollTo(plansRef);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <header className="header shadow-[0_-5px_10px_2px_black] h-24 px-10 flex fixed top-0 left-0 w-full z-20 bg-secondary-white">
        <div className="header-wrapper w-full flex justify-between items-center">
          <Brand variant="primary" />
          <nav data-testid="header-nav" className="header-nav">
            {HEADER_ITEMS.map(({ label, to }) => (
              <NavigationLink
                key={label}
                to={to}

                scrollTo={() => handleScroll(label.toLowerCase())}
                label={label}
              />
            ))}
          </nav>
          <ToggleIcon handleSidebar={handleSidebar} />
        </div>
      </header>
      <Sidebar items={HEADER_ITEMS} isSidebarOpen={isSidebarOpen} />
    </>
  );
};
