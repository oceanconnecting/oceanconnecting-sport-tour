"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { useState } from "react";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import { twMerge } from "tailwind-merge";
import {useLocale} from "use-intl";
import { AnimatePresence, motion, useScroll } from "motion/react";

function Navbar() {
  const { scrollYProgress } = useScroll()
  const t = useTranslations("homepage.navbar");
  const locale = useLocale()

  const navbarLink = [
    {
      title: t("about"),
      link: "/#about",
    },
    {
      title: t("features"),
      link: "/#features"
    },
    {
      title: t("activities"),
      link: "/#activities"
    },
    {
      title: t("services"),
      link: "/#services",
    },
    {
      title: t("places"),
      link: "/#places"
    },
    {
      title: t("downloads"),
      link: "/#downloads",
    },
    {
      title: t("gallery"),
      link: `/${locale}/gallery`
    },
    {
      title: t("contact"),
      link: `/${locale}/contact`,
    },
  ];

  const [isOpen, setIsOpen] = useState(false); 
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const toggleSubMenu = (index : any) => {
    setOpenSubMenu(openSubMenu === index ? null : index);
  };

  return (
    <section className="fixed z-50 bg-white shadow-md backdrop-blur-2xl bg-opacity-90">
      <motion.div
                id="scroll-indicator"
                className="bg-primary-800"
                style={{
                    scaleX: scrollYProgress,
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 2,
                    originX: 0,
                }}
            />
      <div className="flex w-screen h-fit min-h-16 items-center px-5 lg:px-10">
        <div className="flex-1 flex gap-3 items-center">
          <div className="">
            {/* logo */}
            
          </div>
          <Link className="transition text-sm lg:text-lg duration-300 font-semibold hover:text-primary-200" href='/#main'>{t("title")}</Link>
        </div>
        <div className="lg:gap-8 md:gap-4 font-medium hidden lg:flex items-center">
          {navbarLink.map((link, idx) =>
            (
              <div key={idx}>
                <Link
                  className="hover:text-primary-300 border-b-2 duration-150 border-opacity-0 hover:border-opacity-100 border-primary-300 pb-5 transition-all"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
              )
            )}
          <LanguageSwitcher />
        </div>

        {/* style responsive */}
        <div className="flex gap-3 lg:hidden">
          <LanguageSwitcher />
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex gap-5 lg:hidden flex-col cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-menu"
            >
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                className={twMerge(
                  "origin-left transition duration-100",
                  isOpen && "rotate-45 -translate-y-1"
                )}
              ></line>
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                className={twMerge(
                  "transition duration-100",
                  isOpen && "opacity-0"
                )}
              ></line>
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                className={twMerge(
                  "origin-left transition duration-100",
                  isOpen && "-rotate-45 translate-y-1"
                )}
              ></line>
            </svg>
          </div>
        </div>
      </div>
      <AnimatePresence>
      {isOpen && (
        <motion.div
        initial={{height:0}}
        animate={{height:"auto"}}
        exit={{height:0}}
        className="block lg:hidden overflow-hidden w-full h-fit">
          {navbarLink.map((link, idx) =>
            (
              <div
              key={idx} className="pl-5 py-3 flex justify-center hover:text-primary-100">
                <Link
                  onClick={() => (
                    setIsOpen(false)
                  )}
                  className="px-3 text-primary-100 hover:text-primary-300 transition duration-300"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
            )
          )}
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;