import { Link } from "react-router-dom";
import Title from "./Title";
import { BsLink } from "react-icons/bs";

const AboutMovie = ({ movie }) => {
  return (
    <div className="w-full flex flex-col gap-5 select-none ">
      <Link
        to={movie?.homepage}
        target="_blank"
        className="group relative w-fit"
      >
        {" "}
        <BsLink className="text-3xl" />{" "}
        <p className=" hidden md:group-hover:block absolute bottom-8 md:hover:block px-5 py-1 bg-slate-800 text-white rounded md:left-1/2 transform md:-translate-x-1/2 min-w-max">
          Visit Homepage{" "}
        </p>
      </Link>

      <Title
        header={"Original Title"}
        text={
          movie?.original_title ? movie?.original_title : movie?.original_name
        }
      />
      <Title header={"Status"} text={movie?.status} />
      <Title header={"Original Language"} text={movie?.spoken_languages} />
      <Title header={"Budget"} text={"-"} />
      <Title header={"Revenue"} text={"-"} />
    </div>
  );
};

export default AboutMovie;
