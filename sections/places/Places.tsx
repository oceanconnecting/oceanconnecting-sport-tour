"use client";

import React, { useState } from "react";
import { LuChevronDown } from "react-icons/lu"; 
import Tag from "@/Components/Tag";
import { useLocale, useTranslations } from "use-intl";
import Filter from "@/Components/Filter";
import Data from "@/sections/places/data";
import ImageCard from "@/Components/ImageCard";
import { cn } from "@/lib/utils";
import Button from "@/Components/Button";

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
  const [isOpen, setIsOpen] = useState(false)
  const max_cards_shows = 3


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

        <div className="w-full bg-background-50 py-8 px-8 flex flex-col justify-center overflow-hidden items-center gap-6">
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
              displayedPlaces.length > max_cards_shows && cn("overflow-y-hidden", !isOpen && "max-h-[360px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)] transition-all")
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
          {
            displayedPlaces.length > max_cards_shows && (
              <Button onClick={() => setIsOpen(!isOpen)} variant="primary"><LuChevronDown className={cn(isOpen && "rotate-180")}/></Button>
            )
          }
        </div>
      </section>
    </div>
  );
};

export default Places;
