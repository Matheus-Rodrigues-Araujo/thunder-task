import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

type BrandProps = {
  variant: "primary" | "secondary";
};

export const Brand = ({ variant = "primary" }: BrandProps) => {
  const variantStyles: Record<BrandProps["variant"], string> = {
    primary: "text-cyan-400 bg-white",
    secondary: "text-white bg-cyan-400",
  };

  return (
    <Link
      to="/"
      className={`brand flex items-center transition duration-200 ease-in text-3xl font-bold ${variantStyles[variant]}`}
    >
      Thunder
      <AiFillThunderbolt
        size="2rem"
        className={`transition duration-200 ease-in`}
      />
      Task
    </Link>
  );
};
