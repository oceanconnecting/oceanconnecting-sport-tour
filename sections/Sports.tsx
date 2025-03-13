import SportCard from "@/Components/SportCard";
import Tag from "@/Components/Tag";
import { useTranslations } from "next-intl";
import React from "react";

type Sport = {
  name: string;
  description: string;
  image: string;
};

function Sports() {
  const t = useTranslations("homepage.sports");
  const sports: Sport[] = [
    {
      name: t("football.name"),
      description: t("football.description"),
      image: "/sports/football.jpg",
    },
    {
      name: t("basketball.name"),
      description: t("basketball.description"),
      image: "/sports/basketball.jpg",
    },
    {
      name: t("swimming.name"),
      description: t("swimming.description"),
      image: "/sports/swimming.jpg",
    },
    {
      name: t("tennis.name"),
      description: t("tennis.description"),
      image: "/sports/tennis.jpg",
    },
    {
      name: t("gymnastics.name"),
      description: t("gymnastics.description"),
      image: "/sports/gymnastics.jpg",
    },
    {
      name: t("skateboarding.name"),
      description: t("skateboarding.description"),
      image: "/sports/skateboarding.jpg",
    },
  ];
  return (
    <section id="sports">
      <div className="flex justify-center py-16 flex-col px-0 sm:px-8 items-center min-h-[80vh]">
        <Tag>{t("title")}</Tag>
        <p className="text-center text-text-700 max-w-[600px] mt-4">
          {t("text")}
        </p>
        <div className="grid grid-cols-1 mt-16 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
          {sports.map((sport, idx) => (
            <SportCard key={idx} sport={sport} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Sports;
