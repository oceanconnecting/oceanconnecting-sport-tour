"use client";

import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiNumber1 } from "react-icons/ri";

const Itinerary = () => {
  return (
    <div className="space-y-6 py-8">
      <div className="flex items-center space-x-4">
        <div className="text-lg font-semibold text-center flex-1">
          Itinerary
        </div>

        {/* Icône avec cercle */}
        <div className="w-12 h-12 border border-black rounded-full flex justify-center items-center bg-gray-100">
          <IoLocationSharp size={25} className="text-black" />
        </div>
        <span className="text-gray-700 font-medium">Agadir-Marrakech</span>
      </div>

      {/* Section du Titre */}
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="w-12 h-12 border border-black rounded-full flex justify-center items-center bg-black text-white">
            <RiNumber1 />
          </div>
          <span className="ml-4 text-lg font-semibold text-gray-800">Paradise Valley Agadir</span>
        </div>

        <div className="space-y-2 mt-4">
          <p className="text-gray-600">Pass by:</p>

          <div className="space-y-2">
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
            <p className="text-gray-700">Souk El Had d'Agadir</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Itinerary;
