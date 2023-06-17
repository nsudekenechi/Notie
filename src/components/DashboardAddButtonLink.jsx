import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
export const AddButtonLink = ({ show, text, scroll }) => {
  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ translateY: "100%" }}
        animate={{ translateY: show ? (!scroll ? 0 : "100%") : "100%" }}
        transition={{ type: "spring", bounce: 0.5 }}
        className=" flex"
      >
        <Link
          to={`/dashboard/${text.replace(/ /g, "").toLowerCase()}`}
          className="py-3 px-5 hover:scale-[0.85] duration-700 hover:bg-purple-600 bg-purple-600/20 text-sm rounded-xl text-white scale-95"
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
  scroll: PropTypes.bool,
};
