import { BiTrashAlt, BiHeart, BiLock } from "react-icons/bi";
import { motion } from "framer-motion";
import PropTypes from "prop-types";
import { useNote } from "../../hooks/notes";
export const NoteOptions = ({ data }) => {
  const { handleDeleteNote, handleArchiveNote, handleFavoriteNote } = useNote();
  const option = (text, Icon, index, action) => (
    <motion.div
      key={index}
      className="px-3 cursor-pointer py-2  rounded-2xl   flex items-center gap-x-2"
      style={{ color: "black", backgroundColor: "white" }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: data.option ? 1 : 0,
        transition: { delay: index * 0.2 },
      }}
      whileHover={{
        backgroundColor: data.color,
        color: "white",
        paddingLeft: "25px",
      }}
      onClick={(e) => {
        e.stopPropagation();
        action(data.id);
      }}
    >
      <p>{text}</p>
      <Icon />
    </motion.div>
  );
  const options = [
    { text: "Favorite", icon: BiHeart, action: handleFavoriteNote },
    { text: "Archive", icon: BiLock, action: handleArchiveNote },
    { text: "Delete", icon: BiTrashAlt, action: handleDeleteNote },
  ];
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: data.option ? 1 : 0 }}
      className="text-black z-10 text-xs absolute w-[50%] top-12 right-5 bg-white shadow-xl px-2  py-3 rounded-xl flex flex-col gap-y-2"
    >
      {options.map((item, index) =>
        option(item.text, item.icon, index, item.action)
      )}
    </motion.div>
  );
};
NoteOptions.propTypes = {
  data: PropTypes.object,
};
