import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiMail, HiLockClosed } from "react-icons/hi";
import { useFormValidation } from "../hooks/FormValidation";
import * as yup from "yup";
import { RightPanelSlider } from "../components/RightPanelSlider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export const Login = () => {
  const schema = yup.object().shape({
    fullname: yup
      .string()
      .required("Field is required"),
    password: yup
      .string()
      .min(6, "Password must be atleast 6 characters")
      .required("Field is required"),
  });
  const { handleSubmit, onSubmit, register, errors, isLoading} = useFormValidation(schema, "user/login");

  
  


  return (
    <section
      className="md:overflow-hidden min-h-screen md:pl-5 grid grid-cols-1 px-5 md:px-0 md:grid-cols-2 "
      id="login"
    >
      <div className="col-span-1  py-5">
        <div>
          <Logo />
        </div>
        <div className="md:px-5 lg:px-20 py-5">
          <div className="flex flex-col gap-y-2 mb-5">

            <div>
              <h1 className="text-xl md:text-2xl">Sign Up To Your Account</h1>
              <p className=" text-xs md:text-sm text-black/40 italic">
                Enter your details to get started with Notie
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="flex flex-col gap-y-2">
              <Input
                name={"fullname"}
                type={"text"}
                icon={<HiMail />}
                register={register}
                error={errors.fullname?.message}

              />
              <Input
                name={"password"}
                type={"password"}
                icon={<HiLockClosed />}
                register={register}
                error={errors.password?.message}
              />
              <div className="text-xs md:text-sm  grid  grid-cols-2 gap-y-2 mb-10">
                <label className="flex items-center gap-x-2">
                  <input type="checkbox" className="accent-[#54428E]" {...register("check")}/>
                  <p>Remember Me</p>
                </label>
                <p className="">
                  Dont have an account?
                  <Link
                    to={"/signup"}
                    className="text-[#54428E] italic font-bold"
                  >
                    Create
                  </Link>
                </p>
              </div>
              <button className="bg-[#54428E] p-3 text-white rounded-md mt-10 flex justify-center">
                {!isLoading ? 'Login' : <span className="loading loading-spinner"></span>}
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
      <ToastContainer />

    </section>
  );
};
