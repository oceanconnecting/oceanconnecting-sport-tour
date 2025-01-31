'use client '
import React from "react";
import { IoLocationSharp } from "react-icons/io5";
import { RiNumber1 } from "react-icons/ri";
const Itinerary=()=>{
    return(
        <div className=" items-center space-x-4">
            <div className="flex">

                    <div className="text-lg font-semibold text-center justify-center items-center">
                        Itinerary
                    </div>

                     {/* <!-- Icône avec cercle --> */}
                    <div className="border border-black text-center justify-center items-center w-12 h-12 rounded-full flex  bg-gray-100">
                        <IoLocationSharp size={25} className="text-black" /> 
                    </div><span>Agadir-Marrakech</span>
            </div>
                     {/* <!-- Titre --> */}
            <div className="border mx-12 ml-100  pr text-white text-center justify-center items-center w-12 h-12 rounded-full flex  bg-black">
                        <RiNumber1 />
            </div>
        </div>

    )
}
export default Itinerary;