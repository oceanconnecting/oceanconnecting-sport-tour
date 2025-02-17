"use client";

import { useParams } from "next/navigation";
import React from "react";
import Tag from "@/Components/Tag";
import {Tour} from "@/types";
import { useTranslations } from "next-intl";
import getToursData from "../../Tours/[id]/ToursData";
import TourCardReservation from "./tourCard";
const ReservationPage = () => {

    const params = useParams();
    const { id } = params as { id: string };
    const numericId = parseInt(id, 10);//convert the string to a number
    const tour : Tour | undefined = getToursData().find((t) => t.id === numericId);
      if (!tour) {
        return <div>Tour not found</div>;
      }
  return (
    <div className="pt-6 ">
    
<div><Tag>Shopping cart</Tag></div>
<div>
  <TourCardReservation tour={tour} />
</div>
        
      
    
    </div>
  );
};

export default ReservationPage;
