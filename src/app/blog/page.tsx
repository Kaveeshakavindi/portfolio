import React from "react";
import data from "../../../data.json";
import Image from "next/image";
import Link from "next/link";

const page = () => {
  return (
    <div className=" flex flex-col  p-[2rem] p-4 rounded-3xl m-4 bg-white ">
      <div className="grid md:grid-cols-2  w-full gap-4 ">
        {data.blogs.map((blog, index) => (
          <div
            key={index}
            className="md:h-[60vh] rounded-lg p-10 flex flex-col justify-center bg-gray-50 shadow-sm border border-slate-200"
          >
            <div className="text-lg font-bold">{blog.title}</div>
            <div className="text-gray-400 text-xs w-full">{blog.category}</div>
            <div>
              <Image
                src={blog.img}
                alt="blog"
                width={100}
                height={100}
                className="m-5"
              />
            </div>
            <div className="text-xs text-gray-400 py-4">{blog.description}</div>
            <div>
              {blog.tags.map((tag, index) => (
                <div
                  key={index}
                  className="text-indigo-400 bg-indigo-100 text-xs px-2 py-1 m-1 2 rounded-full inline-block"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="flex flex-grow"></div>
            <Link
              href={`/blog/${blog.id}`}
              className="bg-blue-500 rounded-lg text-center text-white border border-blue-500 text-sm font-bold py-3 my-4 hover:bg-blue-100 hover:text-blue-500 lg:w-[50%]"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
