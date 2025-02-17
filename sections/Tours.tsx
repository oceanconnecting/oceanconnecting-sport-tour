"use client ";

import ToursCards from "@/Components/ToursCards";
import Tag from "@/Components/Tag";
import getToursData from "@/app/[locale]/Tours/[id]/ToursData";
import { useTranslations } from "next-intl";
import { Tour } from "@/types";

const Tours = () => {
  const t = useTranslations("homepage.tours");
  const ToursData: Tour[] = getToursData();

  return (
    <div
      id="Tours"
      className="py-16 flex flex-col items-center bg-background-100"
    >
      {/* Tag Section */}
      <div className="mb-6">
        <Tag>{t("heading")}</Tag>
      </div>

      {/* Cards Grid */}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6 w-full max-w-7xl mx-auto px-4 py-8">
        {ToursData.map((tour, index) => (
          <ToursCards key={index} tour={tour} />
        ))}
      </div>
    </div>
  );
};
export default Tours;
