import Tag from '@/Components/Tag'
import { GiSevenPointedStar } from "react-icons/gi";

const activities = [
  { title: "Agadir Oufella", link: "/agadir-oufella" },
  { title: "Aqua Park", link: "/aqua-park" },
  { title: "Camel Ride", link: "/camel-ride" },
  { title: "Camera Pictures", link: "/camera-pictures" },
  { title: "Corniche", link: "/corniche" },
  { title: "Croco Park", link: "/croco-park" }
];

function Activities() {
  return (
    <section>
        <div className='w-full bg-background-950 gap-6 py-16 px-10 flex items-center flex-col'>
            <Tag icon=<GiSevenPointedStar/> >Activities</Tag>
        </div>
    </section>
  )
}

export default Activities