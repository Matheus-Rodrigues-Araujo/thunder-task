import { useState, useEffect } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
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
    const handleClickOutside = (e: MouseEvent) => {
      if (!(e.target instanceof Element)) return;
      if (e.target.closest(".overlay")) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return { isSidebarOpen, setIsSidebarOpen, handleSidebar };
};
