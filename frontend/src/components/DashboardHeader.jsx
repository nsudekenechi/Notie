import { useInput } from "../hooks/customStyle";
import { motion } from "framer-motion";
import { TiThMenuOutline } from "react-icons/ti";
import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
import { notesContext } from "../hooks/context";
import { useContext, useEffect, useState } from "react";
import { useLocation } from 'react-router-dom';
export const DashboardHeader = () => {
  const { onBlur, onFocus } = useInput();
  const { user, setNotes, searchedNotes } = useContext(notesContext);
  const [searchInput, setSearchInput] = useState("");
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
  useEffect(() => { 
    setSearchInput("")
    setNotes(searchedNotes)
  }, [location.pathname])
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
            placeholder="Search by title, subtitle or date"
            className="outline-0 w-[100%] placeholder:text-gray-300 text-purple-500"
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
    </header>
  );
};
