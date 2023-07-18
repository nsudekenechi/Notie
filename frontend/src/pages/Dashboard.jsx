import { DashboardHeader } from "../components/DashboardHeader";
import { DashboardSidebar } from "../components/DashboardSidebar";
import { Outlet } from "react-router-dom";
import { useNote } from "../hooks/notes";
import { useEffect } from "react";
import { notesContext } from "../hooks/context";
import { useContext } from "react";
import { useParams } from "react-router-dom";
export const Dashboard = () => {
  const { getData } = useNote();
  useEffect(() => {
    getData();
  }, []);
  const params = useParams();
  const note = useContext(notesContext).notes.find(
    (item) => item._id == params.id
  );

  return (
    <div>
      <DashboardHeader />
      <main className="grid grid-cols-6 ">
        <DashboardSidebar />
        <section className="col-span-5 md:py-10 min-h-screen relative">
          <div
            className="absolute h-[100%] w-[100%]  top-0 left-0 -z-10"
            style={{
              background: !note ? "rgb(243 232 255 / 0.9)" : note.color,
              opacity: !note ? 1 : 0.06,
            }}
          ></div>
          <Outlet />
        </section>
      </main>
    </div>
  );
};
