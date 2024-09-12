import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  action: () => void;
}

const Button = ({ children, action }: ButtonProps) => {
  return (
    <button className="center max-w-80 text-base bg-secondary-white text-primary-cerulean font-bold px-3 gap-3 hover:bg-none" onClick={action}>
      {children}
    </button>
  );
};

export default Button;
