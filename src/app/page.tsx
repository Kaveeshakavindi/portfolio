import React from 'react'
import '../../common.css'
import Image from 'next/image'
import blogImg from '../assets/heroImg.png'

const Page = () => {
  return (
    <>
      <div className='section-1 rounded-xl m-4 bg-white p-4'>home</div>
      <div className='marquee rounded-xl m-4 bg-white p-4 '>
        <span className='w-full flex'>
          <i className='devicon-postgresql-plain text-3xl'>Java</i>
          <i className='devicon-dynamodb-plain text-3xl'>dynamodb</i>
          <i className='devicon-mongodb-plain text-3xl'>mongodb</i>
          <i className='devicon-dot-net-plain text-3xl'>.Net</i>
          <i className='devicon-dot-net-plain text-3xl'></i>
          <i className='devicon-dot-net-plain text-3xl'></i>
        </span>
      </div>
      <div className='section-3 rounded-xl m-4 bg-white p-4'>
        <div className='bg-slate-50 h-[10rem] rounded-lg flex'>
          <Image src={blogImg} alt='blog' className='rounded-lg w-vw h-auto'/>
          <div></div>
        </div>
        <div>
          blog
        </div>
        <div>
          blog
        </div>
      </div>
      <div className='section-1 rounded-xl m-4 bg-white p-4'>footer</div>
    </>
  )
}

export default Page
