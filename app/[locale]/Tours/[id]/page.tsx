"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from "@/Components/Tag";
import {  FaRegHeart, FaHeart } from "react-icons/fa";
import { Tour } from "@/types";
import Itinerary from "./Itinerary";
import getToursData from "./ToursData";
import AnimatedModalDemo from "./modalMaps";
import { useTranslations } from "next-intl";
import Image from "./image";
import FormReservation from "./FormReservation"
import Rating from "../../../../Components/ratting"
const TourDetails = () => {
  const tt = useTranslations("homepage.tours");
  const ToursData: Tour[] = getToursData();
  const params = useParams();
  const { id } = params as { id: string };
  const numericId = parseInt(id, 10); //convert the string to a number

  const [isFavorited, setIsFavorited] = useState(false);
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    if (id) {
      const foundTour = ToursData.find((t) => t.id === numericId);
      setTour(foundTour || null);
    }
  }, [id]);

  const handleFavoritClick = () => setIsFavorited(!isFavorited);

  if (!id) return <div><p>Chargement...</p></div>;
  if (!tour) return <div><p>Tour non trouvé.</p></div>;

  return (
    <section className="py-20">
      <Tag>{tt(`tour.tour_${numericId}.title`)}</Tag>

      <div className="grid grid-cols-2 items-center gap-4 py-4 px-8 bg-gray-50 rounded-xl shadow-sm w-full">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Très bien</span>
          <Rating rating={tour.rating}/>
        </div>

        <div className="flex justify-center items-center gap-6">
          <div onClick={handleFavoritClick} className="cursor-pointer flex items-center gap-2">
            {isFavorited ? <FaHeart size={20} className="text-red-500" /> : <FaRegHeart size={20} className="text-gray-700" />}
            <span className="text-blue-950 font-bold text-base underline">Favori</span>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 w-full md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-2 rounded-lg shadow-lg">
      <div className=" p-6 rounded-lg flex justify-center items-start">
          
          <Itinerary  tour={tour} />
         </div>
        <div className=" rounded-lg w-full flex justify-center items-center">
       
          <Image images={tour.images}  />

        </div>
      </div>

      {/* modal map  */}
      {/* <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-3 rounded-lg shadow-lg">
        <div className="  rounded-lg flex justify-center items-center">
          <AnimatedModalDemo id={numericId} route={tour.route} />
          <div />
        </div>
      </div> */}
      {/* Itinerary and Form */}
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-3 rounded-lg shadow-lg">
        
       
        <div className=" p-6 rounded-lg flex  justify-center items-end">
       
          <FormReservation  tour={tour}  />
        </div>
        
      </div>
    </section>
  );
};

export default TourDetails;
