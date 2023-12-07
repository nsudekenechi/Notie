import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardPagesContainer } from "../components/DashboardPagesContainer";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div>
      <DashboardHeader />
      <main className="grid grid-cols-6 ">
        <DashboardSidebar />
        <section className="col-span-6 lg:col-span-5  relative">

          <DashboardPagesContainer>
            <Outlet />
          </DashboardPagesContainer>
        </section>
      </main>
    </div>
  );
};
