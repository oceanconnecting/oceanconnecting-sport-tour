"use client";

import { useState, useEffect } from "react";
import { Button } from "@/Components/ui/button";
import { Tour } from "@/types";
import { Calendar } from "@/Components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Popover, PopoverContent, PopoverTrigger } from "@/Components/ui/popover";
import Toaster, { handleSubmitTour } from './action';
import { useTranslations } from "next-intl";
import { useRouter } from "next/router";
import { useLocale } from "next-intl";
import ParticipantCounter  from "@/Components/ParticipantCounter";
import TourReservationComponent from "./handelSubmitReservation";


interface FormProps {
  tour: Tour;
}

const FormTour: React.FC<FormProps> = ({ tour }) => {
  const tt = useTranslations("homepage.tours");
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [reservationDetails, setReservationDetails] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showReservationDetails, setShowReservationDetails] = useState<boolean>(false); // To toggle reservation modal
  const [router, setRouter] = useState<any>(null); // Utiliser un état pour le routeur

  const locale = useLocale();

 

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);
  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) setter(value - 1);
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0); // Reset time part to ensure comparison is based on date only

    if (selectedDate && selectedDate < today) {
      alert("Veuillez sélectionner une date valide (aujourd'hui ou une date future).");
      return;
    }

    setDate(selectedDate);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (adults === 0 && children === 0 && babies === 0) {
      alert("Il doit y avoir au moins un participant.");
      return;
    }

    if (!date) {
      alert(tt('form.alert'));
      return;
    }
const PA=tour.newPrice?.priceAdults ?? 0
const PC=tour.newPrice?.priceChildren ?? 0
const PB=tour.newPrice?.priceBabies ?? 0
const totalPrice = PA * adults +
                      PC* children +
                      PB* babies;

    setReservationDetails(`Adultes: ${adults}, Enfants: ${children}, Bébés: ${babies}, Date: ${date ? format(date, "PPP") : "N/A"}`);
    setTotalPrice(totalPrice);
    setShowReservationDetails(true); // Show the reservation details
  };



const handleCloseReservation = () => {
  setShowReservationDetails(false); // Hide the reservation details

        
      };


  // Ne pas exécuter immédiatement la redirection sans condition.
  // const handleSubmitReservation = () => {
  //   if (router) {
  //     router.push(`/${locale}/Reservation_Tours/${tour.id}`);
  //   }
  // };

  // Vérifier si le composant est monté avant de rendre quoi que ce soit


  return (
    <div className="grid grid-cols-1 items-center w-full mt-16 text-center">
      <div className="w-4/5 bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-lg font-bold mb-6">{tt('form.title')}</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <ParticipantCounter
            label={tt('form.Number_Adults')}
            value={adults}
            onDecrement={() => decrement(setAdults, adults)}
            onIncrement={() => increment(setAdults, adults)}
          />
         
          <ParticipantCounter
            label={tt('form.Number_Children')}
            value={children}
            onDecrement={() => decrement(setChildren, children)}
            onIncrement={() => increment(setChildren, children)}
          />

          <ParticipantCounter
            label={tt('form.Number_Babies')}
            value={babies}
            onDecrement={() => decrement(setBabies, babies)}
            onIncrement={() => increment(setBabies, babies)}
          />

          <div>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-[240px] justify-start text-left font-normal",
                    !date && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon />
                  {date ? format(date, "PPP") : <span>{tt('form.select_Date')}</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={handleDateSelect}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>

          <Button
            type="submit"
            className={`w-full mt-4  rounded-full  ${
              (adults === 0 && children === 0 && babies === 0 && !date)
                ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                : "bg-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
            disabled={adults === 0 && children === 0 && babies === 0 && !date}
          >
            {tt('form.Confirm_Reservation')}
          </Button>

        </form>
      </div>
     

      {showReservationDetails && reservationDetails && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 flex justify-center items-center">
          <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl z-50">
            <div className="flex justify-between items-center border-b-4 border-b-slate-700 pb-4">
              <h4 className="text-xl font-bold text-gray-900">{tt(`tour.tour_${tour.id}.title`)}</h4>
              <Button onClick={handleCloseReservation} className="text-gray-600 font-bold hover:text-gray-900">
                X
              </Button>
            </div>

            <div className="mt-4 text-gray-700">
              <p className="mb-2 text-sm font-medium text-gray-600">{tt('form.Duration')}: <span className="font-semibold text-gray-800">{tour.duration}</span></p>
              <div>
                <p className="font-semibold text-lg text-gray-800">{tt('form.Detail_Tariff')} :</p>
                {adults > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">{tt('form.Price_Adults')}:</span> 
                    <span className="text-sm text-gray-600">{adults}×{tour.newPrice?.priceAdults} </span> 
                    <span className="font-medium text-gray-800">{tour.newPrice?.priceAdults && adults > 0 ? (tour.newPrice.priceAdults * adults).toFixed(2) + ' dh' : 'Price unavailable'}</span>
                  </p>
                )}
                {children > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">{tt('form.Price_Children')}:</span> 
                    <span className="text-sm text-gray-600">{children}×{tour.newPrice?.priceChildren} </span> 
                    <span className="font-medium text-gray-800">{tour.newPrice?.priceChildren && children > 0 ? (tour.newPrice.priceChildren * children).toFixed(2) + ' dh' : 'Price unavailable'}</span>
                  </p>
                )}
                {babies > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">{tt('form.Price_Babies')}:</span>
                    <span className="text-sm text-gray-600">{babies}×{tour.newPrice?.priceBabies} </span> 
                    <span className="font-medium text-gray-800">{tour.newPrice?.priceBabies && babies > 0 ? (tour.newPrice.priceBabies * babies).toFixed(2) + ' dh' : 'Price unavailable'}</span>
                  </p>
                )}
              </div>

              <p className="mt-4 text-xl font-semibold text-gray-900">{tt('form.Total_Price')} : <span className="text-2xl text-green-600">{totalPrice} €</span></p>
            </div>
                  
            <div className="mt-8 flex justify-center">
              {date && <TourReservationComponent date={date} poeples={{ adults, children, babies }} id={tour.id } />}
              
              <Toaster />

            </div>
          </div>
        </div>
      )}
    </div>
  );
};


export default FormTour;
