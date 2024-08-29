import { Link } from "react-router-dom";
import "./styles.css";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { authFormSchema } from "../utils/auth-form-schema";

import { SubHeading } from "../sub-heading";
import { ContentText } from "../content-text";
import { HeroHeading } from "../hero-heading";
import { Brand } from "../brand";
import { FormInput } from "../form-input";
import { SubmitButton } from "../submit-button";

export const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);
  const isLoading = false;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="bg-white auth-section flex min-h-screen w-full justify-center items-center">
      <div className="m-5 auth-body grid w-full max-w-md">
        <header className="auth-header flex flex-col">
          <HeroHeading>
            <Brand variant="primary" />
          </HeroHeading>
          <SubHeading>{type === "sign-in" ? "Sign in" : "Sign up"}</SubHeading>
        </header>
        <form onSubmit={onSubmit} className="auth-form mt-2 grid gap-3">
          {type === "sign-up" && (
            <>
              <div className="flex flex-col md:flex-row gap-3">
                <FormInput
                  label="Nome"
                  type="text"
                  register={register("firstName")}
                  placeholder="ex: John"
                  error={errors.firstName}
                />
                <FormInput
                  label="Sobrenome"
                  type="text"
                  register={register("lastName")}
                  placeholder="ex: Doe"
                  error={errors.lastName}
                />
              </div>
              <FormInput
                type="text"
                label="Address"
                register={register("address")}
                placeholder="Enter your address"
                error={errors.address}
              />
              <div className="flex flex-col md:flex-row gap-3">
                <FormInput
                  label="Cidade"
                  type="text"
                  register={register("city")}
                  placeholder="ex: São Paulo"
                  error={errors.city}
                />
                <FormInput
                  label="Estado"
                  type="text"
                  register={register("state")}
                  placeholder="ex: SP"
                  error={errors.state}
                />
              </div>
            </>
          )}
          <FormInput
            label="Email"
            type="email"
            register={register("email")}
            placeholder="ex: johndoe@email.com"
            error={errors.email}
          />
          <FormInput
            label="Senha"
            type="password"
            register={register("password")}
            placeholder="Enter your password"
            error={errors.password}
          />
          <SubmitButton isLoading={isLoading}>
            {isLoading
              ? "Loading..."
              : type === "sign-in"
              ? "Login"
              : "Cadastrar"}
          </SubmitButton>
        </form>
        <div className="flex items-center w-full gap-3">
          <div className="h-1 w-full bg-cyan-400" />
          <span>or</span>
          <div className="h-1 w-full bg-cyan-400" />
        </div>
        <footer className="auth-footer flex justify-center text-center">
          {type === "sign-in" ? (
            <ContentText>
              Ainda não tem conta?
              <Link to="/sign-up" className="text-cyan-400 font-bold">
                {" "}
                Registrar
              </Link>
            </ContentText>
          ) : (
            <ContentText>
              {" "}
              Já possui uma conta?
              <Link to="/sign-in" className="text-cyan-400 font-bold">
                {" "}
                Entrar
              </Link>
            </ContentText>
          )}
        </footer>
      </div>
    </section>
  );
};
