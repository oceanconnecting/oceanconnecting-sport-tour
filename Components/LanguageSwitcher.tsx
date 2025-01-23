"use client";

import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { CiGlobe } from "react-icons/ci";

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const validLocales = ["fr", "en", "ar"];

  // Ensure locale is valid
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const [isPending, startTransition] = useTransition();
  const [isDropdownOpen, setDropdownOpen] = useState(false); // Track dropdown visibility

  const handleLocaleChange = (lang: string) => {
    setDropdownOpen(false); // Close dropdown on selection
    startTransition(() => {
      router.replace(`/${lang}`);
    });
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className="relative rounded-xl inline-flex flex-col items-center">
      {/* Combo Button */}
      <button
        className="flex items-center  gap-1 cursor-pointer group"
        onClick={toggleDropdown}
      >
       
        <svg
      className={`w-4 h-4 transition-transform duration-200 ${
        isDropdownOpen ? "rotate-180" : "rotate-0"
      }`}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
    </svg>
        <h1  className="text-sm font-medium">{locale}</h1>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <ul className="absolute top-full mt-2 ounded-full bg-white border border-gray-200 shadow-lg rounded-lg w-48 py-2 z-20">
          {routing.locales.map((lang, idx) => (
            <li
              className={`flex items-center px-8 p-y-2  text-black hover:bg-gray-100 hover:text-primary-500 cursor-pointer transition-colors duration-200  ${
                lang === locale ? "font-bold text-black" : ""
              }`}
              onClick={() => handleLocaleChange(lang)}
              key={idx}
            >
              {lang}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSwitcher;
