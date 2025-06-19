import React from "react";

const ProjectCard = ({ title, description, images, onClick }) => {
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
      </div>
    </div>
  );
};

export default ProjectCard;
