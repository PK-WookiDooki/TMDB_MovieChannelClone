import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AboutM, Cast, Genre, Loader, Rating, SMenu } from "../../components";
import { getFormattedRating, getHrsFromMins } from "../../features/functions";
import Modal from "../../components/miniComponents/Modal";
import "./style.css";
import {
  useGetMovieByIDQuery,
  useGetMovieKeysQuery,
} from "../../features/apis/moviesApi";
import { BsArrowLeft, BsArrowRight, BsPlayFill } from "react-icons/bs";

const Detail = () => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  const { id } = useParams();
  const { data: movie, isLoading } = useGetMovieByIDQuery(id);
  const { data: keys } = useGetMovieKeysQuery(id);
  const officialKey = keys?.results.find(
    (key) =>
      key.name.includes("Official") ||
      key.name.includes("Trailer") ||
      key.name.includes(movie?.name)
  );

  const formattedRunTime = movie?.runtime ? getHrsFromMins(movie?.runtime) : "";

  const formattedRating = movie?.vote_average
    ? getFormattedRating(movie?.vote_average)
    : "";

  // console.log(officialKey);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="font-[Poppins] flex flex-col gap-8 w-full select-none">
      {/* youtube trailer */}
      <div
        className={` ${
          active ? "flex" : "hidden"
        } fixed top-0 left-0  bg-black/60 z-20 w-full h-full items-center justify-center `}
      >
        <Modal
          ytKey={officialKey?.key}
          active={active}
          handleModal={handleModal}
        />
      </div>

      <div className="  lg:h-[600px] w-full relative">
        <div className="overflow-hidden h-full">
          {/* backdrop poster */}
          <img
            src={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
            alt=""
            className="w-full mix-blend-hard-light hidden lg:block "
          />

          <img
            src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
            alt=""
            className="w-full mix-blend-hard-light lg:hidden block "
          />
        </div>

        {/* movie? details */}
        <div className="absolute backdrop-blur-[1px] p-3 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[85%] w-full md:h-[85%] h-full bg-black/60 flex flex-col lg:flex-row items-center lg:gap-8 justify-evenly lg:justify-normal">
          {/* poster */}
          <div className=" lg:h-full lg:min-w-max lg:w-auto w-[95%] overflow-hidden mt-5 md:mt-0 ">
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
              alt=""
              className="h-full object-contain rounded-sm hidden lg:block"
            />
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
              alt=""
              className=" max-h-[500px] h-full w-full object-cover rounded-sm lg:hidden"
            />
          </div>

          <div className="w-full flex flex-col items-center md:items-start md:gap-8 gap-4 overflow-auto md:overflow-visible text-center md:text-left">
            {/* header */}
            <div className="">
              {/* movie? title */}
              <h2 className="text-3xl font-bold">
                {movie?.title}{" "}
                <span className="font-normal">
                  {" "}
                  ({movie?.release_date.slice(0, 4)}){" "}
                </span>
              </h2>

              {/* genres and runtime */}
              <div className="flex gap-1 mt-3 items-center flex-wrap justify-center md:justify-normal">
                {movie?.genres.map((genre) => {
                  return <Genre key={genre.id} genre={genre} />;
                })}
                <p className="ml-3">
                  {" - "}
                  {formattedRunTime.hr +
                    "h " +
                    formattedRunTime.mins +
                    "m"}{" "}
                </p>
              </div>
            </div>

            {/* ratings and other menu */}
            <div className=" flex flex-col md:flex-row items-center justify-center md:justify-normal gap-3">
              <Rating formattedRating={formattedRating} />
              <div className=" flex items-center ">
                <SMenu />
                {officialKey ? (
                  <button
                    onClick={handleModal}
                    className=" flex items-center gap-1 hover:text-gray-400 duration-100 ml-3"
                  >
                    <BsPlayFill className="text-3xl" /> Play Trailer
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>

            {/* movie overview */}
            <div className=" text-center md:text-start px-3 md:px-0 ">
              <p className="mb-2 italic text-gray-400"> {movie?.tagline} </p>
              <div className="hidden md:block">
                <h2 className="text-2xl font-medium text-white mb-2">
                  Overview
                </h2>
                {movie?.overview ? (
                  <p className=" text-sm text-gray-300"> {movie?.overview} </p>
                ) : (
                  <p className=" text-sm text-gray-300">
                    {" "}
                    We don't have an overview translated in English. Help us
                    expand our database by adding one.{" "}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" w-[90%] mx-auto text-white md:hidden ">
        {/* <p className="mb-2 italic text-gray-400"> {movie?.tagline} </p> */}
        <h2 className="text-2xl font-medium text-white mb-2">Overview</h2>
        {movie?.overview ? (
          <p className=" text-sm text-gray-300"> {movie?.overview} </p>
        ) : (
          <p className=" text-sm text-gray-300">
            {" "}
            We don't have an overview translated in English. Help us expand our
            database by adding one.{" "}
          </p>
        )}
      </div>

      {/* cast and things about the movie */}
      <div
        className="md:w-[85%] w-[90%] mx-auto  border-b border-gray-500 pb-2 flex flex-col gap-5 md:flex-row justify-center
       "
      >
        {/* cast and crew */}
        <div className=" md:w-[70%] border-b pb-3 md:pb-0 md:border-0 border-gray-500 ">
          <h2 className="text-xl font-medium mb-3"> Top Billed Cast </h2>
          <Cast id={movie?.id} type={"movie"} />
          <Link
            to={"cast"}
            className="mt-3 flex gap-1 items-center hover:text-gray-400 w-fit"
          >
            {" "}
            Full Cast & Crew <BsArrowRight className="text-xl" />
          </Link>
        </div>
        {/* somethings about movie */}
        <div className=" w-full ">
          <AboutM movie={movie} />
        </div>
      </div>
      <div className="w-[90%] mx-auto relative -mt-5">
        <Link
          to={".."}
          className="z-[5] py-2 w-full bg-slate-500 rounded-sm flex items-center justify-center gap-1 hover:bg-slate-600 duration-200 lg:hidden "
        >
          {" "}
          <BsArrowLeft className="text-xl" /> Back to Main{" "}
        </Link>
      </div>
    </div>
  );
};

export default Detail;
