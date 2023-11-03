import { Loader, MCard } from "../../components";
import {useGetAllPopularMoviesQuery, useGetMovieGenresQuery} from "../../features/apis/moviesApi";
import errImage from "../../assets/images/error.png";
import {Pagination, Select} from "antd";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {setMGenreId} from "../../features/services/moviesSlice.js";

const Movies = () => {

    const [page, setPage] = useState(1)
    const {mGenreId} = useSelector(state => state.movies)
    const dispatch = useDispatch()

    const {data : pMovies, isLoading : isMLoading, isFetching : isMFetching} = useGetAllPopularMoviesQuery({page, mGenreId});

    const totalResults = pMovies?.total_results > 2000 ? 2000 : pMovies?.total_results


    const onGenreIdChange = (value) => {
        dispatch(setMGenreId(value))
        setPage(1)
    }

    const { data, isLoading: isGLoading } = useGetMovieGenresQuery();
    const genres = data?.genres;

    if (isMLoading || isGLoading || isMFetching) {
        return <Loader />;
    }




    return (
        <section className=" min-h-screen w-full md:w-[85%] mx-auto flex flex-col gap-5 py-5">
            <div className={" p-5 rounded bg-slate-800 max-w-[90%] md:max-w-full mx-auto w-full "} >
                <label htmlFor={"genresBox"} className={" text-lg font-medium block mb-2 "} >
                    Genres List
                </label>
                <Select id={"genresBox"} className={" w-full !font-sans "} placeholder={"Select Genre"} onChange={onGenreIdChange} defaultValue={mGenreId}  >
                    <Select.Option value={"all"} className={" !font-sans"} > All </Select.Option>
                    {
                        genres?.map(genre => {
                            return <Select.Option value={genre?.id} key={genre?.id} className={" !font-sans"} > {genre?.name} </Select.Option>
                        })
                    }
                </Select>
            </div>


               {pMovies?.results?.length > 0 ? (
           <div>
                   <div className=" flex flex-wrap gap-3 justify-center ">
                       {pMovies?.results?.map((movie) => {
                           return <MCard key={movie.id} movie={movie} path={""} />;
                       })}
                   </div>
                   <Pagination total={totalResults} pageSize={pMovies?.results?.length} current={page} onChange={(value) => setPage(value)} className={ "flex items-center justify-center mt-5"} showSizeChanger={false}  responsive={true} showLessItems={true}/>
           </div>
               ) : (
                   <div className=" bg-slate-800 w-full text-center py-5 rounded h-full flex flex-col items-center justify-center mx-auto overflow-hidden ">
                       <img src={errImage} alt="" className="w-[80%]" />
                       <h2 className="text-2xl "> Sorry, No Results Found!</h2>
                   </div>
               )}

        </section>
    );
};

export default Movies;
