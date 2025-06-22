"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const NavLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-opacity-40 shadow-md backdrop-blur-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold">
            Shandeep.dev
          </Link>
 
          {/* Desktop */}
          <ul className="hidden md:flex space-x-8">
            {NavLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-gray-300 hover:text-white font-medium transition"
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Sidebar */}
<div
  className={`
    fixed top-0 left-0 z-50 h-full bg-[#111] w-3/4 max-w-xs
    transform ${open ? "translate-x-0" : "-translate-x-full"}
    transition-transform duration-300 ease-in-out
    md:hidden flex flex-col justify-between pt-20
  `}
>
  <div>
    {NavLinks.map((link) => (
      <a
        key={link.path}
        href={link.path}
        onClick={() => setOpen(false)}
        className="block px-6 py-4 text-white text-2xl font-extrabold uppercase hover:bg-gray-800 transition"
      >
        {link.title}
      </a>
    ))}
  </div>

  {/* Social Links at bottom */}
  <div className="px-6 py-8 space-y-4 border-t border-gray-800">
    <p className="text-gray-400 uppercase text-sm tracking-wide">Connect</p>
    <div className="flex space-x-6">
      <a
        href="https://github.com/IT21375682"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition"
      >
        <FaGithub className="w-6 h-6" />
      </a>
      <a
        href="https://linkedin.com/in/shandeep-jayapalan-8ba948243"
        target="_blank"
        rel="noopener noreferrer"
        className="text-gray-400 hover:text-white transition"
      >
        <FaLinkedin className="w-6 h-6" />
      </a>
    </div>
  </div>
</div>
    </>
  );
};

export default Navbar;
