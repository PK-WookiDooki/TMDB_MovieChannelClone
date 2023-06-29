const Genre = ({ genre, setGenreID, genreID }) => {
  return (
    <button
      onClick={() => setGenreID(genre.id)}
      className={` ${
        genreID === genre.id ? "bg-sky-400" : "bg-gray-300 hover:bg-white"
      } px-3 py-1 min-w-max rounded  text-black text-sm duration-100`}
    >
      {genre.name}
    </button>
  );
};

export default Genre;
