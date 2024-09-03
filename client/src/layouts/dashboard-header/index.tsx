import ToggleIcon from "../../components/toggle-icon";
import { useSidebar } from "../../hooks/useSidebar";
import { Sidebar } from "../../layouts/sidebar";
import { DASHBOARD_LINKS } from "../../constants/dashbardHeaderConstants";

const DashboardHeader = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();

  const handleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      <header className="h-20 flex border-b items-center w-full justify-between px-5">
        <ToggleIcon handleSidebar={handleSidebar} />
        <h1>Painel</h1>
        <div className="flex items-center justify-center">
          <div className="flex items-center gap-3">
            <div
              className="profile-img h-8 w-8 rounded-full bg-primary-cyan bg-cover bg-center"
              style={{ backgroundImage: "url('/user.png')" }}
            />
            <div className="user-info flex flex-col">
              <p className="font-bold text-base">André</p>
              <p className="font-light text-sm">andre@gmail.com</p>
            </div>
          </div>
        </div>
      </header>
      <Sidebar
        type="dashboard"
        isSidebarOpen={isSidebarOpen}
        items={DASHBOARD_LINKS}
      />
    </>
  );
};

export default DashboardHeader;
