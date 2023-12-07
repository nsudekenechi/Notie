import { Note } from "../components/Note";
import { useContext } from "react";
import { notesContext } from "../hooks/context";
import "swiper/swiper-bundle.css";


// Importing icons


export const AddNew = () => {
  const { notes } = useContext(notesContext);

  return (
    <>
      {notes.map(
        (item) =>
          !item?.isArchive && !item?.isFavorite && <Note data={item} key={item._id} />
      )}
    </>
  );
};
