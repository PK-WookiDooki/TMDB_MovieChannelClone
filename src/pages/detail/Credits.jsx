import { Link, useParams } from "react-router-dom";
import {
  useGetMovieByIDQuery,
  useGetMovieCreditsByIDQuery,
} from "../../features/apis/moviesApi";
import { FullCast, Loader } from "../../components";
import { BsArrowLeft, BsArrowUp } from "react-icons/bs";
import {
  useGetTVByIDQuery,
  useGetTVCreditsByIDQuery,
} from "../../features/apis/tvApi";
import { useEffect, useState } from "react";

const Credits = ({ type }) => {
  const [isActive, setIsActive] = useState(false);
  const { id } = useParams();

  const { data: credits, isLoading: creditsLoaded } =
    type === "movie"
      ? useGetMovieCreditsByIDQuery(id)
      : useGetTVCreditsByIDQuery(id);

  const { data: actualMovie, isLoading: MSLoaded } =
    type === "movie" ? useGetMovieByIDQuery(id) : useGetTVByIDQuery(id);
  const cast = credits?.cast;
  const crew = credits?.crew;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight - 100) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    });
  }, [window.innerHeight]);

  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (creditsLoaded || MSLoaded) {
    return <Loader />;
  }

  return (
    <section className=" w-full overflow-hidden">
      <div className="py-3 w-full bg-slate-500">
        <div className="w-[85%] mx-auto">
          <Link
            to={".."}
            className="
           flex items-center w-fit gap-3"
          >
            <img
              src={
                `https://image.tmdb.org/t/p/original` + actualMovie?.poster_path
              }
              alt=""
              className="w-20 overflow-hidden rounded bg-red-200"
            />
            <div className="">
              <h2 className="text-2xl font-bold hover:text-gray-300 mb-1">
                {" "}
                {actualMovie?.title
                  ? actualMovie?.title
                  : actualMovie?.name}{" "}
                <span className="font-medium">
                  {" "}
                  (
                  {actualMovie?.release_date
                    ? actualMovie?.release_date.slice(0, 4)
                    : actualMovie?.first_air_date.slice(0, 4)}
                  ){" "}
                </span>{" "}
              </h2>
              <p className="flex items-center gap-1 text-gray-200 hover:text-white">
                {" "}
                <BsArrowLeft /> Back to Main{" "}
              </p>
            </div>
          </Link>
        </div>
      </div>
      <div className="w-[85%] mx-auto mt-5 flex flex-col md:flex-row justify-between gap-10">
        {cast?.length > 0 ? (
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-5"> Cast </h2>
            <FullCast array={cast} />
          </div>
        ) : (
          ""
        )}
        {crew?.length > 0 ? (
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-5"> Crew </h2>
            <FullCast array={crew} />
          </div>
        ) : (
          ""
        )}
      </div>

      <button
        onClick={toTop}
        className={` transform ${
          isActive ? " translate-x-0 " : " translate-x-20"
        } flex fixed bottom-7 right-7 w-12 h-12 rounded-full bg-slate-600 items-center justify-center drop-shadow-md shadow-lg hover:bg-slate-500 duration-200 z-[5]`}
      >
        {" "}
        <BsArrowUp className="text-2xl text-gray-300" />{" "}
      </button>
    </section>
  );
};

export default Credits;
