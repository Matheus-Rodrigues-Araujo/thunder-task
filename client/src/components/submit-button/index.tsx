import { ReactNode } from "react";

interface SubmitButtonProps {
  children: ReactNode;
  isLoading: boolean;
}

export const SubmitButton = ({ children, isLoading }: SubmitButtonProps) => {
  return (
    <button
      type="submit"
      disabled={isLoading}
      className="
  submit-button font-bold text-white text-xl 
  w-full h-12 bg-cyan-400 rounded-md
  flex justify-center items-center 
  transition 200 ease-in cursor-pointer
  hover:bg-cyan-500 hover:text-white"
    >
      {children}
    </button>
  );
};
