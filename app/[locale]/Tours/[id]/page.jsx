"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from '@/Components/Tag';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import Propose from'./propos';
import TourMap from './tourMap';
import Itinerary from './Itinerary';
import getToursData from './ToursData';
import FormTour from './FormTour'


const TourDetails = () => {
  
  const ToursData = getToursData();

  const params = useParams();
  const { id } = params;
  const [isFavorited, setIsFavorited] = useState(false);
  const [tour, setTour] = useState(null);
  const handlFavoritClick = () => {
    setIsFavorited(!isFavorited);
  }
  useEffect(() => {
    if (id) {
      const foundTour = ToursData.find((t) => t.id.toString() === id);
      setTour(foundTour || null);
    }
  }, [id]);

  if (!id) { return (<div><p>Chargement...</p></div>); }

  if (!tour) { return (<div><p>Tour non trouvé.</p></div>); }

  const fullStars = Math.floor(tour.rating); // Nombre d'étoiles pleines
  const halfStar = tour.rating % 1 >= 0.5 ? 1 : 0; // Gérer les demi-étoiles

  return (
    <section className="">

      <div className="py-20">
        <div>
          <Tag>{tour.title}</Tag>
        </div>




        <div className="grid grid-cols-2 items-center justify-between gap-4 py-4 px-8 bg-gray-50 rounded-xl shadow-sm w-full">

          {/* Section des étoiles */}
          <div className="flex items-center gap-2">
            <span className="text-gray-700 font-medium">Très bien</span>

            {/* Affichage des étoiles pleines */}
            {Array.from({ length: fullStars }).map((_, index) => (
              <FaStar key={`star-${index}`} className="text-yellow-500" />
            ))}

            {/* Demi-étoile */}
            {halfStar > 0 && (
              <FaStar className="text-yellow-500" style={{ clipPath: "inset(0 50% 0 0)" }} />
            )}

            {/* Étoiles vides */}
            {Array.from({ length: 5 - fullStars - halfStar }).map((_, index) => (
              <FaRegStar key={`empty-star-${index}`} className="text-yellow-500" />
            ))}
          </div>

          {/* Favoris et lien */}
          <div className="flex justify-center items-center gap-6">
            <div onClick={handlFavoritClick} className=" cursor-pointer flex items-center gap-2">
              {
                isFavorited ? (
                  <FaHeart size={20} className="text-red-500  " />
                ) : (
                  <FaRegHeart size={20} className="text-gray-700 " />
                )
              }
              <span className="text-blue-950 font-bold text-base  underline">Favori</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 p-10 gap-4">

          <div className="grid ">
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="grid ">
            <img src={tour.image} alt={tour.title} />
          </div>

          <div className="grid ">
            <img src={tour.image} alt={tour.title} />
          </div>

        </div>

<div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
  {/* 1er Section  */}
            <div className="rounded-lg flex  justify-center items-center">
                    <Propose/>
            </div>
  {/* Deuxième section */}
            <div className="bg-red-50 p-6 rounded-lg flex justify-center items-center">
                <TourMap route={tour.route} />
            </div>
</div>
{/* <sertion Itinerary and form*/}
<div className=" grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-6 rounded-lg shadow-lg">
      <div>
        <Itinerary title={tour.title}  passBy={tour.passBy} image={tour.image}/>
      </div>
      <div>
        <FormTour newPrice={tour.newPrice} />
      </div>

</div>





      </div>
      <div>
        <div>{tour.description}</div>

        <div><strong>Durée:</strong> {tour.duration}</div>
        <div><strong>Type:</strong> {tour.type}</div>
        <div><strong>Départ:</strong> {tour.departure}</div>
        <div><strong>Arrivée:</strong> {tour.arrival}</div>
        <div><strong>Prix:</strong> {tour.newPrice ? `${tour.newPrice} MAD (au lieu de ${tour.latesPrice} MAD)` : `${tour.latesPrice} MAD`}</div>
      </div>

    </section>
  );
};

export default TourDetails;