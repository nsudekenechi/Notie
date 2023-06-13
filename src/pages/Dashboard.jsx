import { Logo } from "../components/Logo";
import { CiSearch } from "react-icons/ci";
import { TiThMenuOutline } from "react-icons/ti";
export const Dashboard = () => {
  return (
    <div className="bg-purple-100/80 h-[100vh]">
      <nav className="grid grid-cols-6 py-5 bg-white px-10 ">
        <div className="col-span-1 ">
          <Logo />
        </div>
        <div className="col-span-5 grid grid-cols-6 ">
          <div className="col-span-4  flex items-center gap-x-2 text-black/20">
            <CiSearch className="text-lg" />
            <input
              type="text"
              placeholder="Search..."
              className="outline-0 w-[100%] placeholder:text-inherit"
            />
          </div>
          <div className="col-span-2 flex justify-end items-center gap-x-6">
            <div className="text-purple-400 w-8 h-8 bg-purple-100/80 flex items-center justify-center rounded-full">
              <TiThMenuOutline />
            </div>
            <div className="text-purple-400 w-8 h-8 text-sm bg-purple-100/80 flex items-center justify-center rounded-full">
              KN
            </div>
            <p className="text-black/20">Kenechi N.</p>
          </div>
        </div>
      </nav>
    </div>
  );
};
