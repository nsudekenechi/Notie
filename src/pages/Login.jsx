import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFormValidation } from "../hooks/FormValidation";
import * as yup from "yup";
import { RightPanelSlider } from "../components/RightPanelSlider";
export const Login = () => {
  const schema = yup.object().shape({
    Email: yup
      .string()
      .email("Please enter a valid email address")
      .required("Field is required"),
    Password: yup
      .string()
      .min(6, "Password must be atleast 6 characters")
      .required("Field is required"),
  });
  const { handleSubmit, onSubmit, register, errors } =
    useFormValidation(schema);

  return (
    <section
      className="md:overflow-hidden md:h-[100vh] md:pl-5 grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 "
      id="login"
    >
      <div className="col-span-1  py-5">
        <div>
          <Logo />
        </div>
        <div className="md:px-5 lg:px-20 py-5">
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="w-7 h-7 rounded-lg border flex justify-center  items-center">
              <HiOutlineUser className="text-sm" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl">Sign Up To Your Account</h1>
              <p className=" text-xs md:text-sm text-black/40 italic">
                Enter your details to get started with Notie
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid  grid-cols-1 md:grid-cols-2  gap-y-5 md:gap-y-0  md:gap-x-5 lg:px-10">
              <button className="col-span-1 flex items-center justify-center gap-x-2 lg:p-2 p-3 border rounded-full">
                <FcGoogle /> Google
              </button>

              <button className="col-span-1 flex items-center justify-center gap-x-2 lg:p-2 p-3 border rounded-full">
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
              <Input
                name={"Password"}
                type={"Password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.Password?.message}
              />
              <div className="text-xs md:text-sm  grid grid-cols-1 lg:grid-cols-2 gap-y-2">
                <label className="flex items-center col-span-1  gap-x-2">
                  <input type="checkbox" className="accent-[#54428E]" />
                  <p>Remember Me</p>
                </label>
                <p className="col-span-1">
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

      <RightPanelSlider
        sliders={[
          {
            img: "home.png",
            title: "Connect with every Application",
            subtitle: "Everything You need in an easy customizable dashboard.",
          },
          {
            img: "home2.png",
            title: "Connect with every Application",
            subtitle: "Everything You need in an easy customizable dashboard.",
          },
        ]}
      />
    </section>
  );
};
