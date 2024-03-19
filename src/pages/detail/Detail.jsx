import { useState } from "react";
import { BsArrowLeft, BsPlayFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { MNFPage } from "..";
import noImg from "../../assets/images/img_noImage.svg";
import noImgBd from "../../assets/images/no-image.png";
import {
    AboutM,
    Cast,
    Loader,
    Rating,
    RecommendedMovies,
    SMenu,
} from "../../components";
import Modal from "../../components/miniComponents/Modal";
import {
    useGetMovieByIDQuery,
    useGetMovieCreditsByIDQuery,
    useGetMovieKeysQuery,
    useGetRecommendationsQuery,
} from "../../features/apis/moviesApi";
import {
    useGetTVByIDQuery,
    useGetTVCreditsByIDQuery,
    useGetTVKeysQuery,
    useGetTVRecommendationsQuery,
} from "../../features/apis/tvApi";
import { getFormattedRating, getHrsFromMins } from "../../features/utils";
import "./detail.css";

const Detail = ({ type }) => {
    const [active, setActive] = useState(false);

    const handleModal = () => {
        setActive(!active);
    };

    const { id } = useParams();
    const { data: actualMovie, isLoading: MSLoaded } =
        type === "movie" ? useGetMovieByIDQuery(id) : useGetTVByIDQuery(id);

    const { data: actualKeys, isLoading: keysLoaded } =
        type === "movie" ? useGetMovieKeysQuery(id) : useGetTVKeysQuery(id);

    const { data: recommendedMS, isLoading: RMSLoaded } =
        type === "movie"
            ? useGetRecommendationsQuery(id)
            : useGetTVRecommendationsQuery(id);
    const recommendations = recommendedMS?.results.slice(0, 15);

    const { data: credits, isLoading: castLoaded } =
        type === "movie"
            ? useGetMovieCreditsByIDQuery(id)
            : useGetTVCreditsByIDQuery(id);

    const allCast = credits?.cast.slice(0, 10);

    const officialKey = actualKeys?.results.find(
        (key) =>
            key.name.includes("Official Trailer") ||
            key.name.includes("Official") ||
            key.name.includes("Trailer") ||
            key.name.includes(actualMovie?.name)
    );

    const formattedRunTime = actualMovie?.runtime
        ? getHrsFromMins(actualMovie?.runtime)
        : "";

    const formattedRating = actualMovie?.vote_average
        ? getFormattedRating(actualMovie?.vote_average)
        : "";

    // poster
    const poster =
        actualMovie?.poster_path == null
            ? noImg
            : `https://image.tmdb.org/t/p/original` + actualMovie?.poster_path;

    // backdrop
    const backdrop =
        actualMovie?.poster_path == null
            ? noImgBd
            : `https://image.tmdb.org/t/p/original` +
              actualMovie?.backdrop_path;

    // content
    const content = actualMovie ? (
        <div className="font-[Poppins] flex flex-col gap-7 w-full select-none pb-3">
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

            <div className={`lg:h-[600px] w-full relative`}>
                <div className={`overflow-hidden h-full`}>
                    {/*backdrop poster*/}
                    <img
                        src={backdrop}
                        className=" w-full mix-blend-hard-light hidden lg:block object-fill "
                    />

                    <img
                        src={poster}
                        className="w-full mix-blend-hard-light lg:hidden block "
                    />
                </div>

                {/* actualMovie details */}
                <div className="detail-wrapper">
                    {/* poster */}
                    <div className=" lg:h-full lg:min-w-max lg:w-auto w-[95%] overflow-hidden mt-5 md:mt-0 ">
                        <img
                            src={poster}
                            className="h-full object-contain rounded-sm hidden lg:block"
                        />
                        <img
                            src={backdrop}
                            className=" max-h-[500px] h-full w-full object-cover rounded-sm lg:hidden"
                        />
                    </div>

                    <div className="w-full flex flex-col items-center md:items-start md:gap-8 gap-4 overflow-auto md:overflow-visible text-center md:text-left">
                        {/* header */}
                        <div className="">
                            {/* actualMovie title */}
                            <h2 className="text-3xl font-bold">
                                {actualMovie?.title
                                    ? actualMovie?.title
                                    : actualMovie?.name}{" "}
                                <span className="font-normal">
                                    {" "}
                                    (
                                    {actualMovie?.release_date
                                        ? actualMovie?.release_date.slice(0, 4)
                                        : actualMovie?.first_air_date.slice(
                                              0,
                                              4
                                          )}
                                    ){" "}
                                </span>
                            </h2>

                            {/* genres and runtime */}
                            <div className="flex gap-1 mt-3 items-center flex-wrap justify-center md:justify-normal">
                                {actualMovie?.genres.map((genre) => {
                                    return (
                                        <p key={genre?.id}> {genre?.name} </p>
                                    );
                                })}
                                {type === "movie" ? (
                                    <p className="ml-3">
                                        {" - "}
                                        {formattedRunTime.hr +
                                            "h " +
                                            formattedRunTime.mins +
                                            "m"}{" "}
                                    </p>
                                ) : (
                                    ""
                                )}
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
                                        <BsPlayFill className="text-3xl" /> Play
                                        Trailer
                                    </button>
                                ) : (
                                    ""
                                )}
                            </div>
                        </div>

                        {/* movie overview */}
                        <div className=" text-center md:text-start px-3 md:px-0 ">
                            {actualMovie?.tagline ? (
                                <p className="mb-2 italic text-gray-400">
                                    {" "}
                                    {actualMovie?.tagline}{" "}
                                </p>
                            ) : (
                                ""
                            )}
                            <div className="hidden md:block">
                                <h2 className="text-2xl font-medium text-white mb-2">
                                    Overview
                                </h2>
                                {actualMovie?.overview ? (
                                    <p className=" text-sm text-gray-300">
                                        {" "}
                                        {actualMovie?.overview}{" "}
                                    </p>
                                ) : (
                                    <p className=" text-sm text-gray-300">
                                        {" "}
                                        We don't have an overview translated in
                                        English. Help us expand our database by
                                        adding one.{" "}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className=" w-[90%] mx-auto text-white md:hidden ">
                {/* <p className="mb-2 italic text-gray-400"> {actualMovie?.tagline} </p> */}
                <h2 className="text-2xl font-medium text-white mb-2">
                    Overview
                </h2>
                {actualMovie?.overview ? (
                    <p className=" text-sm text-gray-300">
                        {" "}
                        {actualMovie?.overview}{" "}
                    </p>
                ) : (
                    <p className=" text-sm text-gray-300">
                        {" "}
                        We don't have an overview translated in English. Help us
                        expand our database by adding one.{" "}
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
                    <Cast allCast={allCast} />
                </div>
                {/* somethings about movie */}
                <div className=" w-full ">
                    <AboutM movie={actualMovie} />
                </div>
            </div>

            {/* recommendations  */}
            {recommendations?.length > 0 ? (
                <div className=" w-[90%] md:w-[85%] mx-auto border-b border-gray-500 pb-2">
                    <RecommendedMovies
                        recommendedMovies={recommendations}
                        type={type}
                    />
                </div>
            ) : (
                ""
            )}

            <div className="w-[90%] mx-auto relative -mt-4">
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

    if (MSLoaded || keysLoaded || RMSLoaded || castLoaded) {
        return <Loader />;
    }

    return content;
};

export default Detail;
