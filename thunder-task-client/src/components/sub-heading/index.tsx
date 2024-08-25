import { ReactNode } from "react";

export const SubHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="text-xl font-bold text-white md:text-5xl" >{children}</h2>;
};
