import { Link } from "react-router-dom";
import "./styles.css";

import { Brand } from "../../components/brand";
import { ContentText } from "../../components/content-text";
import { ContentHeading } from "../../components/content-heading";

import {
  PiInstagramLogoFill,
  PiYoutubeLogoFill,
  PiFacebookLogoFill,
} from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-3 py-10 bg-white border-t-2 px-10 md:items-stretch">
      <div className="footer-wrapper w-[230px] gap-3 flex flex-col flex-wrap md:w-full  md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col items-start text-center gap-3">
          <Brand variant="primary" />
          <ContentText>
            Junte-se a milhões de pessoas que <br /> organizam trabalho e vida
            pessoal
            <br />
            com o ThunderTask.
          </ContentText>
        </div>

        <div className="flex flex-col gap-3">
          <ContentHeading>Ferramentas</ContentHeading>
          <div className="flex flex-col gap-3">
            <Link to="#">Como funciona</Link>
            <Link to="#">Para equipes</Link>
            <Link to="#">Para empresas médias</Link>
            <Link to="#">Para grandes empresas</Link>
            <Link to="#">Preço</Link>
            <Link to="#">Versões</Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <ContentHeading>Recursos</ContentHeading>
          <div className="flex flex-col gap-3">
            <Link to="#">Baixe o App</Link>
            <Link to="#">Central de Ajuda</Link>
            <Link to="#">Integrações</Link>
            <Link to="#">Parceiros de Marketing</Link>
            <Link to="#">Para Desenvolvedores</Link>
            <Link to="#">Status</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 items-center md:flex-row md:justify-between ">
        <div className="flex gap-1 px-1">
          <Link to="#">Segurança</Link>|<Link to="#">Privacidade</Link>|
          <Link to="#">Termos</Link>
        </div>
        <div className="flex gap-4">
          <Link to="#" title="Instagram" className="bg-cyan-400 p-1 rounded-full">
            <PiInstagramLogoFill size="1.8rem" color="white"  />
          </Link>
          <Link to="#" title="Facebook" className="bg-cyan-400 p-1 rounded-full">
            <PiFacebookLogoFill size="1.8rem" color="white"  />
          </Link>
          <Link to="#" title="Youtube" className="bg-cyan-400 p-1 rounded-full">
            <PiYoutubeLogoFill size="1.8rem" color="white"  />
          </Link>
        </div>
      </div>
    </footer>
  );
};
