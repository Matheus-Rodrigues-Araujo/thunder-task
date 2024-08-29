import { RefObject, useRef } from "react";
import "./app.css";

import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

import { HeroHeading } from "./components/hero-heading";
import { SubHeading } from "./components/sub-heading";
import { ContentHeading } from "./components/content-heading";
import { LinkButton } from "./components/link-button";
import { ServiceCard } from "./components/service-card";
import { ContentText } from "./components/content-text";
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
          className="md:min-h-screen flex flex-col items-center gap-3 lg:flex-row"
        >
          <div className="flex flex-col gap-3">
            <HeroHeading>
              Gerenciamento facilitado com o{" "}
              <span className="text-cyan-400 underline">ThunderTask</span>
            </HeroHeading>
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
          <ContentText>Nossos serviços e integrações</ContentText>
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
          <ContentText>Analise os benefícios</ContentText>
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
