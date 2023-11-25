import { FaRegStickyNote, FaCalendar, FaHeart } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { NoteOptions } from "./Note/NoteOptions";
import { useNote } from "../hooks/notes";
import { TiPin } from "react-icons/ti";
import { Link, useNavigate } from "react-router-dom";

export const Note = ({ data }) => {
  const navigate = useNavigate();
  const { handleFlip } = useNote();
  const count = 20;
  return (
    <motion.div
      className={`cursor-pointer col-span-1 text-white  p-5   relative  rounded-2xl rounded-br-[50px]`}
      onClick={() => {
        navigate(`viewnote/${data._id}`);
        // handleFlip(data._id, "isClicked", false);
      }}
      style={{ outline: data.isClicked ? `1px solid ${data.color}` : "" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Overlay of Background with reduced opacity*/}
      <div
        className="absolute w-[100%] h-[100%]  top-0 left-0   rounded-2xl rounded-br-[50px]"
        style={{
          backgroundColor: data.color,
          opacity: 0.4,
          zIndex: 0,
        }}
      ></div>

      <div className="relative z-10">
        <NoteOptions data={data} />
        <div className="flex justify-between items-center mb-3">
          {/* <div className="text-3xl ">
              {data.isPinned ? (
                <TiPin />
              ) : data.isFavorite ? (
                <FaHeart style={{ color: data.color }} />
              ) : null}
            </div> */}
          <motion.div
            onClick={(e) => {
              e.stopPropagation();
              handleFlip(data._id, "isOption", true);
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
          {data.subtitle.split(" ").length < count
            ? data.subtitle
            : data.subtitle
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
