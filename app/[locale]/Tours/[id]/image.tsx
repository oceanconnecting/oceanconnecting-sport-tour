import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";

import "yet-another-react-lightbox/styles.css";

interface ImagesProps {
  src: string;
  alt: string;
}

interface ImagesCarouselProps {
  images: ImagesProps[];
}

export default function ImageCarousel({ images }: ImagesCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [liked, setLiked] = useState(false);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-xl shadow-lg mx-auto">
      {/* Main Image */}
      <div className="relative w-full h-64 sm:h-80 md:h-96">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 text-gray-950 rounded-full shadow-md"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-white/70 text-gray-950 rounded-full shadow-md"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Image Thumbnails */}
      <div className="flex absolute z-10 bottom-0 bg-white/40 backdrop-blur-md justify-center w-full shadow-lg gap-2 p-2 overflow-x-auto">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className="relative flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              width={100}
              height={100}
              className={`rounded-lg cursor-pointer w-14 h-14 object-cover border-2 ${
                currentIndex === index
                  ? "border-primary-800"
                  : "border-transparent"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}
