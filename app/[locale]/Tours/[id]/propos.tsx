'use client '

import React from "react"
import { BsCalendar2Check } from "react-icons/bs";
import { TbReservedLine } from "react-icons/tb";
import { SiStagetimer } from "react-icons/si";
import { MdOutlineSwitchAccessShortcut } from "react-icons/md";
import { FaWheelchair } from "react-icons/fa";
const Propose=()=>{

    return (
        <div>
    <h2 className="text-xl font-bold mb-4 text-slate-800">À propos de cette activité</h2>

    {/* Annulation gratuite */}
    <div className="flex items-start gap-4 mb-4">
      <BsCalendar2Check size={24} className="text-slate-700" />
      <div>
        <p className="font-semibold text-gray-700">Annulation gratuite</p>
        <p className="text-gray-600 text-sm">
          Annulation jusqu'à 24 heures à l'avance pour un remboursement intégral
        </p>
      </div>
    </div>

    {/* Réservez maintenant */}
    <div className="flex items-start gap-4 mb-4">
      <TbReservedLine size={24} className="text-slate-700" />
      <div>
        <p className="font-semibold text-gray-700">Réservez maintenant, payez plus tard</p>
        <p className="text-gray-600 text-sm">
          Restez flexible dans vos projets de voyage : réservez votre place sans rien payer aujourd'hui
        </p>
      </div>
    </div>

    {/* Valide 30 jours */}
    <div className="flex items-start gap-4 mb-4">
      <SiStagetimer size={24} className="text-slate-700" />
      <div>
        <p className="font-semibold text-gray-700">Valide 30 jours</p>
        <p className="text-gray-600 text-sm">
          Vérifiez les disponibilités pour voir les heures de début
        </p>
      </div>
    </div>

    {/* Accès rapide */}
    <div className="flex items-start gap-4 mb-4">
      <MdOutlineSwitchAccessShortcut size={24} className="text-slate-700" />
      <div>
        <p className="font-semibold text-gray-700">
          Accès permettant d'éviter la file pour les guichets
        </p>
      </div>
    </div>

    {/* Accessible fauteuil roulant */}
    <div className="flex items-start gap-4">
      <FaWheelchair size={24} className="text-slate-700" />
      <div>
        <p className="font-semibold text-gray-700">
          Accessible aux personnes en fauteuil roulant
        </p>
      </div>
    </div>
  </div>

    )
};
export default Propose;