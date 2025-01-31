import React from "react";
import Image from "next/image";
import Link from "next/link";

interface miniCardProps {
  title: string;
  description: string;
  image: string;
  id: string;
}
const miniCard: React.FC<miniCardProps> = ({
  image,
  title,
  description,
  id,
}) => {
  return (
    <Link className="m-2" href={`/blog/${id}`}>
      <div className="bg-slate-50 rounded-lg p-4 text-left w-full h-[250px] flex flex-col justify-between">
        <div className="text-gray-400 text-xs">source</div>
        <div className="text-black font-bold text-lg py-3">{title}</div>
        <div className="flex justify-center">
          <Image
            src={image}
            alt="blog"
            width={60}
            height={50}
            className="rounded-lg"
          />
        </div>
        <div className="text-gray-400 text-xs py-3">{description}</div>
      </div>
    </Link>
  );
};

export default miniCard;
