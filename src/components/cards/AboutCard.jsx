import React from "react";

const AboutCard = ({ number, desc }) => {
    return (
        <div className="flex gap-3 items-start">
            <p className="text-7xl font-bold text-red-800 min-w-[80px]">
                {number}
            </p>
            <p className="text-left text-gray-300">{desc}</p>
        </div>
    );
};

export default AboutCard;
