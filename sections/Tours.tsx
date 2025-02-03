'use client '
import react from 'react';
import ToursCards from '@/Components/ToursCards'
import { GiGalaxy } from "react-icons/gi";
import Tag from '@/Components/Tag';
import DataTours from '@/app/[locale]/Tours/[id]/ToursData';
import getToursData from '@/app/[locale]/Tours/[id]/ToursData';
interface Tour{
   
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
  route: number[][],
  passBy: string[];
  

};
const Tours=()=>{
  const ToursData: Tour[] = getToursData();
      
return(
    <div id="Tours" className="  py-8 my-3 bg-zinc-100">
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