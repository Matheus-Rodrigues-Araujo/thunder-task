import { AiFillThunderbolt } from "react-icons/ai";
import { Link } from "react-router-dom";

export const Brand = () => {
  return (
    <Link
      to="/"
      title="Logo"
      className="brand text-cyan-500 flex items-center transition duration-200 ease-in text-3xl font-bold"
    >
      Thunder
      <AiFillThunderbolt
        size="2rem"
        color="#06b6d4"
        className="transition duration-200 ease-in"
      />
      Task
    </Link>
  );
};
