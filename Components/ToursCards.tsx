"use client";

import { GoDotFill } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type React from "react";
import Button from "./Button";
import { Tour } from "@/types";

interface ToursCardProps {
  tour: Tour;
}

const ToursCard: React.FC<ToursCardProps> = ({ tour }) => {
  const fullStars = Math.floor(tour.rating);
  const halfStar = tour.rating % 1 >= 0.5 ? 1 : 0;
  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(`/${locale}/Tours/${tour.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden bg-background-50 hover:-translate-y-1"
    >
      <div className="relative">
        <Image
          src={tour.image || "/placeholder.svg"}
          alt={tour.title}
          width={400}
          height={300}
          className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-background-50 px-2 py-1 rounded-full text-xs font-semibold text-text-700 uppercase">
          {tour.type}
        </div>
      </div>

      <div className="p-6">
        <h2 className="text-2xl font-bold mb-2 text-text-700 group-hover:text-primary-600 transition-colors duration-300">
          {tour.title}
        </h2>

        <p className="text-text-700 mb-4 line-clamp-2">{tour.description}</p>

        <div className="flex items-center mb-4 text-sm text-text-700">
          <span>{tour.departure}</span>
          <GoDotFill size={8} className="text-text-700 mx-3" />
          <span>{tour.arrival}</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-primary-600 font-medium">{tour.duration}</span>
          <GoDotFill size={8} className="text-primary-500 mx-3" />
          <div className="flex">
            {[...Array(5)].map((_, index) => (
              <span key={index}>
                {index < fullStars ? (
                  <FaStar className="text-yellow-400" />
                ) : index < fullStars + halfStar ? (
                  <FaStar
                    className="text-yellow-400"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  />
                ) : (
                  <FaRegStar className="text-yellow-400" />
                )}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ToursCard;
