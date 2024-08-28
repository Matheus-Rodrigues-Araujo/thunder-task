import { CSSProperties } from "react";
import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

type BrandProps = {
  variant: "primary" | "secondary";
};

export const Brand = ({ variant = "primary" }: BrandProps) => {
  const variantStyles: Record<BrandProps["variant"], CSSProperties> = {
    primary: {
      color: "#22d3ee",
      backgroundColor: "white",
    },
    secondary: {
      color: "white",
      backgroundColor: "#22d3ee",
    },
  };

  return (
    <Link
      to="/"
      className="brand flex text-cyan-400 items-center transition duration-200 ease-in text-3xl font-bold"
      style={{
        ...variantStyles[variant],
      }}
    >
      Thunder
      <AiFillThunderbolt
        size="2rem"
        color="#22d3ee"
        className="transition duration-200 ease-in"
      />
      Task
    </Link>
  );
};
