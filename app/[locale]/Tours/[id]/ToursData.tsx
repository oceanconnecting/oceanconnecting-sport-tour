import { Tour } from "@/types";

const ToursData: Tour[] = [
  {
    id: 1,
    title: "Voyage d'Agadir à Marrakech",
    image: "/places/Agadir/agadir-oufella.jpg",
    images: [
      { src: "/Tours/tour1/img1.jpg", alt: "Marrakech Market" },
      { src: "/Tours/tour1/img2.jpg", alt: "Koutoubia Mosque" },
      { src: "/Tours/tour1/img3.jpg", alt: "Majorelle Garden" },
      { src: "/Tours/tour1/img4.jpg", alt: "Bahia Palace" },
      { src: "/Tours/tour1/img5.jpg", alt: "Saadian Tombs" },
      { src: "/Tours/tour1/img6.jpg", alt: "Majorelle Garden" },
      { src: "/Tours/tour1/img7.jpg", alt: "Bahia Palace" },
      { src: "/Tours/tour1/img8.jpg", alt: "Saadian Tombs" },
    ],
    route: [
      { lat: 30.4278, lng: -9.5981, name: "Amskroud" },
      { lat: 30.55, lng: -9.4, name: "Imi n'Tanout" },
      { lat: 30.6464, lng: -9.2121, name: "Sidi Mokhtar" },
      { lat: 30.8456, lng: -8.6938, name: "Chichaoua" },
      { lat: 31.45, lng: -8.1, name: "Lalla Takerkoust" },
      { lat: 31.6295, lng: -7.9811, name: "Point 6" },
    ],
    passBy: ["Amskroud", "Imi n'Tanout", "Sidi Mokhtar", "Chichaoua", "Lalla Takerkoust"],
    description: "Découvrez les paysages pittoresques entre Agadir et Marrakech avec des escales fascinantes.",
    rating: 4,
    departure: "Agadir",
    arrival: "Marrakech",
    type: "Aventure",
    duration: "10 - 12 hours",
    startDate: "2025-03-15T08:00:00Z", // Date de départ
    endDate: "2025-03-15T20:00:00Z", // Date de fin
    latesPrice: 300,
    newPrice: {
      priceAdults: 240,
      priceChildren: 200,
      
    },
  },
  {
    id: 2,
    title: "Excursion Marrakech - Essaouira",
    image: "/places/Marrakech/Jemaa-el-Fna.jpg",
    images: [
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Beach" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Medina" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Port" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Skala de la Ville" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Ramparts" },
    ],
    route: [
      { lat: 31.6295, lng: -7.9811, name: "Marrakech" },
      { lat: 31.6295, lng: -7.9811, name: "Chichaoua" },
      { lat: 31.55, lng: -8.3, name: "Argan Oil Cooperative" },
      { lat: 31.5, lng: -8.8, name: "Sidi Lmokhtar" },
      { lat: 31.52, lng: -9.2, name: "Ounara" },
      { lat: 31.51, lng: -9.6, name: "Bab Doukkala (Essaouira)" },
      { lat: 31.5085, lng: -9.7595, name: "Point 6" },
    ],
    passBy: ["Chichaoua", "Argan Oil Cooperative", "Sidi Lmokhtar", "Ounara", "Bab Doukkala (Essaouira)"],
    description: "Un parcours magique à travers les collines et forêts d'arganiers jusqu'à la côte atlantique.",
    rating: 4,
    departure: "Marrakech",
    arrival: "Essaouira",
    type: "Découverte",
    duration: "2 hours 30 minutes",
    startDate: "2025-03-16T09:00:00Z", // Date de départ
    latesPrice: 400,
    newPrice: {
      priceAdults: 240,
      priceChildren: 200,
      
    },
  },
  {
    id: 3,
    title: "Road Trip Essaouira - Agadir",
    image: "/places/Essaouira/Kasbah.jpg",
    images: [
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Beach" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Medina" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Port" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Sidi Kaouki" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Taghazout Beach" },
    ],
    route: [
      { lat: 31.5085, lng: -9.7595, name: "Essaouira" },
      { lat: 31.5085, lng: -9.7595, name: "Sidi Kaouki" },
      { lat: 31.45, lng: -9.3, name: "Tamri (Banana Village)" },
      { lat: 31.35, lng: -9.0, name: "Taghazout" },
      { lat: 31.0, lng: -8.5, name: "Seafront Promenade (Agadir)" },
      { lat: 30.8, lng: -9.0, name: "Kasbah Agadir Oufella" },
      { lat: 30.4278, lng: -9.5981, name: "Agadir" },
    ],
    passBy: ["Sidi Kaouki", "Tamri (Banana Village)", "Taghazout", "Seafront Promenade (Agadir)", "Kasbah Agadir Oufella"],
    description: "Partez à la découverte des plages sauvages et des charmants villages côtiers.",
    rating: 3,
    departure: "Essaouira",
    arrival: "Agadir",
    type: "Relaxation",
    duration: "3 days",
    startDate: "2025-03-17T08:00:00Z", // Date de départ
    endDate: "2025-03-19T18:00:00Z", // Date de fin
    latesPrice: 350,
    newPrice: {
      priceAdults: 240,
      priceChildren: 200,
      
    },
  },
  {
    id: 4,
    title: "Aventure d'une journée Agadir - Essaouira",
    image: "/places/Agadir/medina-museum.jpg",
    images: [
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Menara Gardens, Marrakech" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Jemaa el-Fna, Marrakech" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Agadir Beach" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Agadir Oufella" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Beach" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Medina" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Port" },
    ],
    route: [
      { lat: 30.4278, lng: -9.5981, name: "Agadir" },
      { lat: 30.4278, lng: -9.5981, name: "Tamri" },
      { lat: 30.6, lng: -9.7, name: "Taghazout" },
      { lat: 30.8, lng: -9.9, name: "Cap Ghir" },
      { lat: 31.0, lng: -10.1, name: "Sidi Kaouki" },
      { lat: 31.3, lng: -9.8, name: "Bab Marrakech (Essaouira)" },
      { lat: 31.5085, lng: -9.7595, name: "Essaouira" },
    ],
    passBy: ["Tamri", "Taghazout", "Cap Ghir", "Sidi Kaouki", "Bab Marrakech (Essaouira)"],
    description: "Profitez d'une route panoramique jusqu'à la célèbre ville bleue, Essaouira.",
    rating: 2,
    departure: "Agadir",
    arrival: "Essaouira",
    type: "Visite guidée",
    duration: "4 hours",
    startDate: "2025-03-20T08:00:00Z", // Date de départ
    latesPrice: 450,
    newPrice: {
      priceAdults: 240,
      priceChildren: 200,
      
    },
  },
  {
    id: 5,
    title: "Circuit Marrakech, Essaouira et Agadir",
    image: "/places/Marrakech/Menara-marrakech.jpg",
    images: [
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Koutoubia Mosque, Marrakech" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Majorelle Garden, Marrakech" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Beach" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Essaouira Medina" },
      { src: "/places/Marrakech/Menara-marrakech.jpg", alt: "Agadir Oufella" },
    ],
    route: [
      { lat: 30.4278, lng: -9.5981, name: "Agadir" },
      { lat: 31.6295, lng: -7.9811, name: "Marrakech" },
      { lat: 31.5085, lng: -9.7595, name: "Essaouira" },
      { lat: 31.35, lng: -9.5, name: "Tamri" },
      { lat: 31.7, lng: -9.7, name: "Taghazout" },
    ],
    passBy: ["Marrakech", "Essaouira", "Tamri", "Taghazout"],
    description: "Un circuit complet pour explorer les joyaux du Maroc.",
    rating: 5,
    departure: "Agadir",
    arrival: "Marrakech",
    type: "Culture",
    duration: "7 days",
    startDate: "2025-04-01T09:00:00Z", // Date de départ
    endDate: "2025-04-07T18:00:00Z", // Date de fin
    latesPrice: 500,
    newPrice: {
      priceAdults: 240,
      priceChildren: 200,
      
    },
  },
];


export default function getToursData(): Tour[] {
  return ToursData;
}


