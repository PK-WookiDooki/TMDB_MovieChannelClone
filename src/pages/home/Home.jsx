import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { Loader, MCard } from "../../components";
import Hero from "./Hero";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/services/moviesSlice";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rand, setRand] = useState(Math.floor(Math.random() * 99));
  const latestMoviePoster = movies[rand]?.backdrop_path;

  // console.log(movies[0]);

  useEffect(() => {
    getMovies();
    setRand(Math.floor(Math.random() * 99));
  }, []);

  const getMovies = async () => {
    try {
      let allData = [];

      for (let i = 1; i <= 5; i++) {
        const data = await getAllData(i);
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
    <section>
      <Hero image={latestMoviePoster} />
      <div className=" flex flex-row flex-wrap gap-3 items-center justify-center mt-5 w-full md:w-[85%] mx-auto ">
        {movies?.map((movie) => {
          return <MCard key={movie.id} movie={movie} path={"detail"} />;
        })}
      </div>
    </section>
  );
};

export default Home;
