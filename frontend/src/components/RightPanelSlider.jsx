import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper/modules";
import { useAnimateSlide } from "../hooks/customStyle";
import PropTypes from "prop-types";
export const RightPanelSlider = ({ sliders }) => {
  const { onSlide, slide, slideAnimation } = useAnimateSlide();
  return (
    <div className="col-span-1  hidden md:flex bg-[#54428E] justify-center items-center text-white py-10 px-4">
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{}}
        autoplay={{ delay: 3500 }}
        loop
        className=" h-[90vh]"
        onSlideChange={(e) => onSlide(e.realIndex)}
      >
        {sliders.map((item, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center gap-y-3 flex-col items-center"
          >
            <motion.div
              initial={slideAnimation.init}
              animate={
                slide == index ? slideAnimation.animate : slideAnimation.init
              }
              transition={{ duration: 0.6 }}
              className="h-[400px] w-[100%] overflow-hidden"
            >
              <img
                src={`./Img/${item.img}`}
                className="w-[100%] h-[100%] object-cover"
                alt=""
              />
            </motion.div>

            <div className="flex text-center flex-col items-center gap-y-3 justify-center  ">
              <h1 className="text-2xl">{item.title}</h1>
              <p className="text-white/80 text-sm">{item.subtitle}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
RightPanelSlider.propTypes = {
  sliders: PropTypes.array,
};
