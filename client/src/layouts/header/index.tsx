import { RefObject, useEffect, useState } from "react";
import { Brand } from "../../components/brand";
import { Sidebar } from "../sidebar";

import {
  NavigationLink,
  NavigationLinkProps,
} from "../../components/navigation-link";

import { RiMenuFill } from "react-icons/ri";

import { HEADER_ITEMS } from "../../constants/headerConstants";

export interface HeaderProps {
  scrollToRef: (ref: RefObject<Element>) => void;
  heroRef: RefObject<Element>;
  servicesRef: RefObject<Element>;
  plansRef: RefObject<Element>;
}

export const Header = ({
  scrollToRef,
  heroRef,
  servicesRef,
  plansRef,
}: HeaderProps) => {
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

  const handleScrollNavigation = (link: NavigationLinkProps) => {
    if (!link.name.startsWith("Sign")) {
      return (
        <NavigationLink
          key={link.name}
          route={link.route}
          name={link.name}
          scrollTo={() => {
            link.name === "Home"
              ? scrollToRef(heroRef)
              : link.name === "Services"
                ? scrollToRef(servicesRef)
                : link.name === "Plans" && scrollToRef(plansRef);
          }}
        />
      );
    } else {
      return (
        <NavigationLink key={link.name} route={link.route} name={link.name} />
      );
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
      <header className="header shadow-[0_-5px_10px_2px_black] h-24 px-10 flex fixed top-0 left-0 w-full z-20 bg-secondary-white">
        <div className="header-wrapper w-full flex justify-between items-center">
          <Brand variant="primary" />
          <nav
            data-testid="header-nav"
            className="hidden lg:flex items-center gap-1 "
          >
            {HEADER_ITEMS.map((link) => handleScrollNavigation(link))}
          </nav>
          <RiMenuFill
            className="cursor-pointer p-1 text-primary-cyan lg:hidden"
            // color="#06b6d4"
            style={{ width: "2.5rem", height: "2.5rem" }}
            onClick={handleSidebar}
            data-testid="toggle-sidebar"
          />
        </div>
      </header>
      <Sidebar items={HEADER_ITEMS} isSidebarOpen={isSidebarOpen} />
    </>
  );
};
