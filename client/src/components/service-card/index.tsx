import "./styles.css";

import { Service } from "../../constants/services";
import { ContentSubHeading } from "../content-sub-heading";
import { TextContent } from "../text-content";
import { LinkButton } from "../link-button";

export const ServiceCard = ({ name, icon, subtitle, description }: Service) => {
  return (
    <div
      className="service-card card"
    >
      <div className="bg-primary-cyan center h-[60%] rounded-t-lg">
        {icon}
      </div>
      <div className="service-wrapper flex bg-secondary-white py-5 gap-2 flex-col justify-around items-center">
        <ContentSubHeading>{name}</ContentSubHeading>
        <TextContent>{subtitle}</TextContent>
        <LinkButton route="#">Saiba mais</LinkButton>
      </div>
      <div className="hidden">{description}</div>
    </div>
  );
};
