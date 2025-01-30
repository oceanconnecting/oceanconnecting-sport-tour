"use client"

import Carousel from '@/Components/Carousel'
import ModalCard from '@/Components/modalCard'
import Tag from '@/Components/Tag'
import React from 'react'
import { motion } from 'motion/react'

function page() {

    const Images = [
        {
            title: "agadir oufella",
            images: [
                "/gallery/agadirOufella/agadirOufella1.jpg",
                "/gallery/agadirOufella/agadirOufella2.jpg"
            ]
        },
        {
            title: "aqua park",
            images: [
                "/gallery/aquaPark/aquaPark1.webp",
                "/gallery/aquaPark/aquaPark2.webp",
                "/gallery/aquaPark/aquaPark3.jpg",
                "/gallery/aquaPark/aquaPark4.jpg"
            ]
        },
        {
            title: "camel ride",
            images: [
                "/gallery/camelRide/camelRide1.webp",
                "/gallery/camelRide/camelRide2.webp",
                "/gallery/camelRide/camelRide3.jpg",
                "/gallery/camelRide/camelRide3.jpg",
            ]
        },
        {
            title: "courniche",
            images: [
                "/gallery/courniche/courniche1.webp",
                "/gallery/courniche/courniche2.jpg",
            ]
        },
        {
            title: "croco park",
            images: [
                "/gallery/crocoPark/crocoPark1.jpg",
                "/gallery/crocoPark/crocoPark2.jpeg",
            ]
        },
        {
            title: "dolphin world",
            images: [
                "/gallery/dolphinWorldAgadir/dolphinWorld1.jpg",
                "/gallery/dolphinWorldAgadir/dolphinWorld2.jpg",
                "/gallery/dolphinWorldAgadir/dolphinWorld3.jpg"
            ]
        },
        {
            title: "horse ride",
            images: [
                "/gallery/horseRide/horseRide1.jpg",
                "/gallery/horseRide/horseRide2.jpeg",
                "/gallery/horseRide/horseRide3.jpeg",
                "/gallery/horseRide/horseRide2.jpeg",
                "/gallery/horseRide/horseRide2.jpg",
            ]
        },
        {
            title: "hot air balloon",
            images: [
                "/gallery/hotAirBalloon/hotAirBalloon1.jpg",
                "/gallery/hotAirBalloon/hotAirBalloon2.jpeg",
                "/gallery/hotAirBalloon/hotAirBalloon3.jpg"
            ]
        },
        {
            title: "imi ouadar",
            images: [
                "/gallery/imiOuadar/imiOuadar1.jpg"
            ]
        },
        {
            title: "jetski",
            images: [
                "/gallery/jetski/jetski1.jpg",
                "/gallery/jetski/jetski2.jpg",
            ]
        },
        {
            title: "karting",
            images: [
                "/gallery/karting/karting1.png",
                "/gallery/karting/karting2.jpg",
                "/gallery/karting/karting3.jpg"
            ]
        },
        {
            title: "legzira",
            images: [
                "/gallery/legzira/legzira1.jpg",
                "/gallery/legzira/legzira2.jpg",
                "/gallery/legzira/legzira3.jpg"
            ]
        },
        {
            title: "marina",
            images: [
                "/gallery/marina/marina1.jpg",
                "/gallery/marina/marina2.jpg",
                "/gallery/marina/marina3.png"
            ]
        },
        {
            title: "medina and amazigh",
            images: [
                "/gallery/medinaAndAmazighMuseum/medinaAmazigh1.jpg",
                "/gallery/medinaAndAmazighMuseum/medinaAmazigh2.jpg",
                "/gallery/medinaAndAmazighMuseum/medinaAmazigh3.jpeg"
            ]
        },
        {
            title: "parachute",
            images: [
                "/gallery/parachute/parachute1.webp",
                "/gallery/parachute/parachute2.jpg",
                "/gallery/parachute/parachute3.jpeg",
                "/gallery/parachute/parachute4.jpg",
                "/gallery/parachute/parachute5.jpg",
            ]
        },
        {
            title: "paradise valley",
            images: [
                "/gallery/paradiseValley/paradiseValley1.jpg",
                "/gallery/paradiseValley/paradiseValley2.jpg",
                "/gallery/paradiseValley/paradiseValley3.gif",
                "/gallery/paradiseValley/paradiseValley4.jpg",
                "/gallery/paradiseValley/paradiseValley5.jpg",
            ]
        },
        {
            title: "quad n buggy",
            images: [
                "/gallery/quadNBuggy/quadNBuggy1.jpg",
                "/gallery/quadNBuggy/quadNBuggy2.jpg",
                "/gallery/quadNBuggy/quadNBuggy3.jpg",
                "/gallery/quadNBuggy/quadNBuggy4.jpg",
                "/gallery/quadNBuggy/quadNBuggy5.jpg",
                "/gallery/quadNBuggy/quadNBuggy6.jpg",
            ]
        },
        {
            title: "sandboarding",
            images: [
                "/gallery/sandboarding/sandboarding1.jpg",
                "/gallery/sandboarding/sandboarding2.jpg",
                "/gallery/sandboarding/sandboarding3.jpg",
                "/gallery/sandboarding/sandboarding4.jpg",
            ]
        },
        {
            title: "souk el had",
            images: [
                "/gallery/soukElHad/soukElHad1.jpg",
                "/gallery/soukElHad/soukElHad2.jpg",
                "/gallery/soukElHad/soukElHad3.jpg"
            ]
        },
        {
            title: "sous massa",
            images: [
                "/gallery/soussMassa/sousMassa1.jpg",
                "/gallery/soussMassa/sousMassa2.png",
                "/gallery/soussMassa/sousMassa3.jpg",
                "/gallery/soussMassa/sousMassa4.jpg",
                "/gallery/soussMassa/sousMassa5.jpg",
                "/gallery/soussMassa/sousMassa6.jpg",
                "/gallery/soussMassa/sousMassa7.jpg",
            ]
        },
        {
            title: "surfing",
            images: [
                "/gallery/surfing/surfing1.jpg",
                "/gallery/surfing/surfing2.jpg",
                "/gallery/surfing/surfing3.png",
                "/gallery/surfing/surfing4.jpg",
            ]
        },
        {
            title: "taghazout",
            images: [
                "/gallery/taghazout/taghazout1.webp",
                "/gallery/taghazout/taghazout2.jpg",
                "/gallery/taghazout/taghazout3.jpg",
                "/gallery/taghazout/taghazout4.jpg",
            ]
        }
    ];
    

    const fadeInAnimations = {
        initial : {
          opacity: 0,
          y:100
        },
        animate : {
          opacity: 1,
          y:0
        },
      }

  return (
    <section className='pt-20 flex flex-col w-full justify-center items-center'>
        <Tag>Gallery</Tag>
        <div className=' mt-16 grid w-full px-6 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                Images.map((collection, idx) => (
                    <motion.div
                    key={idx}
                    variants={fadeInAnimations}
                    initial="initial"
                    whileInView="animate"
                    viewport={{once:true}}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    >
                        <ModalCard title={collection.title} image={collection.images[0]}>
                            <Carousel images={collection.images}/>
                        </ModalCard>
                    </motion.div>
                ))
            }
            
        </div>
    </section>
  )
}

export default page