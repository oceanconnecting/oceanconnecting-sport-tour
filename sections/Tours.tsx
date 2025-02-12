"use client ";

import ToursCards from "@/Components/ToursCards";
import Tag from "@/Components/Tag";
import getToursData from "@/app/[locale]/Tours/[id]/ToursData";
import { useTranslations } from "next-intl";
interface Tour {
  id: number;
  title: string;
  image: string;
  description: string;
  departure: string;
  arrival: string;
  duration: string;
  type: string;
  newPrice: string;
  latesPrice: string;
  rating: number;
  route: number[][];
  passBy: string[];
}

const Tours = () => {
  const t = useTranslations("homepage.tours");
  const ToursData: Tour[] = [
    {
      id: 1,
      title: t("tour.tour_1.title"),
      image: "/places/Agadir/agadir-oufella.jpg",
      route: [
        [30.4278, -9.5981],
        [30.55, -9.4],
        [30.6464, -9.2121],
        [30.8456, -8.6938],
        [31.45, -8.1],
        [31.6295, -7.9811],
      ],
      passBy: [
        "Amskroud",
        "Imi n'Tanout",
        "Sidi Mokhtar",
        "Chichaoua",
        "Lalla Takerkoust",
      ],
      description: t("tour.tour_1.description"),
      rating: 4,
      departure: "Agadir",
      arrival: "Marrakech",
      type: t("tour.tour_1.type"),
      duration: t("tour.tour_1.duration"),
      latesPrice: "300",
      newPrice: "250",
    },
    {
      id: 2,
      title: t("tour.tour_2.title"),
      image: "/places/Marrakech/Jemaa-el-Fna.jpg",
      route: [
        [31.6295, -7.9811],
        [31.55, -8.3],
        [31.5, -8.8],
        [31.52, -9.2],
        [31.51, -9.6],
        [31.5085, -9.7595],
      ],
      passBy: [
        "Chichaoua",
        "Argan Oil Cooperative",
        "Sidi Lmokhtar",
        "Ounara",
        "Bab Doukkala (Essaouira)",
      ],
      description: t("tour.tour_2.description"),
      rating: 4,
      departure: "Marrakech",
      arrival: "Essaouira",
      type: t("tour.tour_2.type"),
      duration: t("tour.tour_2.duration"),
      latesPrice: "400",
      newPrice: "300",
    },
    {
      id: 3,
      title: t("tour.tour_3.title"),
      image: "/places/Essaouira/Kasbah.jpg",
      route: [
        [31.5085, -9.7595],
        [31.45, -9.3],
        [31.35, -9.0],
        [31.0, -8.5],
        [30.8, -9.0],
        [30.4278, -9.5981],
      ],
      passBy: [
        "Sidi Kaouki",
        "Tamri (Banana Village)",
        "Taghazout",
        "Seafront Promenade (Agadir)",
        "Kasbah Agadir Oufella",
      ],
      description: t("tour.tour_3.description"),
      rating: 3,
      departure: "Essaouira",
      arrival: "Agadir",
      type: t("tour.tour_3.type"),
      duration: t("tour.tour_3.duration"),
      latesPrice: "350",
      newPrice: "120",
    },
    {
      id: 4,
      title: t("tour.tour_4.title"),
      image: "/places/Agadir/medina-museum.jpg",
      route: [
        [30.4278, -9.5981],
        [30.6, -9.7],
        [30.8, -9.9],
        [31.0, -10.1],
        [31.3, -9.8],
        [31.5085, -9.7595],
      ],
      passBy: [
        "Tamri",
        "Taghazout",
        "Cap Ghir",
        "Sidi Kaouki",
        "Bab Marrakech (Essaouira)",
      ],
      description: t("tour.tour_4.description"),
      rating: 2,
      departure: "Agadir",
      arrival: "Essaouira",
      type: t("tour.tour_4.type"),
      duration: t("tour.tour_4.duration"),
      latesPrice: "450",
      newPrice: "400",
    },
    {
      id: 5,
      title: t("tour.tour_5.title"),
      image: "/places/Marrakech/Menara-marrakech.jpg",
      route: [
        [31.6295, -7.9811],
        [31.45, -8.1],
        [30.6, -9.4],
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
      description: t("tour.tour_5.description"),
      rating: 4.9,
      departure: "Marrakech",
      arrival: "Agadir",
      type: t("tour.tour_5.type"),
      duration: t("tour.tour_5.duration"),
      latesPrice: "600",
      newPrice: "500",
    },
  ];

  return (
    <div
      id="Tours"
      className="py-16 flex flex-col items-center bg-background-100"
    >
      {/* Tag Section */}
      <div className="mb-6">
        <Tag>{t("heading")}</Tag>
      </div>

      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-8">
        {ToursData.map((tour, index) => (
          <ToursCards key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};
export default Tours;
