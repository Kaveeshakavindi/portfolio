import React from "react";
import Image from "next/image";
import Link from "next/link";

interface miniCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
  tags: string[];
}
const miniCard: React.FC<miniCardProps> = ({
  image,
  title,
  description,
  id,
  tags,
}) => {
  return (
    <Link className="" href={`/blog/${id}`}>
      <div className="border border-slate-200 bg-slate-50 rounded-lg p-10 text-left w-full md:h-[50vh] flex flex-col justify-between hover:shadow-md hover:shadow-blue-400/20">
        <div className="text-gray-400 text-md">source</div>
        <div className="text-black font-bold text-lg py-2">{title}</div>
        <div className="flex justify-center p-10 ">
          <Image
            src={image}
            alt="blog"
            width={50}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div className="text-gray-400 text-md py-3">{description}</div>
        <div className="flex text-md flex-wrap ">
          {tags.map((item, index) => (
            <div
              key={index}
              className=" bg-indigo-100 text-indigo-500 px-2 py-1 m-1 rounded-full "
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default miniCard;
