import React from 'react'
import ImageCard from '@/Components/ImageCard';
import Tag from '@/Components/Tag'
import { FaPlaceOfWorship } from "react-icons/fa";
function page() {
  const places = [
    { "title": "Agadir Oufella", "descr": "Historic hilltop with stunning views of Agadir.", "image": "/places/agadir-oufella.jpg" },
    { "title": "Corniche", "descr": "Beachfront promenade with cafes and scenic views.", "image": "/places/corniche.webp" },
    { "title": "Croco Park", "descr": "Crocodile park with exotic plants and reptiles.", "image": "/places/croco-park.jpg" },
    { "title": "Dolphin World Agadir", "descr": "Interactive dolphin shows and experiences.", "image": "/places/dolphin-world-agadir.jpg" },
    { "title": "Imi Ouaddar", "descr": "Peaceful beach village ideal for relaxation.", "image": "/places/imi-ouaddar.jpg" },
    { "title": "Legzira", "descr": "Famous beach with unique red rock arches.", "image": "/places/legzira.jpg" },
    { "title": "Marina", "descr": "Modern marina with shops, restaurants, and yachts.", "image": "/places/marina.png" },
    { "title": "Medina and Amazigh Heritage Museum", "descr": "Explore the culture and history of the Amazigh people.", "image": "/places/medina-museum.jpg" },
    { "title": "Paradise Valley", "descr": "Lush oasis with natural pools and waterfalls.", "image": "/places/paradise-valley.jpg" },
    { "title": "Souss Massa", "descr": "Nature reserve with diverse wildlife and landscapes.", "image": "/places/souss-massa.jpg" },
    { "title": "Souk El Had", "descr": "Vibrant market with local goods and souvenirs.", "image": "/places/souk-el-had.jpg" },
    { "title": "Taghazout", "descr": "Popular surf town with stunning beaches.", "image": "/places/taghazout.webp" }
  ];
  return (
   
    <div>
      <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
      <Tag icon={<FaPlaceOfWorship  />}>Places</Tag>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl">
        {places.map((places, index) => (
          <div key={index} className="flex justify-center">
            <ImageCard title={places.title} descr={places.descr} image={places.image} />
          </div>
        ))}
      </div>
    </div>



    </div>
   
  )
}

export default page ;