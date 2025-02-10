"use client";

import React, { useState } from "react";
import PlacesDetail from "@/sections/places/detail";
import Tag from "@/Components/Tag";
import { useLocale, useTranslations } from "use-intl";
import Filter from "@/Components/Filter";
import Data from "@/sections/places/data";
import ImageCard from "@/Components/ImageCard";
import { cn } from "@/lib/utils";

interface Place {
  title: string;
  descr: string;
  image: string;
  city: string;
}

const Places: React.FC = () => {
  const t = useTranslations("homepage.places");
  const tc = useTranslations("homepage.city");

  const allplaces = Data();
  const tagList = [tc("All"), tc("Agadir"), tc("Marrakech"), tc("Essaouira")];
  const [activeTag, setActiveTag] = useState(tc("All"));
  const [displayedPlaces, setDisplayedPlaces] = useState<Place[]>(allplaces);

  const handleTag = (tag: string) => {
    setActiveTag(tag);
    if (tag === tc("All")) {
      setDisplayedPlaces(allplaces); // Affiche tous les lieux
    } else {
      const filtered = allplaces.filter(
        (place) => place.city.toLowerCase() === tag.toLowerCase()
      );
      setDisplayedPlaces(filtered); // Affiche les lieux filtrés
    }
  };

  return (
    <div>
      <section id="places">
        {/* Filter Component */}

        <div className="w-full bg-background-50 py-16 px-5 flex flex-col justify-center overflow-hidden items-center gap-6">
          <Tag>{t("title")}</Tag>
          <Filter
            places={allplaces}
            activeTag={activeTag}
            handleTag={handleTag}
            tagList={tagList}
          />
          <div
            className={cn(
              "grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl",
              displayedPlaces.length > 3 &&
                "[mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_85%,rgba(0,0,0,0)_100%)] py-10 overflow-y-scroll max-h-svh"
            )}
          >
            {displayedPlaces.map((place, index) => (
              <div key={index} className="cursor-pointer flex justify-center">
                <ImageCard
                  title={place.title}
                  descr={place.descr}
                  image={place.image}
                />{" "}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Places;
