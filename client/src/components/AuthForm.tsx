import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// import { useState } from "react";
import { authFormSchema } from "./utils/auth-form-schema";

const AuthForm = ({ type }: { type: string }) => {
  const formSchema = authFormSchema(type);
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = false
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(formSchema) });
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <section className="text-white flex min-h-screen  w-full justify-center items-center">
      <div className="p-5 md:p-2 flex flex-col gap-2 w-full max-w-md">
        <header className="flex flex-col">
          <h1 className="font-bold text-2xl"><Link to="/" >M★viesMax</Link></h1>
          <h2 className="font-bold text-2xl mt-5 text-white">
            {type === "sign-in" ? "Sign in" : "Sign up"}
          </h2>
          <p>Please enter your credentials</p>
        </header>
        <form onSubmit={onSubmit} className="mt-2 flex flex-col gap-2 w-full ">
          {type === "sign-up" && (
            <>
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <div className="flex flex-col">
                  <label htmlFor="firstName">First Name</label>
                  <input
                    type="text"
                    {...register("firstName")}
                    placeholder="ex: John"
                    className="rounded-md p-2"
                  />
                  <p className="text-md text-red-500">
                    {(errors.firstName?.message as string) || ""}
                  </p>
                </div>

                <div className="flex justify-between flex-col">
                  <label htmlFor="lastName">Last Name</label>
                  <input
                    type="text"
                    {...register("lastName")}
                    placeholder="ex: Doe"
                    className="rounded-md p-2"
                  />
                  <p className="text-md text-red-500">
                    {(errors.lastName?.message as string) || ""}
                  </p>
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="address1">Address</label>
                <input
                  {...register("address")}
                  placeholder="Enter your address"
                  className="rounded-md p-2"
                />
                <p className="text-md text-red-500">
                  {(errors.address?.message as string) || ""}
                </p>
              </div>
              <div className="flex flex-col">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  {...register("city")}
                  placeholder="ex: São Paulo"
                  className="rounded-md p-2"
                />
                <p className="text-md text-red-500">
                  {(errors.city?.message as string) || ""}
                </p>
              </div>
              <div className="flex flex-col md:flex-row justify-between gap-2">
                <div className="flex flex-col">
                  <label htmlFor="state">State</label>
                  <input
                    type="text"
                    {...register("state")}
                    placeholder="ex: SP"
                    className="rounded-md p-2"
                  />
                  <p className="text-md text-red-500">
                    {(errors.state?.message as string) || ""}
                  </p>
                </div>

                <div className="flex flex-col">
                  <label htmlFor="postalCode">Postal Code</label>
                  <input
                    type="text"
                    {...register("postalCode")}
                    placeholder="ex: 1234"
                    className="rounded-md p-2"
                  />
                  <p className="text-md text-red-500">
                    {(errors.postalCode?.message as string) || ""}
                  </p>
                </div>
              </div>
            </>
          )}
          <div className="flex flex-col">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              {...register("email")}
              placeholder="ex: johndoe@email.com"
              className="rounded-md p-2"
            />
            <p className="text-md text-red-500">
              {(errors.email?.message as string) || ""}
            </p>
          </div>
          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              {...register("password")}
              placeholder="Enter your password"
              className="rounded-md p-2"
            />
            <p className="text-md text-red-500">
              {(errors.password?.message as string) || ""}
            </p>
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="rounded-md font-bold p-2 bg-blue-600 hover:bg-blue-500"
          >
            {isLoading
              ? "Loading..."
              : type === "sign-in"
              ? "Sign In"
              : "Sign Up"}
          </button>
        </form>
        <div className="flex items-center gap-2">
          <div className="h-[0.5px] w-full bg-white"></div>
          <span>or</span>
          <div className="h-[0.5px] w-full bg-white"></div>
        </div>
        <footer className="text-center">
          {type === "sign-in" ? (
            <p className="text-md" >
              Don't have an account?
              <Link to="/auth/sign-up" className="text-blue-400">
                {" "}
                Create account
              </Link>
            </p>
          ) : (
            <p className="text-md" >
              Already have an account?
              <Link to="/auth/sign-in" className="text-blue-400">
                {" "}
                Sign in
              </Link>
            </p>
          )}
        </footer>
      </div>
    </section>
  );
};

export default AuthForm;
