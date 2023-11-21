// import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed, HiUser } from "react-icons/hi";
import * as yup from "yup";
import { RightPanelSlider } from "../components/RightPanelSlider";

import { useFormValidation } from "../hooks/FormValidation";
import { useState } from "react";
export const Signup = () => {
  const schema = yup.object().shape({
    email: yup
      .string()
      .required("Field is required")
      .email("Please enter a valid email address"),

    fullname: yup.string().required("Field is required"),
    password: yup
      .string()
      .required("Field is required")
      .min(6, "password must be atleast 6 characters"),
    Confirmpassword: yup
      .string()
      .required("Field is required")
      .oneOf([yup.ref("password"), null], "password don't match!"),
  });

  const [inputs, setInputs] = useState({
    fullname: "",
    email: "",
    password: "",
  })

  const { onSubmit, register, errors } =
    useFormValidation(schema, inputs,"user/");

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  }

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
            <div>
              <h1 className="text-xl md:text-2xl">Sign Up To Your Account</h1>
              <p className=" text-xs md:text-sm text-black/40 italic">
                Enter your details to get started with Notie
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit}>
            <div className="flex flex-col gap-y-2">
              <Input
                name={"fullname"}
                type={"text"}
                icon={<HiUser />}
                register={register}
                error={errors.fullname?.message}
                change={{ onInputChange, inputs }}
              />
              <Input
                name={"email"}
                type={"email"}
                icon={<HiMail />}
                register={register}
                error={errors.email?.message}
                change={{ onInputChange, inputs }}

              />

              <Input
                name={"password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.password?.message}
                change={{ onInputChange, inputs }}

              />


              <button className="bg-[#54428E] p-3 text-white rounded-md mt-10">
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
