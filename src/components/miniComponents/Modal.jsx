import { RxCross1 } from "react-icons/rx";

const Modal = ({ ytKey, handleModal, active }) => {
  return (
    <div className="w-full flex items-center justify-center">
      <div className=" md:min-w-[75%] w-[95%] max-w-xl  bg-black rounded-sm overflow-hidden ">
        <div
          className=" flex items-center justify-between p-5
          "
        >
          <h2 className="text-lg">Playing Trailer</h2>
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
          className="w-full h-full aspect-video py-2"
        />
      </div>
    </div>
  );
};

export default Modal;
