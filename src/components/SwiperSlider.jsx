import { SwiperSlide } from "swiper/react";

export const SwiperSlider = () => {
  return (
    <SwiperSlide className="flex justify-center gap-y-3 flex-col items-center">
      <div className="h-[400px] w-[100%]  ">
        <img
          src="./Img/home2.png"
          className="w-[100%] h-[100%] object-cover"
          alt=""
        />
      </div>

      <div className="">
        <h1 className="text-2xl">Connect with every application</h1>
        <p className="text-white/80 text-sm">
          Everything You need in an easy customizable dashboard.
        </p>
      </div>
    </SwiperSlide>
  );
};
