"use client";

import { useState } from "react";
import { MdDateRange } from "react-icons/md";
import { Calendar } from 'primereact/calendar';

interface FormProps {
  newPrice?: string;
}

const FormTour: React.FC<FormProps> = ({ newPrice }) => {
  const [adults, setAdults] = useState<number>(0);
  const [children, setChildren] = useState<number>(0);
  const [babies, setBabies] = useState<number>(0);
  const [dateOfReservation, setDateOfReservation] = useState<Date | null>(null);


  const today: Date = new Date(); // Ensure today is a valid Date object


  const increment = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);

  const decrement = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => {
    if (value > 0) setter(value - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Réservation confirmée : ${adults} Adultes, ${children} Enfants, ${babies} Bébés`);
  };

  return (
    <div className="border-spacing-3 grid grid-cols-1 items-center mt-20 justify-center text-center">
      <div className="w-full h-full text-center justify-center items-center rounded-lg">
        <h3>Choisissez le nombre de participant·es et la date</h3>
        <div className="w-4/5 align-middle">
          <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 shadow-lg rounded-lg">
            {/* Section Adultes */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Nombre Adult <span>(Âge 13-60)</span></label>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => decrement(setAdults, adults)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
                <span>{adults}</span>
                <button type="button" onClick={() => increment(setAdults, adults)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
              </div>
            </div>

            {/* Section Enfants */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Nombre Enfant <span>(Âge 2-12)</span></label>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => decrement(setChildren, children)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
                <span>{children}</span>
                <button type="button" onClick={() => increment(setChildren, children)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
              </div>
            </div>

            {/* Section Bébés */}
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Nombre Bébé <span>(Âge moins de 2)</span></label>
              <div className="flex items-center gap-2">
                <button type="button" onClick={() => decrement(setBabies, babies)} className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600">-</button>
                <span>{babies}</span>
                <button type="button" onClick={() => increment(setBabies, babies)} className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600">+</button>
              </div>
            </div>

            {/* Date de réservation */}
            <div className="relative max-w-sm">
              <label className="block text-sm font-medium mb-2" htmlFor="dateOfReservation">Date de réservation</label>
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                
              
              
              </div>
              {/* <input
                type="date"
                id="dateOfReservation"
                name="dateOfReservation"
                value={formData.dateOfReservation}
                onChange={handleChange}
                min={today}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                required
              /> */}
                   <div className="card flex justify-content-center">
                            <Calendar
                                id="dateOfReservation"
                                name="dateOfReservation"
                                value={dateOfReservation}
                                onChange={(e) => setDateOfReservation(e.value || null)}
                                minDate={today}
                                    />
        </div>

            </div>

            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
              Valider la réservation
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTour;
