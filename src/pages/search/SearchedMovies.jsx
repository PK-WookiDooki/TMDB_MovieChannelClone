import {useState } from "react";
import { Loader, MCard } from "../../components";
import {Link, useLocation} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import {useGetSearchedResultsQuery} from "../../features/apis/moviesApi.js";
import {Pagination} from "antd";

const SearchedMovies = () => {
    const query = useLocation().search;
    const searchParams = new URLSearchParams(query)

    const searchedKeyword = searchParams.get("query")
    const [page, setPage] = useState(1)

    const {data : searchedData, isLoading, isFetching} = useGetSearchedResultsQuery({keyword : searchedKeyword , page})
    const searchedResults = searchedData?.results

    const totalResults = searchedData?.total_results > 500 ? 500 : searchedData?.total_results

    if (isLoading || isFetching) {
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

    // movie has (release_date) and series has (first_air_date)
    const detailPath = (movie) => {
        const path = movie.release_date ? "/movies/" : "/tv/";
        return path;
    };

    return (
        <section className="w-full ">
            {searchedResults?.length > 0 ? (
                <div className="py-5">
                    <div className=" py-5 bg-slate-500 w-full">
                        <div className="w-[85%] mx-auto">
                            <h2 className="text-2xl font-medium mb-3">
                                {searchedResults
                                    ? `Results For '${searchedKeyword}'`
                                    : ""}
                            </h2>
                            {backLink}
                        </div>
                    </div>
                    <div className="flex flex-row flex-wrap gap-3 items-center justify-center w-full md:w-[85%] mx-auto py-5">
                        {searchedResults?.map((movie) => {
                            return (
                                <MCard
                                    key={movie.id}
                                    movie={movie}
                                    path={detailPath(movie)}
                                />
                            );
                        })}
                    </div>
                    <Pagination total={totalResults} pageSize={20} current={page} onChange={(value) => setPage(value)} className={ "flex items-center justify-center mt-5"} showSizeChanger={false}  responsive={true} showLessItems={true}/>
                </div>
            ) : (
                <div
                    className=" bg-slate-800  w-full
           flex flex-col gap-3 items-center justify-center p-5"
                >
                    <h2 className=" text-lg text-center">
                        {" "}
                        There is no movies or series with <span className={` font-medium text-xl italic `} >{`'${searchedKeyword}' `}</span> !{" "}
                    </h2>
                    {backLink}
                </div>
            )}
        </section>
    );
};

export default SearchedMovies;
