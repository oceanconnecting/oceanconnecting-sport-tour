"use client"
import { PiBeachBallDuotone } from "react-icons/pi";
import { motion } from "motion/react";

const quotes: string[] = [
    "Inspiring young minds, one adventure at a time.",
    "Every journey is a chance to spark curiosity and joy.",
    "Create memories that last a lifetime through exploration and play.",
    "Organizing adventures, shaping dreams, and bringing smiles.",
    "Every child deserves the magic of discovery and fun.",
    "Exploration fuels imagination, and activities bring dreams to life.",
    "Plan it. Explore it. Cherish it.",
    "Turning simple trips into extraordinary adventures for kids.",
    "The organizers who care create the memories kids treasure.",
    "A well-planned tour is more than a trip; it’s a gateway to wonder."
  ];

function InfiniteText() {
  return (
    <section id="infinteTicker">
        <div className="overflow-x-clip my-16 flex bg-secondary-950">
        <motion.div
        animate={
            {x: "-50%"}
        }
        whileHover={{
            
        }}
        transition={{
            duration:100,
            ease:"linear",
            repeat:Infinity
        }}
        className="flex flex-none justify-between overflow-hidden">
            {Array.from({length : 2}).map((_, i) => (
                quotes.map((quote, index) => (
                    <div key={index} className="py-4 flex items-center">
                        <h1 className="text-primary-100 sora text-3xl w-full font-bold text-nowrap">{quote}</h1>
                        <PiBeachBallDuotone className="mx-8 text-primary-200 text-5xl"/>
                    </div>
                ))
            ))}
            
        </motion.div>
        </div>
    </section>
  )
}

export default InfiniteText