import React, { useState } from "react";
import { XMarkIcon, ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const ProjectModal = ({ images, onClose }) => {
  const [index, setIndex] = useState(0);
  const total = images.length;

  const prev = () => setIndex(index === 0 ? total - 1 : index - 1);
  const next = () => setIndex(index === total - 1 ? 0 : index + 1);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center"
      onClick={onClose}>
        <div
        className="relative w-full max-w-3xl p-2"
        onClick={(e) => e.stopPropagation()} // prevent close when clicking inside modal
      >
        {/* <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-300"
        >
          <XMarkIcon className="w-8 h-8" />
        </button> */}
        <div className="relative p-5">
          <img src={images[index]} alt="" className="rounded-lg w-full max-h-[70vh] object-contain" />
          {total > 1 && (
            <>
              <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black bg-opacity-50 p-2 rounded-full">
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
