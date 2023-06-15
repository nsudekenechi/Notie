import { motion } from "framer-motion";
import PropTypes from "prop-types";
export const ReadNote = ({ selected }) => {
  const readConStyle = {
    translateX: selected ? 0 : "100vw",
    // borderRadius: selected ? "100px 0px 0px 100px" : "9999px 0px 0px 9999px",
  };
  return (
    <motion.div
      initial={{
        translateX: "100vw",
        borderRadius: "9999px 0px 0px 9999px",
      }}
      animate={readConStyle}
      transition={{ type: "spring", bounce: 0.56, duration: 2 }}
      className="fixed  h-[450px] w-[100%] bg-white  p-10   flex  items-center  shadow-2xl  shadow-[rgba(0,0,0,.1)]"
    >
      a
    </motion.div>
  );
};
ReadNote.propTypes = {
  selected: PropTypes.object,
};
