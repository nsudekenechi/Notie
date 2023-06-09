import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";
import PropTypes from "prop-types";
export const Input = ({ type, name, icon }) => {
  const { focus, onFocus, onBlur, translateY, border } = useInput();

  return (
    <div className="flex flex-col gap-y-2">
      <p>{name}</p>
      <motion.div
        initial={{ border }}
        animate={{ border }}
        className={`duration-1000 flex flex-col justify-center  h-[60px] px-5 `}
      >
        <motion.div
          initial={{ translateY }}
          animate={{ translateY }}
          className={`text-xs flex items-center gap-x-2 ${
            focus ? "text-black" : "text-black/40 italic duration-200"
          }`}
        >
          {icon}
          Enter {name}
        </motion.div>
        <input
          type={type}
          className="outline-none focus:text-[#54428E]"
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </motion.div>
    </div>
  );
};
Input.propTypes = {
  name: PropTypes.string,
  type: PropTypes.string,
  icon: PropTypes.any,
};
