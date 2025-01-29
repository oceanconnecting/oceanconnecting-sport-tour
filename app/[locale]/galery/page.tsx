"use client"
import Carousel from '@/Components/Carousel';
import ModalCard from '@/Components/modalCard';
import Tag from '@/Components/Tag'
import React from 'react'
import { motion } from 'motion/react'

function page() {

    const Images = [
        {
            title:"agadir",
            images : [
                '/activities/parachute.jpg',
                '/activities/hot-air-balloon.jpg',
                '/activities/jetski.jpg'
            ]
        },
        {
            title:"agadir",
            images : [
                '/activities/jetski.jpg',
                '/activities/hot-air-balloon.jpg',
                '/activities/parachute.jpg'
            ]
        },
        {
            title:"agadir",
            images : [
                '/activities/jetski.jpg',
                '/activities/hot-air-balloon.jpg',
                '/activities/parachute.jpg'
            ]
        },
        {
            title:"agadir",
            images : [
                '/activities/hot-air-balloon.jpg',
                '/activities/jetski.jpg',
                '/activities/parachute.jpg'
            ]
        },
        {
            title:"agadir",
            images : [
                '/activities/parachute.jpg',
                '/activities/jetski.jpg',
                '/activities/hot-air-balloon.jpg'
            ]
        },
        {
            title:"agadir",
            images : [
                '/activities/hot-air-balloon.jpg',
                '/activities/jetski.jpg',
                '/activities/parachute.jpg'
            ]
        },
    ]

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
        <Tag>Galery</Tag>
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