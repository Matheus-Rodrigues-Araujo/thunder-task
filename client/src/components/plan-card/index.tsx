import { FaCheck } from "react-icons/fa6";

import { Plan } from "../../constants/plans";
import { ContentSubHeading } from "../content-sub-heading";
import { TextContent } from "../text-content";
import { LinkButton } from "../link-button";

export const PlanCard = ({ name, description, price, features }: Plan) => {
  return (
    <div
      className="
      plan-card card flex-col flex place-content-center gap-3"
    >
      <ContentSubHeading>{name}</ContentSubHeading>
      <span className="price text-primary-cyan text-4xl font-bold">
        {price}
      </span>
      <TextContent>{description}</TextContent>
      <ul>
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-center text-sm gap-3 text-secondary-mediumGray"
          >
            <FaCheck size="1rem" color="#22d3ee" />
            {feature}
          </li>
        ))}
      </ul>
      <div className="center">
        <LinkButton route="#">Assinar plano</LinkButton>
      </div>
    </div>
  );
};
