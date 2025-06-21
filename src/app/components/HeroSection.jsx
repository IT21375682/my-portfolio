"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";
import dynamic from "next/dynamic";

const ModelViewer = dynamic(() => import("./ModelViewer"), { ssr: false });

const HeroSection = () => {
  return (
    <section className="h-screen flex items-center">
      <div className="flex flex-col lg:flex-row w-full items-center justify-between px-4">
        {/* Model on top in mobile, left side in desktop */}
        <div className="w-full lg:w-1/2 mb-6 lg:mb-0">
          <div className="w-full h-[300px] sm:h-[400px] lg:h-[500px]">
            <ModelViewer />
          </div>
        </div>

        {/* Text section */}
        <div className="w-full lg:w-1/2 text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br />
            <TypeAnimation
              sequence={[
                "Shandeep",
                1000,
                "Software Engineer",
                1000,
                "Full Stack Developer",
                1000,
                "Mobile App Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-3">
            Passionate full-stack developer crafting innovative, user-friendly digital solutions
          </p>
          <div className="mt-2">
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br font-bold from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200">
              Hire me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3">
              <span className="block bg-black rounded-full hover:bg-slate-800 px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
