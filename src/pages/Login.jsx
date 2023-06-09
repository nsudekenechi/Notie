import { Input } from "../components/Input";
import { Logo } from "../components/Logo";
import { HiOutlineUser } from "react-icons/hi";
export const Login = () => {
  return (
    <section className="md:overflow-hidden md:h-[100vh] p-5 grid grid-cols-2">
      <div className="col-span-1 flex flex-col justify-between ">
        <div>
          <Logo />
        </div>
        <div className="px-20">
          <div className="flex flex-col gap-y-2 mb-5">
            <div className="w-10 h-10 rounded-lg border flex justify-center  items-center">
              <HiOutlineUser className="text-xl" />
            </div>
            <h1 className="text-3xl">Sign In</h1>
            <p className="text-sm text-black/40 italic">
              Welcome back! Please enter your details
            </p>
          </div>

          <form action="">
            <Input name={"Email"} type={"email"} />
          </form>
        </div>
      </div>
    </section>
  );
};
