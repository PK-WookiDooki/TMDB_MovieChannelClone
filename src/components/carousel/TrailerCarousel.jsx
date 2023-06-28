import React, { useEffect, useState } from "react";
import TrailerCard from "../cards/TrailerCard";
import { useGetTVKeysQuery } from "../../features/apis/tvApi";
import { getTrailerKeys } from "../../features/apis/getData";

const TrailerCarousel = ({ selectedMovies, text }) => {
  return (
    <div
      className="md:w-[85%] mt-5 w-[90%] mx-auto pb-2 
   "
    >
      <h2 className="text-xl font-medium mb-3"> {text} </h2>
      <div className="w-full">
        <div className="flex gap-5 pb-5 cast overflow-x-scroll ">
          {selectedMovies?.map((movie) => {
            return <TrailerCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrailerCarousel;
