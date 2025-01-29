"use client";

import { animate, motion, useMotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import useMeasure from "react-use-measure";
import Tag from "@/Components/Tag";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";

interface CardProps {
    image: string;
    name: string;
    descr: string;
    starRate: number;
}

function Card({ image, name, descr, starRate }: CardProps) {
    return (
        <div className="bg-white shadow-md p-6 min-h-64 w-[500px] rounded-lg flex-shrink-0">
            <div className="flex gap-4 items-center">
                <Image className="w-16 h-16 shadow-md rounded-full object-cover" src={image} width={300} height={300} alt={name} />
                <h1 className="text-xl font-semibold">{name}</h1>
            </div>
            <div className="mt-4 flex gap-4 justify-center w-fit items-center font-semibold">
                <div className="flex gap-2">
                    {Array.from({ length: starRate }).map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                    ))}
                    {Array.from({ length: 5 - starRate }).map((_, i) => (
                        <FaStar key={i} className="text-gray-400" />
                    ))}
                </div>
            </div>
            <div className="flex-1 mt-4 text-slate-600">{descr}</div>
        </div>
    );
}

const opinions = [
    { name: "Alex Smith", descr: "Amazing experience! My kids had a blast on the adventure tour. The guides were friendly and well-prepared. Highly recommended!", starRate: 5, image: "/Opinion/f1.jpg" },
    { name: "Mark Johnson", descr: "Great sports activities! My son enjoyed the soccer camp. Everything was well-organized, and the coaches were professional.", starRate: 4, image: "/Opinion/f2.jpg" },
    { name: "Juan Lee", descr: "The tour was fun, but the schedule was a bit tight. More free time for kids would be great. Overall, a good experience!", starRate: 3, image: "/Opinion/f3.jpg" },
    { name: "David Brown", descr: "Excellent service! My daughter loved the outdoor activities. It was safe, engaging, and educational. Will book again!", starRate: 5, image: "/Opinion/f4.jpg" },
    { name: "Emmanual Wilson", descr: "The staff was very caring, and my kids felt comfortable throughout the trip. They especially enjoyed the team-building games!", starRate: 5, image: "/Opinion/f5.jpg" },
    { name: "James Carter", descr: "A well-organized tour with a variety of activities. My son loved the basketball training, but the food options could be improved.", starRate: 4, image: "/Opinion/f6.jpg" },
    { name: "Oliver Martinez", descr: "Fantastic sports program! My daughter learned so much and made new friends. She’s already asking to join again next year.", starRate: 5, image: "/Opinion/f7.jpg" },
];

function Opinion() {
  const FAST_DURATION = 20;
  const SLOW_DURATION = 150;

  const [duration, setDuration] = useState(FAST_DURATION);
  let [ref, { width }] = useMeasure();

  const xTranslation = useMotionValue(0);

  const [mustFinish, setMustFinish] = useState(false);
  const [rerender, setRerender] = useState(false);

  useEffect(() => {
    let controls;
    let finalPosition = -width / 2 - 8;

    if (mustFinish) {
      controls = animate(xTranslation, [xTranslation.get(), finalPosition], {
        ease: "linear",
        duration: duration * (1 - xTranslation.get() / finalPosition),
        onComplete: () => {
          setMustFinish(false);
          setRerender(!rerender);
        },
      });
    } else {
      controls = animate(xTranslation, [0, finalPosition], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
      });
    }

    return controls?.stop;
  }, [rerender, xTranslation, duration, width]);
    return (
        <section className="bg-slate-50">
            <div className="flex flex-col overflow-hidden items-center p-6 w-full h-fit">
                <Tag>What Our Customers Said About Us</Tag>
                <div className="overflow-hidden mt-6 w-full">
                <motion.div
                    className="flex gap-6 w-max flex-nowrap"
                    style={{ x: xTranslation }}
                    ref={ref}
                    onHoverStart={() => {
                    setMustFinish(true);
                    setDuration(SLOW_DURATION);
                    }}
                    onTouchStart={() => {
                        setMustFinish(true);
                        setDuration(SLOW_DURATION);
                    }}
                    onTouchEnd={() => {
                        setMustFinish(true);
                        setDuration(FAST_DURATION);
                    }}
                    onHoverEnd={() => {
                    setMustFinish(true);
                    setDuration(FAST_DURATION);
                    }}    
                    >
                        {[...opinions, ...opinions].map((opinion, idx) => (
                            <Card key={idx} {...opinion} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

export default Opinion;
