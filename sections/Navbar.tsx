"use client";
import Link from "next/link";
import { useTranslations } from "use-intl";
import { useState } from "react";
import { PiUmbrellaThin } from "react-icons/pi";
import { RiArrowDropDownLine } from "react-icons/ri";
import LanguageSwitcher from "@/Components/LanguageSwitcher";
import { twMerge } from "tailwind-merge";
import {useLocale} from "use-intl";

function Navbar() {
  const t = useTranslations("homepage.navbar");
  const locale = useLocale()

  const navbarLink = [
    {
      title: t("about"),
      link: "/#about",
    },
    {
      title: t("activities"),
      link: "/"
    },
    {
      title: t("places"),
      link: "/"
    },
    {
      title: t("downloads"),
      link: "/",
    },
    {
      title: t("galery"),
      link: "/",
      subItems:[
        {
          title:"essaouira",
          link:"/"
        },
        {
          title:"imsouane",
          link:"/"
        },
        {
          title:"sidi bibi",
          link:"/"
        },
        {
          title:"tafraout",
          link:"/"
        },
        {
          title:"taroudant",
          link:"/"
        },
        {
          title:"tiznit",
          link:"/"
        },
      ]
    },
    {
      title: t("professional"),
      link: "/",
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
    <section className="fixed z-50">
      <div className="flex w-screen h-fit min-h-16 bg-white backdrop-blur-2xl bg-opacity-90 shadow-md items-center px-5 lg:px-16">
        <div className="flex-1 flex gap-3 items-center">
          <div>
            <PiUmbrellaThin />
          </div>
          <Link href='/'>{t("title")}</Link>
        </div>
        <div className="gap-3 hidden lg:flex items-center">
          {navbarLink.map((link, idx) =>
            !link.subItems ? (
              <div key={idx}>
                <Link
                  className="px-3 hover:text-primary-300 transition"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
            ) : (
              <div
                className="relative inline-flex justify-center group px-3"
                key={idx}
              >
                <div className="flex gap-1 justify-center items-center">
                  <RiArrowDropDownLine className="group-hover:rotate-180 transition duration-200 cursor-pointer" />
                  <Link
                    className="group-hover:text-primary-300"
                    href={link.link}
                  >
                    {link.title}
                  </Link>
                </div>
                <div className="pt-11 absolute hidden group-hover:block">
                  <ul className="bg-white shadow-md pt-3 px-3">
                    {link.subItems.map((sublink, idx) => (
                      <li className="block w-fit pb-3" key={idx}>
                        <Link
                          className="px-3 text-nowrap hover:text-primary-300"
                          href={sublink.link}
                        >
                          {sublink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )
          )}
          <LanguageSwitcher />
        </div>
        <div className="block lg:hidden">
          <div
            onClick={() => setIsOpen(!isOpen)}
            className="flex gap-5 lg:hidden flex-col cursor-pointer"
          >
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
      {isOpen && (
        <div className="block lg:hidden bg-white backdrop-blur-2xl bg-opacity-90 w-full h-fit">
          {navbarLink.map((link, idx) =>
            !link.subItems ? (
              <div key={idx} className="pl-5 py-3">
                <Link
                  className="px-3 hover:text-primary-300 transition duration-300"
                  href={link.link}
                >
                  {link.title}
                </Link>
              </div>
            ) : (
              <div key={idx} className="pl-5 py-3">

                <div
                  onClick={() => toggleSubMenu(idx)}
                  className="flex gap-1 items-center cursor-pointer"
                >
                  <RiArrowDropDownLine
                    className={twMerge(
                      "transition duration-200",
                      openSubMenu === idx && "rotate-180"
                    )}
                  />
                  <Link href={link.link}>{link.title}</Link>
                </div>

                {openSubMenu === idx && (
                  <ul className="pl-5 mt-2">
                    {link.subItems.map((sublink, subIdx) => (
                      <li key={subIdx} className="py-2">
                        <Link
                          className="hover:text-primary-300 transition"
                          href={sublink.link}
                        >
                          {sublink.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )
          )}
          <div className="pl-5 py-3">
            <LanguageSwitcher />
          </div>
        </div>
      )}
    </section>
  );
}

export default Navbar;
