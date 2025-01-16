import ImageCard from '@/Components/ImageCard';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag'
import { GiSevenPointedStar } from "react-icons/gi";

const activities = [
  { title: "Aqua Park", descr: "Fun water slides and pools.", image: "/activities/aqua-park.jpg" },
  { title: "Camel Ride", descr: "Ride camels through scenic spots.", image: "/activities/camel-ride.jpg" },
  { title: "Hot Air Balloon", descr: "Enjoy breathtaking views from above.", image: "/activities/hot-air-balloon.jpg" },
  { title: "Horse Ride", descr: "Explore landscapes on horseback.", image: "/activities/horse-ride.jpeg" },
  { title: "Jetski", descr: "Exciting water sports experience.", image: "/activities/jetski.jpg" },
  { title: "Karting", descr: "Race on thrilling karting tracks.", image: "/activities/karting.jpg" }
]


function Activities() {
  return (
    <section id="activities">
    <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
      <Tag icon={<GiSevenPointedStar />}>Activities</Tag>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex justify-center">
            <ImageCard title={activity.title} descr={activity.descr} image={activity.image} />
          </div>
        ))}
      </div>
      <Button variant="dark_primary">Show more</Button>
    </div>
  </section>  
  )
}

export default Activities