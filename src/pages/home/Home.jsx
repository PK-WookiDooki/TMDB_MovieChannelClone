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

  // console.log(movies[0]);

  const selectedMovies = movies
    ?.filter((mv) => mv.vote_average > 7)
    .slice(0, 15);

  const selectedSeries = series
    ?.filter((mv) => mv.vote_average > 5)
    .slice(0, 15);

  // const selectedIndex = [2, 5, 14, 10, 13];
  const trailers =
    series?.length > 0
      ? [series[12], series[13], series[16], series[17], series[18]]
      : null;

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

  console.log(trailers ? trailers[0] : "");
  console.log(movies ? movies[0] : "");

  return (
    <section className=" w-full ">
      <Hero image={latestMoviePoster} />

      {/* movie carousel */}
      <MCarousel selectedMovies={selectedMovies} text={"Trending (Movies)"} />

      <div className="bg-slate-800 py-3">
        <TCarousel selectedMovies={trailers} text={"Trailers"} />
      </div>
      <MCarousel
        selectedMovies={selectedSeries}
        text={"What's Popular (Series)"}
      />
    </section>
  );
};

export default Home;
