import Tag from "@/Components/Tag";
import Image from "next/image";
import { GiSevenPointedStar, GiReceiveMoney } from "react-icons/gi";
import { IoMdTime } from "react-icons/io";
import Choose from "@/Components/Choose/choose";

function About() {
  const handleClick = () => {
    alert('Button Clicked!');
  };

  return (
    <section id="about">
      <div className="w-full bg-background-950 gap-6 py-16 px-10 flex items-center flex-col">
        <Tag icon={<GiSevenPointedStar />}>Who we are</Tag>
        <div className="grid lg:grid-cols-2 gap-4 h-full justify-center items-center">
          <div>
            <div className="flex items-center flex-col">
              <h1 className="text-3xl text-center lg:text-left font-extrabold text-primary-50 sm:text-5xl">
                Understand User Flow.
                <strong className="font-extrabold text-primary-300 sm:block"> Increase Conversion. </strong>
              </h1>
              <p className="mt-6 text-center lg:text-left text-text-50 sm:text-xl/relaxed max-w-lg">
                OCEAN sport et tours, company of tourist transport and sport based in Agadir, began operation in 2022.<br/>
                The association operates a very diversified range of services who deemed to be of high quality, they combine availability, proactivity and quality.<br/>
                We are committed to make difference in everything we do, as our main goal is to reflect a great image to tourism in Morocco by listening to the needs and requests of customers and offer them insightful and worry-free experience
              </p>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center">
            <Image className="rounded-2xl" src={"/aboutImg.jpg"} alt={"img sportif kid"} width={280} height={360} />
          </div>
        </div>
       <Choose/>
      </div>
    </section>
  );
}

export default About;
