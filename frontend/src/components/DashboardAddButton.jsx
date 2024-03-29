import { TiPlus } from "react-icons/ti";
import { motion } from "framer-motion";
import { useAnimateElementOnScroll, useShow } from "../hooks/customStyle";
import { AddButtonLink } from "./DashboardAddButtonLink";
export const AddButton = () => {
  const { show, toggleShow } = useShow();
  const scroll = useAnimateElementOnScroll();

  return (
    <div className="top-[70%] fixed z-1  flex flex-col gap-y-2 justify-between items-center right-5">
      <div className="flex flex-col items-center gap-y-1 ">
        <AddButtonLink show={show} text={"Create Note"} scroll={scroll} />
        <AddButtonLink show={show} text={"Create Folder"} scroll={scroll} />
      </div>
      <motion.div
        onClick={toggleShow}
        initial={{ scale: 0.8 }}
        animate={{ scale: scroll ? 0 : 0.8 }}
        whileHover={{ rotate: 180 }}
        style={{ scale: 0.8 }}
        className="w-[70px] h-[70px]   duration-1000 shadow-sm   rounded-full  flex justify-center items-center text-white text-lg bg-purple-600 cursor-pointer"
      >
        <TiPlus />
      </motion.div>
    </div>
  );
};
