import { useState } from "react";
import TrailerCard from "../cards/TrailerCard";

const TrailerCarousel = ({ selectedMovies, text }) => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const prevSlide = () => {
    if (currentSlide === 1) {
      setCurrentSlide(selectedMovies?.length);
    } else {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const nextSlide = () => {
    if (currentSlide === selectedMovies?.length) {
      setCurrentSlide(1);
    } else {
      setCurrentSlide(currentSlide + 1);
    }
  };

  // return (
  //   <div className="md:w-[85%] mt-5 w-[90%] mx-auto pb-2">
  //     <h2 className="text-xl font-medium"> {text} </h2>

  //     <div className=" flex items-center justify-center gap-3  ">
  //       {selectedMovies?.map((show, index) => {
  //         return (
  //           <div
  //             key={show.id}
  //             className={` ${
  //               currentSlide === index + 1 ||
  //               currentSlide - index === 0 ||
  //               currentSlide - index === selectedMovies?.length
  //                 ? "block"
  //                 : "hidden"
  //             } `}
  //           >
  //             <img
  //               src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
  //               alt=""
  //               className="w-44 max-w-[300px]"
  //             />
  //           </div>
  //         );
  //       })}
  //     </div>

  //     <div className=" flex items-center justify-between select-none ">
  //       <button onClick={prevSlide} className=" px-3 h-full bg-red-900/50">
  //         Prev
  //       </button>
  //       <button onClick={nextSlide} className=" px-3 h-full bg-red-900/50">
  //         Next
  //       </button>
  //     </div>
  //   </div>
  // );
  return (
    <div
      className="md:w-[85%] mt-5 w-[90%] mx-auto pb-2
   "
    >
      <h2 className="text-xl font-medium mb-3"> {text} </h2>
      <div className="w-full">
        <div className="flex gap-5 pb-5 cast overflow-x-scroll ">
          {selectedMovies?.map((movie) => {
            return <TrailerCard key={movie.id} movie={movie} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default TrailerCarousel;
