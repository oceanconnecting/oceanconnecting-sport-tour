"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import  Tag  from '@/Components/Tag';
import { FaStar, FaRegStar } from 'react-icons/fa';
import { FaRegHeart } from "react-icons/fa";
const TourDetails = () => {
  const ToursData = [
    {id:1,title: "Voyage d'Agadir à Marrakech",image: "/places/Agadir/agadir-oufella.jpg",description: "Découvrez les paysages pittoresques entre Agadir et Marrakech avec des escales fascinantes.",rating: 4,departure: "Agadir",arrival: "Marrakech",type: "Aventure",duration: "10 - 12 hours",latesPrice: "300", newPrice: "250"},
    {id:2, title: "Excursion Marrakech - Essaouira",image: "/places/Marrakech/Jemaa-el-Fna.jpg",description: "Un parcours magique à travers les collines et forêts d'arganiers jusqu'à la côte atlantique.",rating: 4,departure: "Marrakech",arrival: "Essaouira",type: "Découverte",duration: "2 hours 30 minutes", latesPrice: "400",newPrice: ""},
    {id:3,title: "Road Trip Essaouira - Agadir",image: "/places/Essaouira/Kasbah.jpg",description: "Partez à la découverte des plages sauvages et des charmants villages côtiers.",rating: 3,departure: "Essaouira",arrival: "Agadir",type: "Relaxation",duration: "3 days",latesPrice: "350",newPrice: ""},
    {id:4,title: "Aventure d'une journée Agadir - Essaouira",image: "/places/Agadir/medina-museum.jpg",description: "Profitez d'une route panoramique jusqu'à la célèbre ville bleue, Essaouira.", rating: 2,departure: "Agadir",arrival: "Essaouira",type: "visite guid",duration: "4 hours",latesPrice: "450", newPrice: "400"},
    {id:5,title: "Circuit Marrakech, Essaouira et Agadir",image: "/places/Marrakech/Menara-marrakech.jpg",description: "Explorez les merveilles de trois villes emblématiques du Maroc.",rating: 4.9,departure: "Marrakech",arrival: "Agadir",type: "excursion",duration: "5 hours",latesPrice: "600",newPrice: "500"}
  ];

  const params = useParams();
  const { id } = params;
const [isFavorited, setIsFavorited] =useState(false);
  const [tour, setTour] = useState(null);
const handlFavoritClick=()=>{
  setIsFavorited(!isFavorited);
}
  useEffect(() => {
    if (id) {
      const foundTour = ToursData.find((t) => t.id.toString() === id);
      setTour(foundTour || null);
    }
  }, [id]);

  if (!id) {return (<div><p>Chargement...</p></div>); }

  if (!tour) {return (<div><p>Tour non trouvé.</p></div>);}

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
                            <FaRegHeart size={30} className="text-red-500 bg-red-500 px-3" />
                          ):(
                            <FaRegHeart size={30} className="text-gray-700 "/>
                          )
                        }
                         <span className="text-blue-950 font-bold text-base  underline">Favori</span>
                      </div>
                    </div>
        </div>

        <div className="grid grid-cols-3 p-10 gap-4">

          <div className="grid ">
          <img src={tour.image} alt={tour.title}  />
          </div>

          <div className="grid ">
          <img src={tour.image} alt={tour.title}  />
          </div>

          <div className="grid ">
          <img src={tour.image} alt={tour.title}  />
          </div>
       
        </div>



        
      </div>
    <div>
      <p>{tour.description}</p>
     
      <p><strong>Durée:</strong> {tour.duration}</p>
      <p><strong>Type:</strong> {tour.type}</p>
      <p><strong>Départ:</strong> {tour.departure}</p>
      <p><strong>Arrivée:</strong> {tour.arrival}</p>
      <p><strong>Prix:</strong> {tour.newPrice ? `${tour.newPrice} MAD (au lieu de ${tour.latesPrice} MAD)` : `${tour.latesPrice} MAD`}</p>
    </div>

    </section>
  );
};

export default TourDetails;
