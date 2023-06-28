import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { Loader, MCard } from "../../components";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(movies[0]);

  useEffect(() => {
    getMovies();
  }, []);

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
    <section className="mt-5 w-full md:w-[85%] mx-auto ">
      <div className=" flex flex-row flex-wrap gap-3 items-center justify-center ">
        {movies?.map((movie) => {
          return <MCard key={movie.id} movie={movie} path={"detail"} />;
        })}
      </div>
    </section>
  );
};

export default Movies;
