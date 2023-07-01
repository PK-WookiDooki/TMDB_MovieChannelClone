import RCard from "./RCard";

const Recommendation = ({ recommendedMovies, type }) => {
  const actualPath = type === "movie" ? "/movies/" : "/tv/";

  return (
    <div
      className="w-full pb-2 
   "
    >
      <h2 className="text-xl font-medium mb-3"> Recommendations </h2>
      <div className="w-full">
        <div className="flex gap-5 pb-5 cast overflow-x-scroll">
          {recommendedMovies?.map((movie) => {
            return <RCard key={movie.id} movie={movie} path={actualPath} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Recommendation;
