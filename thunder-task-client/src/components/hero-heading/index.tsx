import { ReactNode } from "react";

export const HeroHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-yellow-400 text-2xl  md:text-6xl">{children}</h1>;
};
