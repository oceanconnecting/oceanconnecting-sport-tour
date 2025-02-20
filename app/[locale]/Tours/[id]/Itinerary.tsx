"use client";

import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { useTranslations } from "next-intl";

interface ItineraryProps {
  passBy: string[];
  image: string;
  title: string;
  id: number; // Expecting 'id' to be a number directly
}

export default function Itinerary({ passBy, image, title, id }: ItineraryProps) {
  const tt = useTranslations("homepage.tours");

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 space-y-6 text-gray-800">
      {/* Titre principal */}
      <h2 className="text-2xl font-bold">{tt('Itinerary')}</h2>

      {/* Bloc d'itinéraire */}
      <div className="relative flex items-start space-x-4">
        {/* Ligne verticale en pointillé */}
        <div className="absolute left-2 top-0 bottom-0 border-l-2 border-dotted border-gray-300" />

        {/* Numéro et cercle */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-8 h-8 bg-black text-white rounded-full flex items-center justify-center font-semibold">
            1
          </div>
        </div>

        {/* Contenu principal de l'étape */}
        <div className="flex-1 space-y-4 pt-1">
          {/* Titre, durée, rating et favori */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-2 md:space-y-0">
            <div>
              <h3 className="text-lg font-semibold">{tt(`tour.tour_${id}.title`)}</h3>
              <p className="text-sm text-gray-500">
                Stop: 3 hours - Admission included
              </p>
            </div>
            {/* Rating + Avis + Favori */}
            <div className="flex items-center space-x-2">
              <button
                title="Add to favorites"
                className="text-gray-400 hover:text-red-500"
              >
                <FaRegHeart size={18} />
              </button>
            </div>
          </div>

          {/* Image + Description + Bouton */}
          <div className="flex flex-col md:flex-row md:items-start md:space-x-4">
            {/* Image (exemple) */}
            <div className="w-full md:w-1/2 h-48 rounded-md overflow-hidden mb-4 md:mb-0">
           
              <img
                src={image}
                alt="Paradise Valley"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          {/* Pass by */}
          <div className="space-y-2">
            <h4 className="font-semibold">{tt(`tour.tour_${id}.passBy.passBy`)}
                </h4>
            <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
              {passBy.map((location, index) => (
                <li key={index}>
                  {tt(`tour.tour_${id}.passBy.pass.${location}`)} {/* Ensure `id` is a number */}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
