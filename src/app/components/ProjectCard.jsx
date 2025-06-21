import React from "react";
import GithubIcon from "../../../public/github-icon.svg";
import Image from "next/image";

const ProjectCard = ({ title, description, images, onClick, previewUrl, gitUrl, techStack = [] }) => {
  const mainImage = images?.[0];

  return (
    <div onClick={onClick} className="cursor-pointer">
      <div
        className="h-52 md:h-72 w-full rounded-t-xl relative group object-contain"
        style={{
          backgroundImage: `url(${mainImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-50 transition-all" />
      </div>

      <div className="text-white rounded-b-xl mt-3 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>

        {/* Tech stack icons */}
        <div className="flex flex-wrap gap-2 mt-4">
          {techStack.map((tech, index) => (
            <img
              key={index}
              src={`https://cdn.simpleicons.org/${tech}`}
              alt={tech}
              className="w-5 h-5"
              title={tech}
            />
          ))}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap gap-3 mt-4">
          {previewUrl && (
            <a
              href={previewUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="bg-blue-600 text-white text-sm px-4 py-2 rounded-full hover:bg-blue-500 transition"
            >
              Live Preview
            </a>
          )}
          {gitUrl && (
            <a
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center"
            >
              <Image src={GithubIcon} alt="GitHub" className="inline-block w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
