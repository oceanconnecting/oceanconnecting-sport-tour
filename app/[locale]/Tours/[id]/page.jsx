"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const TourDetails = () => {
  const ToursData = [
    {
      id: 1,
      title: "Voyage d'Agadir à Marrakech",
      image: "/places/Agadir/agadir-oufella.jpg",
      description:
        "Découvrez les paysages pittoresques entre Agadir et Marrakech avec des escales fascinantes.",
      rating: 4,
      departure: "Agadir",
      arrival: "Marrakech",
      type: "Aventure",
      duration: "10 - 12 hours",
      latesPrice: "300",
      newPrice: "250",
    },
    {
      id: 2,
      title: "Excursion Marrakech - Essaouira",
      image: "/places/Marrakech/Jemaa-el-Fna.jpg",
      description:
        "Un parcours magique à travers les collines et forêts d'arganiers jusqu'à la côte atlantique.",
      rating: 4,
      departure: "Marrakech",
      arrival: "Essaouira",
      type: "Découverte",
      duration: "2 hours 30 minutes",
      latesPrice: "500",
      newPrice: "",
    },
    {
      id: 3,
      title: "Road Trip Essaouira - Agadir",
      image: "/places/Essaouira/Kasbah.jpg",
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
      description:
        "Explorez les merveilles de trois villes emblématiques du Maroc.",
      rating: 5,
      departure: "Marrakech",
      arrival: "Agadir",
      type: "excursion",
      duration: "5 hours",
      latesPrice: "600",
      newPrice: "500",
    },
  ];

  const params = useParams();
  const { id } = params;

  const [tour, setTour] = useState(null);

  useEffect(() => {
    if (id) {
      const foundTour = ToursData.find((t) => t.id.toString() === id);
      setTour(foundTour || null);
    }
  }, [id]);

  if (!id) {
    return (
      <div>
        <p>Chargement...</p>
      </div>
    );
  }

  if (!tour) {
    return (
      <div>
        <p>Tour non trouvé.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{tour.title}</h1>
      <p>{tour.description}</p>
      <img src={tour.image} alt={tour.title} width={600} />
      <p><strong>Durée:</strong> {tour.duration}</p>
      <p><strong>Type:</strong> {tour.type}</p>
      <p><strong>Départ:</strong> {tour.departure}</p>
      <p><strong>Arrivée:</strong> {tour.arrival}</p>
      <p><strong>Prix:</strong> {tour.newPrice ? `${tour.newPrice} MAD (au lieu de ${tour.latesPrice} MAD)` : `${tour.latesPrice} MAD`}</p>
    </div>
  );
};

export default TourDetails;
