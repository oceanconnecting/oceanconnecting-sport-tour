import React from 'react'
import Tag from '../Components/Tag';
import { GiSevenPointedStar } from 'react-icons/gi';
import { PiGlobeHemisphereWestDuotone, PiBookBookmarkDuotone, PiShieldCheckDuotone} from "react-icons/pi";
import { twMerge } from 'tailwind-merge';
import { useTranslations } from 'next-intl';

function choose() {

  const t = useTranslations("homepage.choose")

  const ChooseData = [
    {
      icon: <PiShieldCheckDuotone className="text-4xl text-primary-100"/>,
      title: t("choose_1.title"),
      subtitle: t("choose_1.descr"),
      bg: "bg-primary-950",
    },
    {
      icon: <PiGlobeHemisphereWestDuotone className="text-4xl text-primary-100"/>,
      title: t("choose_2.title"),
      subtitle: t("choose_1.descr"),
      bg: "bg-primary-950",
    },
    {
      icon: <PiBookBookmarkDuotone className="text-4xl text-primary-100"/>,
      title: t("choose_3.title"),
      subtitle: t("choose_1.descr"),
      bg: "bg-primary-950",
    }
  ]

  return ( 
    <section className="py-44 px-4 h-screen gap-5 flex flex-col items-center">
      <Tag icon={<GiSevenPointedStar />}>{t("title")}</Tag>
      <div className="grid flex-1 grid-cols-1 justify-center items-center lg:grid-cols-3 gap-6">
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
