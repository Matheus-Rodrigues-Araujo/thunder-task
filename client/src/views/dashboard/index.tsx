import { FormInput } from "../../components/form-input";
import WorkSpaceCard from "../../components/workspace-card";
import DynamicPanel from "../../components/dynamic-panel";
import DashboardSidebar from "../../layouts/dashboard-sidebar";
import DashboardHeader from "../../layouts/dashboard-header";
import { useSidebar } from "../../hooks/useSidebar";

const Dashboard = () => {
  const { isSidebarOpen, handleSidebar } = useSidebar()

  return (
    <div className="grid lg:grid-cols-[auto_1fr]">
      <DashboardSidebar isSidebarOpen={isSidebarOpen} />
      <main className="min-h-screen relative">
        <DashboardHeader handleSidebar={handleSidebar} />
        <div className="grid gap-5">
          <DynamicPanel />
          <div className="ds-content-container px-5 grid gap-3">
            <div className="ds-panel-content">
              <h3 className="text-3xl">Suas Áreas de trabalho</h3>
              <div className="w-full md:max-w-sm" >
                <FormInput type="text" placeholder="Search workspace" />
              </div>
            </div>
            <div
              className="grid lg:grid-cols-2 2xl:grid-cols-3 my-3 gap-3 max-h-[calc(70vh-100px)] overflow-y-scroll"
              style={{ scrollbarWidth: "none" }}
            >
              <WorkSpaceCard
                name="ThunderTask"
                totalProjects={4}
                createdAt="01/08/2023"
              />
              <WorkSpaceCard
                name="Homework"
                totalProjects={2}
                createdAt="01/08/2023"
              />
              <WorkSpaceCard
                name="AI 2.0"
                totalProjects={10}
                createdAt="01/08/2023"
              />
              <WorkSpaceCard
                name="DeliveryIO"
                totalProjects={7}
                createdAt="01/08/2023"
              />
              
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
