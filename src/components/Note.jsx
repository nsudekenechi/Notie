import { BiPencil } from "react-icons/bi";
import { FaRegStickyNote, FaCalendar } from "react-icons/fa";
import { HiOutlineDotsVertical } from "react-icons/hi";
import PropTypes from "prop-types";
export const Note = ({ title, subtitle, date, color }) => {
  const count = 20;
  return (
    <div
      className={`col-span-1 text-white  p-5 rounded-br-[50px] rounded-2xl ${color[0]}`}
    >
      <div className="flex justify-between items-center mb-3">
        <FaRegStickyNote className="text-3xl " />
        <HiOutlineDotsVertical className="text-xl" />
      </div>
      <h1 className="text-xl font-bold ">{title}</h1>
      <p className="text-sm my-3">
        {/* Specifying Number of words to spit out i.e 20 words */}
        {subtitle.split(" ").length < count
          ? subtitle
          : subtitle
              .split(" ")
              .map((item, index) => (index < count ? item : null))
              .join(" ") + "..."}
      </p>
      <div className="flex justify-between items-center">
        <p className="text-xs italic flex items-center gap-x-2">
          {date}
          <FaCalendar />
        </p>
        <div
          className={`w-8 h-8 ${color[1]} shadow-lg rounded-full flex justify-center items-center`}
        >
          <BiPencil />
        </div>
      </div>
    </div>
  );
};
Note.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  date: PropTypes.string,
  color: PropTypes.array,
};
