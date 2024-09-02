import { ReactNode } from "react";

export const ContentHeading = ({ children }: { children: ReactNode }) => {
  return <h3 className="content-heading text-secondary-mediumGray font-bold text-3xl text-center">{children}</h3>;
};
