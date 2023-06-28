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
      key.name.includes("Official Trailer") || key.name.includes("Official")
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
    <div className="font-[Poppins] flex flex-col gap-10 w-full select-none">
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
        <div className="absolute backdrop-blur-[1px] p-3 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[85%] w-full md:h-[85%] h-full bg-black/50 flex flex-col lg:flex-row items-center lg:gap-8 justify-center lg:justify-normal">
          <Link
            to={".."}
            className="z-[5] absolute top-0 left-0 px-3 py-2 flex items-center gap-1 hover:text-gray-400 lg:hidden mb-5 "
          >
            {" "}
            <BsArrowLeft className="text-xl" /> Back to Main{" "}
          </Link>

          {/* poster */}
          <div className=" lg:h-full lg:min-w-max lg:w-auto w-full overflow-hidden mt-5 md:mt-0 ">
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
              alt=""
              className="h-full object-contain rounded-sm hidden lg:block"
            />
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
              alt=""
              className=" max-h-[500px] h-full w-full object-cover rounded-sm lg:hidden md:block hidden"
            />
          </div>

          <div className="w-full flex flex-col items-center md:items-start gap-8 overflow-auto md:overflow-visible">
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
              <div className="flex gap-1 mt-3 items-center flex-wrap">
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
            <div className=" flex flex-wrap items-center justify-center md:justify-normal gap-3">
              <Rating formattedRating={formattedRating} />
              <div className=" flex items-center ">
                <SMenu />
                <button
                  onClick={handleModal}
                  className=" flex items-center gap-1 hover:text-gray-400 duration-100 ml-3"
                >
                  <BsPlayFill className="text-3xl" /> Play Trailer
                </button>
              </div>
            </div>

            {/* movie? overview */}
            <div className=" text-center md:text-start px-3 md:px-0 ">
              <p className="mb-2 italic text-gray-400"> {movie?.tagline} </p>
              <h2 className="text-2xl font-medium text-white mb-2">Overview</h2>
              <p className=" text-sm text-gray-300"> {movie?.overview} </p>
            </div>
          </div>
        </div>
      </div>

      {/* cast and things about the movie */}
      <div
        className="md:w-[85%] w-[90%] mx-auto   border-b border-gray-500 pb-2 flex flex-col gap-5 md:flex-row justify-center
       "
      >
        {/* cast and crew */}
        <div className=" md:w-[70%] border-b pb-3 md:pb-0 md:border-0 border-gray-500 ">
          <h2 className="text-xl font-medium mb-3"> Top Billed Cast </h2>
          <Cast id={movie?.id} />
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
    </div>
  );
};

export default Detail;
