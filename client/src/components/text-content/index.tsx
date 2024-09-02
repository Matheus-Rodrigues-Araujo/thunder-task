import { ReactNode } from "react";

export const TextContent = ({ children }: { children: ReactNode }) => {
  return <p className="text-content text-lg text-justify text-gray-600">{children}</p>;
};