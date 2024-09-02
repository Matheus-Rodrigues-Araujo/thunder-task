import { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="heading text-black font-bold text-4xl">{children}</h1>
  );
};
