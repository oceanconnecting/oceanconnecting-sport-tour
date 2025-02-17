"use client"; // ✅ Ajoute "use client" en haut pour activer le mode client

import React from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation"; // ✅ Utiliser "next/navigation" au lieu de "next/router"

interface TourReservationProps {
    id: string;
}

const TourReservationComponent: React.FC<TourReservationProps> = ({ id }) => {
    const locale = useLocale(); // ✅ Récupère la langue courante
    const router = useRouter(); // ✅ Utilise "next/navigation"
    const pathname = usePathname(); // ✅ Récupère le chemin actuel
    const tt = useTranslations("homepage.tours");

    const handleSubmitReservation = (e: React.FormEvent) => {
        e.preventDefault(); // ✅ Empêche le rechargement de la page
        router.push(`/${locale}/Reservation_Tours/${id}`); // ✅ Redirection
    };

    return (
        <form onSubmit={handleSubmitReservation}>
            <button 
                type="submit" 
                className="px-4 py-2  bg-slate-200 text-black font-semibold rounded-full shadow-md hover:bg-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                {tt('form.Confirm_Reservation')}
            </button>
        </form>
    );
};

export default TourReservationComponent;
