"use client";
import Link from "next/link";
import Image from "next/image";
import { useTranslations } from "use-intl";
import { useState } from "react";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import { twMerge } from "tailwind-merge";
import {useLocale} from "use-intl";
import { useTheme } from "next-themes";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import ThemeToggle from "@/Components/ThemeToggle";
import Logo from "@/public/Logo 12cm.svg";
import { cn } from "@/lib/utils";

const parentVariants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: "-4rem" },
};

function Navbar() {
  const t = useTranslations("homepage.navbar");
  const locale = useLocale()
  const isDark = useTheme().theme === "dark";

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

  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [prevScroll, setPrevScroll] = useState(0);

  function update(latest: number, prev: number): void {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  }

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <motion.section
      variants={parentVariants}
      animate={hidden ? "hidden" : "visible"}
      transition={{
        ease: [0.1, 0.25, 0.3, 1],
        duration: 0.3,
      }}
    className="fixed z-50 shadow-md backdrop-blur-2xl border-b border-background-100 bg-background-50 bg-opacity-60">
      <div className="flex w-screen h-fit min-h-16 items-center px-5 lg:px-10">
        <div className="flex-1 flex gap-3 items-center">
          <div className="">
            {/* logo */}
            <Image src={Logo} alt="" width={56} height={56} className={cn("w-14 h-14",isDark && "invert")} />
          </div>
          <Link className="transition text-sm lg:text-lg duration-300 font-semibold hover:text-primary-800" href='/#main'>{t("title")}</Link>
        </div>
        <div className="lg:gap-8 md:gap-4 font-medium hidden lg:flex items-center">
          {navbarLink.map((link, idx) =>
            (
              <div key={idx}>
                <Link
                  className="hover:text-primary-700 border-b-2 duration-150 border-transparent hover:border-primary-700 pb-5 transition-all"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
              )
            )}
          <ThemeToggle/>
          <LanguageSwitcher />
        </div>

        <div className="flex gap-3 lg:hidden">
          <LanguageSwitcher />
          <ThemeToggle/>
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
              key={idx} className="pl-5 py-3 flex justify-center hover:text-primary-900">
                <Link
                  onClick={() => (
                    setIsOpen(false)
                  )}
                  className="px-3 text-primary-900 hover:text-primary-300 transition duration-300"
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
    </motion.section>
  );
}

export default Navbar;