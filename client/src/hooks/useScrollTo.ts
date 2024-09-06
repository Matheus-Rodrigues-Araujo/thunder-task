import { RefObject, useRef } from "react";

export const useScrollTo = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const plansRef = useRef<HTMLElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleScroll = (section: string) => {
    switch (section.toLowerCase()) {
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

  return { heroRef, servicesRef, plansRef, scrollTo, handleScroll };
};
