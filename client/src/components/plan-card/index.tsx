import { Link } from "react-router-dom";
import { FaCheck } from "react-icons/fa6";

import { Plan } from "../../constants/plans";
import { ContentSubHeading } from "../content-sub-heading";
import { ContentText } from "../content-text";

export const PlanCard = ({ name, description, price, features }: Plan) => {
  return (
    <div
      className={`
      price-card flex flex-col place-content-center
      gap-3 w-[350px] h-[420px] p-5 bg-white
      shadow-[-1px_-1px_13px_gray] rounded-t-lg 
      transition 200 ease-in hover:scale-105
      `}
    >
      <ContentSubHeading>{name}</ContentSubHeading>
      <span className="price text-cyan-400 text-4xl font-bold">{price}</span>
      <ContentText>{description}</ContentText>
      <ul>
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center text-sm gap-3 text-gray-600"
          >
            <FaCheck size="1rem" color="#22d3ee" />
            {feature}
          </li>
        ))}
      </ul>
      <div
        className="
            font-bold text-white text-xl 
            w-full h-12 bg-cyan-400 rounded-3xl
            flex justify-center items-center
            transition 200 ease-in cursor-pointer
            hover:bg-cyan-500 hover:text-white"
      >
        <Link to="#">Assinar plano</Link>
      </div>
    </div>
  );
};
