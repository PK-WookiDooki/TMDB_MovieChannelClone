import { useState } from "react";
import { Loader, MCard } from "../../components";
import {useGetAllPopularSeriesQuery, useGetTVGenresQuery} from "../../features/apis/tvApi";
import {useDispatch, useSelector} from "react-redux";
import errImage from "../../assets/images/error.png";
import {Pagination, Select} from "antd";
import {setSGenreId} from "../../features/services/moviesSlice.js";

const Series = () => {

    const [page, setPage] = useState(1)
    const {sGenreId} = useSelector(state => state.movies)
    const {data : pSeries, isLoading : isSLoading} = useGetAllPopularSeriesQuery({page, sGenreId})

    const { data, isLoading: isGLoading } = useGetTVGenresQuery();
    const genres = data?.genres;

    const totalResults = pSeries?.total_results > 2000 ? 2000 : pSeries?.total_results

    const dispatch = useDispatch();

    const onGenreIdChange = (value) => {
        dispatch(setSGenreId(value))
        setPage(1)
    }

    if (isSLoading || isGLoading) {
        return <Loader />;
    }

    return (
        <div className="min-h-screen items-start w-full md:w-[85%] mx-auto flex flex-col gap-5 py-5 ">

            <div className={" p-5 rounded bg-slate-800 max-w-[90%] md:max-w-full mx-auto w-full "} >
                <label htmlFor={"genresBox"} className={" text-lg font-medium block mb-2 "} >
                    Genres List
                </label>
                <Select id={"genresBox"} className={" w-full !font-sans "} placeholder={"Select Genre"} onChange={onGenreIdChange} defaultValue={sGenreId}  >
                    <Select.Option value={"all"} className={" !font-sans"} > All </Select.Option>
                    {
                        genres?.map(genre => {
                            return <Select.Option value={genre?.id} key={genre?.id} className={" !font-sans"} > {genre?.name} </Select.Option>
                        })
                    }
                </Select>
            </div>

            {pSeries?.results?.length > 0 ? (
                <div>
                    <div className=" flex flex-row flex-wrap gap-3 w-full justify-center ">
                        {pSeries?.results?.map((show) => {
                            return <MCard key={show.id} movie={show} path={""} />;
                        })}
                    </div>
                    <Pagination total={totalResults} pageSize={pSeries?.results?.length} current={page} onChange={(value) => setPage(value)} className={ "flex items-center justify-center mt-5"} showSizeChanger={false} responsive={true} showLessItems={true}   />
                </div>
            ) : (
                <div className=" bg-slate-800 w-full text-center py-5 rounded-sm h-full flex items-center justify-center mx-auto ">
                    <img src={errImage} alt="" />
                    <h2 className="my-auto text-2xl ">
                        {" "}
                        Sorry, No Results Found!
                    </h2>
                </div>
            )}
        </div>
    );
};

export default Series;
