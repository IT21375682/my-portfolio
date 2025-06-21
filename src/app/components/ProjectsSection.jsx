"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

const projectsData = [
  {
    id: 1,
    title: "AI based IEEE document formater",
    description: "An AI-powered web application that formats IEEE documents and Refine your writing with AI.",
    images: [
        "/assets/projects/WriteWizard/bg2.png",
      "/assets/projects/WriteWizard/1.PNG",
      "/assets/projects/WriteWizard/2.jpg",
      "/assets/projects/WriteWizard/3.PNG",
    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: null,
    techStack: ["react", "tailwindcss", "javascript","express/white","mongodb","python"]
  },
  {
    id: 2,
    title: "Ecommerce and ERP Application",
    description: "An E-commerce and ERP application that provides a seamless shopping experience and efficient resource management.",
     images: [
      "/assets/projects/clipcart/bg2.png",
      "/assets/projects/clipcart/1.PNG",
      "/assets/projects/clipcart/2.PNG",
      "/assets/projects/clipcart/3.PNG",
      "/assets/projects/clipcart/4.PNG",
      "/assets/projects/clipcart/5.PNG",
      "/assets/projects/clipcart/6.PNG",
      "/assets/projects/clipcart/7.PNG",
      "/assets/projects/clipcart/8.PNG",

    ],
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: null,
    techStack: ["react", "tailwindcss", "javascript","mongodb","dotnet/white"]
  },
  {
    id: 3,
    title: "GlobCarry - Parcel delivery Platfrom",
    description: "GlobCarry is a mobile application designed to streamline the process of parcel delivery, making it easier for users to send and receive packages efficiently.",
     images: [
      "/assets/projects/globcarry/bg2.png",
      "/assets/projects/globcarry/1.PNG",
      "/assets/projects/globcarry/2.PNG",
      "/assets/projects/globcarry/3.PNG",
        "/assets/projects/globcarry/4.PNG",
          "/assets/projects/globcarry/5.PNG",
            "/assets/projects/globcarry/6.PNG",
              "/assets/projects/globcarry/7.PNG",
                "/assets/projects/globcarry/8.PNG",
                  "/assets/projects/globcarry/9.PNG",
                    "/assets/projects/globcarry/10.PNG"

    ],
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: null,
    techStack: ["kotlin","mysql"]
  },
  {
    id: 4,
    title: "TourAround - TourGuide Application",
    description: "TourAround is a mobile application designed to enhance the travel experience by providing users with a comprehensive tour guide platform.",
     images: [
      "/assets/projects/TourAround/bg1.png",
      "/assets/projects/TourAround/1.jpeg",
      "/assets/projects/TourAround/2.jpeg",
      "/assets/projects/TourAround/3.jpeg",
      "/assets/projects/TourAround/4.jpeg",
      "/assets/projects/TourAround/5.jpeg",
      "/assets/projects/TourAround/6.jpeg",
      "/assets/projects/TourAround/7.jpeg",
      "/assets/projects/TourAround/8.jpeg",

    ],
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: null,
    techStack: ["kotlin","mysql"]
  },
  {
    id: 5,
    title: "TicketEase-The Smart QR Tour App for Bus",
    description: " TicketEase is a mobile application designed to simplify the process of booking and managing bus tickets with QR, providing users with a convenient and efficient travel experience.",
     images: [
      "/assets/projects/ticketease/bg1.png",
      "/assets/projects/ticketease/1.jpeg",
      "/assets/projects/ticketease/2.jpeg",
      "/assets/projects/ticketease/3.jpeg",
      "/assets/projects/ticketease/4.jpeg",
      "/assets/projects/ticketease/5.jpeg",
      "/assets/projects/ticketease/6.jpeg",
      "/assets/projects/ticketease/7.jpeg"

    ],
    tag: ["All", "Mobile"],
    gitUrl: "/",
    previewUrl: null,
    techStack: ["kotlin","mysql"]
  },
  // {
  //   id: 6,
  //   title: "E-commerce Mobile POS Application",
  //   description: "An E-commerce mobile application that provides a seamless shopping experience,order management and Loyalty program.",
  //    images: [
  //     "/assets/projects/ticketease/bg1.png",


  //   ],
  //   tag: ["All", "Client"],
  //   gitUrl: "/",
  //   previewUrl: null,
  // },
  // {
  //   id: 7,
  //   title: "Loyalty system",
  //   description: "An E-commerce mobile application that provides a seamless shopping experience and Loyalty program.",
  //    images: [
  //     "/assets/projects/ticketease/bg1.png",


  //   ],
  //   tag: ["All", "Client"],
  //   gitUrl: "/",
  //   previewUrl: null,
  // },

];
const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <motion.section
      id="projects"
      className="py-20 px-6 sm:px-10 lg:px-16  text-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-screen-xl mx-auto">
        <motion.h2
          className="text-center text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Projects
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center items-center gap-3 py-4"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          {['All', 'Web', 'Mobile','Client'].map((t) => (
            <ProjectTag key={t} onClick={setTag} name={t} isSelected={tag === t} />
          ))}
        </motion.div>

        <motion.ul
          ref={ref}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'show' : 'hidden'}
        >
          {filteredProjects.map((project) => (
            <motion.li
              key={project.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
            >
              <ProjectCard
              title={project.title}
              description={project.description}
              images={project.images}
              previewUrl={project.previewUrl}
              gitUrl={project.gitUrl}
              techStack={project.techStack}
              onClick={() => setSelectedProject(project)}
            />

            </motion.li>
          ))}
        </motion.ul>

        {selectedProject && (
          <ProjectModal
            images={selectedProject.images}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </motion.section>
  );
};

export default ProjectsSection;