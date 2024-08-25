import { Outlet } from "react-router-dom";


const Explore = () => {
  return (
    <div className="bg-blue-gradient h-screen relative">
      <main>
        <Outlet/>
      </main>
    </div>
  );
};

export default Explore;
