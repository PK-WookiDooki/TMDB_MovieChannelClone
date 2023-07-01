import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";
import { useGetMovieCreditsByIDQuery } from "../../features/apis/moviesApi";
import { useGetTVCreditsByIDQuery } from "../../features/apis/tvApi";

const Cast = ({ id, type }) => {
  const { data: movie } = useGetMovieCreditsByIDQuery(id);
  const { data: show } = useGetTVCreditsByIDQuery(id);
  const allCast =
    type === "movie" ? movie?.cast.slice(0, 10) : show?.cast.slice(0, 10);

  const content =
    allCast?.length > 0 ? (
      <div className="w-full">
        <h2 className="text-xl font-medium mb-3"> Top Billed Cast </h2>
        <div className="flex gap-3 overflow-x-scroll pb-5 cast">
          {allCast?.map((cast) => {
            return cast.profile_path ? (
              <div
                key={cast.id}
                className="min-w-[140px] max-w-[140px]  overflow-hidden text-black bg-white rounded "
              >
                <img
                  src={`https://image.tmdb.org/t/p/original${cast.profile_path}`}
                  alt=""
                  className=" rounded-t object-cover h-48 w-full"
                />
                <div className=" p-2">
                  <h2 className="font-semibold"> {cast.name} </h2>
                  <p className="text-sm font-light"> {cast.character} </p>
                </div>
              </div>
            ) : (
              ""
            );
          })}

          <div className="min-w-[140px] flex items-center justify-center">
            <h2 className="text-white hover:text-gray-400">
              <Link to={"cast"} className="flex items-center gap-1">
                {" "}
                View More <BsArrowRight className="text-xl" />{" "}
              </Link>
            </h2>
          </div>
        </div>
        <Link
          to={"cast"}
          className="mt-3 flex gap-1 items-center hover:text-gray-400 w-fit"
        >
          {" "}
          Full Cast & Crew <BsArrowRight className="text-xl" />
        </Link>
      </div>
    ) : (
      <div className="w-full bg-slate-800 rounded-sm p-3 h-full flex items-center justify-center ">
        <h2 className="text-xl font-medium text-center">
          {" "}
          There's no information about cast and crew!{" "}
        </h2>
      </div>
    );

  return content;
};

export default Cast;
