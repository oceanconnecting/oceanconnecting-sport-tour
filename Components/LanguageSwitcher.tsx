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
    <div className="relative inline-flex flex-col items-center">
      {/* Combo Button */}
      <button
        className="flex items-center gap-1 cursor-pointer group"
        onClick={toggleDropdown}
      >
        <CiGlobe className="text-2xl" />
        <h1>{locale}</h1>
      </button>

      {/* Dropdown */}
      {isDropdownOpen && (
        <ul className="absolute top-full mt-2 bg-white w-20 shadow-md rounded-md py-2">
          {routing.locales.map((lang, idx) => (
            <li
              className={`pb-3 hover:text-primary-400 px-3 cursor-pointer ${
                lang === locale ? "font-bold text-primary-400" : ""
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
