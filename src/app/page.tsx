import React from "react";
import "../../common.css";
import Image from "next/image";
import blogImg from "../assets/heroImg.png";
import BlogCard from "@/components/blogCard";
import data from "../../data.json";
import Link from "next/link";
import MiniCard from "@/components/miniCard";
const Page = () => {
  return (
    <>
      <div className="section-1 rounded-xl m-4 bg-white p-4"></div>
      <div className="marquee rounded-xl m-4 bg-white p-4 ">
        <span className="w-full flex">
          <i className="devicon-postgresql-plain text-3xl"></i>
          <i className="devicon-dynamodb-plain text-3xl"></i>
          <i className="devicon-mongodb-plain text-3xl"></i>
          <i className="devicon-dot-net-plain text-3xl"></i>
          <i className="devicon-dot-net-plain text-3xl"></i>
          <i className="devicon-dot-net-plain text-3xl"></i>
        </span>
      </div>

      {/**Blogs */}
      <div className="section-3 rounded-xl m-4 bg-white p-4">
        <div className="m-4 font-bold text-lg">Blogs</div>
        <div className="grid grid-cols-3 gap-4">
          {data.blogs.slice(0, 3).map((blog, index) => (
            <MiniCard
              key={index}
              image={blog.img}
              title={blog.title}
              description={blog.subtitle}
              id={blog.id}
            />
          ))}
        </div>
        <div className="m-4 text-xs text-right text-gray-400">
          <Link href="/blog">See more </Link>
        </div>
      </div>
      {/**projects */}
      <div className="section-3 rounded-xl m-4 bg-white p-4">
        <div className="m-4 font-bold text-lg">Projects</div>
        <div>
          {data.projects.map((project, index) => (
            <BlogCard
              key={index}
              title={project.title}
              description={project.Description}
              link={project.link}
              image={project.img}
            />
          ))}
        </div>
        <div className="m-4 text-xs text-right text-gray-400">
          <Link href="/work">See more </Link>
        </div>
      </div>

      <div className="section-1 rounded-xl m-4 bg-white p-4">footer</div>
    </>
  );
};

export default Page;
