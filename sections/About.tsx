"use client";

import Tag from "@/Components/Tag";
import { animate } from "motion/react";
import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";
interface CounterProps {
  from: number;
  to: number;
}

const Counter: React.FC<CounterProps> = ({ from, to }) => {
  const nodeRef = useRef<HTMLParagraphElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = nodeRef.current;

    if (!node) return;

    // Create an IntersectionObserver to detect when the element is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true); // Start animation when the element is in view
          observer.disconnect(); // Stop observing once the element is in view
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (node) {
      observer.observe(node); // Start observing the element
    }

    return () => observer.disconnect(); // Clean up the observer on unmount
  }, []);

  useEffect(() => {
    if (!inView) return; // Don't run animation until element is in view

    const node = nodeRef.current;

    if (!node) return;

    node.textContent = Math.round(from).toString(); // Set initial value

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = Math.round(value).toString(); // Update text content
      },
    });

    return () => controls.stop();
  }, [from, to, inView]);

  return <p ref={nodeRef}>0</p>;
};

function About() {
  const t = useTranslations("homepage.about");

  const locale = useLocale();
  const isArabic = locale == "ar";

  return (
    <section id="about">
      <div className="w-full bg-background-50 gap-6 py-16 px-10 flex items-center flex-col">
        <Tag>{t("about_title")}</Tag>
        <div className="grid lg:grid-cols-2 gap-4 h-full justify-center items-center">
          <div className="flex flex-col items-center lg:items-start">
            <div className="text-md md:text-xl lg:text-3xl flex gap-2 text-text-800 rounded-full font-bold bg-primary-100 w-fit px-6 py-3">
              +<Counter from={0} to={3} /> {t("about_tag")}
            </div>
            <div className="flex items-center flex-col">
              <p
                className={twMerge(
                  "mt-6 text-center text-text-800 sm:text-md/relaxed leading-8 max-w-lg",
                  isArabic ? "lg:text-right" : "lg:text-left"
                )}
              >
                {t("about_text")}
              </p>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center">
            <div className="bg-primary-600/70 -z-0 w-64 h-64 absolute blur-3xl rounded-full"></div>
            <Image
              className="rounded-2xl z-10"
              src={"/aboutImg.jpg"}
              alt={"img sportif kid"}
              width={280}
              height={360}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
