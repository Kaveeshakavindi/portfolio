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
    <div className="flex flex-col justify-center border border-slate-200 bg-slate-50 h-[12rem] rounded-lg relative hover:shadow-md hover:shadow-blue-400/20">
      <div className="w-full p-4">
        <div className="rounded-lg flex relative ">
          <div className="h-full flex flex-col">
            <p className="uppercase text-[10px] font-bold pb-2 text-gray-400">
              {lang}
            </p>
            <h1 className="text-sm font-bold flex text-left w-full">{title}</h1>
            <p className="text-justify text-xs text-gray-400 py-[3px]">
              {description}
            </p>
          </div>
        </div>
      </div>
      <a
        className="p-4 text-left text-xs text-blue-500 font-bold hover:text-blue-300"
        href={link}
      >
        View Code
      </a>
    </div>
  );
};

export default blogCard;
