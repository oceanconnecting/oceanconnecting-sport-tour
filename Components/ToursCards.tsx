"use client";

import { GoDotFill } from "react-icons/go";
import { FaStar, FaRegStar } from "react-icons/fa";
import { useLocale } from "next-intl";
import { useRouter } from "next/navigation";
import Image from "next/image";
import type React from "react";
import Button from "./Button";
import { Tour } from "@/types";
import Ratting from "@/Components/ratting";

interface ToursCardProps {
  tour: Tour;
}

const ToursCard: React.FC<ToursCardProps> = ({ tour }) => {
  const calculDuration = (startDate: string, endDate?: string): string => {
    if (!endDate) return "Durée inconnue"; // If endDate is missing
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffMs = end.getTime() - start.getTime(); // Difference in milliseconds

    // Convert milliseconds to hours
    const diffHours = diffMs / (1000 * 60 * 60);
    return diffHours < 24
    ? `${Math.round(diffHours)}h`
    : `${Math.round(diffHours / 24)} jours`;

  };

  const duration = calculDuration(tour.startDate, tour.endDate);
  

  const router = useRouter();
  const locale = useLocale();

  const handleClick = () => {
    router.push(`/${locale}/Tours/${tour.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-xl rounded-lg overflow-hidden bg-background-50 hover:-translate-y-1"
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

      <div className="p-6 h-full flex flex-col">
        <h2 className="text-2xl font-bold mb-2 text-text-700 group-hover:text-primary-600 transition-colors duration-300">
          {tour.title}
        </h2>

        <p className="text-text-700 mb-4 line-clamp-2 flex-1">
          {tour.description}
        </p>

        <div className="flex items-center mb-4 text-sm text-text-700">
          <span>{tour.departure}</span>
          <GoDotFill size={8} className="text-text-700 mx-3" />
          <span>{tour.arrival}</span>
        </div>

        <div className="flex items-center mb-4">
          <span className="text-primary-600 font-medium">

          {duration}
          </span>
          <GoDotFill size={8} className="text-primary-500 mx-3" />
          <Ratting rating={tour.rating}/>
        </div>

        <div className="border-t pt-4 border-background-300">
          {!tour.newPrice ? (
            <div className="text-lg font-medium text-gray-800">
              From{" "}
              <span className="text-2xl text-blue-600">{tour.latesPrice}</span>
              <span className="text-sm text-end text-gray-500">
                {" "}
                MAD per person
              </span>
            </div>
          ) : (
            <div className="flex items-end gap-2 justify-end space-x-2">
              <div className="text-sm text-end line-through text-gray-400">
                {tour.latesPrice} MAD
              </div>
              <div className="flex items-end gap-1 justify-center">
                <Button variant="primary" onClick={handleClick}>
                  From {tour.newPrice.priceAdults} MAD
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToursCard;
