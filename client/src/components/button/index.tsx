import { ReactNode } from "react";
import "./styles.css";

interface ButtonProps {
  children: ReactNode;
  action: () => void;
}

const Button = ({ children, action }: ButtonProps) => {
  return (
    <div className="btn" onClick={action}>
      {children}
    </div>
  );
};

export default Button;
