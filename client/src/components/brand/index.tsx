import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

type BrandProps = {
  variant: "primary" | "secondary";
};

export const Brand = ({ variant = "primary" }: BrandProps) => {
  const variantStyles: Record<BrandProps["variant"], string> = {
    primary: "text-primary-cyan bg-secondary-white",
    secondary: "text-secondary-white bg-primary-cyan",
  };

  return (
    <Link
      to="/"
      className={`brand flex items-center text-3xl font-bo/ld ${variantStyles[variant]}`}
    >
      Thunder
      <AiFillThunderbolt
        style={{ width: "2rem", height: "2rem" }}
        className={`transition duration-200 ease-in`}
      />
      Task
    </Link>
  );
};
