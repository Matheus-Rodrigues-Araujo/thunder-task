import { Outlet } from "react-router-dom";
import { Brand } from "../../components/brand";

import "./styles.css";

const Auth = () => {
  return (
    <main className="auth-layout bg-primary-cyan min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
      <Outlet />
      <div className="auth-bg hidden lg:center flex-col">
        <div className="max-w-xl grid place-items-center">
          <Brand variant="secondary" />
          <p className="bg-secondary-white text-primary-cyan font-bold py-1 px-4">
            Domine suas tarefas com o poder do trovão!
          </p>
        </div>
      </div>
    </main>
  );
};

export default Auth;
