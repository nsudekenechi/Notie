import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";
export const DashboardNavLink = ({ name, icon, to }) => {
  return (
    <NavLink
      to={"/dashboard" + to}
      className=" px-10 py-3 flex capitalize w-[100%]  items-center hover:text-purple-600/50 gap-x-2 text-black/50 hover:border-r border-r-purple-600"
    >
      <span className="">{icon}</span>
      {name}
    </NavLink>
  );
};
DashboardNavLink.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.object,
  to: PropTypes.string,
};
