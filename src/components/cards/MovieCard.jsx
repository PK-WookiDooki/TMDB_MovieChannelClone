import { Link } from "react-router-dom";
import noImg from "../../assets/images/img_noImage.svg";

const MovieCard = ({ movie, path }) => {
    const image =
        movie?.poster_path == null
            ? noImg
            : `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
        <Link
            to={`${path}${movie.id}`}
            className="max-w-[150px] min-w-[150px] group h-fit self-stretch "
        >
            <div className=" rounded-sm overflow-hidden">
                <img
                    src={image}
                    alt={movie?.title || movie?.name}
                    loading="lazy"
                    className="group-hover:scale-[1.15] duration-200 min-h-[225px] object-cover w-full bg-gray-200"
                />
            </div>
            <div className="text-gray-400 p-1">
                <h3 className="truncate hover:text-white font-medium">
                    {movie.title ? movie.title : movie.name}
                </h3>
                <span className="text-sm">
                    {movie.release_date
                        ? movie.release_date
                        : movie.first_air_date}
                </span>
            </div>
        </Link>
    );
};

export default MovieCard;
