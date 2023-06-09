import { motion } from "framer-motion";
import PropTypes from "prop-types";
export const HomeMotion = ({ duration, text }) => {
  return (
    <div className="overflow-hidden">
      <motion.p
        initial={{ translateY: "-100%" }}
        animate={{ translateY: "0%" }}
        transition={{ duration: duration }}
      >
        {text}
      </motion.p>
    </div>
  );
};
HomeMotion.propTypes = {
  duration: PropTypes.number,
  text: PropTypes.any,
};
