import React from "react";
import { Link } from "react-router-dom";

const Genre = ({ genre }) => {
  return (
    <Link className="px-3 py-1 rounded-sm bg-gray-300 hover:bg-white text-black text-sm duration-100">
      {genre.name}
    </Link>
  );
};

export default Genre;
