"use client";

import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation"; // Correct import for useRouter
import { useState, useTransition } from "react";
import { CiGlobe } from "react-icons/ci";

function LanguageSwitcher() {
  const locale = useLocale(); // Corrected variable name
  const router = useRouter();
  const validLocales = ["fr", "en", "ar"];

  // Ensure locale is valid
  if (!validLocales.includes(locale)) {
    notFound();
  }

  const [isPending, startTransition] = useTransition();
  const [nextLocale, setNextLocale] = useState(locale); // State to track the selected locale

  const handleLocaleChange = (lang : any) => {
    setNextLocale(lang);
    startTransition(() => {
      router.replace(`/${lang}`);
    });
  };

  return (
    <div className="cursor-pointer relative inline-flex justify-center group">
      <div className="flex gap-1">
        <CiGlobe className="text-2xl" />
        <h1>{locale}</h1>
      </div>
      <div className="pt-11 absolute hidden group-hover:block">
        <ul className="bg-white w-20 shadow-md pt-3">
          {routing.locales.map((lang, idx) => (
            <li
              className="pb-3 hover:text-primary-400 px-3"
              onClick={() => handleLocaleChange(lang)}
              key={idx}
            >
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default LanguageSwitcher;
