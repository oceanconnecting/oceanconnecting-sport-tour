"use client";

import { useTranslations } from "next-intl";

interface placesInterface {
  title: string;
  descr: string;
  image: string;
  city: string;
}

const Data = () => {
  const t = useTranslations("homepage.places");

  return [
    {
      title: t("place_1.title"),
      city: t("place_1.city"),
      descr: t("place_1.descr"),
      image: "/places/Agadir/agadir-oufella.jpg",
    },
    {
      title: t("place_2.title"),
      city: t("place_2.city"),
      descr: t("place_2.descr"),
      image: "/places/Agadir/corniche.jpg",
    },
    {
      title: t("place_3.title"),
      city: t("place_3.city"),
      descr: t("place_3.descr"),
      image: "/places/Agadir/croco-park.jpg",
    },
    {
      title: t("place_4.title"),
      city: t("place_4.city"),
      descr: t("place_4.descr"),
      image: "/places/Agadir/dolphin.jpg",
    },
    {
      title: t("place_5.title"),
      city: t("place_5.city"),
      descr: t("place_6.descr"),
      image: "/places/Agadir/legzira.jpg",
    },
    {
      title: t("place_6.title"),
      city: t("place_6.city"),
      descr: t("place_5.descr"),
      image: "/places/Agadir/imi-ouaddar.jpg",
    },
    {
      title: t("place_7.title"),
      city: t("place_7.city"),
      descr: t("place_7.descr"),
      image: "/places/Agadir/marina.png",
    },
    {
      title: t("place_8.title"),
      city: t("place_8.city"),
      descr: t("place_8.descr"),
      image: "/places/Agadir/medina-museum.jpg",
    },
    {
      title: t("place_9.title"),
      city: t("place_9.city"),
      descr: t("place_9.descr"),
      image: "/places/Agadir/paradise-valley.jpg",
    },
    {
      title: t("place_10.title"),
      city: t("place_10.city"),
      descr: t("place_10.descr"),
      image: "/places/Agadir/souss-massa.jpg",
    },
    {
      title: t("place_11.title"),
      city: t("place_11.city"),
      descr: t("place_11.descr"),
      image: "/places/Agadir/souk-el-had.jpg",
    },
    {
      title: t("place_12.title"),
      city: t("place_12.city"),
      descr: t("place_12.descr"),
      image: "/places/Agadir/taghazout.webp",
    },
    {
      title: t("place_13.title"),
      city: t("place_13.city"),
      descr: t("place_13.descr"),
      image: "/places/Essaouira/Kasbah.jpg",
    },
    {
      title: t("place_14.title"),
      city: t("place_14.city"),
      descr: t("place_14.descr"),
      image: "/places/Essaouira/medina-essaouira1.jpg",
    },
    {
      title: t("place_15.title"),
      city: t("place_15.city"),
      descr: t("place_15.descr"),
      image: "/places/Essaouira/remparts_Essaouira.jpg",
    },
    {
      title: t("place_16.title"),
      city: t("place_16.city"),
      descr: t("place_16.descr"),
      image: "/places/Marrakech/Le-Jardin-Majorelle.jpg",
    },
    {
      title: t("place_17.title"),
      city: t("place_17.city"),
      descr: t("place_17.descr"),
      image: "/places/Marrakech/Jemaa-el-Fna.jpg",
    },
    {
      title: t("place_18.title"),
      city: t("place_18.city"),
      descr: t("place_18.descr"),
      image: "/places/Marrakech/Menara-marrakech.jpg",
    },
  ];
};

export default Data;
