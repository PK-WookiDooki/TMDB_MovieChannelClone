import { Link } from "react-router-dom";

const MovieCard = ({ movie, path }) => {
    const image = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

    return (
        <Link
            to={`${path}${movie.id}`}
            className="max-w-[150px] min-w-[150px] group h-fit"
        >
            <div className=" rounded-sm overflow-hidden">
                {image ? (
                    <img
                        src={image}
                        alt=""
                        loading="lazy"
                        className="group-hover:scale-[1.15] duration-200 min-h-[225px] object-cover w-full"
                    />
                ) : (
                    <div className="">
                        <h2>Loading Image . . .</h2>
                    </div>
                )}
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
