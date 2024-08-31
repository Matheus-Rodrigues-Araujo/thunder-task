import { Outlet } from "react-router-dom";


const Dashboard = () => {
  return (
    <div className="bg-blue-gradient h-screen relative mt-24">
      <main>
        <h1 className="text-black 4xl" >asdasd</h1>
        <Outlet/>
      </main>
    </div>
  );
};

export default Dashboard;
