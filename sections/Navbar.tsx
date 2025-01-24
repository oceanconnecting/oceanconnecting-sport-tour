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
      title: t("activities"),
      link: "/#activities"
    },
    {
      title: "services",
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
      title: "galery",
      link: `/${locale}/galery`
    },
    {
      title: t("contact"),
      link: `/${locale}/contact`,
    },
  ];

  const [isOpen, setIsOpen] = useState(false); // Mobile menu toggle
  const [openSubMenu, setOpenSubMenu] = useState(null); // Submenu toggle

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
      <div className="flex w-screen h-fit min-h-16 items-center px-5 lg:px-16">
        <div className="flex-1 flex gap-3 items-center">
          <div className="mx-4">
            {/* logo */}
            
          </div>
          <Link href='/#main'>{t("title")}</Link>
        </div>
        <div className="gap-3 font-medium hidden lg:flex items-center">
          {navbarLink.map((link, idx) =>
            (
              <div key={idx}>
                <Link
                  className="px-3 hover:text-primary-300 transition"
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
        <div className="block lg:hidden">
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
              <div key={idx} className="pl-5 py-3 flex justify-center hover:text-primary-100">
                <Link
                  className="px-3 text-primary-100 hover:text-primary-300 transition duration-300"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
            )
          )}
          <div className="pl-5 py-3 flex justify-center">
            <LanguageSwitcher />
          </div>
        </motion.div>
      )}
      </AnimatePresence>
    </section>
  );
}

export default Navbar;