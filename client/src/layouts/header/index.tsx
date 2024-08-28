import { useEffect, useState } from "react";
// import { TfiAlignRight } from "react-icons/tfi";
import { Brand } from "../../components/brand";
import { NavigationLink } from "../../components/navigation-link";
import { Sidebar } from "../sidebar";

import { RiMenuFill } from "react-icons/ri";

import { navigationLinks } from "./constants";


export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (!(e.target instanceof Element)) return;
    if (e.target.closest(".overlay")) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const bodyStyle = document.body.style;
    isSidebarOpen
      ? (bodyStyle.overflowY = "hidden")
      : (bodyStyle.overflowY = "auto");

    return () => {
      bodyStyle.overflowY = "auto";
    };
  }, [isSidebarOpen]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (isSidebarOpen && width >= 1024) {
        setIsSidebarOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isSidebarOpen]);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <>
      <header className="header shadow-[0_-5px_10px_2px_black] h-24 px-10 flex fixed top-0 left-0 w-full z-20 bg-white">
        <div className="header-wrapper w-full flex justify-between items-center">
          <Brand variant="primary" />
          <nav data-testid="header-nav" className="hidden lg:flex gap-1 ">
            {navigationLinks.map((link) => (
              <NavigationLink
                key={link.name}
                route={link.route}
                name={link.name}
              />
            ))}
          </nav>
          <RiMenuFill
            className="cursor-pointer transition duration-200 ease-in-out p-1 lg:hidden"
            color="#06b6d4"
            size="2.5em"
            onClick={handleSidebar}
            data-testid="toggle-sidebar"
          />
        </div>
      </header>
      <Sidebar
        navigationLinks={navigationLinks}
        isSidebarOpen={isSidebarOpen}
      />
    </>
  );
};
