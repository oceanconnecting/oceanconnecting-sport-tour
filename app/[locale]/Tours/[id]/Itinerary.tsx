"use client";
import { useTranslations } from "next-intl";
import { FaLocationDot } from "react-icons/fa6";
import Image from "next/image";
import { Tour } from "@/types";
import AnimatedModalDemo from "./modalMaps";
import { useMemo } from "react";

interface ItineraryProps {
  tour: Tour;
}

export default function Itinerary({ tour }: ItineraryProps) {
  const tt = useTranslations("homepage.tours");

  const { dateStart, timeStart, dateEnd, timeEnd } = useMemo(() => {
    const dateEndObj = tour.endDate ? new Date(tour.endDate) : new Date();
    const dateStartObj = tour.startDate ? new Date(tour.startDate) : new Date();

    return {
      dateStart: dateStartObj.toISOString().split("T")[0],
      timeStart: dateStartObj.toISOString().split("T")[1].slice(0, 5),
      dateEnd: dateEndObj.toISOString().split("T")[0],
      timeEnd: dateEndObj.toISOString().split("T")[1].slice(0, 5),
    };
  }, [tour.endDate, tour.startDate]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12 text-gray-800">
      <div className="mb-8">
        <h2 className="text-3xl font-bold">{tt(`tour.tour_${tour.id}.title`)}</h2>
      </div>

      <div className="flex items-center gap-6 mb-12">
        <div className="w-1/2 aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            width={300}
            height={600}
            src={tour.image}
            alt={tt(`tour.tour_${tour.id}.title`)}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="w-1/2">
          <p className="text-lg text-gray-600 mb-4">
            {tt(`tour.tour_${tour.id}.description`)}
          </p>
          <div className="text-sm text-gray-500">
            <p>
              <strong>{tt("Date_depart")} :</strong> {dateStart} {tt("at")}{timeStart}
            </p>
            <p>
              <strong>{tt("Date_fin")} :</strong> {dateEnd} {tt("at")} {timeEnd}
            </p>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-1/2 w-full border-t-2 border-gray-300" />
        <div className="relative flex justify-between">
          {tour.passBy.map((location, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-gray-50 p-2 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="w-8 h-8 flex justify-center items-center bg-primary-700 rounded-full mb-2 z-10 text-white">
                <FaLocationDot />
              </div>
              <span className="text-sm font-medium text-gray-700 text-center max-w-[120px]">
                {tt(`tour.tour_${tour.id}.passBy.pass.${location}`)}
              </span>
              <span className="text-xs text-gray-500 mt-1">
                {tt("stop")} {index + 1}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Map */}
      <div className="mt-5">
        <div className="rounded-full flex justify-center items-center">
          <AnimatedModalDemo id={tour.id} route={tour.route} />
        </div>
      </div>
    </div>
  );
}