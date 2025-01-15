import Activity from '@/Components/Activity';
import Button from '@/Components/Button';
import Tag from '@/Components/Tag'
import { GiSevenPointedStar } from "react-icons/gi";

const activities = [
  { title: "Agadir Oufella", descr: "Historic hilltop ruins with city views.", image: "/activities/agadir-oufella.jpg" },
  { title: "Aqua Park", descr: "Fun water slides and pools.", image: "/activities/aqua-park.jpg" },
  { title: "Camel Ride", descr: "Ride camels through scenic spots.", image: "/activities/camel-ride.jpg" },
  { title: "Camera Pictures", descr: "Capture Agadir's beauty.", image: "/activities/camera-pictures.jpg" },
  { title: "Corniche", descr: "Beachfront promenade with views.", image: "/activities/camera-pictures.jpg" },
  { title: "Croco Park", descr: "Crocodiles and exotic plants.", image: "/activities/camera-pictures.jpg" }  
];

function Activities() {
  return (
    <section>
    <div className="w-full bg-background-950 py-16 px-10 flex flex-col items-center gap-6">
      <Tag icon={<GiSevenPointedStar />}>Activities</Tag>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 w-full max-w-7xl">
        {activities.map((activity, idx) => (
          <div key={idx} className="flex justify-center">
            <Activity title={activity.title} descr={activity.descr} image={activity.image} />
          </div>
        ))}
      </div>
      <Button variant="dark_primary">Show more</Button>
    </div>
  </section>  
  )
}

export default Activities