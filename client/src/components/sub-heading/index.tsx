import { ReactNode } from "react";

export const SubHeading = ({ children }: { children: ReactNode }) => {
  return <h2 className="sub-heading text-xl font-medium text-gray-600">{children}</h2>;
};
