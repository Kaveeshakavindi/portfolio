'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
const Navbar = () => {
  const pathname = usePathname()
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Blogs', path: '/blog' },
    { name: 'Contact', path: '/contact' }
  ]

  return (
    <div className='flex justify-between items-center p-4 top-0 rounded-3xl m-4 bg-white'>
      <div>
        <a href='/'>#</a>
      </div>
      <div className=''>
        {navItems.map((item, key) => (
          <Link
            key={key}
            href={item.path}
            className={`px-4 hover:text-slate-950 ${
              pathname === item.path
                ? 'text-slate-950 bg-fuchsia-400 p-3 rounded-3xl '
                : 'text-slate-500 p-3'
            } `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Navbar
