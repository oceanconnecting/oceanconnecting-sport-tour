import ImageCard from '@/Components/ImageCard';
import Tag from '@/Components/Tag'
import { GiSevenPointedStar } from "react-icons/gi";
import { Suspense } from 'react';
import { useTranslations } from 'next-intl';



function Activities() {

  const t = useTranslations("homepage.activities")

  const activities = [
    { "title": t("activities.activity_1.title"), "descr": t("activities.activity_1.descr"), "image": "/activities/aqua-park.jpg" },
    { "title": t("activities.activity_2.title"), "descr": t("activities.activity_2.descr"), "image": "/activities/camel-ride.jpg" },
    { "title": t("activities.activity_3.title"), "descr": t("activities.activity_3.descr"), "image": "/activities/hot-air-balloon.jpg" },
    { "title": t("activities.activity_4.title"), "descr": t("activities.activity_4.descr"), "image": "/activities/horse-ride.jpeg" },
    { "title": t("activities.activity_5.title"), "descr": t("activities.activity_5.descr"), "image": "/activities/jetski.jpg" },
    { "title": t("activities.activity_6.title"), "descr": t("activities.activity_6.descr"), "image": "/activities/karting.jpg" },
    { "title": t("activities.activity_7.title"), "descr": t("activities.activity_7.descr"), "image": "/activities/parachute.jpg" },
    { "title": t("activities.activity_8.title"), "descr": t("activities.activity_8.descr"), "image": "/activities/quad-n-buggy.jpg" },
    { "title": t("activities.activity_9.title"), "descr": t("activities.activity_9.descr"), "image": "/activities/sandboarding.jpg" },
    { "title": t("activities.activity_10.title"), "descr": t("activities.activity_10.descr"), "image": "/activities/surfing.jpg" }
  ]

  return (
    <section id="activities">
      <Suspense fallback={<p>loading . . .</p>}>
    <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
      <Tag icon={<GiSevenPointedStar />}>Activities</Tag>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 items-center justify-center gap-6 w-full max-w-7xl">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex justify-center">
            <ImageCard title={activity.title} descr={activity.descr} image={activity.image} />
          </div>
        ))}
      </div>
    </div>
    </Suspense>
  </section> 
  )
}

export default Activities