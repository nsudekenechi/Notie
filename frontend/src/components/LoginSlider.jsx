import { motion } from "framer-motion";
import PropTypes from "prop-types";
export const LoginSlider = ({ img, title, subtitle }) => {
  return (
    <div className="flex justify-center gap-y-3 flex-col items-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        className="h-[400px] w-[100%]  "
      >
        <img
          src={`./Img/${img}`}
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </motion.div>

      <div className="">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
    </div>
  );
};
LoginSlider.propTypes = {
  img: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
};
