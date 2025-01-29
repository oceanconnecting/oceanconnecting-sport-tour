'use client '
import react from 'react';
import ToursCards from '@/Components/ToursCards'
import { GiGalaxy } from "react-icons/gi";
import Tag from '@/Components/Tag';
interface TourProps{
    tours:{
        id:number,
        title:string ,
        image:string ,
        description:string ,
        departure: string ,
        arrival:string ,
        duration: string,
        type:string,
        newPrice:string ,
        latesPrice:string,
        rating:number,
        
    }[];
    };
const Tours:React.FC<TourProps>=({tours})=>{
    const ToursData = [
        {id:1,title: "Voyage d'Agadir à Marrakech",image: "/places/Agadir/agadir-oufella.jpg",description: "Découvrez les paysages pittoresques entre Agadir et Marrakech avec des escales fascinantes.",rating: 4.5,departure: "Agadir",arrival: "Marrakech",type: "Aventure",duration: "10 - 12 hours",latesPrice: "300", newPrice: "250"},
        {id:2, title: "Excursion Marrakech - Essaouira",image: "/places/Marrakech/Jemaa-el-Fna.jpg",description: "Un parcours magique à travers les collines et forêts d'arganiers jusqu'à la côte atlantique.",rating: 4.8,departure: "Marrakech",arrival: "Essaouira",type: "Découverte",duration: "2 hours 30 minutes", latesPrice: "400",newPrice: ""},
        {id:3,title: "Road Trip Essaouira - Agadir",image: "/places/Essaouira/Kasbah.jpg",description: "Partez à la découverte des plages sauvages et des charmants villages côtiers.",rating: 4.3,departure: "Essaouira",arrival: "Agadir",type: "Relaxation",duration: "3 days",latesPrice: "350",newPrice: ""},
        {id:4,title: "Aventure d'une journée Agadir - Essaouira",image: "/places/Agadir/medina-museum.jpg",description: "Profitez d'une route panoramique jusqu'à la célèbre ville bleue, Essaouira.", rating: 4.6,departure: "Agadir",arrival: "Essaouira",type: "visite guid",duration: "4 hours",latesPrice: "450", newPrice: "400"},
        {id:5,title: "Circuit Marrakech, Essaouira et Agadir",image: "/places/Marrakech/Menara-marrakech.jpg",description: "Explorez les merveilles de trois villes emblématiques du Maroc.",rating: 4.9,departure: "Marrakech",arrival: "Agadir",type: "excursion",duration: "5 hours",latesPrice: "600",newPrice: "500"}
      ];
      
    
      
      
return(
    <div id="Tous" className="  py-8 my-3 bg-zinc-100">
  {/* Section Header */}
  <div className="flex items-center font-sans text-slate-900 mb-6">
    <p className="text-xl font-semibold mr-2 px-5">Pour vous</p>
    <GiGalaxy size={24} className="text-indigo-600" />
  </div>

  {/* Tag Section */}
  <div className="mb-6">
    <Tag className="bg-indigo-50 text-indigo-800 px-4 py-1 rounded-full">
      Reprenez vos recherches
    </Tag>
  </div>

  {/* Cards Grid */}
  <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-8">
  {ToursData.map((tour, index) => (
  <ToursCards key={index} tour={tour} />
))}

   

  </div>
</div>

)
}
export default Tours;