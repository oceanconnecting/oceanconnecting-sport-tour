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
    <div className="py-2 m-100 flex items-center justify-center">
      <Modal >
        <motion.div    
          initial={{ opacity: 0.3, y: -5, scale: 1 }}
          animate={{ opacity: 1, y: -8, scale: 1.2 }}      
          transition={{
          duration: 3, // Slow animation (increase for even slower)
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut", // Smooth transition effect
    }}
>
        <ModalTrigger className="bg-black  rounded-3xl dark:bg-white dark:text-black text-white flex justify-center group/modal-btn">
          <span className=" text-center transition duration-2000">
          {tt('show_map')}
          </span>
          
        </ModalTrigger>
        </motion.div>
        
        <ModalBody className="bg-opacity-75 flex items-center justify-center">
          <ModalContent    className="bg-white h-full  dark:bg-black dark:text-white rounded-xl p-4">
                <TourMap id={id} route={route} />
          </ModalContent>
         
        </ModalBody>
      </Modal>
    </div>
  );
}

