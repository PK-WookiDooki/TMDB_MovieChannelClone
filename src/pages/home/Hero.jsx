import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SInput } from "../../components";
import { useDispatch } from "react-redux";
import { setKeyword } from "../../features/services/moviesSlice";

const Hero = ({ image }) => {
    const [search, setSearch] = useState("");

    const nav = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setSearch(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search.trim()) {
            return nav("/");
        }
        nav("search");
        dispatch(setKeyword(search));
        setSearch("");
    };

    return (
        <section className="w-full ">
            <div className=" h-full md:max-h-[500px] overflow-hidden relative ">
                <img
                    src={`https://image.tmdb.org/t/p/original` + image}
                    alt=""
                    className="w-full md:h-full  mix-blend-hard-light "
                />

                <div className=" absolute backdrop-blur-sm md:p-10 p-5 rounded-sm top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 md:w-[85%] md:h-[85%] w-[90%] h-[90%] bg-black/40 flex flex-col justify-center gap-3 ">
                    <h1 className="text-[5.8vw] font-bold">Welcome</h1>
                    <p className="text-[3vw] font-medium">
                        {" "}
                        Latest Popular Movies and Series to Discover.{" "}
                    </p>
                    <div className="flex flex-col gap-3">
                        <p className="text-medium md:hidden">
                            {" "}
                            <Link
                                to={"movies"}
                                className=" h-9 flex w-fit px-5 items-center rounded-sm bg-white text-black font-medium"
                            >
                                Explore Now.
                            </Link>{" "}
                        </p>
                        <SInput
                            value={search}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                            white={true}
                            full={true}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
