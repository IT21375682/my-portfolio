// components/WorkExperience.jsx
"use client";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    period: "Sept 2024 – June 2025",
    role: "Full-Stack Developer, IT Signature",
    summary:
      "Built full-stack e-commerce & RFID loyalty systems with React, Node.js, MySQL; deployed microservices via CI/CD.",
  },
  {
    period: "2023 – 2024",
    role: "Operations Executive, Legacy Healthcare",
    summary:
      "Managed medical billing workflows & claim corrections, collaborating cross-functionally to reduce denials.",
  },
  {
    period: "2021 – 2023",
    role: "Accounting Assistant, Shalom Trading",
    summary:
      "Maintained inventory & financial records in Tally ERP and coordinated supplier and finance operations.",
  },
];

export default function WorkExperience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const container = { hidden: {}, show: { transition: { staggerChildren: 0.2 } } };
  const item = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } };

  return (
    <motion.section
      id="experience"
      className="py-16 px-6 sm:px-12 lg:px-24 bg-[#0d0d0d]"
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        Work Experience
      </h2>

      <div className="relative">
        {/* Animated vertical line */}
        <motion.div
          className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-600/50 hidden md:block"
          initial={{ scaleY: 0 }}
          animate={{ scaleY: inView ? 1 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ transformOrigin: "top" }}
        />

        <motion.ul
          className="space-y-12"
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
        >
          {experiences.map((exp, idx) => {
            const isLeft = idx % 2 === 0;
            return (
              <motion.li
                key={idx}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className="relative flex flex-col md:flex-row items-start"
              >
                {/* Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 bg-cyan-500 w-4 h-4 rounded-full z-10" />

                {/* Left Column (empty or content) */}
                <div className="w-full md:w-1/2 p-4 flex">
                  {isLeft && (
                    <div className="md:pr-8 md:text-right">
                      <span className="block text-sm text-gray-400">{exp.period}</span>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-gray-300 mt-2">{exp.summary}</p>
                    </div>
                  )}
                </div>

                {/* Right Column (empty or content) */}
                <div className="w-full md:w-1/2 p-4 flex">
                  {!isLeft && (
                    <div className="md:pl-8">
                      <span className="block text-sm text-gray-400">{exp.period}</span>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-gray-300 mt-2">{exp.summary}</p>
                    </div>
                  )}
                </div>
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </motion.section>
  );
}
