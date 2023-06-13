import { Link } from "react-router-dom";
import { GoNote } from "react-icons/go";
export const Logo = () => {
  return (
    <Link
      to={"/"}
      className="flex items-center gap-x-2 text-lg lg:text-xl font-bold"
    >
      <GoNote className="" />
      <span>
        Notie<span className="text-[#54428E]">.</span>
      </span>
    </Link>
  );
};
