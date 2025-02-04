"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from "@/Components/Tag";
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import Propose from "./propos";
import { Tour } from "@/types";
import TourMap from "./tourMap";
import Itinerary from "./Itinerary";
import getToursData from "./ToursData";
import FormTour from "./FormTour";

const TourDetails = () => {
  const ToursData: Tour[] = getToursData();
  const params = useParams();
  const { id } = params as { id: string };
  const [isFavorited, setIsFavorited] = useState(false);
  const [tour, setTour] = useState<Tour | null>(null);

  useEffect(() => {
    if (id) {
      const foundTour = ToursData.find((t) => t.id.toString() === id);
      setTour(foundTour || null);
    }
  }, [id, ToursData]);

  const handleFavoritClick = () => setIsFavorited(!isFavorited);

  if (!id) return <div><p>Chargement...</p></div>;
  if (!tour) return <div><p>Tour non trouvé.</p></div>;

  const fullStars = Math.floor(tour.rating);
  const halfStar = tour.rating % 1 >= 0.5 ? 1 : 0;

  return (
    <section className="py-20">
      <Tag>{tour.title}</Tag>

      <div className="grid grid-cols-2 items-center gap-4 py-4 px-8 bg-gray-50 rounded-xl shadow-sm w-full">
        <div className="flex items-center gap-2">
          <span className="text-gray-700 font-medium">Très bien</span>
          {Array.from({ length: fullStars }).map((_, index) => (
            <FaStar key={`star-${index}`} className="text-yellow-500" />
          ))}
          {halfStar > 0 && <FaStar className="text-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />}
          {Array.from({ length: 5 - fullStars - halfStar }).map((_, index) => (
            <FaRegStar key={`empty-star-${index}`} className="text-yellow-500" />
          ))}
        </div>
        <div className="flex justify-center items-center gap-6">
          <div onClick={handleFavoritClick} className="cursor-pointer flex items-center gap-2">
            {isFavorited ? <FaHeart size={20} className="text-red-500" /> : <FaRegHeart size={20} className="text-gray-700" />}
            <span className="text-blue-950 font-bold text-base underline">Favori</span>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 p-10 gap-4">
        {tour.image && (
          <img src={tour.image} alt={tour.title} className="rounded-lg shadow-md" />
        )}
      </div>
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
        <div className="rounded-lg flex justify-center items-center">
          <Propose />
        </div>
        <div className="bg-red-50 p-6 rounded-lg flex justify-center items-center">
          <TourMap route={tour.route} />
        </div>
      </div>

      {/* Itinerary and Form */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
        <Itinerary title={tour.title} passBy={tour.passBy} image={tour.image} />
        <FormTour newPrice={String(tour.newPrice ?? "0")} />
      </div>

      {/* Tour Information */}
      <div>
        <p>{tour.description}</p>
        <div><strong>Durée:</strong> {tour.duration}</div>
        <div><strong>Type:</strong> {tour.type}</div>
        <div><strong>Départ:</strong> {tour.departure}</div>
        <div><strong>Arrivée:</strong> {tour.arrival}</div>
        <div>
          <strong>Prix:</strong> {tour.newPrice
            ? `${tour.newPrice} MAD (au lieu de ${tour.latesPrice} MAD)`
            : `${tour.latesPrice} MAD`}
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
