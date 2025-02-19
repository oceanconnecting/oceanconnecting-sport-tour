"use client"; // ✅ Mode client activé

import React from "react";
import { useLocale } from "next-intl";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";

interface Peoples {
    adults: number;
    children: number;
    babies: number;
}

interface TourReservationProps {
    id: number;
    peoples: Peoples;
    date: Date;
}

const TourReservationComponent: React.FC<TourReservationProps> = ({ id, peoples, date }) => {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const tt = useTranslations("homepage.tours");

    
    const handleSubmitReservation = (e: React.FormEvent) => {
        e.preventDefault();
    
        const formattedDate = date.toISOString().split("T")[0];
    
        // 🔹 Encodage correct de `poeples`
        const poeplesEncoded = encodeURIComponent(JSON.stringify(peoples));
    
        // ✅ Redirection avec les bons paramètres
        router.push(`/${locale}/Reservation_Tours/${id}?poeples=${poeplesEncoded}&date=${formattedDate}`);
    };
    
    

    return (
        <form onSubmit={handleSubmitReservation}>
            <button
                type="submit"
                className="px-5 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md 
                           hover:bg-blue-700 transition-all duration-300 ease-in-out
                           focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
                {tt("form.Confirm_Reservation")}
            </button>
        </form>
    );
};

export default TourReservationComponent;
