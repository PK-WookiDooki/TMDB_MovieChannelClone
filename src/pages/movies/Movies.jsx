import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { GList, Loader, MCard } from "../../components";
import { useSelector } from "react-redux";
import { useGetMovieGenresQuery } from "../../features/apis/moviesApi";
import errImage from "../../assets/images/error.png";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(movies[0]);

  useEffect(() => {
    getMovies();
  }, []);

  const { filteredMovies } = useSelector((state) => state.movies);

  const { data, isLoading: isNotReady } = useGetMovieGenresQuery();
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

  if (isLoading || isNotReady) {
    return <Loader />;
  }

  return (
    <div className="mt-5 w-full md:w-[85%] mx-auto flex flex-col gap-5 md:flex-row items-start ">
      <GList movies={movies} genres={genres} type={"movie"} />

      {filteredMovies?.length > 0 ? (
        <div className="flex flex-row flex-wrap gap-3 justify-center w-full my-auto">
          {filteredMovies?.map((movie) => {
            return <MCard key={movie.id} movie={movie} path={""} />;
          })}
        </div>
      ) : (
        <div className=" bg-slate-800 w-full text-center py-5 rounded-sm h-full flex flex-col items-center justify-center mx-auto overflow-hidden ">
          <img src={errImage} alt="" className="w-[80%]" />

          <h2 className="text-2xl "> Sorry, No Results Found!</h2>
        </div>
      )}
    </div>
  );
};

export default Movies;
