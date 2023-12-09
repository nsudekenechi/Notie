import { useInput } from "../hooks/customStyle";
import { motion } from "framer-motion";
import { TiThMenuOutline } from "react-icons/ti";
import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
import { notesContext } from "../hooks/context";
import { useContext, useEffect, useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { FaStickyNote } from "react-icons/fa";
import { DashboardNavLink } from "./DashboardNavLink";
import { VscArchive, VscHeartFilled } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import { RiDeleteBin2Fill, RiLogoutCircleRLine } from "react-icons/ri";
export const DashboardHeader = () => {
  const { onBlur, onFocus } = useInput();
  const { user, setNotes, searchedNotes } = useContext(notesContext);
  const [searchInput, setSearchInput] = useState("");
  const [showNav, setShowNav] = useState(false);
  const location = useLocation()
  let fullname = user?.user?.fullname;
  let name;
  let abbr;
  if (fullname?.includes(" ")) {
    let splitted = fullname.split(" ")
    name = `${splitted[0]} ${splitted[1][0]}.`
    abbr = `${splitted[0][0]}${splitted[1][0]}`
  } else {
    name = fullname;
    abbr = fullname[0];
  }

  const onChange = (ev) => {
    setSearchInput(ev.target.value)
    const value = ev.target.value.toLowerCase();
    const matchedNotes = searchedNotes.filter(item => item.title.toLowerCase().includes(value) || item.subtitle.toLowerCase().includes(value) || item.date.toLowerCase().includes(value));
    setNotes(matchedNotes);
  }
  const handleShowNav = () => {
    setShowNav(!showNav)
  }
  useEffect(() => {
    setSearchInput("")
    setNotes(searchedNotes)
  }, [location.pathname])
  return (
    <>
      <header className="h-[10vh] sticky shadow-sm z-10 top-0 grid grid-cols-6 content-center justify-end py-5 bg-white px-10 backdrop-blur-3xl border-b">
        <div className="col-span-1  flex">
          <Logo />
        </div>
        <nav className="col-span-5 ">

          {/* Desktop Nav */}
          <div className=" hidden md:grid grid-cols-6 ">
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
                placeholder="Search by title, subtitle or date"
                className="bg-transparent outline-0 w-[100%] placeholder:text-gray-300 text-purple-500"
                onFocus={onFocus}
                onBlur={onBlur}
                onChange={onChange}
                value={searchInput}
              />
            </motion.div>
            <div className="col-span-2 flex justify-end items-center gap-x-6">
              <div className="text-purple-400 w-8 h-8 bg-purple-100/80 flex items-center justify-center rounded-full">
                <TiThMenuOutline />
              </div>
              <div className="text-purple-400 w-8 h-8 text-sm bg-purple-100/80 flex items-center justify-center rounded-full capitalize">
                {abbr}
              </div>
              <p className="text-black/20 capitalize">{name}</p>
            </div>
          </div>

          {/* MobileNav */}
          <div className={`block md:hidden `}>
            <div className="flex justify-end">
              <div className={`${showNav && "absolute top-[50%]"}  flex flex-col gap-y-2 justify-end`} onClick={handleShowNav}>
                <span className={`duration-500  ${showNav && "rotate-45"} h-[1px] w-5 bg-black inline-block`}></span>
                <span className={`delay-100 ${showNav && "translate-x-9 opacity-0"} h-[1px] w-5 bg-black inline-block`}></span>
                <span className={`duration-500 ${showNav && "-rotate-45 translate-y-[-18px] "} h-[1px] w-5 bg-black inline-block `}></span>
              </div>
            </div>


          </div>
        </nav>

      </header>
      <div className={`   fixed h-screen   left-0 top-16  shadow-xl  border-t-2 w-[100%]  flex md:hidden flex-col items-end  bg-black/20  overflow-hidden  delay-500 ${showNav ? "opacity-1 z-10" : "opacity-0 -z-10"} duration-700`} onClick={() => setShowNav(false)}>

        <div className={`duration-500 ${showNav ? "translate-y-[0%]" : "translate-y-[-100%]"} bg-white w-[100%] h-[60%] flex flex-col gap-y-3`}>
          <DashboardNavLink
            icon={<FaStickyNote />}
            name={"add new"}
            to={"/note"}
          />

          <div>
            <p className="pl-2 mt-2 capitalize text-sm italic text-black/30">
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
          </div>
          <div>
            <p className="px-2  capitalize text-sm italic text-black/30">
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
          </div>
          <div>
            <p className="px-2  capitalize text-sm italic text-black/30">
              Trash
            </p>
            <DashboardNavLink
              icon={<RiDeleteBin2Fill />}
              name={"recycle bin"}
              to={"/recycle"}
            />
          </div>
        </div>

      </div>
    </>
  );
};
