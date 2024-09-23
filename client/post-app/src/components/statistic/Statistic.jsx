import React from "react";

const Statistic = ({ src, title, num }) => {
  return (
    <>
      <div className="card-item rounded-lg p-8 bg-gray-800 ">
        <div className="flex gap-x-4">
          <div className="rounded-full p3 w-16 h-16 bg-green-300 ">
            <img className="" src={src} alt="custom" />
          </div>
          <div className=" flex flex-col text-white">
            <h3 className="mb-1 text-lg font-medium text-gray-600">{title}</h3>
            <b className="text-xl font-bold text-gray-200">{num}</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Statistic;
