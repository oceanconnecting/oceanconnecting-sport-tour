"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from "@/Components/Tag";
import { FaStar, FaRegStar, FaRegHeart, FaHeart } from "react-icons/fa";
import Propose from "./propos";
import { Tour } from "@/types";
import Itinerary from "./Itinerary";
import getToursData from "./ToursData";
import FormTour from "./Form";
import AnimatedModalDemo from "./modalMaps";
import { useTranslations } from "next-intl";
import Image from "./image";
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

  if (!id)
    return (
      <div>
        <p>Chargement...</p>
      </div>
    );
  if (!tour)
    return (
      <div>
        <p>Tour non trouvé.</p>
      </div>
    );

  const fullStars = Math.floor(tour.rating);
  const hasHalfStar = tour.rating % 1 >= 0.5;

  return (
    <section className="py-20">
      <Tag>{tt(`tour.tour_${numericId}.title`)}</Tag>
      <div className="grid grid-cols-2 items-center gap-4 py-4 px-8 bg-gray-50 rounded-xl shadow-sm w-full"></div>
      <div className="grid lg:grid-cols-2 w-full md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-2 rounded-lg shadow-lg">
        <Itinerary
          id={numericId}
          title={tour.title}
          passBy={tour.passBy}
          image={tour.image}
        />
        <div className=" rounded-lg w-full flex justify-center items-center">
          {/* <TourMap route={tour.route} /> */}
          {/* <ImageCarousel  images={tour.images}/> */}
          <Image images={tour.images} />
        </div>
      </div>

      {/* modal map  */}
      <div className="grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-gray-50 p-3 rounded-lg shadow-lg">
        <div className="  rounded-lg flex justify-center items-center">
          <AnimatedModalDemo id={numericId} route={tour.route} />
          <div />
        </div>
      </div>
      <FormTour tour={tour} />
    </section>
  );
};

export default TourDetails;
