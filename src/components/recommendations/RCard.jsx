import React from "react";
import { BsCalendar2DayFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { getFormattedRating } from "../../features/utils";

const RCard = ({ movie, path, handleChange }) => {
    return (
        <Link
            onClick={handleChange}
            to={path + movie.id}
            className="min-w-[250px]"
        >
            <div className=" aspect-video group relative overflow-hidden">
                <img
                    src={
                        movie.backdrop_path
                            ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
                            : "https://archive.org/download/no-photo-available/no-photo-available.png"
                    }
                    alt=""
                    className="rounded w-full h-full object-cover brightness-90 "
                />
                <div className=" translate-y-20 group-hover:translate-y-0 hover:translate-y-0 flex items-center gap-2 p-2 bg-white absolute bottom-0 left-0 w-full rounded-b text-slate-900 duration-200 ">
                    {" "}
                    <BsCalendar2DayFill />{" "}
                    <p className=" text-sm ">
                        {" "}
                        {movie.release_date
                            ? movie.release_date
                            : movie.first_air_date}{" "}
                    </p>
                </div>
            </div>
            <div className=" flex items-center justify-between mt-1 ">
                <h2 className="truncate w-[80%]">
                    {" "}
                    {movie.title ? movie.title : movie.name}{" "}
                </h2>
                <p> {getFormattedRating(movie.vote_average)}% </p>
            </div>
        </Link>
    );
};

export default RCard;
