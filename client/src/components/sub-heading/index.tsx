import { ReactNode } from "react";

export const SubHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="sub-heading text-lg font-medium text-gray-600">
      {children}
    </h2>
  );
};

