import { Link, useParams } from "react-router-dom";
import { FullCast, Loader } from "../../components";
import { BsArrowLeft } from "react-icons/bs";
import {
  useGetTVByIDQuery,
  useGetTVCreditsByIDQuery,
} from "../../features/apis/tvApi";

const Credits = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetTVCreditsByIDQuery(id);
  const { data: movie } = useGetTVByIDQuery(id);
  const cast = data?.cast;
  const crew = data?.crew;

  if (isLoading) {
    return <Loader />;
  }

  return (
    <section className=" w-full mt-5">
      <div className="py-3 w-full bg-slate-500">
        <div className="w-[85%] mx-auto">
          <Link
            to={".."}
            className="
           flex items-center w-fit gap-3"
          >
            <img
              src={`https://image.tmdb.org/t/p/original` + movie?.poster_path}
              alt=""
              className="w-20 overflow-hidden rounded bg-red-200"
            />
            <div className="">
              <h2 className="text-2xl font-bold hover:text-gray-300 mb-1">
                {" "}
                {movie?.name}{" "}
                <span className="font-medium">
                  {" "}
                  ({movie?.first_air_date.slice(0, 4)}){" "}
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
        {cast.length > 0 ? (
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-5"> Cast </h2>
            <FullCast array={cast} />
          </div>
        ) : (
          ""
        )}
        {crew.length > 0 ? (
          <div className="w-full">
            <h2 className="text-lg font-semibold mb-5"> Crew </h2>
            <FullCast array={crew} />
          </div>
        ) : (
          ""
        )}
      </div>
    </section>
  );
};

export default Credits;
