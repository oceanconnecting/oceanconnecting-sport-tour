"use client"
import { useTranslations } from "next-intl"

interface Tour{
   
  id:number,
  title:string ,
  image:string ,
  description:string ,
  departure: string ,
  arrival:string ,
  duration: string,
  type:string,
  newPrice:string ,
  latesPrice:string,
  rating:number,
  route: number[][],
  passBy: string[];
  

};

export default function  getToursData(): Tour[] {
  const t = useTranslations("homepage.tours")
  const ToursData : Tour[]=[
    {
      id: 1,
      title: t("tour.tour_1.title"),
      image: "/places/Agadir/agadir-oufella.jpg",
      route: [
        [30.4278, -9.5981],
        [30.5500, -9.4000],
        [30.6464, -9.2121],
        [30.8456, -8.6938],
        [31.4500, -8.1000],
        [31.6295, -7.9811],
      ],
      passBy: ["Amskroud", "Imi n'Tanout", "Sidi Mokhtar", "Chichaoua", "Lalla Takerkoust"],
      description:
      t("tour.tour_1.description"),
      rating: 4,
      departure: "Agadir",
      arrival: "Marrakech",
      type: t("tour.tour_1.type"),
      duration: "10 - 12 hours",
      latesPrice: "300",
      newPrice: "250",
    },
    {
      id: 2,
      title: "Excursion Marrakech - Essaouira",
      image: "/places/Marrakech/Jemaa-el-Fna.jpg",
      route: [
        [31.6295, -7.9811],
        [31.5500, -8.3000],
        [31.5000, -8.8000],
        [31.5200, -9.2000],
        [31.5100, -9.6000],
        [31.5085, -9.7595],
      ],
      passBy: [
        "Chichaoua",
        "Argan Oil Cooperative",
        "Sidi Lmokhtar",
        "Ounara",
        "Bab Doukkala (Essaouira)",
      ],
      description:
        "Un parcours magique à travers les collines et forêts d'arganiers jusqu'à la côte atlantique.",
      rating: 4,
      departure: "Marrakech",
      arrival: "Essaouira",
      type: "Découverte",
      duration: "2 hours 30 minutes",
      latesPrice: "400",
      newPrice: "",
    },
    {
      id: 3,
      title: "Road Trip Essaouira - Agadir",
      image: "/places/Essaouira/Kasbah.jpg",
      route: [
        [31.5085, -9.7595],
        [31.4500, -9.3000],
        [31.3500, -9.0000],
        [31.0000, -8.5000],
        [30.8000, -9.0000],
        [30.4278, -9.5981],
      ],
      passBy: [
        "Sidi Kaouki",
        "Tamri (Banana Village)",
        "Taghazout",
        "Seafront Promenade (Agadir)",
        "Kasbah Agadir Oufella",
      ],
      description:
        "Partez à la découverte des plages sauvages et des charmants villages côtiers.",
      rating: 3,
      departure: "Essaouira",
      arrival: "Agadir",
      type: "Relaxation",
      duration: "3 days",
      latesPrice: "350",
      newPrice: "",
    },
    {
      id: 4,
      title: "Aventure d'une journée Agadir - Essaouira",
      image: "/places/Agadir/medina-museum.jpg",
      route: [
        [30.4278, -9.5981],
        [30.6000, -9.7000],
        [30.8000, -9.9000],
        [31.0000, -10.1000],
        [31.3000, -9.8000],
        [31.5085, -9.7595],
      ],
      passBy: ["Tamri", "Taghazout", "Cap Ghir", "Sidi Kaouki", "Bab Marrakech (Essaouira)"],
      description:
        "Profitez d'une route panoramique jusqu'à la célèbre ville bleue, Essaouira.",
      rating: 2,
      departure: "Agadir",
      arrival: "Essaouira",
      type: "visite guid",
      duration: "4 hours",
      latesPrice: "450",
      newPrice: "400",
    },
    {
      id: 5,
      title: "Circuit Marrakech, Essaouira et Agadir",
      image: "/places/Marrakech/Menara-marrakech.jpg",
      route: [
        [31.6295, -7.9811],
        [31.4500, -8.1000],
        [30.6000, -9.4000],
        [30.4278, -9.5981],
        [31.5085, -9.7595],
        [31.6295, -7.9811],
      ],
      passBy: [
        "Place Jemaa el-Fna (Marrakech)",
        "Argan Cooperative (en route)",
        "Bab Doukkala (Essaouira)",
        "Taghazout",
        "Kasbah Oufella (Agadir)",
      ],
      description: "Explorez les merveilles de trois villes emblématiques du Maroc.",
      rating: 4.9,
      departure: "Marrakech",
      arrival: "Agadir",
      type: "excursion",
      duration: "5 hours",
      latesPrice: "600",
      newPrice: "500",
    }
  ];
  return ToursData ;
}
