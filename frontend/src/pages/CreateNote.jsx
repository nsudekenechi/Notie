import { useEffect, useState } from "react";
import { FaCheck, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa"
import { useNote, useSpeech } from "../hooks/notes";
export const CreateNote = () => {
  // Creating Colors
  const [color, setColor] = useState(["blue", "green", "orange"]);

  const [recording, setRecording] = useState(false);

  const [inputs, setInputs] = useState({
    title: "",
    subtitle: "",
    color: "",
  })



  const { handleCreateNote, err } = useNote()
  const { transcript } = useSpeech(recording)

  // Handles when color is selected
  const handleSelectedColor = (selected) => {
    setInputs({ ...inputs, color: selected })
  }

  // Handles when input is changed
  const handleOnChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  // Handles when record starts/stops
  const handleRecord = () => {
    setRecording(!recording);
  }

  useEffect(() => {
    // Telling transcript where to write on inputs when recording starts

    if (recording) {
      if (inputs.title == "") {
      } else {
      }
    }
  }, [recording])



  return (
    <div className="md:pl-10 ">
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateNote(inputs)

      }}>
        <div className="flex gap-x-3">
          {color.map((item, index) => (
            <div key={index} onClick={() => handleSelectedColor(item)} className={`w-5 h-5 rounded-full ${item == inputs.color ? "outline outline-green-300" : ""}`} style={{ backgroundColor: item }}></div>
          ))}
        </div>

        <div className="grid grid-cols-1 pr-10 ">
          <div className="col-span-1">
            <p className="my-3">Title</p>
            <input type="text" className="outline outline-1 p-3 w-[100%] rounded-md" name="title" id="" onChange={handleOnChange} value={inputs.title} />
          </div>

          <div className="col-span-1">
            <p className="my-3">Subtitle</p>
            <textarea name="subtitle" id="" value={inputs.subtitle} onChange={handleOnChange} className="resize-none outline outline-1 p-3 w-[100%] h-[300px] rounded-md"></textarea>
          </div>
        </div>
        <p className="text-red-500">{err}</p>
        <div className="flex justify-end px-5  w-[80%] items-center gap-x-3 fixed bottom-3">
          <div onClick={handleRecord} className=" w-[50px] h-[50px]   duration-1000 shadow-md   text-white text-lg bg-blue-600 cursor-pointer flex justify-center items-center rounded-full " >
            {!recording ? <FaMicrophone /> : <FaMicrophoneSlash />}
          </div>
          <button>
            <div className=" w-[70px] h-[70px]   duration-1000 shadow-md   text-white text-lg bg-purple-600 cursor-pointer  flex justify-center items-center rounded-full ">
              <FaCheck />
            </div>
          </button>

        </div>

      </form>

    </div>
  );
};
