"use client";

import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

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
        <ul className="absolute top-full mt-5 bg-white px-4 w-fit py-2">
          {routing.locales.map((lang, idx) => (
            <li
              className={`py-2 my-2 transition hover:text-primary-300 hover:bg-primary-950 duration-200 text-center rounded-xl px-3 cursor-pointer ${
                lang === locale ? "text-primary-300 bg-primary-950" : ""
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
