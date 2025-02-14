"use client";
import React from "react";
import { CiMap } from "react-icons/ci";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "@/Components/ui/animated-modal";
import Image from "next/image";
import { motion } from "framer-motion";
import TourMap from "./tourMap";
import { useTranslations } from "next-intl";

// Définir le type pour les points de la route
interface Point {
    lat: number;
    lng: number;
    name: string;
  }

  
  // Définir le type pour les props du composant
  interface TourMapProps {
    route: Point[]; // Un tableau de points
    id:number;
    }; // Un tableau de points
  


export default  function AnimatedModalDemo({route,id}: TourMapProps) {


      const tt = useTranslations("homepage.tours");
  return (
    <div className="py-2  flex items-center justify-center">
      <Modal >
        <ModalTrigger className="bg-black  dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className="group-hover/modal-btn:translate-x-40 text-center transition duration-2000">
          {tt('show_map')}
          </span>
          <div className="-translate-x-40    group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20">
          <CiMap size={25} />
          </div>
        </ModalTrigger>
        <ModalBody className="   bg-opacity-75 flex items-center justify-center">
          <ModalContent    className="bg-white h-full  dark:bg-black dark:text-white rounded-xl p-4">
                <TourMap id={id} route={route} />
          </ModalContent>
         
        </ModalBody>
      </Modal>
    </div>
  );
}

