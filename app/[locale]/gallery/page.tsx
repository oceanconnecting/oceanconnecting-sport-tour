import { Metadata } from "next";
import Gallery from "./gallery";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params }: any): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    namespace: "homepage.navbar",
    locale,
  });
  return {
    title: t("gallery"),
  };
}

function page() {
  return (
    <div>
      <Gallery />
    </div>
  );
}

export default page;
