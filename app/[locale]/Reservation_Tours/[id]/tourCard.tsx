"use client";
import React, { useState } from "react";
import { Tour } from "@/types";
import { BackgroundGradient } from "@/Components/ui/background-gradient";
import Image from "next/image";
import { motion } from "framer-motion";
import { CalendarDays, Edit, Globe, Trash2, Users } from "lucide-react";
import { FaRegStar, FaStar } from "react-icons/fa";
import Rating from "./rating";
import Edite from "./edite";

interface Peoples {
  Adults: number;
  Children: number;
  Babies: number;
}

interface DATE {
  date: Date;
}

interface TourCardProps {
  tour: Tour;
  peoples: Peoples;
  date: DATE;
}

const TourCardReservation: React.FC<TourCardProps> = ({ peoples, tour, date }) => {
  const[edite , setEdite]=useState(false)
const handelEdite=()=>{
  setEdite(true)

}
const cancel=()=>{
  setEdite(false)
}
console.log('fatima')
console.log("DateTour:", date);
console.log("Peoples:", peoples);
console.log("Tour:", tour);


 
  return (<div>


  
      <BackgroundGradient className="rounded-2xl w-full p-6 bg-white dark:bg-zinc-900 shadow-xl">
        {/* En-tête avec l'image */}
        <div className="flex gap-4">
        <div className="relative w-1/4 h-30 sm:h-64 rounded-xl overflow-hidden group">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-xl transform group-hover:scale-110 transition-transform duration-300"
                />
                </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {tour.title}
            </h2>

            <div>
              {tour.description}
            </div>
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
           
              <Rating rating={tour.rating}/>
            </div>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md inline-block mt-2">
              Top Rated
            </span>
          </div>
        </div>

        {/* Détails de réservation */}
        <div className="mt-4 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
          <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
            <CalendarDays size={18} />
            <span>{date.date.toLocaleDateString()} </span>
          </div>
          {edite ? (
                    <Edite peoples={peoples}/>
          ) : (
            <p>
                <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mt-2">
                <Users size={18} />
                  <p>Adults :{peoples.Adults} </p>
                  <p> Children:{peoples.Children} </p>
                    <p>Babies:{peoples.Babies}</p>
                </div>
              {!edite}
            </p>
          )}

         
      
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-gray-500 line-through text-sm">$125</span>
            <span className="text-xl font-bold text-red-600"> ${tour.newPrice.priceAdults}</span>
          </div>
          <div className="flex gap-2">
          {!edite?(
            <button onClick={handelEdite} className="p-2 bg-gray-200 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition">
            
              <Edit size={18} />
              
            </button>
            ):(
            <form>

          <button onClick={cancel} 
                  className="p-2 bg-gray-200 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition">
                      
                        cancel
              </button>
          
            </form>
            )}
            <button className="p-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition">
              <Trash2 size={18} />
            </button>
          </div>
        </div>
      </BackgroundGradient>
   
    </div>
  );
};

export default TourCardReservation;
