import Tag from "@/Components/Tag"
import Image from "next/image"
import { GiSevenPointedStar } from "react-icons/gi";

function About() {
  return (
    <section>
        <div className="w-full h-screen bg-background-950 py-6 flex items-center flex-col">
            <Tag icon={<GiSevenPointedStar/>}>Who we are</Tag>
            <div className="grid grid-cols-2 h-full justify-center items-center">
                <div>
                    <div className="flex items-center px-10 flex-col">
                        <h1 className="text-3xl font-extrabold text-primary-50 sm:text-5xl">
                            Understand User Flow.
                            <strong className="font-extrabold text-primary-300 sm:block"> Increase Conversion. </strong>
                        </h1>
                        <p className="pt-5 mt-4 text-text-50 sm:text-xl/relaxed max-w-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ut delectus commodi quaerat dicta? Soluta voluptatum, eligendi quas iusto in, vero qui repellat provident voluptatem doloribus sed delectus ipsa error.</p>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Image className="rounded-2xl" src={"/aboutImg.jpg"} alt={"img sportif kid"} width={360} height={540}></Image>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About