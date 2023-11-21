import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";
import PropTypes from "prop-types";
export const Input = ({ type, name, icon, register, error,change }) => {
  const { focus, onFocus, onBlur, translateY, border, errorBorder } =
    useInput();
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-2">
      <p className="text-sm capitalize">{name}</p>
      <motion.div
        initial={{ border,borderRadius:"0px" }}
        animate={{ border: error ? errorBorder : border, borderRadius: !focus ? "20px" : "0px" }}
        className={`relative duration-300   h-[50px]  px-5 py-1 md:py-4`}
      >
        <motion.div
          initial={{ translateY }}
          animate={{ translateY }}
          className={`top-[10%] absolute text-xs flex items-center gap-x-2 ${
            focus ? "text-black" : "text-black/40 italic duration-200"
          }`}
        >
          {icon}
          Enter <span className="capitalize">{name}</span>
        </motion.div>
        <input
          type={type}
          className="mt-2  relative z-10 outline-none bg-transparent w-[100%]  h-[100%]  focus:text-[#54428E]"
          name={name}
          // {...register(name.replace(/ /g, ""))}
          onFocus={onFocus}
          onBlur={onBlur}
          onChange={change.onInputChange}
          value={change.inputs[name]}
        />
      </motion.div>
      <span className="text-xs text-red-600">{error}</span>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.any,
  register: PropTypes.func,
  error: PropTypes.string,
  change:PropTypes.object
};
