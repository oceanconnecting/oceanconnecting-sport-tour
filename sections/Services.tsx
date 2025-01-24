'use client'
import React from "react";
import Tag from "@/Components/Tag";
import { MdEmojiTransportation, MdLocalAirport, MdEvent } from "react-icons/md";
import { FaMap } from "react-icons/fa6";
import { GiCampingTent } from "react-icons/gi";
import { FaCar } from "react-icons/fa";
import ServiceCard from "@/Components/ServiceCard";

const Services : React.FC= ()=>{
    const services = [
        {
            "title": "Transport and logistics",
            "desc": "Organize and manage the movement of goods and people efficiently.",
            "img": "/activities/aqua-park.jpg",
            "icon": <MdEmojiTransportation/>,
            "color": "#FF5733"
        },
        {
            "title": "Tours trip travel and adventures",
            "desc": "Experience exciting tours, travel, and adventurous activities.",
            "img": "/activities/aqua-park.jpg",
            "icon": <FaMap/>,
            "color": "#33C1FF"
        },
        {
            "title": "Sport and training programs and camps",
            "desc": "Join specialized sports training programs and camps.",
            "img": "/activities/aqua-park.jpg",
            "icon": <GiCampingTent/>,
            "color": "#28A745"
        },
        {
            "title": "Shuttle and airport transfer",
            "desc": "Convenient shuttle and airport transfer services.",
            "img": "/activities/aqua-park.jpg",
            "icon": <MdLocalAirport />,
            "color": "#FFC107"
        },
        {
            "title": "Event and parties",
            "desc": "Plan and enjoy memorable events and parties.",
            "img": "/activities/aqua-park.jpg",
            "icon": <MdEvent />,
            "color": "#6F42C1"
        },
        {
            "title": "Accommodation and car rental",
            "desc": "Find comfortable accommodations and reliable car rentals.",
            "img": "/activities/aqua-park.jpg",
            "icon": <FaCar/>,
            "color": "#FF8C00"
        }
    ]
    
    
   return(
        <section id='services'> 
            <div className="w-full px-[2vh] md:px-40 lg:px-10 py-10 flex flex-col items-center ">
                <div className="text-center  flex justify-center py-8 w-full first-letter:"> 
                <Tag>Services</Tag>
                    </div>
                    <div className="w-full lg:grid-cols-3 mg:grid-cols-4 grid-cols-1 grid  max-w-7xl gap-6">
                    {
                        services.map((item,index)=>
                            <div key={index} className="hover:bg-opacity-25">
                                <ServiceCard icon={item.icon} title={item.title} descr={item.desc} img={item.img} color={item.color}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
   )

};
export default Services ;