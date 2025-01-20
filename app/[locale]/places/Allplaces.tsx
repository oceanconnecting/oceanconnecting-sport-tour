'use client';

import { useTranslations } from 'next-intl';

const AllPlaces = () => {
  const t = useTranslations('homepage.places');

  return [
    { title: t('place_1.title'), city: 'Agadir', descr: t('place_1.descr'), image: '/places/agadir-oufella.jpg' },
    { title: t('place_2.title'), city: 'Marrakech', descr: t('place_2.descr'), image: '/places/corniche.webp' },
    { title: t('place_3.title'), city: 'Agadir', descr: t('place_3.descr'), image: '/places/croco-park.jpg' },
    { title: t('place_4.title'), city: 'Agadir', descr: t('place_4.descr'), image: '/places/dolphin-world-A.jpg' },
    { title: t('place_5.title'), city: 'Agadir', descr: t('place_6.descr'), image: '/places/legzira.jpg' },
    { title: t('place_6.title'), city: 'Essaouira', descr: t('place_5.descr'), image: '/places/imi-ouaddar.jpg' },
    { title: t('place_7.title'), city: 'Essaouira', descr: t('place_7.descr'), image: '/places/marina.png' },
    { title: t('place_8.title'), city: 'Marrakech', descr: t('place_8.descr'), image: '/places/medina-museum.jpg' },
    { title: t('place_9.title'), city: 'Agadir', descr: t('place_9.descr'), image: '/places/paradise-valley.jpg' },
    { title: t('place_10.title'), city: 'Marrakech', descr: t('place_10.descr'), image: '/places/souss-massa.jpg' },
    { title: t('place_11.title'), city: 'Marrakech', descr: t('place_11.descr'), image: '/places/souk-el-had.jpg' },
    { title: t('place_12.title'), city: 'Essaouira', descr: t('place_12.descr'), image: '/places/taghazout.webp' },
  ];

  

 
};

export default AllPlaces;
