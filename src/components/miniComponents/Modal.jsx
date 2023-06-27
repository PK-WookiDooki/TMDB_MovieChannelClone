import React, { useState } from "react";

import { BsPlayFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";

const Modal = ({ ytKey }) => {
  const [active, setActive] = useState(false);

  const handleModal = () => {
    setActive(true);
  };

  //   const stopVideo = () => {
  //     let video = document.querySelector("#youtubeVideo");
  //     video.c (
  //       '{"event":"command", "func":"stopVideo", "args":""}',
  //       "*"
  //     );
  //   };
  const closeModal = () => {
    setActive(false);
  };

  return (
    <div className="ml-3">
      <button
        onClick={handleModal}
        className=" flex items-center gap-1 hover:text-gray-400 duration-100"
      >
        <BsPlayFill className="text-3xl" /> Play Trailer
      </button>

      <div
        className={` ${active ? "flex" : "hidden"} fixed top-0 left-0 w-full
         h-full z-10 bg-black-900/70 items-center justify-center `}
      >
        <div className=" md:min-w-[50%] w-[95%] max-w-xl aspect-video ">
          <div
            className=" flex items-center justify-between p-3 bg-black
          "
          >
            <h2>Play Trailer</h2>
            <button onClick={closeModal} className="text-white text-2xl ">
              {" "}
              <RxCross1 />{" "}
            </button>
          </div>
          <iframe
            id="youtubeVideo"
            src={`https://www.youtube.com/embed/${ytKey}`}
            title="Trailer"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Modal;
