import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import { notesContext } from "../hooks/context";
export const DashboardNavLink = ({ name, icon, to }) => {
  const { notes } = useContext(notesContext)
  console.log()
  return (
    <NavLink
      to={"/dashboard" + to}
      className=" pl-10 pr-2 py-3 flex capitalize w-[100%] justify-between  items-center hover:text-purple-600/50 gap-x-2 text-black/50 hover:border-r border-r-purple-600"
    >
      <div className="flex gap-x-2 items-center"><span className="">{icon}</span>
        {name}</div>

      {name == "archived"  &&  JSON.parse(localStorage.options).archive && notes.filter(item => item.isArchive).length > 0 && <div className="w-5 h-5 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">{
        notes.filter(item => item.isArchive).length
      }</div>}
    </NavLink>
  );
};
DashboardNavLink.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  to: PropTypes.string,
};
