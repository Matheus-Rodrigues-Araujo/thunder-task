import { Link } from "react-router-dom";

import { Brand } from "../../components/brand";

import {
  TOOL_LINKS,
  RESOURCE_LINKS,
  LEGAL_LINKS,
  SOCIAL_LINKS,
} from "../../constants/footerConstants";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col items-center gap-3 py-10 bg-secondary-white border-t-2 px-10 md:items-stretch">
      <div className="footer-wrapper w-[230px] gap-3 flex flex-col flex-wrap md:w-full  md:flex-row md:justify-between md:items-start">
        <div className="flex flex-col items-start text-center gap-3">
          <Brand variant="primary" />
          <p className="text-left">
            Junte-se a milhões de pessoas que <br /> organizam trabalho e vida
            pessoal
            <br />
            com o ThunderTask.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <h3>Ferramentas</h3>
          <div className="flex flex-col gap-3">
            {TOOL_LINKS.map(({ label, to }) => (
              <Link key={label} to={to} className="footer-link">
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start gap-3">
          <h3>Recursos</h3>
          <div className="flex flex-col gap-3">
            {RESOURCE_LINKS.map(({ label, to }) => (
              <Link key={label} to={to} className="footer-link">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3 items-center md:flex-row md:justify-between ">
        <div className="flex gap-1 px-1">
          {LEGAL_LINKS.map((link) => (
            <Link key={link.label} to={link.to} className="footer-link">
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex gap-4">
          {SOCIAL_LINKS.map(({ title, to, icon }) => (
            <Link
              key={title}
              to={to}
              title={title}
              className="w-9 h-9 center rounded-3xl bg-primary-cyan hover:bg-primary-cerulean"
            >
              {icon}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
