import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { useNote } from "../hooks/notes";
import { useEffect } from "react";
import DashboardPagesContainer from "../components/DashboardPagesContainer";
import { useLocation } from "react-router-dom"
export const Dashboard = () => {
  const { getData, loading } = useNote();
  const location = useLocation()
  useEffect(() => {
   if(location.pathname.split("/").length == 3) getData();
    
  }, [location.pathname]);


  return (
    <div>
      <DashboardHeader />
      <main className="grid grid-cols-6 ">
        <DashboardSidebar />
        <section className="col-span-5  relative">
          <DashboardPagesContainer loading={loading}>
            <Outlet />
          </DashboardPagesContainer>
        </section>
      </main>
    </div>
  );
};
