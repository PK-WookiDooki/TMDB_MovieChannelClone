import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie, path }) => {
  return (
    <Link
      to={`${path}/${movie.id}`}
      className="max-w-[150px] min-w-[150px] group"
    >
      <div className=" rounded-sm overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          className="group-hover:scale-[1.15] duration-200 w-full h-full object-cover"
        />
      </div>
      <div className="text-gray-400">
        <h3 className="truncate hover:text-white font-medium">
          {movie.title ? movie.title : movie.name}
        </h3>
        <span className="text-sm">
          {movie.release_date ? movie.release_date : movie.first_air_date}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
