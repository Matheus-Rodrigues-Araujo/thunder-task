import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  action: () => void;
}

const Button = ({ children, action }: ButtonProps) => {
  return (
    <button className="center w-80 gap-3" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
