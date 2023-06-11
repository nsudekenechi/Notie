import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper";
import { useAnimateSlide, useFormValidation } from "../hooks/customStyle";
export const Login = () => {
  const { onSlide, slide, sliders, slideAnimation } = useAnimateSlide();
  const { handleSubmit, onSubmit, register, errors } = useFormValidation();
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
            <h1 className="text-2xl">Sign In To Your Account</h1>
            <p className="text-sm text-black/40 italic">
              Welcome back! Please enter your details
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  grid-cols-1 md:grid-cols-2  gap-x-5 px-10">
              <button className="col-span-1 flex items-center justify-center gap-x-2 p-2 border rounded-full">
                <FcGoogle /> Google
              </button>

              <button className="col-span-1 flex items-center justify-center gap-x-2 p-2 border rounded-full">
                <BsFacebook className="text-blue-500" /> Facebook
              </button>
            </div>

            <div className="border-t border-b flex justify-center text-sm text-black/80 items-center py-2 my-5">
              <p className="">or continue with email</p>
            </div>
            <div className="flex flex-col gap-y-2">
              <Input
                name={"Email"}
                type={"email"}
                icon={<HiMail />}
                register={register}
                error={errors.Email?.message}
              />
              <span className="text-xs text-red-600">{}</span>
              <Input
                name={"Password"}
                type={"Password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.Password?.message}
              />
              <div className="flex justify-between  text-sm">
                <label className="flex items-center  gap-x-2">
                  <input type="checkbox" className="accent-[#54428E]" />
                  <p>Remember Me</p>
                </label>
                <p className="">
                  Dont have an account?{" "}
                  <Link
                    to={"/signup"}
                    className="text-[#54428E] italic font-bold"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
              <button className="bg-[#54428E] p-3 text-white rounded-md">
                Sign in
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
