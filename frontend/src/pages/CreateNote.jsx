import { useContext, useEffect, useRef, useState } from "react";
import { FaCheck, FaMicrophone, FaMicrophoneSlash } from "react-icons/fa"
import { useNote, useSpeech } from "../hooks/notes";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link, useLocation, useParams } from "react-router-dom";
import { notesContext } from "../hooks/context";
import { HiArrowLeft } from "react-icons/hi";
export const CreateNote = () => {
  const location = useLocation()
  const param = useParams()
  const isEdit = location.pathname.includes("editnote");
  // Finding Note if we're on editing mode
  const { notes } = useContext(notesContext)
  const [note, setNote] = useState(null)
  // Creating Colors
  const color = {
    circle: ["blue", "green", "orange"],
    bg: ["bg-blue-600/10", "bg-green-600/10", "bg-orange-600/10"],
    audio: ["bg-blue-600", "bg-green-600", "bg-orange-600"],
    text: ["text-blue-600", "text-green-600", "text-orange-600"]
  };

  const title = useRef(null);
  const subtitle = useRef(null);
  const [recording, setRecording] = useState(false);
  const [inputs, setInputs] = useState({
    title: note ? note?.title : "",
    subtitle: "",
    color: color.circle[0],

  })
  const [focused, setFocused] = useState("");
  const { handleCreateNote, err } = useNote()
  const { transcript, resetTranscript } = useSpeech(recording)
  const [initialText, setInitialText] = useState("");
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

  const handleOnFocus = (e) => {
    setInitialText(e.target.value)
    setFocused(e.target.name);
    resetTranscript()

  }
  const notify = (msg) => toast.error(msg);
  useEffect(() => {
    if (recording) {
      if (initialText == "") {
        setInputs({ ...inputs, [focused]: transcript });
      } else {
        setInputs({ ...inputs, [focused]: initialText + " " + transcript });
      }
    }
  }, [transcript])

  useEffect(() => {
    // Specifying which input to focus on when recording 
    if (recording) {
      if (inputs.title == "") {
        // title.current.focus();
        setFocused("title")
      } else if (inputs.subtitle == "") {
        // subtitle.current.focus();
        setFocused("subtitle");
      } else {
        if (focused == "") {
          setRecording(false);
          notify("Please Select An Input");
        }
      }
    } else {
      setRecording(false);
      setFocused("");
    }

  }, [recording]);

  useEffect(() => {
    setNote(notes.find(item => item._id == param.id));
    // setInputs({...inputs,color: note?.color,title: note?.title,subtitle:note?.subtitle})
  }, [notes])
  return (
    <div className={`md:pl-10   md:py-10 ${color.bg[color.circle.findIndex(item => item == inputs.color)]}`}>
      <div className="my-3">
        <Link to={"/dashboard/addNew"} className={`w-8 h-8 rounded-full   flex justify-center items-center  `}>
          <HiArrowLeft className={`${color.text[color.circle.findIndex(item => item == note?.color)]}`} />
        </Link>
      </div>

      <ToastContainer />
      <form onSubmit={(e) => {
        e.preventDefault();
        handleCreateNote(inputs)

      }}>
        <div className="flex gap-x-3">
          {color.circle.map((item, index) => (
            <div key={index} onClick={() => handleSelectedColor(item)} className={`w-5 h-5 rounded-full ${item == inputs.color ? "outline outline-green-300 outline-offset-2" : ""}`} style={{ backgroundColor: item }}></div>
          ))}
        </div>

        <div className="grid grid-cols-1 pr-10 ">
          <div className="col-span-1">
            <p className="my-3">Title</p>
            <input type="text" className="outline-none p-3 w-[100%] rounded-md" name="title" id="" onChange={handleOnChange} value={inputs.title} onFocus={handleOnFocus} ref={title} />
          </div>

          <div className="col-span-1">
            <p className="my-3">Subtitle</p>
            <textarea name="subtitle" id="" value={inputs.subtitle} onChange={handleOnChange} className="resize-none outline-none p-3 w-[100%] h-[300px] rounded-md" onFocus={handleOnFocus} ref={subtitle} ></textarea>
          </div>
        </div>
        <p className="text-red-500">{err}</p>
        <div className="flex justify-end px-5  w-[80%] items-center gap-x-3 fixed bottom-3">
          <div onClick={handleRecord} className={` w-[50px] h-[50px]   duration-1000 shadow-md   text-white text-lg ${color.audio[color.circle.findIndex(item => item == inputs.color)]} cursor-pointer flex justify-center items-center rounded-full `} >
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
