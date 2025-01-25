import React from 'react'
import '../../common.css'
import Image from 'next/image'
import blogImg from '../assets/heroImg.png'
import BlogCard from '@/components/blogCard'
import data from '../../data.json'
const Page = () => {
  return (
    <>
      <div className='section-1 rounded-xl m-4 bg-white p-4'>home</div>
      <div className='marquee rounded-xl m-4 bg-white p-4 '>
        <span className='w-full flex'>
          <i className='devicon-postgresql-plain text-3xl'></i>
          <i className='devicon-dynamodb-plain text-3xl'></i>
          <i className='devicon-mongodb-plain text-3xl'></i>
          <i className='devicon-dot-net-plain text-3xl'></i>
          <i className='devicon-dot-net-plain text-3xl'></i>
          <i className='devicon-dot-net-plain text-3xl'></i>
        </span>
      </div>
      <div className='section-3 rounded-xl m-4 bg-white p-4'>
        
        <div>
          {data.projects.map((project, index) => (
            <BlogCard 
            key={index}
            title={project.title}
            description={project.Description}
            link={project.link}
            />
          ))}
        </div>
      </div>
      <div className='section-1 rounded-xl m-4 bg-white p-4'>footer</div>
    </>
  )
}

export default Page
