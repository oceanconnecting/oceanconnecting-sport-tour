'use client'
import React from "react";
import ImageCard from "@/Components/ImageCard";
import Tag from "@/Components/Tag";
import {FaPlaceOfWorship} from 'react-icons/fa';

const Services : React.FC= ()=>{
    const services=[
        //     { title: t('place_1.title'), city:  t('place_1.city'), descr: t('place_1.descr'), image: '/places/Agadir/agadir-oufella.jpg' },

        {title:"Transport and logistics",desc:"",img:{}},
        {title:"Tours trip travel and adventures",desc:"",img:{}},
        {title:"Sport and training programs and camps",desc:"",img:{}},
        {title:"Shuttle and airport transfer",desc:"",img:{}},
        {title:"Event and parties",desc:"",img:{}},
        {title:"Accommodation and car rental",desc:"",img:{}},

    ]
   return(
    <div>

        <section id='services'> 
            <div className="w-full px-10 py-10 flex flex-col items-center ">
                <div className="text-center  flex justify-center py-8 w-full first-letter:"> 
                <Tag icon={<FaPlaceOfWorship />}>Services</Tag>
                    </div>

                    <div className="     w-full lg:grid-cols-3 mg:grid-cols-4 grid-cols-1 grid  max-w-7xl gap-6">

                        
                {
                    services.map((item,index)=>
                        <div className=" cursor-pointer hover:bg-opacity-25">

                            <ImageCard  title={item.title} desc={item.desc} img={item.img} />

                        </div>

                    )
                }
                    </div>

            </div>

            
             </section>
    </div>
   )

};
export default Services ;