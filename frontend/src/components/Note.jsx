import { FaRegStickyNote, FaCalendar, FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NoteOptions } from "./Note/NoteOptions";
import { useNote } from "../hooks/notes";
import { TiPin } from "react-icons/ti";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { notesContext } from "../hooks/context";

export const Note = ({ data }) => {
  const navigate = useNavigate();
  const { handleFlip } = useNote();
  const [animateRemove, setAnimateRemove] = useState(null);
  const handleSetAnimate = (id) => {
    setAnimateRemove(id)
  }
  const { noteColor } = useContext(notesContext);
 
  return (
    <motion.div
      className={`cursor-pointer col-span-1 text-white  p-5   relative  rounded-2xl rounded-br-[50px] ${noteColor.bg[noteColor.color.findIndex(item=>item == data.color)]}`}
      onClick={() => {
        navigate(`/dashboard/note/viewnote/${data._id}`);
      }}
      style={{ outline: data.isClicked ? `1px solid ${data.color}` : ""}}
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: 1, scale: animateRemove == data._id ? 0 : 1, transition: { duration: 0.2 } }}

    >
      {/* Overlay of Background with reduced opacity*/}


      <div className="relative z-10">
        <NoteOptions data={data} handleSetAnimate={handleSetAnimate} />
        <div className="flex justify-between items-center mb-3">
          <div className="text-3xl ">
            {data.isPinned ? (
              <TiPin />
            ) : data.isFavorite ? (
              <FaHeart style={{ color: data.color }} />
            ) : null}
          </div>
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              handleFlip(data._id, "isOption");
            }}
            className={
              "rounded-full w-8 h-8 flex justify-center cursor-pointer items-center relative "
            }
            initial={{ backgroundColor: "rgba(0,0,0,0)" }}
            animate={{
              backgroundColor: !data.isOption
                ? "rgba(0,0,0,0)"
                : "rgba(0,0,0,.2)",
            }}
          >
            <HiOutlineDotsVertical className="text-xl" />
          </motion.div>


        </div>
        <h1 className="text-xl font-bold ">
          {data.title.split(" ").length < 6
            ? data.title
            : data.title
              .split(" ")
              .map((item, index) => (index < 6 ? item : null))
              .join(" ") + "..."}
        </h1>
        <p className="text-sm my-5  h-[100px]">
          {/* Specifying Number of words to spit out i.e 20 words */}
          {data.subtitle.split(" ").length < 20
            ? data.subtitle
            : data.subtitle
              .split(" ")
              .map((item, index) => (index < 20 ? item : null))
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
            <FaRegStickyNote />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
Note.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};
