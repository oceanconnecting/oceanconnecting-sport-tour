import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

interface ImagesProps {
  src: string,
  alt: string
};

interface ImagesCarouselProps {
  images: ImagesProps[]}

export default function ImageCarousel({images}: ImagesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleDotClick = (index:any) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-4/5   overflow-hidden rounded-xl shadow-lg">
      {/* Image Container */}
      <div className="relative w-full h-64">
      <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

<div>
      
     
    </div>




      </div>
      {/* Navigation Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 rounded-full shadow-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Heart Icon */}
      <button
        onClick={() => setLiked(!liked)}
        className={`absolute right-4 top-4 p-2 bg-white/70 rounded-full shadow-md transition-colors ${
          liked ? "text-red-500" : "text-gray-600"
        }`}
      >
        <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
      </button>

      {/* Dot Indicators */}
      <div className="flex justify-center space-x-2 py-4 bg-white/80">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`w-2.5 h-2.5 rounded-full ${
              currentIndex === index ? "bg-black" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
