import { Link } from "react-router-dom";
import "./styles.css";

import { Brand } from "../../components/brand";
import { TextContent } from "../../components/text-content";
import { ContentHeading } from "../../components/content-heading";

import {
  PiInstagramLogoFill,
  PiYoutubeLogoFill,
  PiFacebookLogoFill,
} from "react-icons/pi";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-3 py-10 bg-secondary-white border-t-2 px-10 md:items-stretch">
      <div className="footer-wrapper w-[230px] gap-3 flex flex-col flex-wrap md:w-full  md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col items-start text-center gap-3">
          <Brand variant="primary" />
          <TextContent>
            Junte-se a milhões de pessoas que <br /> organizam trabalho e vida
            pessoal
            <br />
            com o ThunderTask.
          </TextContent>
        </div>

        <div className="flex flex-col gap-3">
          <ContentHeading>Ferramentas</ContentHeading>
          <div className="flex flex-col gap-3">
            <Link className="footer-link" to="#">Como funciona</Link>
            <Link className="footer-link" to="#">Para equipes</Link>
            <Link className="footer-link" to="#">Para empresas médias</Link>
            <Link className="footer-link" to="#">Para grandes empresas</Link>
            <Link className="footer-link" to="#">Preço</Link>
            <Link className="footer-link" to="#">Versões</Link>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <ContentHeading>Recursos</ContentHeading>
          <div className="flex flex-col gap-3">
            <Link className="footer-link" to="#">Baixe o App</Link>
            <Link className="footer-link" to="#">Central de Ajuda</Link>
            <Link className="footer-link" to="#">Integrações</Link>
            <Link className="footer-link" to="#">Parceiros de Marketing</Link>
            <Link className="footer-link" to="#">Para Desenvolvedores</Link>
            <Link className="footer-link" to="#">Status</Link>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 items-center md:flex-row md:justify-between ">
        <div className="flex gap-1 px-1">
          <Link className="footer-link" to="#">Segurança</Link>|<Link className="footer-link" to="#">Privacidade</Link>|
          <Link className="footer-link" to="#">Termos</Link>
        </div>
        <div className="flex gap-4">
          <Link to="#" title="Instagram" className="bg-primary-cyan p-1 rounded-full">
            <PiInstagramLogoFill size="1.5rem" color="white"  />
          </Link>
          <Link to="#" title="Facebook" className="bg-primary-cyan p-1 rounded-full">
            <PiFacebookLogoFill size="1.5rem" color="white"  />
          </Link>
          <Link to="#" title="Youtube" className="bg-primary-cyan p-1 rounded-full">
            <PiYoutubeLogoFill size="1.5em" color="white"  />
          </Link>
        </div>
      </div>
    </footer>
  );
};
