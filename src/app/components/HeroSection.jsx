"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-b  from-purple-400 to-pink-600">
              Hello, I'm{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Shandeep",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
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
            Passionate full-stack developer crafting innovative, user-friendly
            digital solutions
          </p>
          <div className="mt-2">
            <buttom className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br font-bold from-blue-500 via-purple-500 to-pink-500 text-white hover:bg-slate-200 ">
              Hire me
            </buttom>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full hover:bg-slate-800 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white mt-3">
              <span className="block bg-black rounded-full hover:bg-slate-800 px-5 py-2">
                Download CV
              </span>
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="rounded-full m-5 bg-[#181818] w-[300px] h-[300px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/assets/face.png"
              alt="My image"
              width={250}
              height={200}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
