import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet, useLocation } from "react-router-dom";
import { AddNew } from "./AddNew";
import { CreateNote } from "./CreateNote";
import { useNote } from "../hooks/notes";
import { useEffect } from "react";
import { ReadNote } from "../components/ReadNote";

export const Dashboard = () => {
  const location = useLocation();
  let path = location.pathname;
  const { getData } = useNote();
  // const displayPage = () => {
  //   let page;
  //   if (path.includes("createnote")) {
  //     page = <CreateNote />;
  //   } else if (path.includes("note")) {
  //     page = <ReadNote />;
  //   } else {
  //     page = <AddNew />;
  //   }

  //   return page;
  // };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <DashboardHeader />
      <main className="grid grid-cols-6 h-[100vh]">
        <DashboardSidebar />
        <section className="col-span-5 bg-purple-100/90 md:py-10 ">
          <Outlet />
        </section>
      </main>
    </div>
  );
};
