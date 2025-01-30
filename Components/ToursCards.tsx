'use client'
import { GoDotFill } from "react-icons/go";
import { LuDot } from "react-icons/lu";
import { FaStar, FaRegStar } from 'react-icons/fa';
import { useLocale } from "next-intl";
import { useRouter } from 'next/navigation';
interface Tour{
    id:number,
title:string ,
image:string ,
departure: string ,
description:string ,
arrival:string ,
duration: string,
type:string,
rating:number  ,
newPrice:string,
latesPrice:string
}
interface ToursCardProps{
    tour:Tour;
}

// const CardServices: React.FC<service> = (props) => {
//   const { title, desc, image } = props;


const ToursCard: React.FC<ToursCardProps> =({tour})=>{
    const fullStars = Math.floor(tour.rating); // Nombre d'étoiles pleines
  const halfStar = tour.rating % 1 >= 0.5 ? 1 : 0; // Gérer les demi-étoiles
    const router=useRouter();
    const locale=useLocale()
    
    const handleClick = () => {
    // Utilise router.push pour naviguer vers la page de détail avec l'ID du tour
    router.push(`/${locale}/Tours/${tour.id}`);  
    };


    return (
        <div  onClick={handleClick} className=" group-hover:scale-110 cursor-pointer grid gap-6">
        
          <div  className="rounded shadow-md p-4 bg-white">
            <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover rounded-md" />
            <p className="text-l text-neutral-400  uppercase font-medium mt-2">{tour.type}</p>
            <h2 className="text-xl  capitalize font-bold mt-2 ">{tour.title}</h2>
            <p>{tour.description}</p>
            <p>
              <strong>Departure:</strong> {tour.departure}
            </p>
            <p>
                <strong>Arrival:</strong> {tour.arrival}
            </p>
            <p className="flex">
              {tour.duration}  hours  <span> <GoDotFill size={7} />   </span>
            </p>
            <div className="flex items-center">
      {/* Affichage des étoiles pleines */}
      {Array.from({ length: fullStars }).map((_, index) => (
        <FaStar key={`star-${index}`} className="text-yellow-500" />
      ))}

      {/* Affichage des demi-étoiles */}
      {halfStar > 0 && <FaStar className="text-yellow-500" style={{ clipPath: 'inset(0 50% 0 0)' }} />}

      {/* Affichage des étoiles vides */}
      {Array.from({ length: 5 - fullStars - halfStar }).map((_, index) => (
        <FaRegStar key={`empty-star-${index}`} className="text-yellow-500" />
      ))}
    </div>
    <div>

        {tour.newPrice===""?(
            
        <p className="text-lg font-medium">
        <span className="text-xl  mr-2">À partir {tour.latesPrice} <span className="text-xs pr-3" >MAD </span>par pesonne</span>
      </p>
        ):(
           
            <div className="flex items-start text-lg font-medium space-x-4">
            <div>
              <span className="text-xl line-through mr-2">À partir {tour.latesPrice} MAD</span>
              <span className="text-red-500 block">
                À partir de {tour.newPrice} <span className="text-xs pr-3">MAD</span>
              </span>
            </div>
            <div>
              <p>&nbsp;</p> {/* Espace visuel si nécessaire */}
              <p>par personne</p>
            </div>
          </div>
          
     
   
        
        )
        }
    </div>
           
          </div>
      
      </div>
    )
}
export default ToursCard;