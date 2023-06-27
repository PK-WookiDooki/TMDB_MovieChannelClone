import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { AboutM, Cast, Genre, Loader, Rating, SMenu } from "../../components";
import { getFormattedRating, getHrsFromMins } from "../../features/functions";
import Modal from "../../components/miniComponents/Modal";
import "./style.css";
import {
  useGetMovieByIDQuery,
  useGetMovieKeysQuery,
} from "../../features/apis/moviesApi";
import { BsArrowRight } from "react-icons/bs";

const Detail = () => {
  const { id } = useParams();

  const { data: movie, isLoading } = useGetMovieByIDQuery(id);
  const { data: keys } = useGetMovieKeysQuery(id);
  const officialKey = keys?.results.find((key) =>
    key.name.includes("Official Trailer")
  );

  console.log(movie);

  const formattedRunTime = movie?.runtime ? getHrsFromMins(movie?.runtime) : "";

  const formattedRating = movie?.vote_average
    ? getFormattedRating(movie?.vote_average)
    : "";

  if (isLoading) {
    return <Loader />;
  }

  // const detail = {
  //   adult: false,
  //   backdrop_path: "/e2Jd0sYMCe6qvMbswGQbM0Mzxt0.jpg",
  //   belongs_to_collection: {
  //     id: 9485,
  //     name: "The Fast and the Furious Collection",
  //     poster_path: "/yvr1Ziehgps1VJyug8nnezTJRJW.jpg",
  //     backdrop_path: "/z5A5W3WYJc3UVEWljSGwdjDgQ0j.jpg",
  //   },
  //   budget: 340000000,
  //   genres: [
  //     {
  //       id: 28,
  //       name: "Action",
  //     },
  //     {
  //       id: 80,
  //       name: "Crime",
  //     },
  //     {
  //       id: 53,
  //       name: "Thriller",
  //     },
  //   ],
  //   homepage: "https://fastxmovie?.com",
  //   id: 385687,
  //   imdb_id: "tt5433140",
  //   original_language: "en",
  //   original_title: "Fast X",
  //   overview:
  //     "Over many missions and against impossible odds, Dom Toretto and his family have outsmarted, out-nerved and outdriven every foe in their path. Now, they confront the most lethal opponent they've ever faced: A terrifying threat emerging from the shadows of the past who's fueled by blood revenge, and who is determined to shatter this family and destroy everything—and everyone—that Dom loves, forever.",
  //   popularity: 6963.783,
  //   poster_path: "/fiVW06jE7z9YnO4trhaMEdclSiC.jpg",
  //   production_companies: [
  //     {
  //       id: 33,
  //       logo_path: "/8lvHyhjr8oUKOOy2dKXoALWKdp0.png",
  //       name: "Universal Pictures",
  //       origin_country: "US",
  //     },
  //     {
  //       id: 333,
  //       logo_path: "/5xUJfzPZ8jWJUDzYtIeuPO4qPIa.png",
  //       name: "Original Film",
  //       origin_country: "US",
  //     },
  //     {
  //       id: 1225,
  //       logo_path: "/rIxhJMR7oK8b2fMakmTfRLY2TZv.png",
  //       name: "One Race",
  //       origin_country: "US",
  //     },
  //     {
  //       id: 34530,
  //       logo_path: null,
  //       name: "Perfect Storm Entertainment",
  //       origin_country: "US",
  //     },
  //   ],
  //   production_countries: [
  //     {
  //       iso_3166_1: "US",
  //       name: "United States of America",
  //     },
  //   ],
  //   release_date: "2023-05-17",
  //   revenue: 686700000,
  //   runtime: 142,
  //   spoken_languages: [
  //     {
  //       english_name: "Spanish",
  //       iso_639_1: "es",
  //       name: "Español",
  //     },
  //     {
  //       english_name: "Italian",
  //       iso_639_1: "it",
  //       name: "Italiano",
  //     },
  //     {
  //       english_name: "Portuguese",
  //       iso_639_1: "pt",
  //       name: "Português",
  //     },
  //   ],
  //   status: "Released",
  //   tagline: "The end of the road begins.",
  //   title: "Fast X",
  //   video: false,
  //   vote_average: 7.307,
  //   vote_count: 2007,
  // };

  return (
    <div className="font-[Poppins] flex flex-col gap-10 w-full select-none">
      <div className="  lg:h-[600px] w-full relative">
        <div className="overflow-hidden h-full">
          {/* backdrop poster */}
          <img
            src={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
            alt=""
            className="w-full mix-blend-soft-light hidden lg:block "
          />

          <img
            src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
            alt=""
            className="w-full mix-blend-soft-light lg:hidden block "
          />
        </div>

        {/* movie? details */}
        <div className="absolute backdrop-blur-[1px] p-3 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[85%] lg:h-[85%] w-[95%] h-[95%] bg-black/30 flex flex-col lg:flex-row items-center gap-5">
          {/* poster */}
          <div className=" lg:h-full lg:min-w-max lg:w-auto w-full overflow-hidden ">
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
              alt=""
              className="h-full object-contain rounded-sm hidden lg:block"
            />
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.backdrop_path}
              alt=""
              className=" max-h-[500px] h-full w-full object-cover rounded-sm lg:hidden block"
            />
          </div>

          <div className="w-full">
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
              <div className="flex gap-1 mt-1 items-center flex-wrap">
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
            <div className="mt-5 flex items-center">
              <Rating formattedRating={formattedRating} />
              <SMenu />
              <Modal ytKey={officialKey?.key} />
            </div>

            {/* movie? overview */}
            <div className="mt-5">
              <p className="mb-2 italic text-gray-400"> {movie?.tagline} </p>
              <h2 className="text-2xl font-medium text-white mb-2">Overview</h2>
              <p className=" text-sm text-gray-300"> {movie?.overview} </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="md:w-[85%] w-[90%] mx-auto grid grid-cols-12 gap-10 border-b border-gray-500 pb-2 place-content-center 
       "
      >
        {/* cast and crew */}
        <div className=" md:col-span-9 col-span-12 border-b pb-3 md:pb-0 md:border-0 border-gray-500">
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
        <div className=" md:col-span-3 col-span-12 ">
          <AboutM movie={movie} />
        </div>
      </div>
    </div>
  );
};

export default Detail;
