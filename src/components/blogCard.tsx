import React from "react";
import Image from "next/image";

interface BlogCardProps {
  title: string;
  description: string;
  link: string;
  image: string;
  lang: string;
}

const blogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  link,
  image,
  lang,
}) => {
  return (
    <a href={link}>
      <div className="flex items-center border border-slate-200 bg-slate-50 h-[12rem] rounded-lg flex relative m-4 p-5 hover:shadow-md hover:shadow-blue-400/20">
        <div className="rounded-lg flex relative ">
          <div className="h-full flex m-1 p-4 flex-col">
            <p className="uppercase text-[10px] font-bold pb-2 text-indigo-500">
              built with {lang}
            </p>
            <h1 className="text-sm font-bold flex text-left w-full">{title}</h1>
            <p className="text-justify text-xs text-gray-400 py-[3px]">
              {description}
            </p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default blogCard;
