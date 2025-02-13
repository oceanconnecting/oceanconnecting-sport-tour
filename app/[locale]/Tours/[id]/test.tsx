"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "@/Components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import { Calendar } from "@/Components/ui/calendar";
import { motion, useScroll, useTransform } from "framer-motion"; // Importez framer-motion
import { Button } from "@/Components/ui/button";
import { Tour } from '@/types';

interface FormProps {
  tour: Tour
}
export function  FormTour() {
  return (
    <div className="relative w-full flex items-end justify-end">
      <Navbar className="top-40" />
    </div>
  );
}
// FormTour: React.FC<FormProps> = ({ tour }) => {
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [babies, setBabies] = useState(0);
  const [date, setDate] = React.useState<Date | undefined>(new Date())
  const [reservationDetails, setReservationDetails] = useState<string | null>(null);
  const[priceAdults,setPriceAdults]=useState(0);
  const[priceChildren,setPriceChildren]=useState(0);
  const[pricebabies,setPricebabies]=useState(0);
  


  
   

  const increase = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => setter(value + 1);
  const decrease = (setter: React.Dispatch<React.SetStateAction<number>>, value: number) => value > 0 && setter(value - 1);
    console.log(date)
  return (
    
    <div className={cn(" top-40 inset-x-0  max-w-2xl mx-auto z-50", className)}>
      <Menu setActive={setActive}>
        <MenuItem   setActive={setActive} active={active} item="Reservation Details">
        <div className="flex  flex-col space-y-6">
  {/* Nombre d'Adultes */}
  <div className="flex justify-between items-center">
    <p className="font-semibold text-black">
      Nombre d'adultes <span className="text-slate-500 text-xs">(Âge 13-99)</span>
    </p>
    <div className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow-sm">
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => decrease(setAdults, adults)}
      >
        -
      </button>
      <span className="text-lg font-medium text-gray-700 px-3 border border-neutral-300 rounded-md bg-gray-50">
        {adults}
      </span>
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => increase(setAdults, adults)}
      >
        +
      </button>
    </div>
  </div>

  {/* Nombre d'Enfants */}
  <div className="flex justify-between items-center">
    <p className="font-semibold text-black">
      Nombre d'enfants <span className="text-slate-500 text-xs">(Âge 2-13)</span>
    </p>
    <div className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow-sm">
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => decrease(setChildren, children)}
      >
        -
      </button>
      <span className="text-lg font-medium text-gray-700 px-3 border border-neutral-300 rounded-md bg-gray-50">
        {children}
      </span>
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => increase(setChildren, children)}
      >
        +
      </button>
    </div>
  </div>

  {/* Nombre de Bébés */}
  <div className="flex justify-between items-center">
    <p className="font-semibold text-black">
      Nombre de bébés <span className="text-slate-500 text-xs">(Moins de 2 ans)</span>
    </p>
    <div className="flex items-center space-x-4 p-2 bg-white rounded-lg shadow-sm">
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => decrease(setBabies, babies)}
      >
        -
      </button>
      <span className="text-lg font-medium text-gray-700 px-3 border border-neutral-300 rounded-md bg-gray-50">
        {babies}
      </span>
      <button
        className="rounded-full w-8 h-8 flex items-center justify-center bg-slate-100 border border-neutral-300 text-black hover:bg-slate-200 transition-colors duration-200"
        onClick={() => increase(setBabies, babies)}
      >
        +
      </button>
    </div>
  </div>
</div>
        </MenuItem>

        <MenuItem setActive={setActive} active={active} item="DATE">
          <div className="flex flex-col space-y-4 text-sm">
          <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-md border shadow"
    />
          </div>
        </MenuItem>

       


       

<Button
  className={cn("inset-x-0 bg-red-800 max-w-2xl mx-auto z-50", className)}
  onClick={() => console.log("clicked")}
>
  Click me
</Button>



      </Menu>
    </div>
  );
}





