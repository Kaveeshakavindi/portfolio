"use client";
import React from "react";
import { use, useState, useEffect } from "react";
import data from "../../../../data.json";
import Image from "next/image";
import { PiCaretRightFill } from "react-icons/pi";
interface BlogPageProps {
  params: Promise<{ id: string }>;
}
interface BlogContent {
  type: string | null;
  content?: string | null;
  language?: string | null;
  code?: string[] | null;
  src: string | null | "";
  caption?: string | null;
  list: string[] | null;
}
interface Blog {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  img: string;
  content: BlogContent[];
  created_at: string;
  updated_at: string;
  tags: string[];
}
export default function BlogPage({ params }: BlogPageProps) {
  const { id } = use(params);
  const blog = data.blogs.find((blog) => blog.id === id);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-[2rem]  rounded-3xl  bg-white m-4">
      <div className="bg-slate-200 px-5 py-2 rounded-3xl inline-block my-4 text-md text-slate-500">
        source
      </div>
      <h1 className="font-bold text-3xl">{blog.title}</h1>
      <div className="py-4 text-md text-gray-400">{blog.created_at}</div>
      <Image src={blog.img} alt="blog" height={100} width={100} />

      <div className="grid md:grid-cols-4 max-md:grid-cols-1 gap-20 w-full">
        <div className="col-span-1 ">
          <ul
            className={` fixed max-lg:w-[12rem] lg:w-[15rem] transition-all duration-500 ${
              isScrolled ? "top-[50px]" : "top-[300px]"
            }`}
          >
            {blog.content.map((item, index) =>
              item.caption !== null ? (
                <li
                  className="max-md:hidden text-xs pb-1 text-slate-400"
                  key={index}
                >
                  {item.caption}
                </li>
              ) : (
                ""
              )
            )}
          </ul>
        </div>

        <div className="col-span-3 ">
          <p className="text-justify text-md text-gray-500 pb-3 ">
            {blog?.description}
          </p>
          {blog.content.map((item, index) => (
            <div key={index} className=" text-justify">
              {item.caption !== null ? (
                <p className="text-justify text-md font-bold text-gray-600 py-3">
                  {item?.caption}
                </p>
              ) : (
                ""
              )}
              {item.content !== null ? (
                <p className="text-justify text-md text-gray-500 pb-3">
                  {item?.content}
                </p>
              ) : (
                ""
              )}
              {item.list !== null
                ? item.list?.map((li, index) => (
                    <p
                      className="flex text-justify text-md text-pink-700 py-2 pl-4 hover:bg-pink-100 "
                      key={index}
                    >
                      <PiCaretRightFill className="text-xl " />
                      {li}
                    </p>
                  ))
                : ""}

              {item.src && item.src !== "" ? (
                <Image
                  src={item.src}
                  alt="blog"
                  height={100}
                  width={600}
                  className="w-[75vw] "
                />
              ) : (
                ""
              )}
              {item.code && item.code.length > 0 && (
                <div className="bg-slate-100 my-3 p-4 mb-4 rounded-lg border border-slate-200 ">
                  <code
                    className={`language-${item?.language}   text-xs text-gray-500`}
                    style={{ whiteSpace: "pre-wrap", wordWrap: "break-word" }}
                  >
                    {item.code?.join("\n")}
                  </code>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="h-[10rem]"></div>
      </div>
    </div>
  );
}
