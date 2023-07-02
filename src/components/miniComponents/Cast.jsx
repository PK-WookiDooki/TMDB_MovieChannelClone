import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import "./style.css";
const Cast = ({ allCast }) => {
  const handleScroll = () => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  };

  const content =
    allCast.length > 0 ? (
      <div className="w-full">
        <h2 className="text-xl font-medium mb-3"> Top Billed Cast </h2>
        <div className="flex gap-3 overflow-x-scroll pb-5 cast">
          {allCast?.map((cast) => {
            return (
              <div
                key={cast.id}
                className="min-w-[140px] max-w-[140px]  overflow-hidden text-black bg-white rounded "
              >
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original${cast.profile_path}`
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oSKY8qZ9JuZfNu9Wpu3-hh1wixh0SeV8mg&usqp=CAU"
                  }
                  alt=""
                  className=" rounded-t object-cover h-48 w-full"
                />
                <div className=" p-2">
                  <h2 className="font-semibold"> {cast.name} </h2>
                  <p className="text-sm font-light"> {cast.character} </p>
                </div>
              </div>
            );
          })}

          <div className="min-w-[140px] flex items-center justify-center">
            <h2 className="text-white hover:text-gray-400">
              <Link
                onClick={handleScroll}
                to={"cast"}
                className="flex items-center gap-1"
              >
                {" "}
                View More <BsArrowRight className="text-xl" />{" "}
              </Link>
            </h2>
          </div>
        </div>
        <Link
          onClick={handleScroll}
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
