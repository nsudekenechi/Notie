import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const AddButtonLink = ({ show, text }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ translateY: "100%" }}
        animate={{ translateY: show ? 0 : "100%" }}
        transition={{ type: "spring", bounce: 0.5 }}
        className=" flex"
      >
        <Link
          to={`/dashboard/${text.replace(/ /g, "").toLowerCase()}`}
          className=" py-3 px-5 bg-purple-600/20 text-sm rounded-xl text-white scale-90"
        >
          <p>{text}</p>
        </Link>
      </motion.div>
    </div>
  );
};
AddButtonLink.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
};
