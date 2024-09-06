import { RefObject, useRef } from "react";

export const useScrollTo = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const servicesRef = useRef<HTMLElement | null>(null);
  const plansRef = useRef<HTMLElement | null>(null);

  const scrollTo = (ref: RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return { heroRef, servicesRef, plansRef, scrollTo };
};
