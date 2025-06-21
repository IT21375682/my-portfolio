import React, { useState } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProjectModal = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex(index === 0 ? total - 1 : index - 1);
  const next = () => setIndex(index === total - 1 ? 0 : index + 1);

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-6xl px-4 sm:px-6 lg:px-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
        >
          <XMarkIcon className="w-8 h-8" />
        </button>

        {/* Image Viewer */}
        <div className="relative flex items-center justify-center p-4">
          <img
            src={images[index]}
            alt=""
            className="rounded-lg w-full max-h-[85vh] object-contain transition-all duration-300"
          />

          {total > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full z-10"
              >
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
                onClick={next}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 hover:bg-opacity-70 p-3 rounded-full z-10"
              >
                <ChevronRightIcon className="w-6 h-6" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
