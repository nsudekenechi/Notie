import { BiCheck, BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import { useSpeech } from "../hooks/speechToText";
import { useShow } from "../hooks/customStyle";
import { useCreateNote } from "../hooks/notes";
export const CreateNote = () => {
  const { show: isListening, toggleShow: toggleListening } = useShow();
  const { inputs, handleFocus, inputChanged } = useSpeech(isListening, {
    subtitle: "",
    title: "",
  });
  const { colors } = useCreateNote();
  return (
    <div className="md:pl-10">
      <h1 className="mb-10 pl-1 md:pl-3 lg:pl-5 font-bold text-lg md:text-xl lg:text-2xl">
        Create Note
      </h1>
      <div className="flex items-center gap-x-5  pl-1 md:pl-3 lg:pl-5 my-5">
        {colors.map((item, index) => (
          <div
            key={index}
            className={`w-6 h-6 ${item.color} rounded-full relative`}
          >
            {item.selected && (
              <div className="absolute w-[100%] h-[100%] bg-black/30 flex items-center justify-center">
                <BiCheck size={30} color="white" />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-y-5  ">
        <div className="pr-10">
          <div className="py-6 px-2  md:px-5 lg:px-10 bg-white flex rounded-full">
            <input
              name="title"
              type="text"
              className="bg-transparent outline-none w-[100%] capitalize "
              placeholder="Enter Title"
              value={inputs.title}
              onChange={inputChanged}
              onFocus={handleFocus}
            />
          </div>
        </div>

        <div className="py-6 px-2 md:px-5 lg:px-10 bg-white flex rounded-tl-2xl rounded-bl-2xl">
          <textarea
            name="subtitle"
            className="bg-transparent outline-none w-[100%] h-[300px] resize-none"
            placeholder="Write Something..."
            value={inputs.subtitle}
            onChange={inputChanged}
            onFocus={handleFocus}
          ></textarea>
        </div>
        <div className="top-[80%] fixed   flex flex-col gap-y-1 justify-between items-center right-5">
          <div
            onClick={toggleListening}
            className="w-[30px] h-[30px]   duration-1000 shadow-sm  z-10 rounded-full  flex justify-center items-center text-white text-sm bg-blue-600 cursor-pointer"
          >
            {!isListening ? <BiMicrophone /> : <BiMicrophoneOff />}
          </div>
          <div className="w-[50px] h-[50px]   duration-1000 shadow-xl  z-10 rounded-full  flex justify-center items-center text-white text-2xl bg-purple-600 cursor-pointer">
            <BiCheck />
          </div>
        </div>
      </div>
    </div>
  );
};
