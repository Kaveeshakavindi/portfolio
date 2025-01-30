import React from 'react'
import Image from 'next/image'
import blogImg from '../assets/heroImg.png'

interface BlogCardProps {
    title: string;
    description: string;
    link: string;
    image: string
  }

const blogCard: React.FC<BlogCardProps>= ({title, description, link, image}) => {
    return (
        <a href={link}>
        <div className='bg-white h-[10rem] rounded-lg flex relative '>
            <div className='bg-slate-50 rounded-lg flex relative m-1 w-full'>
            <Image src={image} alt="blog" width={120} height={100} className="rounded-lg m-4" />
            <div className='flex flex-col justify-between m-1 p-4 '>
                    <h1 className='font-bold md:text-lg lg:text-lg xl:text-lg '>{title}</h1>
                    <p className='text-justify text-xs text-gray-400 md:text-xs lg:text-sm xl:text-lg '>{description}</p>
                </div>
            </div>
        </div>
        </a>
    )
}

export default blogCard