"use client";
import React, { useState, useEffect } from "react";
import { Tour } from "@/types";
import { BackgroundGradient } from "@/Components/ui/background-gradient";
import Image from "next/image";
import { CalendarDays, Edit, Trash2, Users } from "lucide-react";
import Rating from "./rating";
import Edite from "./edite";
import { Form } from "./form"
interface Peoples {
  Adults: number;
  Children: number;
  Babies: number;
}

interface TourCardProps {
  tour: Tour;
  peoples: Peoples;
  date: Date;
}

const TourCardReservation: React.FC<TourCardProps> = ({ peoples, tour, date }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isOpenModal,setIsOpenModal]=useState(false)
  // État local pour stocker les données mises à jour
  const [reservationData, setReservationData] = useState<{
    date: Date | null;
    Adults: number;
    Children: number;
    Babies: number;
  }>({
    date: null, // Temporairement null pour éviter une erreur si la date est undefined
    Adults: 0,
    Children: 0,
    Babies: 0,
  });

  // Mettre à jour reservationData dès que peoples et date changent
  useEffect(() => {
    setReservationData({
      date,
      Adults: peoples.Adults,
      Children: peoples.Children,
      Babies: peoples.Babies,
    });
  }, [peoples, date]);

  const handleSave = (updatedData: { date: Date | null; Adults: number; Children: number; Babies: number }) => {
    setReservationData(updatedData);
    setIsEditing(false);
  };

  return (
    <div>
      <BackgroundGradient className="rounded-2xl w-full p-6 bg-white dark:bg-zinc-900 shadow-xl">
        {/* En-tête avec l'image */}
        <div className="flex gap-4">
          <div className="relative w-1/4 h-30 sm:h-64 rounded-xl overflow-hidden group">
            {tour?.image && (
              <Image
                src={tour.image}
                alt={tour.title || "Tour Image"}
                layout="fill"
                objectFit="cover"
                className="rounded-xl transform group-hover:scale-110 transition-transform duration-300"
              />
            )}
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white">
              {tour.title}
            </h2>
            <div>{tour.description}</div>
            <div className="flex items-center gap-1 text-yellow-500 mt-1">
              <Rating rating={tour.rating} />
            </div>
            <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-md inline-block mt-2">
              Top Rated
            </span>
          </div>
        </div>

        {/* Détails de réservation */}
        <div className="mt-4 p-4 bg-gray-100 dark:bg-zinc-800 rounded-lg">
          {isEditing ? (
            <Edite peoples={reservationData} onSave={handleSave} />
          ) : (
            <div>
              {/* Date sélectionnée */}
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <CalendarDays size={18} />
                <span>
                  {reservationData.date
                    ? new Date(reservationData.date).toLocaleDateString()
                    : "Date non disponible"}
                </span>
              </div>

              {/* Nombre de participants */}
              <div className="flex items-center gap-2 text-gray-700 dark:text-gray-300 mt-2">
                <Users size={18} />
                <p>Adults: {reservationData.Adults} </p>
                <p>Children: {reservationData.Children} </p>
                <p>Babies: {reservationData.Babies}</p>
              </div>
              <div>
                <Form id={tour.id} peoples={peoples}/>
              </div>
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="mt-4 flex justify-between items-center">
          <div>
            <span className="text-xl font-bold text-red-600">
              ${tour.newPrice.priceAdults}
            </span>
          </div>
          <div className="flex gap-2">
      {/* Bouton "Valider" (caché si isEditing est true) */}
      {!isEditing && (
        <button           onClick={() => setIsOpenModal(true)}
        className="p-2 w-full bg-primary-300 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition">
          Valider
        </button>
        
      )}
      
       

      {/* Bouton "Éditer" (change en Cancel si isEditing est true) */}
      <button
        onClick={() => setIsEditing((prev) => !prev)}
        className="p-2 bg-gray-200 dark:bg-zinc-700 rounded-lg hover:bg-gray-300 dark:hover:bg-zinc-600 transition"
      >
        {isEditing ? "Cancel" : <Edit size={18} />}
      </button>

      {/* Bouton "Supprimer" */}
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
