import React from "react";
import { use } from "react";
import data from "../../../../data.json";
import Image from "next/image";
interface BlogPageProps {
  params: Promise<{ id: string }>;
}
interface BlogContent {
  type: string | null;
  content?: string | null;
  language?: string | null;
  code?: string[] | null;
  src?: string | null;
  caption?: string | null;
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
  if (!blog) {
    return <div>Story not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-[2rem] p-4 rounded-3xl  bg-white">
      <div className="bg-slate-200 px-5 py-2 rounded-3xl inline-block my-4 text-xs text-slate-500">
        source
      </div>
      <h1 className="font-bold text-3xl">{blog.title}</h1>
      <div className="py-4 text-xs text-gray-400">{blog.created_at}</div>
      <Image src={blog.img} alt="blog" height={100} width={100} />

      <div className="grid md:grid-cols-4 gap-20 w-full">
        <div className="col-span-1 ">
          <ul className="fixed max-lg:w-[150px] lg:w-full top-[250px]">
            {blog.content.map((item, index) => (
              <li
                className="max-md:hidden text-xs pb-2 text-slate-400"
                key={index}
              >
                {item.caption}
              </li>
            ))}
          </ul>
        </div>

        <div className="col-span-3">
          {blog.content.map((item, index) => (
            <div key={index} className=" text-justify">
              <p className="text-justify text-sm text-gray-500 pt-10 pb-1">
                {item?.caption}
              </p>
              <p className="text-justify text-sm text-gray-400 pb-2">
                {item?.content}
              </p>
              {item.code && item.code.length > 0 && (
                <div className="bg-slate-100 p-4 rounded-lg border border-slate-200">
                  <code
                    className={`language-${item?.language} text-justify text-xs text-gray-500`}
                    style={{ whiteSpace: "pre-wrap" }}
                  >
                    {item.code?.join("\n")}
                  </code>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
