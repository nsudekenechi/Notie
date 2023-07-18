import { motion } from "framer-motion";
import { notesContext } from "../hooks/context";
import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { HiClock, HiPencil } from "react-icons/hi";
import { useAnimateElementOnScroll } from "../hooks/customStyle";
export const ReadNote = () => {
  const params = useParams();
  const note = useContext(notesContext).notes.find(
    (item) => item._id == params.id
  );
  const time = note.date.split(",")[1].trim().split(":");
  const timeOfDay = +time[1] < 12 ? "AM" : "PM";
  const scroll = useAnimateElementOnScroll();
  return (
    <motion.div className="md:px-10 flex flex-col gap-y-5">
      <div className="flex items-center gap-x-2">
        <HiClock />
        <p className="italic text-sm">{note.date + " " + timeOfDay}</p>
      </div>
      <h1 className="text-3xl font-extrabold">{note.title}</h1>
      <p className="">{note.subtitle}</p>

      <Link to={`/dashboard/${note._id}/edit`}>
        <motion.div
          className="w-[40px] h-[40px] fixed  duration-1000 shadow-xl  z-10 rounded-full  flex justify-center items-center text-white text-lg cursor-pointer top-[85%] right-5 "
          initial={{ scale: 1 }}
          animate={{ scale: scroll ? 0.7 : 1 }}
          transition={{ delay: 0.1 }}
          style={{ background: note.color }}
        >
          <HiPencil />
        </motion.div>
      </Link>
    </motion.div>
  );
};
