import { useInput } from "../hooks/customStyle";
import { motion } from "framer-motion";
import { TiThMenuOutline } from "react-icons/ti";
import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
export const DashboardHeader = () => {
  const { onBlur, onFocus } = useInput();

  return (
    <header className="h-[10vh] sticky shadow-sm z-10 top-0 grid grid-cols-6 content-center py-5 bg-white px-10 ">
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
  );
};
