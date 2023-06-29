import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { GList, Loader, MCard } from "../../components";
import { useSelector } from "react-redux";
import { useGetMovieGenresQuery } from "../../features/apis/moviesApi";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(movies[0]);

  useEffect(() => {
    getMovies();
  }, []);

  const { filteredMovies } = useSelector((state) => state.movies);

  const { data } = useGetMovieGenresQuery();
  const genres = data?.genres;

  const getMovies = async () => {
    try {
      let allData = [];

      for (let i = 1; i <= 5; i++) {
        const data = await getAllData("movie", i);
        allData = [...allData, data].flat();
      }
      setIsLoading(false);
      setMovies(allData);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className="mt-5 w-full md:w-[85%] mx-auto flex flex-col gap-5 md:flex-row items-start ">
      <GList movies={movies} genres={genres} type={"movie"} />

      {filteredMovies?.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-3 justify-center w-full my-auto">
          {filteredMovies?.map((movie) => {
            return <MCard key={movie.id} movie={movie} path={"detail"} />;
          })}
        </div>
      ) : (
        <div className=" bg-slate-800 w-full text-center py-5 rounded-sm h-full flex items-center justify-center mx-auto ">
          <h2 className="my-auto text-2xl "> Sorry, No Results Found!</h2>
        </div>
      )}
    </section>
  );
};

export default Movies;
