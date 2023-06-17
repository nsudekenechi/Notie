import { BiCheck, BiMicrophone, BiMicrophoneOff } from "react-icons/bi";
import { useSpeech } from "../hooks/speechToText";
import { useShow } from "../hooks/customStyle";
import { useEffect } from "react";
export const CreateNote = () => {
  const { transcript, start, stop } = useSpeech();
  const { show, toggleShow } = useShow();
  useEffect(() => {
    if (show) {
      start({ continuous: true });
    } else {
      stop();
    }
  }, [show]);

  return (
    <div className="md:pl-10">
      <h1 className="mb-10 pl-1 md:pl-3 lg:pl-5 font-bold text-lg md:text-xl lg:text-2xl">
        Create Note
      </h1>
      <div className="flex flex-col gap-y-5  ">
        <div className="pr-10">
          <div className="py-6 px-2  md:px-5 lg:px-10 bg-white flex rounded-full">
            <input
              type="text"
              className="bg-transparent outline-none w-[100%]"
              placeholder="Enter Title"
            />
          </div>
        </div>

        <div className="py-6 px-2 md:px-5 lg:px-10 bg-white flex rounded-tl-2xl rounded-bl-2xl">
          <textarea
            className="bg-transparent outline-none w-[100%] h-[300px] resize-none"
            placeholder="Write Something..."
            value={transcript}
          ></textarea>
        </div>
        <div className="top-[80%] fixed   flex flex-col gap-y-1 justify-between items-center right-5">
          <div
            onClick={toggleShow}
            className="w-[30px] h-[30px]   duration-1000 shadow-sm  z-10 rounded-full  flex justify-center items-center text-white text-sm bg-blue-600 cursor-pointer"
          >
            {!show ? <BiMicrophone /> : <BiMicrophoneOff />}
          </div>
          <div className="w-[50px] h-[50px]   duration-1000 shadow-xl  z-10 rounded-full  flex justify-center items-center text-white text-2xl bg-purple-600 cursor-pointer">
            <BiCheck />
          </div>
        </div>
      </div>
    </div>
  );
};
