import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { useLocation } from "react-router-dom";
import { AddNew } from "./AddNew";
import { CreateNote } from "./CreateNote";
import { useNote } from "../hooks/notes";
import { useEffect } from "react";

export const Dashboard = () => {
  const location = useLocation();
  const { getData } = useNote();

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <DashboardHeader />
      <main className="grid grid-cols-6 h-[100vh]">
        <DashboardSidebar />
        <section className="col-span-5 bg-purple-100/90 md:py-10 ">
          {location.pathname == "/dashboard/createnote" ? (
            <CreateNote />
          ) : (
            <AddNew />
          )}
        </section>
      </main>
    </div>
  );
};
