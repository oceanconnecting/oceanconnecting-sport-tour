"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Tour } from "@/types";
import { Calendar } from "@/Components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/Components/ui/popover";
import Toaster, { handleSubmitTour } from './action';
interface FormProps {
  tour: Tour;
}

  const FormTour: React.FC<FormProps> = ({ tour }) => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [reservationDetails, setReservationDetails] = useState<string | null>(null);
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [showReservationDetails, setShowReservationDetails] = useState<boolean>(false); // To toggle reservation modal

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
      alert("Veuillez sélectionner une date.");
      return;
    }

    const totalPrice = (tour.newPrice?.priceAdults ?? 0) * adults +
                      (tour.newPrice?.priceChildren ?? 0) * children +
                      (tour.newPrice?.priceBabies ?? 0) * babies;

    setReservationDetails(`Adultes: ${adults}, Enfants: ${children}, Bébés: ${babies}, Date: ${date ? format(date, "PPP") : "N/A"}`);
    setTotalPrice(totalPrice);
    setShowReservationDetails(true); // Show the reservation details
  };

  const handleCloseReservation = () => {
    setShowReservationDetails(false); // Hide the reservation details

          
        };
 const  handleSubmitReservation = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    const emailData = {
      from_name: "Tour Reservation", // Your name or company name
      email: "elbrikifatima19@gmail.com", // User email or static recipient
      subject: "Confirmation de Réservation de Tour",
      notre: ['positronna029@gmail.com'],
      message: `
        Détails de la réservation:
  
        Tour: ${tour.title}
        Durée: ${tour.duration}
        Date: ${date ? format(date, "PPP") : "N/A"}
        Participants: Adultes: ${adults}, Enfants: ${children}, Bébés: ${babies}
        Prix Total: ${totalPrice} €
      `,
    };
    try {
      await handleSubmitTour(emailData);
      
    } catch (error) {
      console.error('Error during form submission:', error);
    } finally {
      setShowReservationDetails(false); // Hide the reservation details
      setAdults(0);
      setChildren(0);
      setBabies(0);
      setDate(undefined);
      setTotalPrice(0);
    }
  };

 

  return (
    <div className="grid grid-cols-1 items-center w-full mt-16 text-center">
      <div className="max-w-md mx-auto bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-lg font-bold mb-6">Choisissez les participants et la date</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <ParticipantCounter
            label="Nombre d'Adultes"
            value={adults}
            onDecrement={() => decrement(setAdults, adults)}
            onIncrement={() => increment(setAdults, adults)}
          />

          <ParticipantCounter
            label="Nombre d'Enfants"
            value={children}
            onDecrement={() => decrement(setChildren, children)}
            onIncrement={() => increment(setChildren, children)}
          />

          <ParticipantCounter
            label="Nombre de Bébés"
            value={babies}
            onDecrement={() => decrement(setBabies, babies)}
            onIncrement={() => increment(setBabies, babies)}
          />

          <div>
            <label className="block text-sm font-medium mb-2">Date de réservation</label>
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
                  {date ? format(date, "PPP") : <span>Select Date</span>}
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
                className={`w-full mt-4 ${
                  (adults === 0 && children === 0 && babies === 0 && !date)
                    ? "bg-gray-300 text-gray-600 cursor-not-allowed"
                    : "bg-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
                disabled={adults === 0 && children === 0 && babies === 0 && !date}
              >
                Confirmer la réservation
              </Button>

        </form>
      </div>

      {showReservationDetails && reservationDetails && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 z-40 flex justify-center items-center">
          <div className="w-full max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-2xl z-50">
            <div className="flex justify-between items-center border-b-4 border-b-slate-700 pb-4">
              <h4 className="text-xl font-bold text-gray-900">{tour.title}</h4>
              <Button onClick={handleCloseReservation} className="text-gray-600 font-bold hover:text-gray-900">
                X
              </Button>
            </div>

            <div className="mt-4 text-gray-700">
              <p className="mb-2 text-sm font-medium text-gray-600">Duration: <span className="font-semibold text-gray-800">{tour.duration}</span></p>
              <div>
                <p className="font-semibold text-lg text-gray-800">Detail Tarif :</p>
                {adults > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">Prix Adults:</span> 
                    <span className="text-sm text-gray-600">{adults}×{tour.newPrice?.priceAdults} </span> 

                    <span className="font-medium text-gray-800"> {tour.newPrice?.priceAdults && adults > 0  ? (tour.newPrice.priceAdults * adults).toFixed(2) + ' €' : 'Price unavailable'}€</span>
                  </p>
                )}
               {children > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">Prix Children:</span> 
                    <span className="text-sm text-gray-600">{children}×{tour.newPrice?.priceChildren} </span> 
                    <span className="font-medium text-gray-800">
                      {tour.newPrice?.priceChildren && children > 0
                        ? (tour.newPrice.priceChildren * children).toFixed(2) + ' €'
                        : 'Price unavailable'}
                    </span>
                  </p>
                )}

                {babies > 0 && (
                  <p className="mb-2 grid grid-cols-3 gap-4">
                    <span className="text-sm text-gray-600">Prix Babies:</span>
                    <span className="text-sm text-gray-600">{babies}×{tour.newPrice?.priceBabies} </span> 
                    <span className="font-medium text-gray-800">
                      {tour.newPrice?.priceBabies && babies > 0
                        ? (tour.newPrice.priceBabies * babies).toFixed(2) + ' €'
                        : 'Price unavailable'}
                    </span>
                  </p>
                )}
              </div>

              <p className="mt-4 text-xl font-semibold text-gray-900">Total Price: <span className="text-2xl text-green-600">{totalPrice} €</span></p>
            </div>

            <div className="mt-8 flex justify-center">
            <form onSubmit={handleSubmitReservation}>
  {/* Your form components for input */}
  <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">
    Confirmer la réservation
  </Button>
</form>
<Toaster />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

interface ParticipantCounterProps {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const ParticipantCounter: React.FC<ParticipantCounterProps> = ({ label, value, onDecrement, onIncrement }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="flex items-center justify-center gap-20">
      <button
        type="button"
        onClick={onDecrement}
        className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        aria-label="Decrease number of participants"
      >
        -
      </button>
      <span className="px-6 font-semibold">{value}</span>
      <button
        type="button"
        onClick={onIncrement}
        className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
        aria-label="Increase number of participants"
      >
        +
      </button>
    </div>
  </div>
);

export default FormTour;
