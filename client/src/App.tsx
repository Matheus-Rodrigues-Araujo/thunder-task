import { RefObject, useRef } from "react";
import "./App.css";

import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

// import { Heading } from "./components/heading";
import { Heading } from "./components/heading";
import { SubHeading } from "./components/sub-heading";
import { ContentHeading } from "./components/content-heading";
import { LinkButton } from "./components/link-button";
import { ServiceCard } from "./components/service-card";
import { TextContent } from "./components/text-content";
import { PlanCard } from "./components/plan-card";

import { services } from "./constants/services";
import { plans } from "./constants/plans";

function App() {
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const plansRef = useRef(null);

  const scrollToRef = (ref: RefObject<Element>) => {
    ref.current && ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Header
        scrollToRef={scrollToRef}
        heroRef={heroRef}
        servicesRef={servicesRef}
        plansRef={plansRef}
      />
      <main className="mt-28 p-10 lg:mt-0">
        <section
          ref={heroRef}
          className="hero-section md:min-h-screen grid items-center gap-3 lg:grid-cols-[1.5fr_2fr]"
        >
          <div className="flex flex-col gap-3">
            <Heading>
              Gerenciamento facilitado com <span className="text-cyan-400 underline">ThunderTask</span>
            </Heading>
            <SubHeading>
              Pessoas e Empresas potencializam sua produtividade e eficiência
              com nosso software de gerenciamento de tarefas, desde as mais
              simples até as mais complexas.
            </SubHeading>
            <LinkButton route="/sign-up">Começar agora</LinkButton>
          </div>
          <div className="max-w-[1200px] max-h-[500px] lg:max-h-[700px]">
            <img
              src="/workers.jpg"
              className="rounded-3xl lg:rounded-s-none lg:rounded-e-3xl w-full h-full object-cover"
            />
          </div>
        </section>
        <div className="w-full h-1 bg-cyan-400 my-5"></div>
        <section
          ref={servicesRef}
          className="services-section min-h-screen flex flex-col justify-center gap-10"
        >
          <ContentHeading>Serviços que entregamos</ContentHeading>
          <TextContent>Nossos serviços e integrações</TextContent>
          <div className="flex flex-wrap gap-10 justify-center">
            {services.map(({ id, name, icon, subtitle, description }) => (
              <ServiceCard
                key={id}
                name={name}
                icon={icon}
                subtitle={subtitle}
                description={description}
              />
            ))}
          </div>
        </section>
        <div className="w-full h-1 bg-cyan-400 my-5"></div>
        <section
          ref={plansRef}
          className="plans-section min-h-screen flex flex-col justify-center gap-10"
        >
          <ContentHeading>Nossos planos</ContentHeading>
          <TextContent>Analise os benefícios</TextContent>
          <div className="flex flex-wrap gap-10 justify-center">
            {plans.map(({ id, name, description, features, price }) => (
              <PlanCard
                key={id}
                name={name}
                description={description}
                features={features}
                price={price}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
