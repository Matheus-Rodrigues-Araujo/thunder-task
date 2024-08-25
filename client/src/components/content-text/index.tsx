import { ReactNode } from "react";

export const ContentText = ({ children }: { children: ReactNode }) => {
  return <p className="text-lg text-justify text-gray-600">{children}</p>;
};
