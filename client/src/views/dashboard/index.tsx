import { FormInput } from "../../components/form-input";
import WorkSpaceCard from "../../components/workspace-card";
import DynamicPanel from "../../components/dynamic-panel";
import DashboardAside from "../../layouts/dashboard-aside";
import DashboardHeader from "../../layouts/dashboard-header";

const Dashboard = () => {
  return (
    <div className="grid grid-cols-[280px_1fr]">
      <DashboardAside />
      <main className="min-h-screen ">
        <DashboardHeader />
        <div className="grid gap-5">
          <DynamicPanel />
          <div className="ds-content-container px-5 grid gap-3">
            <div className="ds-content-header flex items-center justify-between">
              <h3>Suas Áreas de trabalho</h3>
              <FormInput type="text" placeholder="Search workspace" />
            </div>
            <div
              className="grid lg:grid-cols-2 2xl:grid-cols-3 my-3 gap-3 max-h-[calc(70vh-45px)] overflow-y-scroll"
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
