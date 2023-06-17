import { TiPin } from "react-icons/ti";
import { useNote } from "../hooks/customStyle";
import { Note } from "../components/Note";
import { notesData } from "../hooks/data";
import { ReadNote } from "../components/ReadNote";
import { AddButton } from "../components/DashboardAddButton";
export const AddNew = () => {
  const { notes, handleClick } = useNote(notesData);
  const selected = notes.find((item) => item.isClicked);
  return (
    <>
      <div className="flex items-center gap-x-1 my-5 md:px-10">
        <p className="text-black/40 font-bold">Pinned</p>
        <TiPin className="text-purple-600 relative -top-1" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:px-10 py-10 ">
        {notes.map((item, index) => (
          <>
            {index == 2 && selected ? (
              <div className="col-span-2">
                <ReadNote selected={selected} />
              </div>
            ) : (
              ""
            )}
            <Note data={item} handleClick={handleClick} />
          </>
        ))}
      </div>

      <AddButton />
    </>
  );
};
