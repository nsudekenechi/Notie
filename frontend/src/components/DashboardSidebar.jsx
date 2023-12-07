import { FaStickyNote } from "react-icons/fa";
import { RiLogoutCircleRLine, RiDeleteBin2Fill } from "react-icons/ri";
import { IoIosSettings } from "react-icons/io";
import { VscArchive, VscHeartFilled } from "react-icons/vsc";
import { DashboardNavLink } from "../components/DashboardNavLink";
export const DashboardSidebar = () => {
  
  return (
    <div className="hidden md:flex col-span-1  relative ">
      <nav className="fixed w-[16.7%] h-[100%]  text-sm  flex-col gap-y-2">
        <DashboardNavLink
          icon={<FaStickyNote />}
          name={"add new"}
          to={"/note"}
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
    </div>
  );
};
