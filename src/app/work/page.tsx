import React from "react";
import data from "../../../data.json";
import Image from "next/image";

const page = () => {
  return (
    <div className="flex flex-col  p-[2rem] p-4 rounded-3xl m-4 bg-white ">
      <div className="p-4 text-3xl font-bold text-blue-500">
        Welcome to My Projects!
      </div>
      <div className="text-gray-400 text-md p-4 mb-4 w-full text-justify">
        Take a look at some of the exciting things I've been working on! Whether
        it's Swift, Java, or just plain problem-solving, each project was a
        journey of learning, building, and having a little fun along the way.
      </div>
      <div className="grid max-lg:grid-cols-2 lg:grid-cols-2 w-full gap-4 ">
        {data.projects.map((project, index) => (
          <div
            key={index}
            className="md:h-[60vh] rounded-lg p-10 flex flex-col justify-between bg-gray-50 shadow-sm border border-slate-200"
          >
            <div className="text-lg font-bold">{project.title}</div>
            <div className="text-gray-400 text-md w-full">{project.year}</div>
            <div className="flex justify-center">
              <Image
                src={project.img}
                alt="blog"
                width={100}
                height={100}
                className="m-5 max-w-[100px] max-h-[150px]"
              />
            </div>
            <div className="text-md text-gray-400 py-4 w-full text-justify">
              {project.Description}
            </div>
            <div>
              {project.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-indigo-400 bg-indigo-100 text-md px-2 py-1 m-1 2 rounded-full inline-block"
                >
                  {tag}
                </div>
              ))}
            </div>
            <a
              href={project.link}
              className="bg-blue-500 rounded-lg text-center text-white border border-blue-500 text-md font-bold py-3 my-4 hover:bg-blue-100 hover:text-blue-500 "
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
