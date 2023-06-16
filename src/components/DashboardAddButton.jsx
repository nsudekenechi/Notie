import { TiPlus } from "react-icons/ti";
import { motion } from "framer-motion";

export const AddButton = () => {
  return (
    <div className="top-[70%] fixed   flex flex-col gap-y-2 justify-between items-center right-5">
      <div className="flex flex-col gap-y-1">
        <div className=" p-2 px-5 bg-purple-600/20 text-sm rounded-xl text-white scale-90">
          <p>Create Notes</p>
        </div>
        <div className="p-2 px-5 bg-purple-600/20 text-sm rounded-xl text-white scale-90">
          <p>Create Folders</p>
        </div>
      </div>
      <motion.div className="w-[70px] h-[70px]  shadow-xl z-10 rounded-full  flex justify-center items-center text-white text-lg bg-purple-600">
        <TiPlus />
      </motion.div>
    </div>
  );
};
