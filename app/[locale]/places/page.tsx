import React from 'react'
import ImageCard from '@/Components/ImageCard';
import Tag from '@/Components/Tag'
import { FaPlaceOfWorship } from "react-icons/fa";
import { useTranslations } from 'next-intl';

function page() {
  
  const t = useTranslations("homepage.places")
  const places = [
    { "title": t("place_1.title"),"city": t('place_1.city') ,"descr": t("place_1.descr"), "image": "/places/agadir-oufella.jpg" },
    { "title": t("place_2.title"),"city":t('place_1.city') , "descr": t("place_2.descr"), "image": "/places/corniche.webp" },
    { "title": t("place_3.title"),"city":t('place_1.city') , "descr": t("place_3.descr"), "image": "/places/croco-park.jpg" },
    { "title": t("place_4.title"), "city":t('place_1.city') ,"descr": t("place_4.descr"), "image": "/places/dolphin-world-agadir.jpg" },
    { "title": t("place_5.title"),"city":t('place_1.city') , "descr": t("place_5.descr"), "image": "/places/imi-ouaddar.jpg" },
    { "title": t("place_6.title"), "city":t('place_1.city') ,"descr": t("place_6.descr"), "image": "/places/legzira.jpg" },
    { "title": t("place_7.title"), "city":t('place_1.city') ,"descr": t("place_7.descr"), "image": "/places/marina.png" },
    { "title": t("place_8.title"), "city":t('place_1.city') ,"descr": t("place_8.descr"), "image": "/places/medina-museum.jpg" },
    { "title": t("place_9.title"), "city":t('place_1.city') ,"descr": t("place_9.descr"), "image": "/places/paradise-valley.jpg" },
    { "title": t("place_10.title"), "city":t('place_1.city') ,"descr": t("place_10.descr"), "image": "/places/souss-massa.jpg" },
    { "title": t("place_11.title"), "city":t('place_1.city') ,"descr": t("place_11.descr"), "image": "/places/souk-el-had.jpg" },
    { "title": t("place_12.title"),"city":t('place_1.city') , "descr": t("place_12.descr"), "image": "/places/taghazout.webp" },
  ];


  return (

    <div>
      <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
      <Tag>Places</Tag>
      
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