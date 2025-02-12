"use client";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import CustomSelect from "./languageCustomSelect";
import ReactCountryFlag from "react-country-flag";
import { usePathname } from "next/navigation";

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const validLocales = ["fr", "en", "ar", "de", "es"];
  const Locales = [
    { code: "fr", label: "French", flag: "FR" },
    { code: "en", label: "English", flag: "GB" },
    { code: "ar", label: "Arabic", flag: "SA" },
    { code: "de", label: "Dutch", flag: "NL" },
    { code: "es", label: "Spanish", flag: "ES" },
  ];

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const [, startTransition] = useTransition();

  const currentRoute = usePathname();

  const handleChange = (selectedOption: { value: string }) => {
    const newLocale = selectedOption.value;

    if (newLocale !== locale) {
      startTransition(() => {
        const newPath = currentRoute.replace(`/${locale}`, `/${newLocale}`);
        router.replace(newPath);
      });
    }
  };

  const options = Locales.map((lang) => ({
    value: lang.code,
    label: lang.code,
    flag: (
      <ReactCountryFlag
        style={{
          width: "1.2em",
          borderRadius: "2px",
        }}
        countryCode={lang.flag}
        svg
      />
    ),
  }));

  return (
    <CustomSelect
      options={options}
      placeholder={locale}
      onChange={handleChange}
    />
  );
}

export default LanguageSwitcher;
