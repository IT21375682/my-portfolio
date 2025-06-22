"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center overflow-hidden">
      <div className="flex flex-col-reverse lg:flex-row w-full items-center justify-between px-6 py-12 gap-4 lg:gap-8">

        {/* 🧩 Text Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600">
              Hello, I'm{' '}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                'Shandeep',
                1000,
                'Software Engineer',
                1000,
                'Full Stack Developer',
                1000,
                'Mobile App Developer',
                1000,
                'UI/UX Designer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>

          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6 max-w-xl mx-auto lg:mx-0">
            Passionate Software Engineer crafting innovative, user-friendly digital solutions.
          </p>

          <div className="flex space-x-6 mb-5">
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

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center gap-4">
            <button className="px-6 py-3 rounded-full bg-gradient-to-br font-bold from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200">
              Hire me
            </button>
            <button className="px-1 py-1 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-800">
              <a
                href="/files/Shandeep Jayapalan Resume.pdf"
                download
                className="block bg-black rounded-full hover:bg-slate-800 px-5 py-2"
              >
                Download CV
              </a>
            </button>
          </div>
        </div>

        {/* 🧩 Model Section */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="w-full max-w-[525px] h-[300px] sm:h-[400px] lg:h-[500px]">
            <ModelViewer />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
