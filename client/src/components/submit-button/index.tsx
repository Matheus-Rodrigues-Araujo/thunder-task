import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  isLoading: boolean;
}

export const SubmitButton = ({ children, isLoading }: SubmitButtonProps) => {
  return (
    <button type="submit" disabled={isLoading} className="submit-button">
      {children}
    </button>
  );
};
