import { Circle } from "rc-progress";

const Rating = ({ formattedRating }) => {
  return (
    <div className="flex items-center gap-3">
      <div className="h-16 w-16 rounded-full flex items-center justify-center hover:scale-110 duration-150 cursor-pointer ring-[5px] ring-black/80 relative ">
        <Circle
          percent={formattedRating}
          className="w-16 h-16 bg-black/60 rounded-full"
          strokeWidth={7}
          trailWidth={7}
          strokeColor="yellow"
          trailColor="#4D94a3b8"
        ></Circle>
        <p className="flex items-center text-xl absolute ">
          {" "}
          {formattedRating} <span className="text-xs ml-[1px]">%</span>{" "}
        </p>
      </div>
      <h2 className="w-12">User Score</h2>
    </div>
  );
};

export default Rating;
