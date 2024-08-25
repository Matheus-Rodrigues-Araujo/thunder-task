import "./index.css";
import { Link } from "react-router-dom";
import { Footer } from "./layouts/footer";
import { Header } from "./layouts/header";

import { HeroHeading } from "./components/hero-heading";
import { SubHeading } from "./components/sub-heading";

function App() {
  return (
    <>
      <Header />
      <main className="mt-24 p-10">
        <section className="min-h-screen flex flex-col gap-3 lg:flex-row">
          <div className="flex flex-col gap-3">
            <HeroHeading>
              Gerenciamento facilitado com o ThunderTask
            </HeroHeading>
            <SubHeading>
              Pessoas e Empresas utilizam nosso Software de gerenciamento <br />{" "}
              para impulsionar sua produtividade e aumentar sua eficiência.
            </SubHeading>
            <div
              className="
            font-bold text-black text-xl 
            w-44 h-12 bg-cyan-400 rounded-3xl
            flex justify-center items-center 
            transition 200 ease-in cursor-pointer
            hover:bg-cyan-500 hover:text-white"
            >
              <Link to="/sign-up">Começar agora</Link>
            </div>
          </div>
          <div className="max-w-[1200px] max-h-[500px] lg:max-h-[700px]">
            <img
              src="/workers.jpg"
              className="rounded-3xl lg:rounded-s-none lg:rounded-e-3xl w-full h-full object-cover"
            />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
export default App;
