import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  return (
    <Link to={`detail/${movie.id}`} className="max-w-[150px] group">
      <div className=" rounded-sm overflow-hidden">
        <img
          src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
          alt=""
          className="group-hover:scale-[1.15] duration-200"
        />
      </div>
      <div className="text-gray-400">
        <h3 className="truncate hover:text-white font-medium">{movie.title}</h3>
        <span className="text-sm">{movie.release_date}</span>
      </div>
    </Link>
  );
};

export default MovieCard;
