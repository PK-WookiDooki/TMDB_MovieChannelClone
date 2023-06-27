const FullCast = ({ array }) => {
  return (
    <div className="flex flex-col gap-5">
      {array.map((cast) => {
        return (
          <div key={cast.id} className="  min-w-max">
            {cast.department ? (
              <h2 className="mb-2 font-semibold"> {cast.department} </h2>
            ) : (
              ""
            )}
            <div className="flex gap-3 items-center">
              <div className="w-20 h-20 overflow-hidden rounded">
                <img
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/original` +
                        cast?.profile_path
                      : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9oSKY8qZ9JuZfNu9Wpu3-hh1wixh0SeV8mg&usqp=CAU"
                  }
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="">
                <h2 className=" font-semibold"> {cast.name} </h2>
                <p className="text-sm font-light">
                  {" "}
                  {cast.character
                    ? cast.character
                    : cast.job
                    ? cast.job
                    : ""}{" "}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FullCast;
