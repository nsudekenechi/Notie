import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
import { FaStickyNote } from "react-icons/fa";
import { TiThMenuOutline, TiPin } from "react-icons/ti";
import { RiLogoutCircleRLine, RiDeleteBin2Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { VscArchive, VscHeartFilled } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";
import { DashboardNavLink } from "../components/DashboardNavLink";
import { Note } from "../components/Note";
export const Dashboard = () => {
  const { focus, onBlur, onFocus } = useInput();
  return (
    <div className=" ">
      <header className="h-[10vh] grid grid-cols-6 content-center py-5 bg-white px-10 ">
        <div className="col-span-1 flex">
          <Logo />
        </div>
        <div className="col-span-5 grid grid-cols-6 ">
          <motion.div
            className="   p-3 col-span-4  flex items-center gap-x-2 text-black/20"
            initial={{ outline: "0px", borderRadius: "0px" }}
            animate={{
              outline: focus ? "0px" : "1px solid rgba(0,0,0,.2)",
              borderRadius: focus ? "0px" : "50px",
            }}
            transition={{ duration: 2 }}
          >
            <CiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 w-[100%] placeholder:text-inherit"
              onFocus={onFocus}
              onBlur={onBlur}
            />
          </motion.div>
          <div className="col-span-2 flex justify-end items-center gap-x-6">
            <div className="text-purple-400 w-8 h-8 bg-purple-100/80 flex items-center justify-center rounded-full">
              <TiThMenuOutline />
            </div>
            <div className="text-purple-400 w-8 h-8 text-sm bg-purple-100/80 flex items-center justify-center rounded-full">
              KN
            </div>
            <p className="text-black/20">Kenechi N.</p>
          </div>
        </div>
      </header>
      <main className="grid grid-cols-6 h-[90vh]">
        <nav className="col-span-1 bg-white text-sm hidden md:flex flex-col gap-y-2">
          <DashboardNavLink icon={<FaStickyNote />} name={"add new"} to={""} />

          <p className="px-10 mt-5 capitalize text-sm italic text-black/30">
            Library
          </p>
          <DashboardNavLink
            icon={<VscArchive />}
            name={"archived"}
            to={"/archived"}
          />
          <DashboardNavLink
            icon={<VscHeartFilled />}
            name={"Favorites"}
            to={"/favorites"}
          />
          <p className="px-10 mt-5 capitalize text-sm italic text-black/30">
            General
          </p>
          <DashboardNavLink
            icon={<IoIosSettings />}
            name={"settings"}
            to={"/settings"}
          />
          <DashboardNavLink
            icon={<RiLogoutCircleRLine />}
            name={"logout"}
            to={"/logout"}
          />
          <p className="px-10 mt-5 capitalize text-sm italic text-black/30">
            Trash
          </p>
          <DashboardNavLink
            icon={<RiDeleteBin2Fill />}
            name={"recycle bin"}
            to={"/recycle"}
          />
        </nav>

        <section className="col-span-5 bg-purple-100/80 md:py-10 ">
          <div className="flex items-center gap-x-1 my-5 md:px-10">
            <p className="text-black/40 font-bold">Pinned</p>
            <TiPin className="text-purple-600 relative -top-1" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10">
            <Note
              title={"Job Interview "}
              subtitle={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto, ut assumenda suscipit exercitationem consectetur labore autem cupiditate ad beatae vitae omnis inventore ratione accusamus, similique iste odio doloribus! Recusandae?"
              }
              date={"09-Jan-2023"}
              color={["bg-red-500/20", "bg-red-500"]}
            />

            <Note
              title={"Job Interview "}
              subtitle={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto, ut assumenda suscipit exercitationem consectetur labore autem cupiditate ad beatae vitae omnis inventore ratione accusamus, similique iste odio doloribus! Recusandae?"
              }
              date={"09-Jan-2023"}
              color={["bg-green-500/20", "bg-green-500"]}
            />

            <Note
              title={"Job Interview "}
              subtitle={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto, ut assumenda suscipit exercitationem consectetur labore autem cupiditate ad beatae vitae omnis inventore ratione accusamus, similique iste odio doloribus! Recusandae?"
              }
              date={"09-Jan-2023"}
              color={["bg-yellow-500/20", "bg-yellow-500"]}
            />

            <Note
              title={"Job Interview "}
              subtitle={
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis architecto, ut assumenda suscipit exercitationem consectetur labore autem cupiditate ad beatae vitae omnis inventore ratione accusamus, similique iste odio doloribus! Recusandae?"
              }
              date={"09-Jan-2023"}
              color={["bg-pink-500/20", "bg-pink-500"]}
            />
          </div>
        </section>
      </main>
    </div>
  );
};
