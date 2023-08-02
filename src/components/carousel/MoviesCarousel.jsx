import { MCard } from "..";

const MoviesCarousel = ({ selectedMovies, text, type }) => {
    return (
        <div
            className="md:w-[85%] w-[90%] mx-auto pt-5 pb-3 
       "
        >
            <h2 className="text-xl font-medium mb-3"> {text} </h2>
            <div className="w-full">
                <div className="flex gap-5 pb-5 cast overflow-x-scroll">
                    {selectedMovies.map((movie) => {
                        return (
                            <MCard
                                key={movie.id}
                                movie={movie}
                                path={type === "movie" ? "movies/" : "tv/"}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MoviesCarousel;
