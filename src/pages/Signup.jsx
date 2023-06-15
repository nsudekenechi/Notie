// import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import * as yup from "yup";
import { RightPanelSlider } from "../components/RightPanelSlider";

import { useFormValidation } from "../hooks/FormValidation";
export const Signup = () => {
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
      className="md:overflow-hidden md:h-[100vh]  px-5 md:px-0 md:pl-5 grid  grid-col-1 md:grid-cols-2 "
      id="login"
    >
      <div className="col-span-1  py-5">
        <div>
          <Logo />
        </div>
        <div className="  md:px-5 lg:px-20 py-5">
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
            <div className="flex flex-col gap-y-5 md:gap-y-5 lg:gap-y-2">
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
