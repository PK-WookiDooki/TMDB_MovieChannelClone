import { RxCross1 } from "react-icons/rx";

const Modal = ({ ytKey, handleModal, active }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" md:min-w-[75%] w-[95%] max-w-xl aspect-video ">
        <div
          className=" flex items-center justify-between p-3 bg-black
          "
        >
          <h2>Play Trailer</h2>
          <button onClick={handleModal} className="text-white text-2xl ">
            {" "}
            <RxCross1 />{" "}
          </button>
        </div>
        <iframe
          id="youtubeVideo"
          src={
            active
              ? `https://www.youtube.com/embed/${ytKey}?autoplay=1&mute=1`
              : null
          }
          title="Trailer"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default Modal;
