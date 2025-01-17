'use client'
import Filter from "@/Components/Filter";
import Image from "next/image";
import { useState } from "react";


interface Place {
   
    title : string ;
    descr :string ;
    image : string ;
    ville:string;

  }
  interface FilterTagProps {
    places: Place[];
  }
export default function FilterTag({ places }: FilterTagProps) {
    
  const [activeTag, setActiveTag] = useState('All')
  let tagList = ['All', 'Agadir', 'Marakech', 'Essaouira']

  const handleTag = (tag : string) => {
    setActiveTag(tag)
  }

  const filterTags = (array : Place[]):Place[] => {
    if (activeTag.toLowerCase() == "all"){
      return array
    } else {
      return array.filter(el => el.ville.toLocaleLowerCase() == (activeTag.toLocaleLowerCase()))
    }
  }

  let filteredList = filterTags(places)



  return (
    <main className="flex min-h-screen flex-col items-center p-24 bg-white">
    
     <Filter tagList={tagList} activeTag={activeTag} handleTag={handleTag}/>
     <div className="w-full flex flex-col gap-2 py-4">
      {filteredList.map((el, i) => (
        <div className="w-full border-[1px] border-gray-500 px-2 rounded-xl py-4" key={i}>{el.ville}</div>
      ))}
     </div>
    </main>
  );
}