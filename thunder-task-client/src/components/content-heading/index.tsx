import { ReactNode } from "react";

export const ContentHeading = ({ children }: { children: ReactNode }) => {
  return <h3 className="text-gray-600 font-bold text-xl">{children}</h3>;
};
