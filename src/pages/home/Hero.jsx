import React from "react";
import { Link } from "react-router-dom";

const Hero = ({ image }) => {
  return (
    <section className="w-full ">
      <div className=" h-full md:max-h-[500px] overflow-hidden relative ">
        <img
          src={`https://image.tmdb.org/t/p/original` + image}
          alt=""
          className="w-full md:h-full  mix-blend-hard-light "
        />

        <div className=" absolute backdrop-blur-sm p-3 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[85%] md:h-[85%] w-[95%] h-[95%] bg-black/40 flex flex-col justify-center gap-3 ">
          <h1 className="text-5xl font-bold ">Welcome</h1>
          <p className="text-xl font-medium">
            {" "}
            Latest Popular Movies and Series to Discover.{" "}
          </p>
          <p className="text-medium">
            {" "}
            <Link
              to={"movies"}
              className=" h-9 flex w-fit px-5 items-center rounded-sm bg-white text-black font-medium"
            >
              Explore Now.
            </Link>{" "}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
