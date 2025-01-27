"use client";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import CustomSelect from "./languageCustomSelect";

function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const validLocales = ["fr", "en", "ar"];

  if (!validLocales.includes(locale)) {
    notFound();
  }

  const [isPending, startTransition] = useTransition();

  const handleChange = (selectedOption: { value: string }) => {
    const newLocale = selectedOption.value;

    if (newLocale !== locale) {
      startTransition(() => {
        router.replace(`/${newLocale}`);
      });
    }
  };

  const options = validLocales.map((lang) => ({ value: lang, label: lang }));

  return (
    <CustomSelect
      options={options}
      placeholder={locale}
      onChange={handleChange}
    />
  );
}

export default LanguageSwitcher;
