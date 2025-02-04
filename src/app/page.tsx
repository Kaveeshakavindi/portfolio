import React from "react";
import "../../common.css";
import BlogCard from "@/components/blogCard";
import data from "../../data.json";
import Link from "next/link";
import MiniCard from "@/components/miniCard";
import { PiRocketLaunchLight } from "react-icons/pi";
import { PiAtomLight } from "react-icons/pi";
import { PiMusicNotesLight } from "react-icons/pi";
import Timeline from "@/components/timeline";
const Page = () => {
  return (
    <>
      {/**hero section */}
      <div className="section-1 rounded-xl m-4 bg-white p-4 relative h-[50vh] flex justify-center flex-col">
        <div className="text-xs text-gray-400 text-center">
          THROUGH LENS OF DISCOVERY
        </div>
        <div className="flex justify-center w-full items-center ">
          <div className="py-10 max-lg:text-3xl lg:text-5xl max-lg:w-[75%] lg:w-[50%] items-center text-center">
            Engineer stories that
            <span className="inline-flex">
              <PiRocketLaunchLight className="text-rose-400 ml-2" />
            </span>
            inspire,
            <span className="inline-flex">
              <PiAtomLight className="text-blue-400 ml-2" />
            </span>
            educate, and{" "}
            <span className="inline-flex">
              <PiMusicNotesLight className="text-green-400 ml-2" />
            </span>{" "}
            entertain
          </div>
        </div>
        <p className="text-center text-gray-400 text-[8px]">
          Kaveesha Fernando Portfolio &copy; 2025
        </p>
      </div>
      {/**Blogs */}
      <div className="section-3 rounded-xl m-4 bg-white p-10">
        <div className="m-4 font-bold text-lg py-4">Blogs</div>
        <div className="grid  max-md:grid-cols-1 max-lg:grid-cols-2 lg:grid-cols-3 gap-4 ">
          {data.blogs.slice(0, 3).map((blog, index) => (
            <MiniCard
              key={index}
              image={blog.img}
              title={blog.title}
              description={blog.subtitle}
              id={blog.id}
              tags={blog.tags}
            />
          ))}
        </div>
        <div className="m-4 text-xs text-right text-gray-400">
          <Link href="/blog">See more </Link>
        </div>
      </div>
      {/**expereince */}
      <div className="section-3 rounded-xl m-4 bg-white p-10">
        <div className="m-4 font-bold text-lg py-4">Experience</div>
        <Timeline />
      </div>
      {/**services / tech stack */}
      {/**projects */}
      <div className="section-3 rounded-xl m-4 bg-white p-10 ">
        <div className="font-bold text-lg py-4">Projects</div>
        <div className="grid gap-4 lg:grid-cols-2 max-lg:grid-cols-1 ">
          {data.projects.slice(0, 2).map((project, index) => (
            <div className="lg:col-span-1" key={index}>
              <BlogCard
                key={index}
                title={project.title}
                description={project.Description}
                link={project.link}
                image={project.img}
                lang={project.lang}
              />
            </div>
          ))}
        </div>
        <div className="m-4 text-xs text-right text-gray-400">
          <Link href="/work">See more </Link>
        </div>
      </div>
      {/**values */}
    </>
  );
};

export default Page;
