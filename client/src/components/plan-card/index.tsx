import "./styles.css";
import { FaCheck } from "react-icons/fa6";

import { Plan } from "../../constants/plans";
import { ContentSubHeading } from "../content-sub-heading";
import { TextContent } from "../text-content";
import { LinkButton } from "../link-button";

export const PlanCard = ({ name, description, price, features }: Plan) => {
  return (
    <div
      className={`
      plan-card flex flex-col place-content-center
      gap-3 w-[350px] h-[420px] p-5 bg-white
      shadow-[-1px_-1px_13px_gray] rounded-t-lg 
      transition 200 ease-in hover:scale-105
      `}
    >
      <ContentSubHeading>{name}</ContentSubHeading>
      <span className="price text-cyan-400 text-4xl font-bold">{price}</span>
      <TextContent>{description}</TextContent>
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
      <LinkButton route="#">Assinar plano</LinkButton>
    </div>
  );
};
