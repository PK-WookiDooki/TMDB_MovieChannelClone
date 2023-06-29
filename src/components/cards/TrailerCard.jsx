import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { BsPlayFill } from "react-icons/bs";
import Modal from "../miniComponents/Modal";
import { useGetTVKeysQuery } from "../../features/apis/tvApi";

const TrailerCard = ({ movie }) => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(!active);
  };

  const { data: keys } = useGetTVKeysQuery(movie.id);

  const officialKey = keys?.results.find(
    (key) =>
      key.name.includes("Official") ||
      key.name.includes("Trailer") ||
      key.name.includes(movie?.name)
  );

  return (
    <div className=" min-w-[300px] overflow-visible">
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
      <div
        onClick={handleModal}
        className=" aspect-video w-full relative cursor-pointer rounded group"
      >
        <img
          src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          alt=""
          className=" w-full object-cover rounded brightness-[0.75] group-hover:scale-105 hover:brightness-100 duration-200  "
        />
        <p className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none ">
          {" "}
          <BsPlayFill className="text-7xl text-white group-hover:scale-125 duration-200" />{" "}
        </p>
      </div>
      <div className="mt-5 text-center">
        <h2 className="text-lg font-medium">
          {" "}
          {movie.title ? movie.title : movie.name}{" "}
        </h2>
        <p className="text-sm font-light text-gray-300">
          {" "}
          {officialKey?.name}{" "}
        </p>
      </div>
    </div>
  );
};

export default TrailerCard;
