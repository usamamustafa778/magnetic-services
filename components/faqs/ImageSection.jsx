// components/ImageSection.js
import { useState } from 'react';
import FullContainer from '../common/FullContainer';
import CallUs from '../common/CallUs';

export default function ImageSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [
    {
      src: '/img/air-duct-cleaning.jpg',
      alt: 'Air Duct Cleaning',
      label: 'Air Duct Cleaning',
      title:"Background Image",

    },
    {
      src: '/img/appliance-repair-img2.jpg',
      alt: 'Appliance Repair',
      label: 'Appliance Repair',
      title:"Background Image",
    },
    {
      src: '/img/carpet-cleaning.jpg',
      alt: 'Carpet Cleaning',
      label: 'Carpet Cleaning',
      title:"Background Image",

    },
  ];

  const openImage = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const closeImage = () => {
    setIsOpen(false);
  };

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (

    <FullContainer>

<div className="lg:flex justify-center lg:space-x-4 p-2 mt-8 mb-24 mx-auto max-w-[1200px]">
  {images.map((image, index) => (
    <div
      key={index}
      className="relative group cursor-pointer mb-4 lg:mb-0 w-full lg:w-auto"
      onClick={() => openImage(index)}
    >
      <img
        title="Background Image"

        src={image.src}
        alt={image.alt}
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-300">
        <span className="text-white text-xl font-semibold border-2 border-white px-4 py-2">
          {image.label}
        </span>
      </div>
    </div>
  ))}

  {/* Fullscreen Image Viewer */}
  {isOpen && (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <button
        className="absolute top-4 right-4 text-white text-2xl"
        onClick={closeImage}
      >
        &times;
      </button>

      <div className="relative">
        <img
        title={images[currentImageIndex].title}
          src={images[currentImageIndex].src}
          alt={images[currentImageIndex].alt}
          className="max-h-screen"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between">
          <button
            className="text-white text-2xl bg-black bg-opacity-50 p-2"
            onClick={prevImage}
          >
            &#10094;
          </button>
          <button
            className="text-white text-2xl bg-black bg-opacity-50 p-2"
            onClick={nextImage}
          >
            &#10095;
          </button>
        </div>
      </div>
    </div>
  )}
</div>

    <CallUs/>
    </FullContainer>

  );
}
