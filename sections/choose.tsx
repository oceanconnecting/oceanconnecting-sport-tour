import React from 'react'
import Tag from '../Components/Tag';
import { GiSevenPointedStar } from 'react-icons/gi';
import { PiGlobeHemisphereWestDuotone, PiBookBookmarkDuotone, PiShieldCheckDuotone} from "react-icons/pi";
import { twMerge } from 'tailwind-merge';

const ChooseData = [
  {
    icon: <PiShieldCheckDuotone className="text-4xl text-primary-100"/>,
    title: "Safe and Secure",
    subtitle: "Your child's safety is our top priority with trained staff and secure trips.",
    bg: "bg-primary-950",
  },
  {
    icon: <PiGlobeHemisphereWestDuotone className="text-4xl text-primary-100"/>,
    title: "Fun Activities",
    subtitle: "Engaging and fun experiences that kids will enjoy and remember.",
    bg: "bg-primary-950",
  },
  {
    icon: <PiBookBookmarkDuotone className="text-4xl text-primary-100"/>,
    title: "Educational Value",
    subtitle: "A mix of learning and adventure to expand your child's horizons.",
    bg: "bg-primary-950",
  }
]

function choose() {
  return ( 
    <section className="py-12 px-4 gap-5 flex flex-col items-center">
      <Tag icon={<GiSevenPointedStar />}>Why To choose Us</Tag>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {ChooseData.map((item: any, index: any) => (
            <div key={index} className="w-full max-w-xs border-black rounded-xl border-opacity-35">
              <div className="flex flex-col items-center text-center p-6">
                <div className={twMerge("p-3 rounded-full mb-4", item.bg)}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.subtitle}</p>
              </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default choose
