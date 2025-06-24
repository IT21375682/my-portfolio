// components/ProjectsSection.jsx
"use client";
import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import ProjectModal from "./ProjectModal";

// Projects data
const projectsData = [
  {
    id: 1,
    title: "AI based IEEE document formater",
    description: "An AI-powered web application that formats IEEE documents and refines your writing with AI.",
    images: [
      "/assets/projects/WriteWizard/bg2.png",
      "/assets/projects/WriteWizard/1.PNG",
      "/assets/projects/WriteWizard/2.jpg",
      "/assets/projects/WriteWizard/3.PNG"
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IT21375682/WriteWizard.git",
    previewUrl: null,
    techStack: ["react", "tailwindcss", "javascript", "express/white", "mongodb", "python"]
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
      "/assets/projects/clipcart/8.PNG"
    ],
    tag: ["All", "Web"],
    gitUrl: "https://github.com/IT21375682/E-commerce_ERP.git",
    previewUrl: null,
    techStack: ["react", "tailwindcss", "javascript", "mongodb", "dotnet/white"]
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
    gitUrl: "https://github.com/IT21375682/GlobeCarry.git",
    previewUrl: null,
    techStack: ["kotlin", "mysql"]
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
      "/assets/projects/TourAround/8.jpeg"
    ],
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/IT21375682/TourARound-Mobile-App.git",
    previewUrl: null,
    techStack: ["kotlin", "mysql"]
  },
  {
    id: 5,
    title: "TicketEase-The Smart QR Tour App for Bus",
    description: "TicketEase is a mobile application designed to simplify the process of booking and managing bus tickets with QR, providing users with a convenient and efficient travel experience.",
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
    gitUrl: "https://github.com/IT21375682/TicketEase.git",
    previewUrl: null,
    techStack: ["kotlin", "mysql"]
  },
  {
    id: 6,
    title: "E-commerce Mobile POS Application",
    description: "An E-commerce mobile application that provides a seamless shopping experience, order management and Loyalty program.",
    images: [
      "/assets/projects/jewelleryApp/0.png",
      
    ],
    tag: ["All", "Client"],
    gitUrl: null,
    previewUrl: "https://play.google.com/store/apps/details?id=com.itsignature.asha_app",
    techStack: ["flutter", "mysql", "react", "express/white"]
  },
  {
    id: 8,
    title: "LLaMA 2-7B Text Formatter",
    description: "Fine-tuned Meta’s LLaMA 2-7B model to transform casual, informal text into rigorously IEEE-formatted prose, complete with proper citations and references.",
    images: ["/assets/projects/llama/0.png"],
    tag: ["All", "ML"],
    gitUrl: "https://github.com/IT21375682/acadamic-text-converter-llama.git",
    previewUrl: null
  }
];

// Publications data
const publicationsData = [
  {
    id: 1,
    title: "Tour Around: An AR-Powered, Personalized Nearby Location Tour Companion",
    authors: "J.Shandeep, et al.",
    venue: "Tuijin Jishu/Journal of Propulsion Technology",
    year: 2023,
    link: "https://propulsiontechjournal.com/index.php/journal/article/view/2542"
  }
];

export default function ProjectsSection() {
  const [tag, setTag] = useState("All");
  const [selected, setSelected] = useState(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const filtered = projectsData.filter((p) => p.tag.includes(tag));

  return (
    <>
      {/* Projects Section */}
      <motion.section
        id="projects"
        className="py-20 px-6 sm:px-10 lg:px-16 text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-screen-xl mx-auto">
          <motion.h2
            className="text-center text-4xl font-bold mb-6 neon-text"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            My Projects
          </motion.h2>

          <motion.div
            className="flex flex-wrap justify-center gap-3 py-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {["All", "Web", "Mobile", "ML", "Client"].map((t) => (
              <ProjectTag
                key={t}
                name={t}
                isSelected={tag === t}
                onClick={() => setTag(t)}
              />
            ))}
          </motion.div>

          <motion.ul
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10"
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            {filtered.map((project) => (
              <motion.li
                key={project.id}
                variants={{ hidden: { opacity: 0, y: 30 }, show: { opacity: 1, y: 0 } }}
                whileHover={{ scale: 1.02 }}
              >
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  images={project.images}
                  previewUrl={project.previewUrl}
                  gitUrl={project.gitUrl}
                  techStack={project.techStack}
                  onClick={() => setSelected(project)}
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* Modal */}
      {selected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.3 }}
        >
          <ProjectModal
            images={selected.images}
            title={selected.title}
            description={selected.description}
            techStack={selected.techStack}
            gitUrl={selected.gitUrl}
            previewUrl={selected.previewUrl}
            onClose={() => setSelected(null)}
          />
        </motion.div>
      )}

      {/* Publications Section */}
      <motion.section
        id="publications"
        className="py-20 px-6 sm:px-10 lg:px-16 text-white"
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
            Publications
          </motion.h2>
          <ul className="space-y-8 mt-8">
            {publicationsData.map((pub) => (
              <li key={pub.id} className="bg-[#1A1B20] p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {pub.title}
                </h3>
                <p className="text-slate-400 mb-1">
                  <span className="font-medium">Authors:</span> {pub.authors}
                </p>
                <p className="text-slate-400 mb-1">
                  <span className="font-medium">Published in:</span> {pub.venue}, {pub.year}
                </p>
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-block text-blue-400 hover:underline"
                >
                  View Paper →
                </a>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* Neon text shadow for headings */}
      <style jsx>{`
        .neon-text {
          text-shadow: 0 0 4px #0ff, 0 0 8px #0ff;
        }
      `}</style>
    </>
  );
}