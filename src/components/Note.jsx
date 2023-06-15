import { BiPencil } from "react-icons/bi";
import { FaRegStickyNote, FaCalendar } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
import { useOption } from "../hooks/customStyle";
import { motion } from "framer-motion";
export const Note = ({ data, handleClick }) => {
  const count = 20;
  const { show, toggleShow } = useOption();
  const bg = "bg-" + data.color + "/20";
  const circle = "bg-" + data.color;
  const outline = "outline-" + data.color;

  return (
    <div
      className={` col-span-1 text-white  p-5 rounded-br-[50px] rounded-2xl ${bg} ${
        data.isClicked ? `outline outline-1 ${outline}` : ""
      }`}
      onClick={() => handleClick(data.id, "isClicked")}
    >
      <div className="flex justify-between items-center mb-3">
        <FaRegStickyNote className="text-3xl " />
        <motion.div
          onClick={toggleShow}
          className={"rounded-full w-6 h-6 flex justify-center items-center "}
          initial={{ backgroundColor: "rgba(0,0,0,0)" }}
          animate={{
            backgroundColor: !show ? "rgba(0,0,0,0)" : "rgba(0,0,0,.2)",
          }}
        >
          <HiOutlineDotsVertical className="text-sm" />
        </motion.div>
      </div>
      <h1 className="text-xl font-bold ">{data.title}</h1>
      <p className="text-sm my-3">
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
          className={`w-8 h-8 shadow-lg rounded-full flex justify-center items-center  ${circle}`}
        >
          <BiPencil />
        </div>
      </div>
    </div>
  );
};
Note.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func,
};
