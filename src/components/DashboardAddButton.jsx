import { TiPlus } from "react-icons/ti";

import { useShow } from "../hooks/customStyle";
import { AddButtonLink } from "./DashboardAddButtonLink";
export const AddButton = () => {
  const { show, toggleShow } = useShow();
  return (
    <div className="top-[70%] fixed   flex flex-col gap-y-2 justify-between items-center right-5">
      <div className="flex flex-col items-center gap-y-1 ">
        <AddButtonLink show={show} text={"Create Notes"} />
        <AddButtonLink show={show} text={"Create Folders"} />
      </div>
      <div
        onClick={toggleShow}
        className="w-[70px] h-[70px] hover:rotate-[180deg]  duration-1000 shadow-sm  z-10 rounded-full  flex justify-center items-center text-white text-lg bg-purple-600 cursor-pointer"
      >
        <TiPlus />
      </div>
    </div>
  );
};
