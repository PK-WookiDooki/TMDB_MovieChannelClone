import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({
    value,
    handleChange,
    handleSubmit,
    sm,
    white,
    full,
}) => {
    return (
        <form
            onSubmit={handleSubmit}
            className={` w-full ${
                full ? "w-full" : "md:max-w-[250px]"
            }  h-9 rounded-sm flex items-center justify-between border px-2 ${
                sm
                    ? " border-gray-400 bg-gray-400"
                    : white
                    ? "border-gray-100 bg-gray-100"
                    : "border-slate-700 px-2 bg-slate-700"
            }`}
        >
            <BsSearch className={` ${white ? "text-black" : ""}`} />
            <input
                type="text"
                value={value}
                onChange={handleChange}
                className={` ${
                    sm
                        ? " placeholder:text-gray-600/70 text-black"
                        : white
                        ? "placeholder:text-gray-400 text-black"
                        : ""
                } w-full h-full outline-none px-2 bg-transparent`}
                placeholder="Search Here . . ."
            />
        </form>
    );
};

export default SearchInput;
