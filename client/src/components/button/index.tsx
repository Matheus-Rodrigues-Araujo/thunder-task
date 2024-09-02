import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
  children: ReactNode;
  action: () => void;
}

const Button = ({ children, action }: ButtonProps) => {
  return (
    <button className="btn" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
