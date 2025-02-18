"use client";

import { useParams } from "next/navigation";
import React from "react";
import { Tour } from "@/types";
import getToursData from "../../Tours/[id]/ToursData";
import TourCardReservation from "./tourCard";

const ReservationPage = () => {
  const params = useParams();

  // Vérifie si 'poeples' est un tableau ou une chaîne
  const poeples = params.poeples 
  
    ? typeof params.poeples === 'string' 
      ? JSON.parse(decodeURIComponent(params.poeples)) 
      : { adults: 0, children: 0, babies: 0 } 
    : { adults: 0, children: 0, babies: 0 };

  const { id, date } = params as { id?: string; date: string };

  // Conversion de l'id et gestion de la date
  const numericId = id ? parseInt(id, 10) : NaN;
  const dateTour = date ? new Date(date) : new Date();
console.log(dateTour);
console.log(poeples);
  // Recherche du tour
  const tour: Tour | undefined = getToursData().find((t) => t.id === numericId);

  // Gestion de l'erreur (tour non trouvé)
  if (!tour) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">Tour non trouvé</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 max-w-4xl">
        {/* Carte de réservation */}
        <TourCardReservation date={{ date: dateTour }} poeples={poeples} tour={tour} />
      </div>
    </div>
  );
};

export default ReservationPage;
