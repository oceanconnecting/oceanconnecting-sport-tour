'use client';

import React, { useState } from 'react';
import ImageCard from '@/Components/ImageCard';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { useLocale, useTranslations } from 'use-intl';

import PlacesDetail from '@/app/[locale]/places/detail';

function Places() {

  const t = useTranslations("homepage.places")

  const places = [
    { "title": t("place_1.title"), "descr": t("place_1.descr"), "image": "/places/agadir-oufella.jpg" },
    { "title": t("place_2.title"), "descr": t("place_1.descr"), "image": "/places/souk-el-had.jpg" },
    { "title": t("place_3.title"), "descr": t("place_1.descr"), "image": "/places/marina.png" },
    { "title": t("place_4.title"), "descr": t("place_1.descr"), "image": "/places/croco-park.jpg" },
    { "title": t("place_5.title"), "descr": t("place_1.descr"), "image": "/places/paradise-valley.jpg" },
    { "title": t("place_6.title"), "descr": t("place_1.descr"), "image": "/places/taghazout.webp" },
  ];

  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false); // Modal starts closed
  const [modalData, setModalData] = useState({ title: '', descr: '', image: '' });

  const openModal = (place: { title: string; descr: string; image: string }) => {
    setModalData(place);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <section id="places">
        <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
          <Tag icon={<FaPlaceOfWorship />}>Places</Tag>
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl">
            {places.map((place, index) => (
              <div  onClick={() => openModal(place)} key={index} className=" cursor-grab flex flex-col items-center">
                <ImageCard title={place.title} descr={place.descr} image={place.image} />
                
              </div>
            ))}
          </div>
          <Button href={`/${locale}/places`} variant="dark_primary">
            Show more
          </Button>
        </div>
      </section>
      {/* Modal */}
      <PlacesDetail isOpen={isOpen} onClose={closeModal} data={modalData} />
    </div>
  );
}

export default Places;
