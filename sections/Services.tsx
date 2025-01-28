'use client';
import React,{useState, useTransition} from "react";
import { FaPlaceOfWorship } from "react-icons/fa";
import { MdNavigateNext } from "react-icons/md";
import { FaAngleLeft } from "react-icons/fa6";
import CardServices from "@/Components/CardServices";
import ModalServices from "@/Components/modalServices";
import Tag from "@/Components/Tag";
import { useTranslations } from "use-intl";

interface Services{
    
    title: string;
    desc: string;
    image:string;
    images: string[];// Tableau d'images

}
const Services: React.FC = () => {
  const services = [
{
      title: "Transport and logistics",desc: "Efficient solutions for moving goods globally.", image:"/Services/transport/img1.jpg",
   images: ["/Services/transport/img1.jpg","/Services/transport/img2.jpg","/Services/transport/img3.jpg","/Services/transport/img4.jpg","/Services/transport/img5.jpg", ], 
},
{
      title: "Accommodation and car rental",desc: "Efficient solutions for moving goods globally.", image:"/Services/accommodation/img1.jpg",
   images: ["/Services/accommodation/img1.jpg","/Services/accommodation/img3.jpg","/Services/accommodation/img4.jpg","/Services/accommodation/img5.jpg","/Services/accommodation/img6.jpg","/Services/accommodation/img7.jpg","/Services/accommodation/img8.jpg","/Services/accommodation/img9.jpg","/Services/accommodation/img10.jpg","/Services/accommodation/img11.jpg","/Services/accommodation/img12.jpg" ], 
},
{
      title: "Event and parties",desc: "Efficient solutions for moving goods globally.", image:"/Services/event/img1.jpg",
   images: ["/Services/event/img1.jpg","/Services/event/img2.jpg","/Services/event/img3.jpg",], 
},
{
      title: "Shuttle and airport transfer",desc: "Efficient solutions for moving goods globally.", image:"/Services/shuttle/img1.jpg",
   images: ["/Services/shuttle/img1.jpg","/Services/shuttle/img2.jpg","/Services/shuttle/img3.jpg","/Services/shuttle/img4.jpg","/Services/shuttle/img6.jpg","/Services/shuttle/img7.jpg","/Services/shuttle/img5.jpg", ], 
},
{
      title: "Sport and training programs and camps",desc: "Efficient solutions for moving goods globally.", image:"/Services/sport/img1.jpg",
   images: ["/Services/sport/img1.jpg","/Services/sport/img2.jpg","/Services/sport/img3.jpg","/Services/sport/img4.jpg","/Services/sport/img5.jpg","/Services/sport/img6.jpg","/Services/sport/img7.jpg","/Services/sport/img8.jpg",
           ], 
},
{
      title: "Tours trip travel and adventures",desc: "Efficient solutions for moving goods globally.", image:"/Services/tours/img1.jpg",
   images: ["/Services/tours/img1.jpg","/Services/tours/img2.jpg","/Services/tours/img3.jpg","/Services/tours/img4.jpg","/Services/tours/img5.jpg","/Services/tours/img6.jpg","/Services/tours/img7.jpg","/Services/tours/img8.jpg","/Services/tours/img9.jpg","/Services/tours/img10.jpg","/Services/tours/img11.jpg","/Services/tours/img12.jpg","/Services/tours/img13.jpg","/Services/tours/img15.jpg","/Services/tours/img15.jpg","/Services/tours/img16.jpg",
           ], 
          
},
]

const t = useTranslations('homepage.services');
  
const [currentImage, setCurrentImage] = useState(0);
const [isOpen, setIsOpen] = useState(false);
const [modalData, setModalData] = useState<Services | null>(null);

const openModal = (service:Services,index:number) => {
    setModalData(service)
    setCurrentImage(index);
    setIsOpen(true);
                 };
                            
const closeModal = () => setIsOpen(false);

                             
  return (
    <div>
      <section id="services" >
        <div className="text-center flex justify-center items-center">
        <Tag>{t('title')}</Tag>
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-8">
          {services.map((service, index) => (
            <div
            onClick={() => openModal(service,0)}
              key={index}
              className="w-full h-full px-2 py-2 cursor-pointer  transition-shadow duration-300 ease-in-out"
            >
              <CardServices title={service.title} desc={service.desc} images={service.images}  image={service.image} />
            </div>
          ))}
        </div>
      </section>

       {/* Modal */}
            {modalData && (
              <ModalServices isOpen={isOpen} onClose={closeModal} data={modalData} currentImage={currentImage}
              setCurrentImage={setCurrentImage} />
            )}
    </div>
  );

};

export default Services;
