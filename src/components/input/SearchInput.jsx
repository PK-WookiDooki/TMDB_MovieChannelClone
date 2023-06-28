import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchInput = ({ value, handleChange, handleSubmit, sm }) => {
  return (
    <form
      onSubmit={handleSubmit}
      className={` w-full md:max-w-[250px] h-9 rounded-sm flex items-center justify-between border px-2 ${
        sm
          ? " border-gray-400 bg-gray-400"
          : "border-slate-700 px-2 bg-slate-700"
      }`}
    >
      <BsSearch />
      <input
        type="text"
        value={value}
        onChange={handleChange}
        className={` ${
          sm ? " placeholder:text-gray-600/70 text-black" : ""
        } w-full h-full outline-none px-2 bg-transparent`}
        placeholder="Search Here . . ."
      />
    </form>
  );
};

export default SearchInput;
