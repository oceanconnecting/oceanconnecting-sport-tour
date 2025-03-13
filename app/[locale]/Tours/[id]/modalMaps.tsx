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
  id: number;
} // Un tableau de points

export default function AnimatedModalDemo({ route, id }: TourMapProps) {
  const tt = useTranslations("homepage.tours");
  return (
    <div className="py-2 m-100 flex items-center justify-center">
      <Modal>
        <div>
          <ModalTrigger className="bg-primary-500 rounded-3xl text-black flex justify-center">
            <span className=" text-center transition duration-2000">
              {tt("show_map")}
            </span>
          </ModalTrigger>
        </div>

        <ModalBody className="bg-opacity-75 flex items-center justify-center">
          <ModalContent className="bg-white h-full  dark:bg-black dark:text-white rounded-xl p-4">
            <TourMap id={id} route={route} />
          </ModalContent>
        </ModalBody>
      </Modal>
    </div>
  );
}
