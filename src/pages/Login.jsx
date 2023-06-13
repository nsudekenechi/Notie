import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
import { useFormValidation } from "../hooks/customStyle";
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
