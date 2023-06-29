import { useEffect, useState } from "react";
import { getAllData } from "../../features/apis/getData";
import { GList, Loader, MCard } from "../../components";
import { useGetTVGenresQuery } from "../../features/apis/tvApi";
import { useSelector } from "react-redux";
import errImage from "../../assets/images/error.png";

const Series = () => {
  const [series, setSeries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // console.log(movies[0]);

  useEffect(() => {
    getMovies();
  }, []);

  const { data } = useGetTVGenresQuery();
  const genres = data?.genres;

  const { filteredSeries } = useSelector((state) => state.movies);
  // console.log(filteredSeries);

  const getMovies = async () => {
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
    <div className="mt-5 w-full md:w-[85%] mx-auto flex flex-col gap-5 md:flex-row items-start ">
      <GList genres={genres} movies={series} type={"tv"} />
      {filteredSeries?.length > 0 ? (
        <div className=" flex flex-row flex-wrap gap-3 justify-center w-full my-auto ">
          {filteredSeries?.map((show) => {
            return <MCard key={show.id} movie={show} path={"detail"} />;
          })}
        </div>
      ) : (
        <div className=" bg-slate-800 w-full text-center py-5 rounded-sm h-full flex items-center justify-center mx-auto ">
          <img src={errImage} alt="" />
          <h2 className="my-auto text-2xl "> Sorry, No Results Found!</h2>
        </div>
      )}
    </div>
  );
};

export default Series;
