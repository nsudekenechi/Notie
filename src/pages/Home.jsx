import { Link } from "react-router-dom";
import { GoNote } from "react-icons/go";
import { useStyle } from "../hooks/customStyle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper";
import { HomeFeedback } from "../components/HomeFeedback";
import { BiSun, BiMoon } from "react-icons/bi";
import { motion } from "framer-motion";
import Typed from "react-typed";
export const Home = () => {
  const { mode, borderColor, borderColor2, bodyColor, toogleMode } = useStyle();

  return (
    <div
      className={` duration-500 overflow-hidden h-[100vh] px-5 md:px-[2vw] lg:px-[5vw] py-5 ${bodyColor}`}
    >
      <nav className="flex justify-between items-center ">
        <Link to={"/"} className="flex items-center gap-x-2 text-xl font-bold">
          <GoNote className="" />
          <span>
            Notie<span className="text-[#54428E]">.</span>
          </span>
        </Link>
        <div className="flex items-center gap-x-10 text-sm">
          <div
            className={`cursor-pointer  w-[50px] rounded-full h-[20px] ${
              mode ? "bg-white/40" : "bg-black/5"
            }  flex items-center`}
            onClick={toogleMode}
          >
            <motion.div
              className={`h-[20px] w-[20px] rounded-full ${bodyColor} shadow-lg flex justify-center items-center`}
              initial={{ x: 0 }}
              animate={{ x: mode ? 30 : 0 }}
              transition={{ duration: 1 }}
            >
              {mode ? <BiMoon /> : <BiSun />}
            </motion.div>
          </div>
          <Link to={"/login"} className="">
            Login
          </Link>
          <Link
            to="/signup"
            className={`hover:scale-95  hover:shadow-lg duration-1000 rounded-md ${
              mode ? "bg-[#54428E] border-none" : "border border-[#54428E]"
            }  p-3 px-5 flex items-center gap-x-1`}
          >
            <b>Sign Up</b>
            <span
              className={`w-2 h-0 border-t  ${borderColor} opacity-40 `}
            ></span>
            <span className="opacity-50">Its Free</span>
          </Link>
        </div>
      </nav>

      <section className="py-10 grid  grid-cols-1 md:grid-cols-2">
        <div className="col-span-1">
          <h1 className="h-[220px] text-6xl font-bold leading-[70px]">
            All Your Notes <br /> Organized,
            <br />
            <Typed
              strings={["Effortlessly.", "Efficiently."]}
              typeSpeed={100}
              cursorChar=""
              className="text-[#54428E]"
              loop
            />
          </h1>
          <b className="text-lg">Create, Organize, Share</b>
          <p className="text-sm opacity-40 italic">
            Inspiration Strikes anywhere. Notie, lets you capture,
            <br /> create, organize and save your ideas.
          </p>
          <Link
            className={` shadow-lg my-10  ${
              mode ? "bg-white text-black" : "bg-black text-white"
            }  p-5 rounded-full  md:w-[50%]  flex items-center font-bold justify-center gap-x-1`}
          >
            Get Started
            <span
              className={`w-2 h-0 border-t  ${borderColor2} opacity-40 `}
            ></span>
            <span className="opacity-40">Its Free</span>
          </Link>

          <hr className={`w-14 border-dashed ${borderColor} opacity-40`} />
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              // dynamicBullets: true,
              renderBullet: function (index, className) {
                return '<span class="' + className + '">' + "" + "</span>";
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
            className="w-[100%] "
          >
            <SwiperSlide>
              <HomeFeedback
                name={"Kenechi Nsude"}
                quote={"Notie is like my secret creative super power"}
                job={"Painter"}
              />
            </SwiperSlide>
            <SwiperSlide>
              <HomeFeedback
                name={"Kenechi Nsude"}
                quote={"Notie is like my secret creative super power"}
                job={"Painter"}
              />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="col-span-1">
          <Swiper
            direction={"vertical"}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            // effect={"fade"}
            loop={true}
            modules={[Autoplay, Navigation, EffectFade]}
            className="w-[100%] h-[80vh]"
          >
            <SwiperSlide>
              <img
                src="./Img/home.png"
                className="w-[100%] h-[100%] object-contain"
                alt=""
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                src="./Img/home2.png"
                className="w-[100%] h-[100%] object-contain"
                alt=""
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </div>
  );
};
