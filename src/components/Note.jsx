import { BiPencil } from "react-icons/bi";
import { FaRegStickyNote, FaCalendar } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NoteOptions } from "./Note/NoteOptions";
import { useNote } from "../hooks/notes";
export const Note = ({ data }) => {
  const { handleClickedNote } = useNote();
  const count = 20;
  return (
    <motion.div
      className={` col-span-1 text-white  p-5   relative  rounded-2xl rounded-br-[50px]`}
      onClick={() => {
        handleClickedNote(data.id, "isClicked", false);
      }}
      style={{ outline: data.isClicked ? `1px solid ${data.color}` : "" }}
      initial={{ scale: 1 }}
      animate={{ scale: data.isArchived ? 0 : 1 }}
    >
      {/* Overlay of Background with reduced opacity*/}
      <div
        className="absolute w-[100%] h-[100%]  top-0 left-0 -z-10  rounded-2xl rounded-br-[50px]"
        style={{
          backgroundColor: data.color,
          opacity: 0.4,
        }}
      ></div>

      <NoteOptions
        data={{ color: data.color, option: data.isOption, id: data.id }}
      />
      <div className="flex justify-between items-center mb-3">
        <FaRegStickyNote className="text-3xl " />
        <motion.div
          onClick={() => {
            handleClickedNote(data.id, "isOption", true);
          }}
          className={
            "rounded-full w-8 h-8 flex justify-center cursor-pointer items-center relative"
          }
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            backgroundColor: !data.isOption
              ? "rgba(0,0,0,0)"
              : "rgba(0,0,0,.2)",
          }}
        >
          <HiOutlineDotsVertical className="text-sm" />
        </motion.div>
      </div>

      <h1 className="text-xl font-bold ">{data.inputs.title}</h1>
      <p className="text-sm my-3  h-[100px]">
        {/* Specifying Number of words to spit out i.e 20 words */}
        {data.inputs.subtitle.split(" ").length < count
          ? data.inputs.subtitle
          : data.inputs.subtitle
              .split(" ")
              .map((item, index) => (index < count ? item : null))
              .join(" ") + "..."}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-xs italic flex items-center gap-x-2">
          {data.date}
          <FaCalendar />
        </p>
        <div
          className={`w-8 h-8 shadow-lg rounded-full flex justify-center items-center `}
          style={{ backgroundColor: data.color }}
        >
          <BiPencil />
        </div>
      </div>
    </motion.div>
  );
};
Note.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};
