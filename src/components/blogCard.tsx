import React from 'react'
import Image from 'next/image'
import blogImg from '../assets/heroImg.png'

interface BlogCardProps {
    title: string;
    description: string;
    link: string;
  }

const blogCard: React.FC<BlogCardProps>= ({title, description, link}) => {
    return (
        <div className='bg-white h-[10rem] rounded-lg flex relative'>
            <div className='bg-gray-100 rounded-lg flex relative m-2 w-full'>
                <Image src={blogImg} alt='blog' className='rounded-lg flex h-auto w-auto m-4' />
                <div className='flex flex-col justify-between m-1 p-4 '>
                    <h1 className='font-bold'>{title}</h1>
                    <p className='text-justify text-sm h-[4rem] overflow-hidden'>{description}</p>
                    <p className='text-xs text-gray-500'><a href={link}>read more</a></p>
                </div>
            </div>
        </div>
    )
}

export default blogCard