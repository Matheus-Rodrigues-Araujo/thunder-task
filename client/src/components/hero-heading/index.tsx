import { ReactNode } from "react";

export const HeroHeading = ({ children }: { children: ReactNode }) => {
  return <h1 className="text-black text-5xl font-bold xl:text-8xl">{children}</h1>;
};
