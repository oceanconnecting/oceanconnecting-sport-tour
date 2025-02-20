'use client'

import React from "react"
import { BsCalendar2Check, BsClockHistory, BsPeople, BsShieldCheck } from "react-icons/bs";
import { useTranslations } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion"; // Importez framer-motion



const Propose = () => {
   // Utilisez useScroll pour suivre le défilement de la page
      const { scrollY } = useScroll();
    const tt= useTranslations("homepage.tours.propose");
      // Utilisez useTransform pour mapper la position du scroll à une valeur de translation
      const y = useTransform(scrollY, [0, Infinity], [0, Infinity]); // Déplace de 0 à 100px lorsque l'utilisateur fait défiler 200px
      const data: any = [
        {
          title: tt('propose1.title'),
          description: tt('propose1.descr'),
          icon: <BsCalendar2Check size={24} className="text-slate-700" />
        },
        {
          title: tt('propose2.title'),
          description: tt('propose2.descr'),
          icon: <BsShieldCheck size={24} className="text-slate-700" />
        },
        {
          title: tt('propose3.title'),
          description: tt('propose3.descr'),
          icon: <BsClockHistory size={24} className="text-slate-700" />
        },
        {
          title: tt('propose4.title'),
          description: tt('propose4.descr'),
          icon: <BsPeople size={24} className="text-slate-700" />
        }
      ];
  return (
    <div className="propose-container">
      {data.map((item: any, index: number) => (
        <div key={index} className="flex items-start gap-4 mb-4">
          {item.icon}
          <div>
            <p className="font-semibold text-gray-700">{item.title}</p>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
      


      
      
    </div>
  );
};

export default Propose;