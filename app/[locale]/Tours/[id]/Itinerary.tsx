"use client";
import { useTranslations } from "next-intl";
import { Heart } from "lucide-react";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";

interface ItineraryProps {
  passBy: string[];
  image: string;
  title: string;
  id: number;
}

export default function Itinerary({
  passBy,
  image,
  title,
  id,
}: ItineraryProps) {
  const tt = useTranslations("homepage.tours");

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{tt(`tour.tour_${id}.title`)}</h2>
      </div>

      <div className="flex items-center gap-6 mb-12">
        <div className="w-1/3 aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            width={200}
            height={200}
            src={image}
            alt={title}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-2/3">
          <p className="text-lg text-gray-600 mb-4">
            {tt(`tour.tour_${id}.description`)}
          </p>
          <p className="text-sm text-gray-500">
            Duration: 3 hours - Admission included
          </p>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-1/2 w-full border-t-2 border-gray-300" />
        <div className="relative flex justify-between">
          {passBy.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-2"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-primary-700 rounded-full mb-2 z-10 text-white">
                <FaLocationDot />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center max-w-[120px]">
                {tt(`tour.tour_${id}.passBy.pass.${location}`)}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                Stop {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
