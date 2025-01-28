'use client';

import React, { useState } from 'react';
import FilterTag from '@/app/[locale]/places/filterTag';
import PlacesDetail from '@/app/[locale]/places/detail';
import Tag from '@/Components/Tag';
import Button from '@/Components/Button';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { useLocale, useTranslations } from 'use-intl';
import Filter from '@/Components/Filter';
import Allplaces from '@/app/[locale]/places/Allplaces';
import ImageCard from '@/Components/ImageCard';

interface Place {
  title: string;
  descr: string;
  image: string;
  city: string;
}


const Places: React.FC = () => {
  const t = useTranslations('homepage.places');
  const tc = useTranslations('homepage.city');
  const locale = useLocale();
 

  const allplaces=Allplaces()
  const tagList = [tc('All'), tc('Agadir'), tc('Marrakech'),tc ('Essaouira')];
  const [activeTag, setActiveTag] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<Place | null>(null);
  const [displayedPlaces, setDisplayedPlaces] = useState<Place[]>(allplaces); 
  

  const handleTag = (tag: string) => {
    setActiveTag(tag);
    if (tag === tc('All')) {
      setDisplayedPlaces(allplaces); // Affiche tous les lieux
    } else {
      const filtered = allplaces.filter((place) =>
        place.city.toLowerCase() === tag.toLowerCase()
      );
      setDisplayedPlaces(filtered); // Affiche les lieux filtrés
    }
  };

  const openModal = (place: Place) => {
    setModalData(place);
    setIsOpen(true);
  };

  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <section id="places">
        {/* Filter Component */}

        <div  className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
          <Tag icon={<FaPlaceOfWorship />}>{t('title')}</Tag>
          <Filter places={allplaces} activeTag={activeTag} handleTag={handleTag} tagList={tagList} />
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl">
          {activeTag === ''? displayedPlaces.slice(0, 6).map((place, index) => (
      <div 
        key={index} 
        className="cursor-pointer flex justify-center" 
        onClick={() => openModal(place)}
      >
        <ImageCard  title={place.title} descr={place.descr} image={place.image}  /></div> ))
  : displayedPlaces.map((place, index) => (
     <div key={index} className="cursor-pointer flex justify-center" onClick={() => openModal(place)}>
        <ImageCard title={place.title} descr={place.descr}  image={place.image} /> </div>
    ))
}

          </div>
        
        </div>
      </section>

      {/* Modal */}
      {modalData && (
        <PlacesDetail isOpen={isOpen} onClose={closeModal} data={modalData} />
      )}
    </div>
  );
};

export default Places;
