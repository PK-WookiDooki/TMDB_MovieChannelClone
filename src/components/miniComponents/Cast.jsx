import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";
import { useGetMovieCreditsByIDQuery } from "../../features/apis/moviesApi";

const Cast = ({ id }) => {
  const { data } = useGetMovieCreditsByIDQuery(id);
  const allCast = data?.cast.slice(0, 10);

  return (
    <div className="w-full">
      <div className="flex gap-3 overflow-x-scroll pb-5 cast">
        {allCast?.map((cast) => {
          return cast.profile_path ? (
            <div
              key={cast.id}
              className="min-w-[140px] max-w-[140px]  overflow-hidden text-black bg-white rounded "
            >
              <img
                src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                alt=""
                className=" rounded-t object-cover h-48 w-full"
              />
              <div className=" p-2">
                <h2 className="font-semibold"> {cast.name} </h2>
                <p className="text-sm font-light"> {cast.character} </p>
              </div>
            </div>
          ) : (
            ""
          );
        })}

        <div className="min-w-[140px] flex items-center justify-center">
          <h2 className="text-white hover:text-gray-400">
            <Link to={"cast"} className="flex items-center gap-1">
              {" "}
              View More <BsArrowRight className="text-xl" />{" "}
            </Link>
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Cast;
