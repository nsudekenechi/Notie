import { useState } from "react";
import { FaCheck } from "react-icons/fa"
import { useNote } from "../hooks/notes";
export const CreateNote = () => {
  // Creating Colors
  const [color, setColor] = useState({
    colors: ["blue", "green", "orange"],
    selectedColor: ""
  });

  const [inputs, setInputs] = useState({
    title: "",
    subtitle: "",
    color: color.selectedColor
  })

  const handleSelectedColor = (selected) => {
    setColor({ ...color, selectedColor: selected })
  }

  const {handleCreateNote} = useNote()
  return (
    <div className="md:pl-10">
      <form onSubmit={(e)=> { 
        e.preventDefault();
        handleCreateNote(inputs)

      }}>
        <div className="flex gap-x-3">
          {color.colors.map((item, index) => (
            <div key={index} onClick={() => handleSelectedColor(item)} className={`w-5 h-5 rounded-full ${item == color.selectedColor ? "outline outline-green-300" : ""}`} style={{ backgroundColor: item }}></div>
          ))}
        </div>

        <div className="grid grid-cols-1 pr-10">
          <div className="col-span-1">
            <p className="my-3">Title</p>
            <input type="text" className="outline outline-1 p-3 w-[100%]" name="" id="" />
          </div>

          <div className="col-span-1">
            <p className="my-3">Subtitle</p>
            <textarea name="" id="" className="resize-none outline outline-1 p-3 w-[100%] h-[300px]"></textarea>
          </div>
        </div>

        <button>
          <div className="fixed bg-purple-600 text-white w-10 h-10 top-[90%] right-10 flex justify-center items-center rounded-full ">
            <FaCheck />
          </div>
        </button>
      </form>

    </div>
  );
};
