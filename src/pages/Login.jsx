import { Link } from "react-router-dom";
import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser, HiMail, HiLockClosed } from "react-icons/hi";
import { FcGoogle } from "react-icons/fc";
import { BsFacebook } from "react-icons/bs";
export const Login = () => {
  return (
    <section className="md:overflow-hidden md:h-[100vh] p-5 grid grid-cols-2">
      <div className="col-span-1 flex flex-col justify-between ">
        <div>
          <Logo />
        </div>
        <div className="px-20">
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="w-8 h-8 rounded-lg border flex justify-center  items-center">
              <HiOutlineUser className="text-sm" />
            </div>
            <h1 className="text-2xl">Sign In To Your Account</h1>
            <p className="text-sm text-black/40 italic">
              Welcome back! Please enter your details
            </p>
          </div>

          <form>
            <div className="grid  grid-cols-1 md:grid-cols-2  gap-x-5 px-10">
              <button className="col-span-1 flex items-center justify-center gap-x-2 p-2 border rounded-full">
                <FcGoogle /> Google
              </button>

              <button className="col-span-1 flex items-center justify-center gap-x-2 p-2 border rounded-full">
                <BsFacebook className="text-blue-500" /> Facebook
              </button>
            </div>

            <div className="border-t border-b flex justify-center items-center py-2 my-5">
              <p className="">or continue with email</p>
            </div>
            <div className="flex flex-col gap-y-4">
              <Input name={"Email"} type={"email"} icon={<HiMail />} />
              <Input
                name={"Password"}
                type={"Password"}
                icon={<HiLockClosed />}
              />
              <div className="flex justify-between  text-sm">
                <label className="flex items-center  gap-x-2">
                  <input type="checkbox" className="accent-[#54428E]" />
                  <p>Remember Me</p>
                </label>
                <p className="">
                  Dont have an account?{" "}
                  <Link className="text-[#54428E] italic font-bold">
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
    </section>
  );
};
