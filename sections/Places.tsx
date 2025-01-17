'use client';

import React, { useState } from 'react';
import ImageCard from '@/Components/ImageCard';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag';
import { FaPlaceOfWorship } from 'react-icons/fa';
import { useLocale } from 'use-intl';

import PlacesDetail from '@/app/[locale]/places/detail';
const places = [
  { "title": "Agadir Oufella", "descr": "Historic fortress built in 1572 offering panoramic views of the city and the fishing port.", "image": "/places/agadir-oufella.jpg" },
  { "title": "Souk El Had", "descr": "A vibrant market showcasing local culture, including Berber women's production of Amlo and argan oil.", "image": "/places/souk-el-had.jpg" },
  { "title": "Marina Beach", "descr": "Modern area with boutiques, restaurants, and scenic seaside views.", "image": "/places/marina.png" },
  { "title": "Crocodile Park", "descr": "A park hosting over 300 crocodiles and other reptiles, surrounded by lush gardens.", "image": "/places/croco-park.jpg" },
  { "title": "Paradise Valley", "descr": "A natural haven with pools, palm trees, and opportunities for hiking, swimming, and bird watching.", "image": "/places/paradise-valley.jpg" },
  { "title": "Taghazout", "descr": "A surfing hotspot with equipment rentals, beachfront cafes, and traditional camel rides.", "image": "/places/taghazout.webp" },
  { "title": "Imi Ouaddar", "descr": "Known for fresh fish, quad biking, and jet skiing experiences in the countryside.", "image": "/places/imi-ouaddar.jpg" },
  { "title": "Imsouane", "descr": "A quiet gem ideal for beginner surfers and renowned for its fresh fish.", "image": "/places/imsouane.jpg" },
  { "title": "Essaouira", "descr": "A coastal city rich in culture and history, with attractions like the Sequala, Jewish town, and port.", "image": "/places/essaouira.jpg" },
  { "title": "Tiznit", "descr": "The silver city known for its jewelry, ramparts, and friendly residents.", "image": "/places/tiznit.jpg" },
  { "title": "Legzira Beach", "descr": "Famous for its unique red stone arches sculpted by the ocean.", "image": "/places/legzira.jpg" },
  { "title": "Taroudant", "descr": "A historic city with ochre ramparts, vibrant souks, and a rich cultural heritage.", "image": "/places/taroudant.jpg" },
  { "title": "Sidi Bibi", "descr": "A small town offering traditional Moroccan cuisine and warm hospitality.", "image": "/places/sidi-bibi.jpg" },
  { "title": "Takad Beach", "descr": "A serene beach with golden sands and a relaxing atmosphere.", "image": "/places/takad-beach.jpg" }
];



function Places() {
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
            {places.slice(0, 6).map((place, index) => (
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
