import { ReactNode } from "react";

export const HeroHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-black text-3xl font-bold md:text-5xl xl:text-8xl">{children}</h1>;
};
