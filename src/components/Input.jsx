import { motion } from "framer-motion";
import { useInput } from "../hooks/customStyle";

export const Input = ({ type, name }) => {
  const { onFocus, onBlur, translateY, border } = useInput();

  return (
    <div className="flex flex-col gap-y-2">
      <p>{name}</p>
      <motion.div
        initial={{ border }}
        animate={{ border }}
        className={`duration-1000 flex flex-col justify-center  h-[60px] px-5 `}
      >
        <motion.p
          initial={{ translateY }}
          animate={{ translateY }}
          className="text-xs"
        >
          Enter {name}
        </motion.p>
        <input
          type={type}
          className="outline-none "
          onFocus={onFocus}
          onBlur={onBlur}
        />
      </motion.div>
    </div>
  );
};
