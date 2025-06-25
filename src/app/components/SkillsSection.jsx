// components/SkillsSection.jsx
"use client";
import React from "react";
import { motion } from "framer-motion";

// list your stack here (use simpleicons names)
const techStack = [
  "react",
  "nextdotjs",
  "nodedotjs",
  "tailwindcss",
  "typescript",
  "javascript",
  "python",
  "mysql",
  "docker",
  "kubernetes",
];

export default function SkillsSection() {
  // marquee animation: slide X from 0 to -50%
  const marquee = {
    animate: {
      x: ["0%", "-50%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 20,
          ease: "linear",
        },
      },
    },
  };

  return (
    <section id="skills" className="py-1">
      <h2 className="text-4xl font-bold text-center text-white mb-8">
        Skills & Tools
      </h2>

      <div className="overflow-hidden p-5 bg-[#111]">
        <motion.div
          className="flex space-x-8 w-[200%]"
          variants={marquee}
          animate="animate"
        >
          {techStack.concat(techStack).map((tech, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 w-24 h-24 bg-[#1f1f1f] rounded-lg flex items-center justify-center shadow-lg"
            >
              <img
                src={`https://cdn.simpleicons.org/${tech}`}
                alt={tech}
                title={tech.replace(/dotjs/g, ".js").replace(/nextdotjs/g, "Next.js")}
                className="w-12 h-12"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
