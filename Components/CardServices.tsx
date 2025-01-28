import React, { useState } from "react";
interface service {
  title: string;
  desc: string;
  image: string;
  images: string[]; // Tableau d'images
}
const CardServices: React.FC<service> = (props) => {
  const { title, desc, image } = props;

  return (
    <div className="relative overflow-hidden w-full min-w-sm h-64 rounded-lg shadow-lg group">

      {/* Image de fond */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* Dégradé pour améliorer la lisibilité du texte */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-400 via-gray-200 to-transparent z-0"></div>

       

      </div>

      {/* Contenu principal */}
      <div className="relative h-full flex flex-col justify-end p-6 z-10">
        <p className="text-2xl group-hover:text-black group-hover:font-bold text-white mb-2 transition-all duration-300">
          {title}
        </p>
      </div>

      {/* Contenu supplémentaire affiché au survol */}
      <div className="absolute inset-0 rounded-lg bg-white/20 backdrop-blur-md text-black flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <p className="text-sm px-4 text-center">
          <strong>{desc}</strong>
        </p>
      </div>
    </div>
  );
};

export default CardServices;
