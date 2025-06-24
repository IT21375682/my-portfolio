// components/ProjectModal.jsx
"use client";
import React, { useState } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ProjectModal({
  images,
  title,
  description,
  techStack = [],
  gitUrl,
  previewUrl,
  onClose,
}) {
  const [index, setIndex] = useState(0);
  const total = images.length;
  const prev = () => setIndex(i => (i === 0 ? total - 1 : i - 1));
  const next = () => setIndex(i => (i + 1) % total);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <div
        className="relative bg-[#111] rounded-lg overflow-hidden w-full max-w-6xl mx-auto"
        onClick={e => e.stopPropagation()}
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white z-10"
        >
          <XMarkIcon className="w-6 h-6" />
        </button>

        <div className="flex flex-col md:flex-row h-full">
          {/* Left: Description */}
          <div className="md:w-1/2 p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4 neon-text">{title}</h2>
              <p className="text-gray-300 mb-4">{description}</p>
            </div>

            {techStack.length > 0 && (
              <div>
                <h3 className="text-white font-semibold mb-2">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {techStack.map((tech, i) => (
                    <img
                      key={i}
                      src={`https://cdn.simpleicons.org/${tech}/white`}
                      alt={tech}
                      title={tech}
                      className="w-6 h-6"
                    />
                  ))}
                </div>
              </div>
            )}

            <div className="flex gap-4 mt-6">
              {previewUrl && (
                <a
                  href={previewUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition"
                >
                  Live Preview
                </a>
              )}
              {gitUrl && (
                <a
                  href={gitUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition"
                >
                  View Code
                </a>
              )}
            </div>
          </div>

          {/* Right: Carousel */}
          <div className="md:w-1/2 relative flex items-center justify-center bg-black">
            <button
              onClick={prev}
              className="absolute left-2 md:left-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10 transition"
            >
              <ChevronLeftIcon className="w-6 h-6" />
            </button>

            {/* Container with explicit aspect ratio */}
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={images[index]}
                alt={`Slide ${index + 1}`}
                fill
                style={{ objectFit: "contain" }}
                unoptimized
              />
            </div>

            <button
              onClick={next}
              className="absolute right-2 md:right-4 text-white bg-black/50 hover:bg-black/70 p-2 rounded-full z-10 transition"
            >
              <ChevronRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Neon text effect */}
      <style jsx>{`
        .neon-text {
          color: #0ff;
          text-shadow:
            0 0 4px #0ff,
            0 0 8px #0ff,
            0 0 16px #0ff;
        }
      `}</style>
    </div>
  );
}
