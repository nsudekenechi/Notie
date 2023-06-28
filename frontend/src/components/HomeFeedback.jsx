import Proptypes from "prop-types";
export const HomeFeedback = ({ quote, name, job }) => {
  let shortName = `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`;
  return (
    <div className="mt-5 flex flex-col gap-y-3">
      <h1 className="text-xl  font-bold">&ldquo;{quote}&rdquo;</h1>
      <div className="flex gap-x-5">
        <div className="w-10 h-10 flex justify-center items-center rounded-full bg-[#54428E]">
          <h1 className="text-white">{shortName}</h1>
        </div>
        <div>
          <h1 className="text-sm font-bold">{name}</h1>
          <p className="text-sm opacity-40 italic">{job}</p>
        </div>
      </div>
    </div>
  );
};
HomeFeedback.propTypes = {
  quote: Proptypes.string,
  name: Proptypes.string,
  job: Proptypes.string,
};
