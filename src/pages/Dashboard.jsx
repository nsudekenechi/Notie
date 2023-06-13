import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
import { FaStickyNote, FaFolder } from "react-icons/fa";
import { TiThMenuOutline } from "react-icons/ti";
import { RiLogoutCircleRLine, RiDeleteBin2Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { VscArchive, VscHeartFilled } from "react-icons/vsc";
import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";
import { DashboardNavLink } from "../components/DashboardNavLink";
export const Dashboard = () => {
  const { focus, onBlur, onFocus } = useInput();
  return (
    <div className="bg-purple-100/80 ">
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
        <nav className="col-span-1 bg-white text-sm flex flex-col gap-y-2">
          <DashboardNavLink
            icon={<FaStickyNote />}
            name={"all notes"}
            to={""}
          />
          <DashboardNavLink
            icon={<FaFolder />}
            name={"all folders"}
            to={"/folder"}
          />

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
      </main>
    </div>
  );
};
