// import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed, HiUser } from "react-icons/hi";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper";
import { useAnimateSlide, useFormValidation } from "../hooks/customStyle";
export const Signup = () => {
  const { onSlide, slide, sliders, slideAnimation } = useAnimateSlide();
  const { handleSubmit, onSubmit, register } = useFormValidation().login;
  return (
    <section
      className="md:overflow-hidden md:h-[100vh] pl-5 grid grid-cols-2 "
      id="login"
    >
      <div className="col-span-1  py-5">
        <div>
          <Logo />
        </div>
        <div className="px-20 py-10">
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="w-8 h-8 rounded-lg border flex justify-center  items-center">
              <HiOutlineUser className="text-sm" />
            </div>
            <h1 className="text-2xl">Sign Up To Your Account</h1>
            <p className="text-sm text-black/40 italic">
              Enter your details to get started with Notie
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-y-2">
              <Input
                name={"Fullname"}
                type={"text"}
                icon={<HiUser />}
                register={register}
                error={""}
              />
              <Input
                name={"Email"}
                type={"email"}
                icon={<HiMail />}
                register={register}
                error={""}
              />

              <Input
                name={"Password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
                error={""}
              />
              <Input
                name={"Confirm Password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
              />

              <button className="bg-[#54428E] p-3 text-white rounded-md">
                Sign Up
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="col-span-1  hidden md:flex bg-[#54428E] justify-center items-center text-white py-10">
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

              <div className="flex  flex-col items-center gap-y-3 justify-center  ">
                <h1 className="text-2xl">{item.title}</h1>
                <p className="text-white/80 text-sm">{item.subtitle}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
