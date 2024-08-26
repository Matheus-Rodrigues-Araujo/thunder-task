import "./styles.css";

import { Service } from "../../constants/services";
import { ContentSubHeading } from "../content-sub-heading";
import { ContentText } from "../content-text";
import { LinkButton } from "../link-button";

export const ServiceCard = ({ name, icon, subtitle, description }: Service) => {
  return (
    <div
      className="
    service-card w-[350px] h-[480px] shadow-[-1px_-1px_13px_gray]
    rounded-t-lg transition 200 ease-in hover:scale-105"
    >
      <div className="flex bg-cyan-400 justify-center items-center h-[60%] rounded-t-lg">
        {icon}
      </div>
      <div className="service-wrapper flex bg-white py-5 gap-2 flex-col justify-around items-center">
        <ContentSubHeading>{name}</ContentSubHeading>
        <ContentText>{subtitle}</ContentText>
        <LinkButton route="#">Saiba mais</LinkButton>
      </div>
      <div className="hidden">{description}</div>
    </div>
  );
};
