import { useEffect, useState } from "react";
import Genre from "./Genre";
import { useDispatch } from "react-redux";
import { addMovies, addSeries } from "../../features/services/moviesSlice";

const GenresList = ({ movies, genres, type }) => {
    const [activeGenre, setActiveGenre] = useState(0);
    const dispatch = useDispatch();

    useEffect(() => {
        if (activeGenre === 0) {
            type === "movie"
                ? dispatch(addMovies(movies))
                : dispatch(addSeries(movies));
        } else {
            const filteredByGenre = movies?.filter((mv) =>
                mv.genre_ids.includes(activeGenre)
            );
            type === "movie"
                ? dispatch(addMovies(filteredByGenre))
                : dispatch(addSeries(filteredByGenre));
        }
    }, [activeGenre]);

    return (
        <div className=" w-[90%] mx-auto md:mx-0 md:w-fit flex md:flex-col gap-3 flex-wrap justify-center md:sticky md:top-5 ">
            <button
                onClick={() => setActiveGenre(0)}
                className={` ${
                    activeGenre === 0
                        ? "bg-sky-400"
                        : "bg-gray-300 hover:bg-white"
                } px-3 py-1 rounded  text-black text-sm duration-100`}
            >
                All
            </button>
            {genres?.map((genre) => {
                return (
                    <Genre
                        key={genre.id}
                        genre={genre}
                        setGenreID={setActiveGenre}
                        genreID={activeGenre}
                    />
                );
            })}
        </div>
    );
};

export default GenresList;
