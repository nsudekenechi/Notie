import { motion } from "framer-motion";
import { notesContext } from "../hooks/context";
import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { HiClock, HiPencil, HiArrowLeft } from "react-icons/hi";
import { useAnimateElementOnScroll } from "../hooks/customStyle";
import { useNote } from "../hooks/notes";
export const ViewNote = () => {
  const { noteColor } = useContext(notesContext)
  const { getNotes } = useNote()
  const color = {
    circle: ["blue", "green", "orange"],
    bg: ["bg-blue-600/10", "bg-green-600/10", "bg-orange-600/10"],
    audio: ["bg-blue-600", "bg-green-600", "bg-orange-600"],
    text: ["text-blue-600", "text-green-600", "text-orange-600"]
  };
  const params = useParams();
  const note = useContext(notesContext).notes.find(
    (item) => item._id == params.id
  );
  const scroll = useAnimateElementOnScroll();
  
  useEffect(() => {
    getNotes()
  }, [])
  return (
    <div className={`col-span-6 p-5 md:px-10 md:py-10  flex flex-col gap-y-5 ${noteColor.bg[noteColor.color.findIndex(item => item == note?.color)]}`}>
      <Link to={"/dashboard/note"} className={`w-8 h-8 rounded-full   flex justify-center items-center  text-xl md:text-lg`}>
        <HiArrowLeft className={`${noteColor.text[noteColor.color.findIndex(item => item == note?.color)]}`} />
      </Link>
      <div className="flex items-center gap-x-2 lg:text-sm">
        <HiClock />
        <p className="italic ">{note?.date}</p>
      </div>
      <h1 className="text-3xl font-extrabold">{note?.title}</h1>
      <p className="text-lg md:text-sm">{note?.subtitle}</p>

      <Link to={`/dashboard/note/editnote/${note?._id}`}>
        <motion.div
          className={`w-[60px] h-[60px] md:w-[40px] lg:h-[40px] fixed  duration-1000 shadow-xl  z-10 rounded-full  flex justify-center items-center text-white text-lg cursor-pointer top-[85%] right-5 ${noteColor.audio[noteColor.color.findIndex(item => item == note?.color)]}`}
          initial={{ scale: 1 }}
          animate={{ scale: scroll ? 0.7 : 1 }}
          transition={{ delay: 0.1 }}

        >
          <HiPencil className="text-2xl md:text-lg" />
        </motion.div>
      </Link>
    </div>
  );
};
