import { useState } from "react";
import { Link } from "react-router-dom";
import { GoNote } from "react-icons/go";
export const Home = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div
      className={`h-[100vh] px-5 md:px-[2vw] lg:px-[5vw] py-10 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <nav className="flex justify-between items-center ">
        <Link to={"/"} className="flex items-center gap-x-2 text-xl font-bold">
          <GoNote className="" />
          Notie
        </Link>
        <div className="flex items-center gap-x-10 text-sm">
          <Link to={"/login"} className="">
            Login
          </Link>
          <Link
            to="/signup"
            className={` rounded-md ${
              darkMode ? "bg-[#54428E] " : "border border-[#54428E]"
            }  p-3 px-5 flex items-center gap-x-1`}
          >
            <b>Sign Up</b>
            <span className="w-2 h-0 border-t "></span>
            <span className="opacity-20">Its Free</span>
          </Link>
        </div>
      </nav>
    </div>
  );
};
