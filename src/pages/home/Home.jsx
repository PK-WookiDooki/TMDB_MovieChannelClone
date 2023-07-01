import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { Loader, MCarousel, TCarousel } from "../../components";
import Hero from "./Hero";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [rand, setRand] = useState(Math.floor(Math.random() * 99));
  const latestMoviePoster = movies[rand]?.backdrop_path;

  const formattedDate = (date) => {
    const time = new Date(date);
    return time.getTime();
  };
  const latestMovies = movies
    ?.sort(
      (a, b) => formattedDate(b.release_date) - formattedDate(a.release_date)
    )
    .filter((mv) => mv.vote_average > 7)
    .slice(0, 15);

  const latestSeries = series
    ?.sort(
      (a, b) =>
        formattedDate(b.first_air_date) - formattedDate(a.first_air_date)
    )
    .filter((mv) => mv.vote_average > 5)
    .slice(0, 15);

  const trailers = latestSeries?.slice(0, 5);

  useEffect(() => {
    getMovies();
    getSeries();
    setRand(Math.floor(Math.random() * 99));
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

  const getSeries = async () => {
    try {
      let allData = [];

      for (let i = 1; i <= 5; i++) {
        const data = await getAllData("tv", i);
        allData = [...allData, data].flat();
      }
      setIsLoading(false);
      setSeries(allData);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className=" w-full ">
      <Hero image={latestMoviePoster} />

      {/* movie carousel */}
      <MCarousel
        selectedMovies={latestMovies}
        text={"Trending (Movies)"}
        type={"movie"}
      />

      {/* trailer carousel */}
      <div className="bg-slate-800 py-3">
        <TCarousel selectedMovies={trailers} text={"Trailers"} />
      </div>

      {/* series carousel */}
      <MCarousel
        selectedMovies={latestSeries}
        text={"What's Popular (Series)"}
        type={"tv"}
      />
    </section>
  );
};

export default Home;
