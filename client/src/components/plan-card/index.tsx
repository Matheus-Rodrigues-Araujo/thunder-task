import { LinkButton } from "../link-button";

import { FaCheck } from "react-icons/fa6";

import { Plan } from "../../constants/plansConstants";

export const PlanCard = ({ name, description, price, features }: Plan) => {
  return (
    <div
      className="
      plan-card card flex-col flex place-content-center gap-3"
    >
      <h4>{name}</h4>
      <span className="price text-primary-cyan text-4xl font-bold">
        {price}
      </span>
      <p>{description}</p>
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
