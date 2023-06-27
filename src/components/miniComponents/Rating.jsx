import React from "react";

const Rating = ({ formattedRating }) => {
  return (
    <div className="flex items-center gap-2">
      <div className=" w-16 h-16 bg-white rounded-full flex items-center justify-center ">
        <div className=" w-14 h-14 bg-black/90 rounded-full flex items-center justify-center text-white font-medium text-xl relative">
          {formattedRating} <span className="text-xs ml-[1px]">%</span>
        </div>
      </div>
      <h2 className="w-12">User Score</h2>
    </div>
  );
};

export default Rating;
