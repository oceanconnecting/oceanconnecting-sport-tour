import Button from '@/Components/Button'
import React from 'react'
import { GiSevenPointedStar } from "react-icons/gi";

function Hero() {
  return (
    <section className='bg-bannerImg bg-cover bg-center w-full h-screen'>
        <div className='flex flex-col bg-primary-100 bg-opacity-70 bg-cover bg-center w-full h-screen'>
            <div className='w-full h-full flex flex-col gap-3 justify-center items-center'>
                <div className='px-5 py-2 gap-3 text-white border border-white rounded-full flex items-center justify-center'>
                    <GiSevenPointedStar />
                    <p>the best way to do skibiddy toilet</p>
                    <GiSevenPointedStar />
                </div>
                <h1 className="text-3xl text-center font-extrabold text-white sm:text-5xl">
                    Understand User Flow.
                    <strong className="font-extrabold text-primary-800 sm:block"> Increase Conversion. </strong>
                </h1>

                <p className="mt-4 text-slate-200 sm:text-xl/relaxed max-w-lg text-center">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
                    numquam ea!
                </p>
                <div className='flex gap-3'>
                    <Button variant='primary'>Get In Touch</Button>
                    <Button variant='secondary'>Contact Us</Button>
                </div>
            </div>
            
        </div>
    </section>
  )
}

export default Hero