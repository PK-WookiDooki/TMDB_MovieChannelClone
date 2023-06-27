import React from "react";

const Title = ({ header, text }) => {
  return (
    <div className="">
      <h2 className="text-lg"> {header} </h2>{" "}
      {Array.isArray(text) ? (
        <div className="">
          {text.map((item, index) => {
            return (
              <span className="font-light text-gray-300" key={index}>
                {" "}
                {item.english_name}
                {index < text.length - 1 ? ", " : ""}{" "}
              </span>
            );
          })}
        </div>
      ) : (
        <p className="font-light text-gray-300">{text}</p>
      )}{" "}
    </div>
  );
};

export default Title;
