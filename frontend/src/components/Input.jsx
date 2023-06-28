import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";
import PropTypes from "prop-types";
export const Input = ({ type, name, icon, register, error }) => {
  const { focus, onFocus, onBlur, translateY, border, errorBorder } =
    useInput();
  return (
    <div className="flex flex-col gap-y-4 md:gap-y-2">
      <p className="text-sm">{name}</p>
      <motion.div
        initial={{ border }}
        animate={{ border: error ? errorBorder : border }}
        className={`duration-1000 flex flex-col justify-center h-[50px] md:h-[8vh] lg:h-[9vh] px-5 py-3`}
      >
        <motion.div
          initial={{ translateY }}
          animate={{ translateY }}
          className={`text-xs md:text-sm flex items-center gap-x-2 ${
            focus ? "text-black" : "text-black/40 italic duration-200"
          }`}
        >
          {icon}
          Enter {name}
        </motion.div>
        <input
          type={type}
          className="outline-none bg-white focus:text-[#54428E]"
          {...register(name.replace(/ /g, ""))}
          onFocus={onFocus}
          onBlur={onBlur}
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
};
