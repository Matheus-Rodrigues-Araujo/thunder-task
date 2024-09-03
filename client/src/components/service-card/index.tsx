import { Service } from "../../constants/servicesConstants";
import { LinkButton } from "../link-button";

export const ServiceCard = (service: Service) => {
  return (
    <div className="service-card card">
      <div className="bg-primary-cyan center h-[60%] rounded-t-lg">
        <service.icon
          style={{ width: "6rem", height: "6rem" }}
          color="#ffffff"
        />
      </div>
      <div className="service-wrapper flex bg-secondary-white py-5 gap-2 flex-col justify-around items-center">
        <h4 className="text-primary-cyan text-center">{service.name}</h4>
        <p>{service.subtitle}</p>
        <LinkButton route="#">Saiba mais</LinkButton>
      </div>
      <div className="hidden">{service.description}</div>
    </div>
  );
};
