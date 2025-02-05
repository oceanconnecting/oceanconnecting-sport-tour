'use client'

import React from "react"
import { BsCalendar2Check, BsClockHistory, BsPeople, BsShieldCheck } from "react-icons/bs";

const data: any = [
  {
    title: "Annulation gratuite",
    description: "Annulation jusqu'à 24 heures à l'avance pour un remboursement intégral",
    icon: <BsCalendar2Check size={24} className="text-slate-700" />
  },
  {
    title: "Sécurité maximale",
    description: "Mesures de sécurité renforcées pour garantir votre tranquillité d'esprit",
    icon: <BsShieldCheck size={24} className="text-slate-700" />
  },
  {
    title: "Support 24/7",
    description: "Assistance disponible à tout moment pour répondre à vos questions",
    icon: <BsClockHistory size={24} className="text-slate-700" />
  },
  {
    title: "Groupes réduits",
    description: "Profitez d'une expérience plus personnelle avec des groupes de petite taille",
    icon: <BsPeople size={24} className="text-slate-700" />
  }
];

const Propose = () => {
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