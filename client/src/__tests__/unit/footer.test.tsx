import { render } from "@testing-library/react";
import { Footer } from "../../layouts/footer";
import { MemoryRouter } from "react-router-dom";
import { expectText, expectTitle } from "../../utils/testingUtils";

const FooterComponent = () => (
  <MemoryRouter>
    <Footer />
  </MemoryRouter>
);

describe("Foote Component", () => {
  beforeEach(() => render(<FooterComponent />));

  it("should render the text content of Footer Component", () => {
    expectText(
      /Junte-se a milhões de pessoas que\s*organizam trabalho e vida\s*pessoal\s*com o ThunderTask/i
    );
  });

  it("should render the heading text and all links in 'Tools' section", () => {
    const toolsLinks = [
      "Como funciona",
      "Para equipes",
      "Para empresas médias",
      "Para grandes empresas",
      "Preço",
      "Versões",
    ];

    expectText("Ferramentas");
    toolsLinks.forEach((link: string) => expectText(link));
  });

  it("should render the heading text all links in 'Resources' section", () => {
    const resourcesLinks = [
      "Baixe o App",
      "Central de Ajuda",
      "Integrações",
      "Parceiros de Marketing",
      "Para Desenvolvedores",
      "Status",
    ];

    expectText("Recursos");
    resourcesLinks.forEach((link: string) => expectText(link));
  });

  it("should render security, privicy and terms link", () => {
    const footerLinks = ["Segurança", "Privacidade", "Termos"];

    footerLinks.forEach((link: string) => expectText(link));
  });

  it("should render social media icons links", () => {
    const socialMediaTitles = ["Instagram", "Facebook", "Youtube"];

    socialMediaTitles.forEach((title: string) => {
      expectTitle(title);
    });
  });
});
