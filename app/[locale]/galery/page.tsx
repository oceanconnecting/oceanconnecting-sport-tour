import Carousel from '@/Components/Carousel'
import ModalCard from '@/Components/modalCard'
import Tag from '@/Components/Tag'
import React from 'react'

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

  return (
    <section className='pt-20 flex flex-col justify-center items-center'>
        <Tag>Galery</Tag>
        <div className=' mt-16 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {
                Images.map((collection, idx) => (
                    <div key={idx}>
                        <ModalCard title={collection.title} image={collection.images[0]}>
                            <Carousel images={collection.images}/>
                        </ModalCard>
                    </div>
                ))
            }
            
        </div>
    </section>
  )
}

export default page