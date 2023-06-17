import { TiPlus } from "react-icons/ti";
import { useState } from "react";
import { motion } from "framer-motion";
import { useShow } from "../hooks/customStyle";
import { AddButtonLink } from "./DashboardAddButtonLink";
export const AddButton = () => {
  const { show, toggleShow } = useShow();
  const [scroll, setScroll] = useState(false);
  let isScrolling;

  window.addEventListener("scroll", () => {
    clearTimeout(isScrolling);
    setScroll(true);
    isScrolling = setTimeout(() => {
      setScroll(false);
    }, 200);
  });
  return (
    <div className="top-[70%] fixed   flex flex-col gap-y-2 justify-between items-center right-5">
      <div className="flex flex-col items-center gap-y-1 ">
        <AddButtonLink show={show} text={"Create Note"} scroll={scroll} />
        <AddButtonLink show={show} text={"Create Folder"} scroll={scroll} />
      </div>
      <motion.div
        onClick={toggleShow}
        initial={{ scale: 1 }}
        animate={{ scale: scroll ? 0 : 1 }}
        whileHover={{ rotate: 180 }}
        className="w-[70px] h-[70px]   duration-1000 shadow-sm  z-10 rounded-full  flex justify-center items-center text-white text-lg bg-purple-600 cursor-pointer"
      >
        <TiPlus />
      </motion.div>
    </div>
  );
};
