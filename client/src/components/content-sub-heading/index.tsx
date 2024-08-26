import { ReactNode } from "react";

export const ContentSubHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h4 className="text-left text-white text-md font-bold">{children}</h4>
  );
};
