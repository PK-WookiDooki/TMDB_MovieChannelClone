import "./loader.css";

const Loader = () => {
  return (
    // <div className="loader w-full">
    //   <div className="loader-text">Loading...</div>
    //   <div className="loader-bar"></div>
    // </div>
      <div className={" bg-slate-800/60 fixed h-full w-full top-0 left-0 z-20 flex items-center justify-center "}>
          <div className="wrapper">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
              <div className="shadow"></div>
          </div>
      </div>
  );
};

export default Loader;
