"use client";
import React, { useState, useTransition } from "react";
import ModalServices from "@/Components/modalServices";
import Tag from "@/Components/Tag";
import { useTranslations } from "use-intl";
import { motion } from "motion/react";

interface Services {
  title: string;
  desc: string;
  image: string;
  images: string[]; // Tableau d'images
}
const fadeInAnimations = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
const Services: React.FC = () => {
  const t = useTranslations("homepage.services");
  const services = [
    {
      title: t("services.service1.title"),
      desc: t("services.service1.desc"),
      images: [
        { src: "/Services/transport/img1.jpg" },
        { src: "/Services/transport/img2.jpg" },
        { src: "/Services/transport/img3.jpg" },
        { src: "/Services/transport/img4.jpg" },
        { src: "/Services/transport/img5.jpg" },
      ],
    },
    {
      title: t("services.service2.title"),
      desc: t("services.service2.desc"),
      images: [
        { src: "/Services/accommodation/img1.jpg" },
        { src: "/Services/accommodation/img3.jpg" },
        { src: "/Services/accommodation/img4.jpg" },
        { src: "/Services/accommodation/img5.jpg" },
        { src: "/Services/accommodation/img6.jpg" },
        { src: "/Services/accommodation/img7.jpg" },
        { src: "/Services/accommodation/img8.jpg" },
        { src: "/Services/accommodation/img9.jpg" },
        { src: "/Services/accommodation/img10.jpg" },
        { src: "/Services/accommodation/img11.jpg" },
        { src: "/Services/accommodation/img12.jpg" },
      ],
    },
    {
      title: t("services.service3.title"),
      desc: t("services.service3.desc"),
      image: { src: "/Services/event/img1.jpg" },
      images: [
        { src: "/Services/event/img1.jpg" },
        { src: "/Services/event/img2.jpg" },
        { src: "/Services/event/img3.jpg" },
      ],
    },
    {
      title: t("services.service4.title"),
      desc: t("services.service4.desc"),
      images: [
        { src: "/Services/shuttle/img1.jpg" },
        { src: "/Services/shuttle/img2.jpg" },
        { src: "/Services/shuttle/img3.jpg" },
        { src: "/Services/shuttle/img4.jpg" },
        { src: "/Services/shuttle/img6.jpg" },
        { src: "/Services/shuttle/img7.jpg" },
        { src: "/Services/shuttle/img5.jpg" },
      ],
    },
    {
      title: t("services.service5.title"),
      desc: t("services.service5.desc"),
      images: [
        { src: "/Services/sport/img1.jpg" },
        { src: "/Services/sport/img2.jpg" },
        { src: "/Services/sport/img3.jpg" },
        { src: "/Services/sport/img4.jpg" },
        { src: "/Services/sport/img5.jpg" },
        { src: "/Services/sport/img6.jpg" },
        { src: "/Services/sport/img7.jpg" },
        { src: "/Services/sport/img8.jpg" },
      ],
    },
    {
      title: t("services.service6.title"),
      desc: t("services.service6.desc"),
      images: [
        { src: "/Services/tours/img1.jpg" },
        { src: "/Services/tours/img2.jpg" },
        { src: "/Services/tours/img3.jpg" },
        { src: "/Services/tours/img4.jpg" },
        { src: "/Services/tours/img5.jpg" },
        { src: "/Services/tours/img6.jpg" },
        { src: "/Services/tours/img7.jpg" },
        { src: "/Services/tours/img8.jpg" },
        { src: "/Services/tours/img9.jpg" },
        { src: "/Services/tours/img10.jpg" },
        { src: "/Services/tours/img11.jpg" },
        { src: "/Services/tours/img12.jpg" },
        { src: "/Services/tours/img13.jpg" },
        { src: "/Services/tours/img14.jpg" },
        { src: "/Services/tours/img15.jpg" },
        { src: "/Services/tours/img16.jpg" },
      ],
    },
  ];

  return (
    <div>
      <section id="services">
        <div className="text-center flex bg-background-50 justify-center items-center">
          <Tag>{t("title")}</Tag>
        </div>
        <div className="grid  lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-8">
          {services.map((service, index) => (
            <motion.div
              variants={fadeInAnimations}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              key={index}
              className="w-full h-full px-2 py-2 cursor-pointer  transition-shadow duration-300 ease-in-out"
            >
              <ModalServices
                title={service.title}
                image={service.images[0].src}
                Images={service.images}
                descr={service.desc}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Services;
