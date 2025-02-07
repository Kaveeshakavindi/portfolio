import React from "react";
import data from "../../data.json";

const Timeline = () => {
  const cardbgs = ["teal", "red", "blue"];
  return (
    <div className=" flex flex-col items-center relative">
      <div className="max-md:left-0 absolute left-[50%] h-full w-[1px] bg-gradient-to-b from-white via-indigo-600 to-white"></div>

      {data.experiences.map((job, index) => (
        <div
          key={index}
          className=" grid md:grid-cols-2 w-full text-center items-center"
        >
          <div className="max-md:text-left md:text-right block col-span-1 flex items-center md:justify-end max-md:ml-5">
            <div className="max-md:left-0 absolute left-[50%] w-[10px] h-[10px] bg-indigo-600 rounded-full -translate-x-1/2 "></div>
            <div className="shadow-sm rounded-lg bg-slate-50 p-4 mr-5 border border-slate-200">
              <div className="text-indigo-600 text-md font-bold ">
                {job.position}
              </div>
              <div className="text-md text-indigo-400 pt-1">{job.date}</div>
            </div>
          </div>

          <div className="border border-gray-200 col-span-1 text-left shadow-sm m-5 p-5 rounded-lg md:w-[75%]">
            <div className="pb-2 text-[15px] text-gray-600 font-bold">
              {job.employer}
            </div>
            <div className="text-md text-gray-400 py-1" key={index}>
              {job.description}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
