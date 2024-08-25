import { Link } from "react-router-dom";
import { Service } from "../../constants/services";
import { ContentSubHeading } from "../content-sub-heading";
import { ContentText } from "../content-text";

export const ServiceCard = ({ name, icon, subtitle, description }: Service) => {
  return (
    <div className="w-[350px] h-[380px] shadow-[-1px_-1px_13px_gray] rounded-t-lg transition 200 ease-in hover:scale-105">
      <div className="flex bg-cyan-400 justify-center items-center h-[60%] rounded-t-lg">
        {icon}
      </div>
      <div className="flex bg-white py-5 flex-col justify-around items-center">
        <ContentSubHeading>{name}</ContentSubHeading>
        <ContentText>{subtitle}</ContentText>
        <div
          className="
            font-bold text-black text-xl 
            w-44 h-12 bg-cyan-400 rounded-3xl
            flex justify-center items-center 
            transition 200 ease-in cursor-pointer
            hover:bg-cyan-500 hover:text-white"
        >
          <Link to="#">Ler mais</Link>
        </div>
      </div>
      <div className="hidden">{description}</div>
    </div>
  );
};
