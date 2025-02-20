

// "use client";

// import { useSearchParams, useParams } from "next/navigation";
// import React, { useEffect, useState } from "react";
// import { Tour } from "@/types";
// import getToursData from "../../Tours/[id]/ToursData";
// import TourCardReservation from "./tourCard";

// const ReservationPage = () => {
//   const params = useParams();
//   const searchParams = useSearchParams();

//   const [dateTour, setDateTour] = useState(new Date());

//   const { id } = params as { id?: string };
//   const [peoples, setPoeples] = useState({ Adults: 0, Children: 0, Babies: 0 });

//   useEffect(() => {
//     const poeplesParam = searchParams.get("poeples");
//     const dateParam = searchParams.get("date");
    


//     if (poeplesParam) {
//       try {
      
//         const parsedPeoples = JSON.parse(decodeURIComponent(poeplesParam));
//         setPoeples({
//           Adults: parsedPeoples.adults || 0,  // Convertit en majuscule
//           Children: parsedPeoples.children || 0,
//           Babies: parsedPeoples.babies || 0,
//         });
//       } catch (error) {
//         console.error("Erreur lors du parsing de poeples:", error);
//       }
//     }

//     if (dateParam) {
//       setDateTour(new Date(dateParam));
//     }
//   }, [searchParams]);

//   const numericId = id ? parseInt(id, 10) : NaN;
//   const tour: Tour | undefined = getToursData().find((t) => t.id === numericId);
//   console.log("DateTour:", dateTour);
//   console.log("Peoples:", peoples);
//   console.log("Tour:", tour);
  
//   if (!tour) {
//     return (
//       <div className="flex h-screen items-center justify-center">
//         <p className="text-xl font-semibold text-gray-500">Tour non trouvé</p>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
//       <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-4 max-w-4xl">
//         {/* ✅ Passer les bons paramètres à `TourCardReservation` */}
//         <TourCardReservation date={{ date: dateTour }}   peoples={peoples}  tour={tour} />
//       </div>
//     </div>
//   );
// };

// export default ReservationPage;





















"use client";

import { useSearchParams, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { Tour } from "@/types";
import getToursData from "../../Tours/[id]/ToursData";
import TourCardReservation from "./tourCard";

const ReservationPage = () => {
  const params = useParams();
  const searchParams = useSearchParams();

  const [dateTour, setDateTour] = useState(new Date());

  const { id } = params as { id?: string };
  const [peoples, setPoeples] = useState({ Adults: 0, Children: 0, Babies: 0 });

  useEffect(() => {
    const poeplesParam = searchParams.get("poeples");
    const dateParam = searchParams.get("date");
    


    if (poeplesParam) {
      try {
      
        const parsedPeoples = JSON.parse(decodeURIComponent(poeplesParam));
        setPoeples({
          Adults: parsedPeoples.adults || 0,  // Convertit en majuscule
          Children: parsedPeoples.children || 0,
          Babies: parsedPeoples.babies || 0,
        });
      } catch (error) {
        console.error("Erreur lors du parsing de poeples:", error);
      }
    }

    if (dateParam) {
      setDateTour(new Date(dateParam));
    }
  }, [searchParams]);

  const numericId = id ? parseInt(id, 10) : NaN;
  const tour: Tour | undefined = getToursData().find((t) => t.id === numericId);
  console.log("DateTour:", dateTour);
  console.log("Peoples:", peoples);
  console.log("Tour:", tour);
  
  if (!tour) {
    return (
      <div className="flex h-screen items-center justify-center">
        <p className="text-xl font-semibold text-gray-500">Tour non trouvé</p>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">  
      <div className=" max-w-4xl">
        {/* ✅ Passer les bons paramètres à `TourCardReservation` */}
        <TourCardReservation date={{ date: dateTour }} peoples={peoples} tour={tour} />
      </div>
    </div>
  );
};

export default ReservationPage;

