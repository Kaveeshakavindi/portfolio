import React from "react";
import data from "../../../data.json";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col  p-[2rem] p-4 rounded-3xl m-4 bg-white ">
      <div className="grid md:grid-cols-2  w-full gap-4 ">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="h-[70vh] rounded-lg p-10 flex flex-col justify-between  bg-gray-50 shadow-sm border border-slate-200"
          >
            <div className="text-lg font-bold">{project.title}</div>
            <div className="text-gray-400 text-xs w-full">{project.year}</div>
            <div>
              <Image
                src={project.img}
                alt="blog"
                width={100}
                height={100}
                className="m-5"
              />
            </div>
            <div className="text-xs text-gray-400 py-4">
              {project.Description}
            </div>
            <div>
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-indigo-400 bg-indigo-100 text-xs px-2 py-1 m-1 2 rounded-full inline-block"
                >
                  {tag}
                </div>
              ))}
            </div>
            <a
              href={project.link}
              className="bg-blue-500 rounded-lg text-center text-white border border-blue-500 text-sm font-bold py-3 my-4 hover:bg-blue-100 hover:text-blue-500 lg:w-[50%]"
            >
              <i className="devicon-github-original pr-2 "></i>View Code
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
