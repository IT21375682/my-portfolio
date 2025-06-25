// components/NeonNavbar.tsx
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function NeonNavbar() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastY, setLastY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setShow(y < lastY || y < 50);
      setLastY(y);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md
          transform transition-transform duration-300
          ${show ? "translate-y-0" : "-translate-y-full"}
        `}
      >
        <div className="max-w-screen-xl mx-auto flex items-center justify-between px-6 py-4">
          <Link href="/" className="neon-logo">
            shandeep.dev
          </Link>

          <ul className="hidden md:flex space-x-12">
            {LINKS.map((l) => (
              <li key={l.href} className="relative neon-item group">
                <a href={l.href} className="text-gray-300 uppercase font-semibold">
                  {l.name}
                </a>
                <span className="neon-underline" />
              </li>
            ))}
          </ul>

          <button
            className="md:hidden text-cyan-400 hover:text-white"
            onClick={() => setOpen(!open)}
          >
            {open ? <XMarkIcon className="w-6 h-6 neon-icon" /> : <Bars3Icon className="w-6 h-6 neon-icon" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`
          fixed inset-0 z-40 bg-black/70 backdrop-blur-sm
          transition-opacity duration-300 ${open ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        onClick={() => setOpen(false)}
      />
      <div
        className={`
          fixed top-0 left-0 z-50 h-full w-3/4 max-w-xl bg-black/90 bg-opacity-50 backdrop-blur-lg
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        <div className="px-6 pt-8 pb-4 border-b border-cyan-600/30">
          <Link href="/" onClick={() => setOpen(false)} className="neon-logo  text-cyan-400 text-xl">
            shandeep.dev
          </Link>
        </div>
        <nav className="flex flex-col px-6 py-8 space-y-6">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-white text-2xl font-bold neon-item group"
            >
              {l.name}
              <span className="neon-underline" />
            </a>
          ))}
        </nav>
      </div>

      {/* Styles */}
      <style jsx>{`
        .neon-logo {
          position: relative;
          color: #0ff;
          font-size: 1.5rem;
          font-weight: bold;
          text-decoration: none;
          text-shadow:
            0 0 4px #0ff,
            0 0 8px #0ff;
          transition: text-shadow 0.3s;
        }
        .neon-logo:hover {
          text-shadow:
            0 0 6px #0ff,
            0 0 12px #0ff,
            0 0 18px #0ff;
        }
        .neon-icon {
          color: #0ff;
          filter:
            drop-shadow(0 0 4px #0ff)
            drop-shadow(0 0 8px #0ff);
          transition: filter 0.3s;
        }
        .neon-icon:hover {
          filter:
            drop-shadow(0 0 6px #0ff)
            drop-shadow(0 0 12px #0ff)
            drop-shadow(0 0 18px #0ff);
        }
        .neon-item {
          position: relative;
          display: inline-block;
        }
        .neon-underline {
          position: absolute;
          bottom: -4px;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, #0ff, #0ff 50%, transparent 50%);
          background-size: 200% 100%;
          background-position: 100% 0;
          transition: background-position 0.5s;
        }
        .group:hover .neon-underline {
          background-position: 0 0;
        }
            @media (max-width: 768px) {
        .neon-underline {
          width: 50%;
        }
      `}</style>
    </>
  );
}
