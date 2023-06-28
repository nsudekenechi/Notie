import { BiTrashAlt, BiHeart, BiLock, BiPin } from "react-icons/bi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNote } from "../../hooks/notes";
export const NoteOptions = ({ data }) => {
  const { handleDeleteNote, handleFlip } = useNote();
  //List of options
  const options = [
    { text: "Favorite", icon: BiHeart, prop: "isFavorite" },
    { text: "Archive", icon: BiLock, prop: "isArchive" },
    { text: "Delete", icon: BiTrashAlt, prop: "isDelete" },
    { text: !data.isPinned ? "Pin" : "Unpin", icon: BiPin, prop: "isPinned" },
  ];
  const option = (text, Icon, index, prop) => (
    <motion.div
      key={index}
      className="px-3 cursor-pointer py-2  rounded-2xl   flex items-center gap-x-1"
      style={{ color: "black", backgroundColor: "white" }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: data.isOption ? 1 : 0,
        transition: { delay: index * 0.2 },
      }}
      whileHover={{
        backgroundColor: data.color,
        color: "white",
        paddingLeft: "20px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        text != "Delete"
          ? handleFlip(data.id, prop, true, true)
          : handleDeleteNote(data.id);
      }}
    >
      <p>{text}</p>
      <Icon />
    </motion.div>
  );
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: data.isOption ? 1 : 0 }}
      className="text-black z-10 text-xs absolute w-[55%] top-12 right-5 bg-white shadow-xl px-2  py-3 rounded-xl flex flex-col gap-y-2"
    >
      {options.map((item, index) =>
        option(item.text, item.icon, index, item.prop)
      )}
    </motion.div>
  );
};
NoteOptions.propTypes = {
  data: PropTypes.object,
};
