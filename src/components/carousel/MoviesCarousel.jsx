import { MCard } from "..";

const MoviesCarousel = ({ selectedMovies, text, type }) => {
  return (
    <div
      className="md:w-[85%] mt-5 w-[90%] mx-auto pb-2 
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
                path={type === "movie" ? "movies/detail" : "tv/detail"}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoviesCarousel;
