import { Outlet } from "react-router-dom";

const Auth = () => {
  return (
    <main className="bg-white flex min-h-screen w-full justify-between font-inter">
      <Outlet />
      <div className="hidden xl:flex ">
        <img
          src="/banner.avif"
          alt="dashboard banner"
          className=" h-100 w-auto object-cover"
        />
      </div>
    </main>
  );
};

export default Auth;
