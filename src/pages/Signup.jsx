// import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import * as yup from "yup";

import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import { Autoplay, Pagination } from "swiper";
import { useAnimateSlide, useFormValidation } from "../hooks/customStyle";
export const Signup = () => {
  const { onSlide, slide, sliders, slideAnimation } = useAnimateSlide();
  const schema = yup.object().shape({
    Email: yup
      .string()
      .required("Field is required")
      .email("Please enter a valid email address"),

    Fullname: yup.string().required("Field is required"),
    Password: yup
      .string()
      .required("Field is required")
      .min(6, "Password must be atleast 6 characters"),
    ConfirmPassword: yup
      .string()
      .required("Field is required")
      .oneOf([yup.ref("Password"), null], "Password don't match!"),
  });
  const { handleSubmit, onSubmit, register, errors } =
    useFormValidation(schema);
  return (
    <section
      className="md:overflow-hidden md:h-[100vh] pl-5 grid  grid-col-1 md:grid-cols-2 "
      id="login"
    >
      <div className="col-span-1  py-5">
        <div>
          <Logo />
        </div>
        <div className="px-5  md:px-20 py-10">
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="w-5 h-5 rounded-lg border flex justify-center  items-center">
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
                error={errors.Fullname?.message}
              />
              <Input
                name={"Email"}
                type={"email"}
                icon={<HiMail />}
                register={register}
                error={errors.Email?.message}
              />

              <Input
                name={"Password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.Password?.message}
              />
              <Input
                name={"Confirm Password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.ConfirmPassword?.message}
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
