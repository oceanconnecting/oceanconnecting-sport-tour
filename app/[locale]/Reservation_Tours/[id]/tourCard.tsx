
import React from 'react';
import {Tour} from "@/types";
interface TourCardProps {
    tour: Tour;
}

const TourCardReservation: React.FC<TourCardProps> = ({ tour}) => {
    return (
        <div className="flex flex-col items-center bg-background-100">
            <img className="" />
            <div className="mb-6">
                <h2 className=""></h2>
                <p className=""></p>
            </div>
        </div>
    );
};

export default TourCardReservation;