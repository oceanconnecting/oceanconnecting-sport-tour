"use client";
import { useTranslations } from "next-intl";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
import type { Tour } from "@/types";
import AnimatedModalDemo from "./modalMaps";

interface ItineraryProps {
  tour: Tour;
}

export default function Itinerary({ tour }: ItineraryProps) {
  const tt = useTranslations("homepage.tours");

  const dateEndObj = tour.endDate ? new Date(tour.endDate) : new Date();
  const dateStartObj = tour.startDate ? new Date(tour.startDate) : new Date();

  // Extract Date (YYYY-MM-DD)
  const dateStart = dateStartObj.toISOString().split("T")[0];

  // Extract Time (HH:mm:ss)
  const timeStart = dateStartObj.toISOString().split("T")[1].slice(0, 5);

  // Extract Date (YYYY-MM-DD)
  const dateEnd = dateEndObj.toISOString().split("T")[0];

  // Extract Time (HH:mm:ss)
  const timeEnd = dateEndObj.toISOString().split("T")[1].slice(0, 5);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 md:py-12 text-gray-800">
      {/* Tour info section - stack on mobile, side by side on md+ */}
      <div className="flex flex-col md:flex-row md:items-center gap-6 mb-8 md:mb-12">
        <div className="w-full mt-4 md:mt-0">
          <p className="text-base md:text-lg text-text-900 mb-4">
            {tt(`tour.tour_${tour.id}.description`)}
          </p>
          <div className="text-sm text-text-500">
            <p>
              <strong>Date départ :</strong> {dateStart} à {timeStart}
            </p>
            <p>
              <strong>Date fin :</strong> {dateEnd} à {timeEnd}
            </p>
          </div>
        </div>
      </div>

      {/* Timeline section - horizontal on desktop, vertical on mobile */}
      <div className="relative">
        {/* Desktop timeline (hidden on mobile) */}
        <div className="hidden md:block">
          <div className="absolute left-0 top-1/2 w-full border-t-2" />
          <div className="relative flex justify-between">
            {tour.passBy.map((location, index) => (
              <div
                key={index}
                className="flex flex-col items-center bg-background-50 p-2"
              >
                <div className="w-8 h-8 flex justify-center items-center bg-primary-700 rounded-full mb-2 z-10 text-text-50">
                  <FaLocationDot />
                </div>
                <span className="text-sm font-medium text-text-950 text-center max-w-[120px]">
                  {tt(`tour.tour_${tour.id}.passBy.pass.${location}`)}
                </span>
                <span className="text-xs text-text-700 mt-1">
                  Stop {index + 1}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="md:hidden">
          <div className="relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-300" />
            <div className="space-y-6">
              {tour.passBy.map((location, index) => (
                <div
                  key={index}
                  className="relative bg-background-50 pt-3 flex items-start pl-12"
                >
                  <div className="absolute left-0 w-8 h-8 flex justify-center items-center bg-primary-700 rounded-full z-10 text-text-50">
                    <FaLocationDot />
                  </div>
                  <div className="bg-background-50 p-2 rounded-md shadow-sm w-full">
                    <span className="text-sm font-medium text-text-950 block">
                      {tt(`tour.tour_${tour.id}.passBy.pass.${location}`)}
                    </span>
                    <span className="text-xs text-text-700">
                      Stop {index + 1}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Modal map */}
      <div className="mt-6 md:mt-10">
        <div className="flex gap-4 justify-center items-center">
          <AnimatedModalDemo id={tour.id} route={tour.route} />
          <Link
            className="bg-primary-500 py-2 px-6 rounded-3xl text-white flex justify-center"
            href="#book"
          >
            book now
          </Link>
        </div>
      </div>
    </div>
  );
}
