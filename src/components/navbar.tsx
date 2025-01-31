"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { PiScribbleDuotone } from "react-icons/pi";
const Navbar = () => {
  const pathname = usePathname();
  const navItems = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: "Blogs", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <div className="flex justify-between items-center p-4 top-0 rounded-3xl m-4 bg-white">
      <div>
        <a href="/" className="flex items-center justify-center ">
          <PiScribbleDuotone /> Kaveesha
        </a>
      </div>
      <div className="">
        {navItems.map((item, key) => (
          <Link
            key={key}
            href={item.path}
            className={`px-4 hover:text-blue-400 ${
              pathname === item.path
                ? "text-blue-400 bg-blue-50 px-4 py-2 rounded-3xl text-sm"
                : "text-blue-300 p-3 text-sm"
            } `}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
