import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { BiPencil } from "react-icons/bi";

export const ReadNote = ({ selected }) => {
  const readConStyle = {
    translateX: selected ? 0 : "100vw",
  };
  return (
    <motion.div
      initial={{
        translateX: "100vw",
        borderRadius: "9999px 0px 0px 9999px",
      }}
      animate={readConStyle}
      transition={{ type: "spring", bounce: 0.56, duration: 2 }}
      className="fixed  h-[550px] top-[20%] w-[100%] bg-white flex flex-wrap p-20 pr-32 shadow-2xl  shadow-[rgba(0,0,0,.1)] overflow-y-scroll -z-0"
    >
      <div
        className={`fixed right-[60%]   top-[85%] w-8 h-8 shadow-lg rounded-full flex justify-center items-center  bg-red-500 text-white`}
      >
        <BiPencil />
      </div>
      <div className="w-[40%] flex flex-col gap-y-5">
        <h1 className="text-5xl font-bold">{selected.title}</h1>
        <p className="text-sm">{selected.subtitle}</p>
      </div>
    </motion.div>
  );
};
ReadNote.propTypes = {
  selected: PropTypes.object,
};
