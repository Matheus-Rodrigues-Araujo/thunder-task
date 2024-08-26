import { Outlet } from "react-router-dom";
import "./styles.css";
import { Brand } from "../../components/brand";
import { ContentText } from "../../components/content-text";

const Auth = () => {
  return (
    <main className="auth-layout bg-cyan-400 min-h-screen grid grid-cols-1 lg:grid-cols-[1fr_1.5fr]">
      <Outlet />
      <div className="auth-bg hidden lg:flex flex-col justify-center items-center">
        <div className="max-w-xl grid place-items-center">
          <Brand />
          <ContentText>Domine suas tarefas com o poder do trovão!</ContentText>
        </div>
      </div>
    </main>
  );
};

export default Auth;
