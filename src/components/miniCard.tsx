import React from 'react'
import Image from 'next/image'

interface miniCardProps{
title: string;
description: string;
image: string
}
const miniCard:React.FC<miniCardProps> = ({image, title, description}) => {
  return (
    <div className='bg-slate-50 rounded-lg p-4 text-left w-full m-2 '>
        <div className='text-gray-400 text-xs'>
            source
        </div>
        <div className='text-black font-bold text-lg py-3'>
            {title}
        </div>
        <div className='flex justify-center'>
            <Image 
                src={image} 
                alt="blog" 
                width={120} 
                height={100} 
                className="rounded-lg"
            />
        </div>        
        <div className='text-gray-400 text-xs py-3'>
            {description}
        </div>
    </div>
  )
}

export default miniCard