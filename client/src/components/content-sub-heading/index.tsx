import { ReactNode } from "react";

export const ContentSubHeading = ({ children }: { children: ReactNode }) => {
  return <h4 className="text-black font-bold text-lg text-center">{children}</h4>;
};
