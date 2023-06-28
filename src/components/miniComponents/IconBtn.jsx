import React, { useState } from "react";

const IconBtn = ({ icon, tooltip }) => {
  const [active, setActive] = useState(false);

  return (
    <div className="relative group w-max">
      <button
        onClick={() => setActive(!active)}
        className={`w-11 h-11 rounded-full bg-slate-900/90 ${
          active ? "text-red-500" : "text-white"
        } flex items-center justify-center text-sm`}
      >
        {" "}
        {icon}{" "}
      </button>
      <p className="hidden md:group-hover:block absolute top-12 md:hover:block px-5 py-1 bg-slate-800 text-white rounded md:left-1/2 transform md:-translate-x-1/2">
        {tooltip}
      </p>
    </div>
  );
};

export default IconBtn;
