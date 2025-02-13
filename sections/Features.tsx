"use client";
import { AnimatedTestimonials } from "@/Components/animated-testimonials";
import Tag from "@/Components/Tag";
import { useScroll, useTransform } from "motion/react";
import { useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";

export default function Features() {
  const t = useTranslations("homepage.choose");
  const data = [
    {
      quote: t("choose_1.descr"),
      name: t("choose_1.title"),
      src: "/Features/security.jpg",
    },
    {
      quote: t("choose_2.descr"),
      name: t("choose_2.title"),
      src: "/Features/happyKids.jpg",
    },
    {
      quote: t("choose_3.descr"),
      name: t("choose_3.title"),
      src: "/Features/education.jpg",
    },
  ];

  return (
    <section>
      <div className="sticky min-h-screen top-5 flex justify-center flex-col items-center">
        <Tag>{t("title")}</Tag>
        <AnimatedTestimonials testimonials={data} autoplay={true} />
      </div>
    </section>
  );
}
