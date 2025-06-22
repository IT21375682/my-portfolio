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
      {/* Top Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-40 backdrop-blur-md shadow-md">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          {/* Logo */}
          <Link href="/" className="text-white text-lg font-bold">
            shandeep.dev
          </Link>

          {/* Desktop Links */}
          <ul className="hidden md:flex space-x-8">
            {NavLinks.map((link) => (
              <li key={link.path}>
                <a
                  href={link.path}
                  className="text-gray-300 hover:text-white text-sm font-medium transition"
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
            {open ? (
            //   <XMarkIcon className="w-6 h-6" />
        null
            ) : (
               <Bars3Icon className="w-6 h-6" />
           
            )}
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
          fixed top-0 left-0 z-50 h-screen w-full
          bg-gradient-to-b from-transparent via-black/70 to-white/10
          backdrop-blur-lg bg-opacity-10
          transform ${open ? 'translate-x-0' : '-translate-x-full'}
          transition-transform duration-300 ease-in-out
          flex flex-col justify-between pt-8 pb-6 px-6 md:hidden
        `}
      >
        {/* Logo + Close */}
        <div className="flex items-center justify-between mb-8">
          <Link href="/" onClick={() => setOpen(false)} className="text-white text-lg font-bold">
            shandeep.dev
          </Link>
          <button onClick={() => setOpen(false)} className="text-gray-300 hover:text-white">
            <XMarkIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Nav Links */}
        <nav className="flex-grow">
          {NavLinks.map((link) => (
            <a
              key={link.path}
              href={link.path}
              onClick={() => setOpen(false)}
              className="block mb-4 text-white text-base font-medium uppercase font-bold hover:text-gray-300 transition"
            >
              {link.title}
            </a>
          ))}
        </nav>

        {/* Socials */}
        <div className="mt-6 pt-6 border-t border-gray-800 flex items-center space-x-4">
          <a
            href="https://github.com/IT21375682"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaGithub className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/shandeep-jayapalan-8ba948243"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white transition"
          >
            <FaLinkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
