"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Tag from "@/Components/Tag";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { Tour } from "@/types";
import Itinerary from "./Itinerary";
import getToursData from "./ToursData";
import AnimatedModalDemo from "./modalMaps";
import { useTranslations } from "next-intl";
import Image from "./image";
import FormReservation from "./FormReservation";
import Rating from "../../../../Components/ratting";
import BackButton from "./back";
import { IoMdArrowRoundBack } from "react-icons/io";


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

  return (
    <section className="py-20 w-full bg-background-50 overflow-hidden px-8">
      <BackButton href="/#Tours"/>
      <Tag>{tt(`tour.tour_${numericId}.title`)}</Tag>
      <div className="grid lg:grid-cols-2 w-full md:grid-cols-1 sm:grid-cols-1 gap-6 bg-background-50 p-2 rounded-lg shadow-lg">
        <div className=" rounded-lg w-full flex justify-center items-center">
          <Image images={tour.images} />
        </div>
        <div className=" p-6 rounded-lg flex justify-center items-start">
          <Itinerary tour={tour} />
        </div>
      </div>
      <div className="grid lg:grid-cols-1 md:grid-cols-1 sm:grid-cols-1 gap-6 bg-background-50 p-3 rounded-lg shadow-lg">
        <div className=" p-6 rounded-lg flex  justify-center items-end">
          <FormReservation tour={tour} />
        </div>
      </div>
    </section>
  );
};

export default TourDetails;
