import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import {
  AboutM,
  Cast,
  Genre,
  Loader,
  Rating,
  RecommendedMovies,
  SMenu,
} from "../../components";
import { getFormattedRating } from "../../features/functions";
import Modal from "../../components/miniComponents/Modal";
import { BsArrowLeft, BsPlayFill } from "react-icons/bs";
import {
  useGetTVByIDQuery,
  useGetTVKeysQuery,
  useGetTVRecommendationsQuery,
} from "../../features/apis/tvApi";
import { MNFPage } from "..";

const Detail = () => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  const { id } = useParams();
  const { data: show, isLoading } = useGetTVByIDQuery(id);
  const { data: keys } = useGetTVKeysQuery(id);
  const { data: rSeries } = useGetTVRecommendationsQuery(id);

  const recommendedSeries = rSeries?.results.slice(0, 15);

  const officialKey = keys?.results.find(
    (key) =>
      key.name.includes("Official") ||
      key.name.includes("Trailer") ||
      key.name.includes(show?.name)
  );
  const formattedRating = show?.vote_average
    ? getFormattedRating(show?.vote_average)
    : "";

  const content = show ? (
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
            src={`https://image.tmdb.org/t/p/original` + show?.backdrop_path}
            alt=""
            className="w-full mix-blend-hard-light hidden lg:block "
          />

          <img
            src={`https://image.tmdb.org/t/p/original` + show?.poster_path}
            alt=""
            className="w-full mix-blend-hard-light lg:hidden block "
          />
        </div>

        {/* show? details */}
        <div className="absolute backdrop-blur-[1px] p-3 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[85%] w-full h-full md:h-[85%]  bg-black/60 flex flex-col lg:flex-row items-center lg:gap-8 gap-4 justify-evenly lg:justify-normal">
          {/* poster */}
          <div className=" lg:h-full lg:min-w-max lg:w-auto w-[95%] overflow-hidden md:mt-0 mt-5 ">
            <img
              src={`https://image.tmdb.org/t/p/original` + show?.poster_path}
              alt=""
              className="h-full object-contain rounded-sm hidden lg:block"
            />
            <img
              src={`https://image.tmdb.org/t/p/original` + show?.backdrop_path}
              alt=""
              className=" max-h-[500px] h-full w-full object-cover rounded-sm lg:hidden block "
            />
          </div>

          <div className="w-full flex flex-col items-center md:items-start md:gap-7 gap-4 overflow-auto md:overflow-visible text-center md:text-left">
            {/* header */}
            <div className="">
              {/* show? title */}
              <h2 className="text-3xl font-bold">
                {show?.name}{" "}
                <span className="font-normal text-gray-300">
                  {" "}
                  ({show?.first_air_date.slice(0, 4)}){" "}
                </span>
              </h2>

              {/* genres and runtime */}
              <div className="flex justify-center gap-1 mt-3 items-center flex-wrap md:justify-normal">
                {show?.genres.map((genre) => {
                  return <Genre key={genre.id} genre={genre} />;
                })}
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

            {/* show? overview */}
            <div className=" text-center md:text-start px-3 md:px-0 ">
              <p className="mb-2 italic text-gray-400"> {show?.tagline} </p>
              <div className="hidden md:block">
                <h2 className="text-2xl font-medium text-white mb-2">
                  Overview
                </h2>
                {show?.overview ? (
                  <p className=" text-sm text-gray-300"> {show?.overview} </p>
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

      {/* show? overview */}
      <div className="md:hidden w-[90%] mx-auto ">
        <h2 className="text-2xl font-medium text-white mb-2">Overview</h2>
        {show?.overview ? (
          <p className=" text-sm text-gray-300"> {show?.overview} </p>
        ) : (
          <p className=" text-sm text-gray-300">
            {" "}
            We don't have an overview translated in English. Help us expand our
            database by adding one.{" "}
          </p>
        )}
      </div>

      {/* cast and things about the show */}
      <div
        className="md:w-[85%] w-[90%] mx-auto  border-b border-gray-500 pb-2 flex flex-col gap-5 md:gap-10 md:flex-row justify-center
   "
      >
        {/* cast and crew */}
        <div className=" md:w-[70%] border-b pb-3 md:pb-0 md:border-0 border-gray-500 ">
          <Cast id={show?.id} type={"tv"} />
        </div>
        {/* somethings about show */}
        <div className=" w-full ">
          <AboutM movie={show} />
        </div>
      </div>

      {/* recommendations  */}
      {recommendedSeries?.length > 0 ? (
        <div className=" w-[90%] md:w-[85%] mx-auto border-b border-gray-500 pb-2">
          <RecommendedMovies
            recommendedMovies={recommendedSeries}
            type={"tv"}
          />
        </div>
      ) : (
        ""
      )}

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
  ) : (
    <MNFPage />
  );

  if (isLoading) {
    return <Loader />;
  }

  return content;
};

export default Detail;
