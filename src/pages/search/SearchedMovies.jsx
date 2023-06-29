import cookie from "cookiejs";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllData } from "../../features/apis/getData";
import { Loader, MCard } from "../../components";
import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const SearchedMovies = () => {
  const [search, setSearch] = useState("");
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { keyword } = useSelector((state) => state.movies);
  const usedKeyword = keyword ? keyword : search;

  useEffect(() => {
    const keyword = cookie.get("keyword") ? cookie.get("keyword") : null;
    setSearch(keyword);
    getMovies();
  }, []);

  const getMovies = async () => {
    try {
      let allData = [];

      for (let i = 1; i <= 5; i++) {
        const allMovies = await getAllData("movie", i);
        const allSeries = await getAllData("tv", i);
        allData = [...allData, allMovies, allSeries].flat();
      }
      setIsLoading(false);
      setMovies(allData);
    } catch (error) {
      console.log(error);
    }
  };

  const searchedMovies = movies?.filter(
    (movie) =>
      movie.title?.toLowerCase().includes(usedKeyword.toLowerCase()) ||
      movie.name?.toLowerCase().includes(usedKeyword.toLowerCase())
  );

  console.log(searchedMovies);

  if (isLoading) {
    return <Loader />;
  }

  const backLink = (
    <p className="w-fit hover:text-white text-gray-300">
      <Link to={".."} className="flex items-center gap-1">
        {" "}
        <BsArrowLeft className="text-xl" /> Back to Main
      </Link>
    </p>
  );

  const detailPath = (movie) => {
    const path = movie.release_date ? "/movies/detail" : "/tv/detail";

    return path;
  };

  return (
    <section className="w-full">
      {searchedMovies?.length > 0 ? (
        <div className="">
          <div className="mt-5 py-5 bg-slate-500 w-full">
            <div className="w-[85%] mx-auto">
              <h2 className="text-2xl font-medium mb-3">
                {searchedMovies ? `Results For '${usedKeyword}'` : ""}
              </h2>
              {backLink}
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-3 items-center justify-center w-full md:w-[85%] mx-auto mt-5">
            {searchedMovies?.map((movie) => {
              return (
                <MCard key={movie.id} movie={movie} path={detailPath(movie)} />
              );
            })}
          </div>
        </div>
      ) : (
        <div
          className=" bg-slate-800  w-full
          mt-5 flex flex-col gap-3 items-center justify-center p-5"
        >
          <h2 className="text-xl font-medium text-center">
            {" "}
            There is no movie with {`'${usedKeyword}' `} !{" "}
          </h2>
          {backLink}
        </div>
      )}
    </section>
  );
};

export default SearchedMovies;
