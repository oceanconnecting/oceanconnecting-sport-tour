"use client";

import { useState } from "react";
import { Button } from "@/Components/ui/button";
import { Tour } from '@/types';

interface FormProps {
  tour: Tour
}

const FormTour: React.FC<FormProps> = ({ tour }) => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [formDate, setFormDate] = useState<string | null>(null);
  const [reservationDetails, setReservationDetails] = useState<string | null>(null);
  const[priceAdults,setPriceAdults]=useState(0);
  const[priceChildren,setPriceChildren]=useState(0);
  const[pricebabies,setPricebabies]=useState(0);
  const today = new Date().toISOString().split("T")[0];

  const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) setter(value - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (adults === 0 && children === 0 && babies === 0) {
      alert("Il doit y avoir au moins un participant.");
    } else if (!formDate) {
      alert("Veuillez sélectionner une date.");
    } else {
      setReservationDetails(`Nombre de bébés : ${babies}, Date : ${formDate}`);

    };
    setPriceAdults( (tour.newPrice?.priceAdults ?? 0) * adults)
    setPriceChildren((tour.newPrice?.priceChildren ?? 0) * children)
    setPricebabies((tour.newPrice?.pricebabies ?? 0) * babies)
    
 
  };

  return (
    <div className="grid grid-cols-1 items-center mt-16 text-center">
      <div className="max-w-md mx-auto bg-white p-6 rounded-3xl shadow-md">
        <h3 className="text-lg font-bold mb-6">Choisissez les participants et la date</h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Adultes */}
          <ParticipantCounter label="Nombre d'Adultes" value={adults} onDecrement={() => decrement(setAdults, adults)} onIncrement={() => increment(setAdults, adults)} />
          
          {/* Enfants */}
          <ParticipantCounter label="Nombre d'Enfants" value={children} onDecrement={() => decrement(setChildren, children)} onIncrement={() => increment(setChildren, children)} />
          
          {/* Bébés */}
          <ParticipantCounter label="Nombre de Bébés" value={babies} onDecrement={() => decrement(setBabies, babies)} onIncrement={() => increment(setBabies, babies)} />

          {/* Date */}
          <div>
            <label className="block text-sm font-medium mb-2">Date de réservation</label>
            <input
              type="date"
              value={formDate || ""}
              onChange={(e) => setFormDate(e.target.value)}
              min={today}
              className="w-full p-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <Button
            type="submit"
            className={`w-full mt-4 ${
              (adults === 0 && children === 0 && babies === 0) || !formDate ? "bg-gray-300 text-gray-600 cursor-not-allowed" : "bg-slate-300 hover:bg-slate-700 hover:text-white"
            }`}
            disabled={(adults === 0 && children === 0 && babies === 0) || !formDate}
          >
            Confirmer la réservation
          </Button>
        </form>
       
            


      </div>
         {/* Résultat après réservation */}
         {reservationDetails && (
          <div className="mt-8 w-4/5 p-6 bg-slate-100 border border-zinc-600 rounded-lg shadow-lg">
  <div className="flex justify-start items-start border-b-4 border-b-slate-700 pb-4">
    <h4 className="text-lg font-semibold text-gray-900">{tour.title}</h4>
  </div>
  
  <div className="mt-4 text-gray-700">
    <p className="mb-2">Duration: <span className="font-medium">{tour.duration}</span></p>
    <div>
          <p>Detail Tarif :</p>
          {adults >0 &&(
            <p className="mb-2 grid grid-cols-2">Prix Adults: <span className="font-medium text-start">{adults}×{tour.newPrice?.priceAdults} {priceAdults} €</span></p>

          )}
          {children>0 &&(

    <p className="mb-2 grid grid-cols-2">Prix Children: <span className="font-medium text-start "> {children}×{tour.newPrice?.priceChildren} {priceChildren} €</span></p>
          )}
          {babies>0 &&(

    <p className="mb-2 grid grid-cols-2">Prix Babies: <span className="font-medium text-start" > {babies}×{tour.newPrice?.pricebabies} {pricebabies} €</span></p>
          )}
    </div>
         

    <p className="mt-4 text-lg font-semibold">Total Price: {priceAdults + priceChildren+pricebabies }<span className="font-bold text-xl  text-start">{/* Calculate total price here */}</span></p>
  </div>
  
  <div className="mt-4">
    <p className="text-gray-800">{reservationDetails}</p>
  </div>
  
  <div className="mt-6">
    <Button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">Reservation</Button>
  </div>
</div>

          
        )}
    </div>
  );
};

// Composant pour chaque compteur de participant
interface ParticipantCounterProps {
  label: string;
  value: number;
  onDecrement: () => void;
  onIncrement: () => void;
}

const ParticipantCounter: React.FC<ParticipantCounterProps> = ({ label, value, onDecrement, onIncrement }) => (
  <div>
    <label className="block text-sm font-medium mb-2">{label}</label>
    <div className="flex items-center justify-between">
      <button type="button" onClick={onDecrement} className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
        -
      </button>
      <span className="px-6 font-semibold">{value}</span>
      <button type="button" onClick={onIncrement} className="p-2 font-medium bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300">
        +
      </button>
    </div>
  
  </div>
 
);

export default FormTour;
