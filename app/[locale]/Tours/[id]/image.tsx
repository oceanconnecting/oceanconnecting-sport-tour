import { useState } from "react";
import { ChevronLeft, ChevronRight, Heart } from "lucide-react";
import Image from "next/image";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import Counter from "yet-another-react-lightbox/plugins/counter";
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
    <div className="relative w-4/5 overflow-hidden rounded-xl shadow-lg mx-auto">
      {/* Image principale */}
      <div className="relative w-full h-64">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />

      

      </div>

      {/* Boutons de navigation */}
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

      {/* Icône de like */}
      <button
        onClick={() => setLiked(!liked)}
        className={`absolute right-4 top-4 p-2 bg-white/70 rounded-full shadow-md transition-colors ${
          liked ? "text-red-500" : "text-gray-600"
        }`}
      >
        <Heart className="w-5 h-5" fill={liked ? "currentColor" : "none"} />
      </button>
         {/* Miniatures des images */}
      <div className="flex justify-center  bg-white/30 backdrop-blur-md p-4 rounded-lg shadow-lg   backdrop-invert backdrop-opacity-10  space-x-2 py-4 ">
        {images.map((image, index) => (
          <button key={index} onClick={() => handleThumbnailClick(index)} className="relative">
            <Image
              src={image.src}
              alt={image.alt}
              width={50}  // Taille des miniatures
              height={50}
              className={`rounded-md cursor-pointer border-2 ${
                currentIndex === index ? "border-black" : "border-transparent"
              }`}
            />
            
          </button>
        ))}
      </div>
     
    </div>
  );
}
