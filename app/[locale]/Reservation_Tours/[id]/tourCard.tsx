"use client";
import React from "react";
import { Tour } from "@/types";
import { BackgroundGradient } from "@/Components/ui/background-gradient";
import Image from "next/image";
interface Poeples{
    Adults:number;
    Children:number;
    Babies:number;
}
interface DATE{
    date: Date;
}
interface TourCardProps {
  tour: Tour;
    poeples:Poeples;
    date:DATE;
}

const TourCardReservation: React.FC<TourCardProps> = ({poeples, tour ,date}) => {
  return (
    <BackgroundGradient className="rounded-2xl max-w-md p-6 sm:p-8 bg-white dark:bg-zinc-900 shadow-xl">
      {/* Image du tour */}
      <div className="relative w-full h-56 sm:h-64 rounded-xl overflow-hidden">
        <Image
          src={tour.image}
          alt={tour.title}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>

      {/* Contenu */}
      <div className="mt-4">
        <h2 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">
          {tour.title}
        </h2>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-2 line-clamp-3">
          {tour.description}
        </p>

        {/* Bouton de réservation */}
        <div className="mt-4 flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600 dark:text-blue-400">
            ${tour.title}
            {poeples.Adults} 
            {poeples.Children}
            {poeples.Babies}  
            {date.date.toDateString()}

          </span>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition duration-300">
            Réserver
          </button>
        </div>
      </div>
    </BackgroundGradient>
  );
};

export default TourCardReservation;
