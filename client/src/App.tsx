import "./App.css";
import { useScrollTo } from "./hooks/useScrollTo";

import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

import { LinkButton } from "./components/link-button";
import { ServiceCard } from "./components/service-card";
import { PlanCard } from "./components/plan-card";

import { SERVICES_ITEMS } from "./constants/servicesConstants";
import { PLANS_ITEMS } from "./constants/plansConstants";

function App() {
  const { heroRef, servicesRef, plansRef, handleScroll } = useScrollTo();

  return (
    <>
      <Header handleScroll={handleScroll} />
      <main className="bg-secondary-white mt-28 p-10 lg:mt-0">
        <section
          id="hero"
          ref={heroRef}
          className="hero-section md:min-h-screen grid items-center gap-3 lg:grid-cols-[1.5fr_2fr]"
        >
          <div className="flex flex-col gap-3">
            <h1>
              Gerenciamento facilitado com{" "}
              <span className="text-primary-cyan underline">ThunderTask</span>
            </h1>
            <h2>
              Pessoas e Empresas potencializam sua produtividade e eficiência
              com nosso software de gerenciamento de tarefas, desde as mais
              simples até as mais complexas.
            </h2>
            <LinkButton route="/sign-up">Começar agora</LinkButton>
          </div>
          <div className="max-w-[1200px] max-h-[500px] lg:max-h-[700px]">
            <img
              src="/workers.jpg"
              className="rounded-3xl lg:rounded-s-none lg:rounded-e-3xl w-full h-full object-cover"
            />
          </div>
        </section>
        <div className="w-full h-1 bg-primary-cyan my-5"></div>
        <section
          id="services"
          ref={servicesRef}
          className="services-section min-h-screen flex flex-col justify-center gap-10"
        >
          <h3>Serviços que entregamos</h3>
          <p>Nossos serviços e integrações</p>
          <div className="flex flex-wrap gap-10 justify-center">
            {SERVICES_ITEMS.map(({ id, name, icon, subtitle, description }) => (
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
        <div className="w-full h-1 bg-primary-cyan my-5"></div>
        <section
          id="plans"
          ref={plansRef}
          className="plans-section min-h-screen flex flex-col justify-center gap-10"
        >
          <h3>Nossos planos</h3>
          <p>Analise os benefícios</p>
          <div className="flex flex-wrap gap-10 justify-center">
            {PLANS_ITEMS.map(({ id, name, description, features, price }) => (
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
