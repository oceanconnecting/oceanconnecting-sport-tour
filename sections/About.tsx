import Tag from "@/Components/Tag";
import { useTranslations } from "next-intl";
import Image from "next/image";

function About() {
  const t = useTranslations("homepage.about")
  return (
    <section id="about">
      <div className="w-full bg-background-950 gap-6 py-16 px-10 flex items-center flex-col">
        <Tag>{t("about_title")}</Tag>
        <div className="grid lg:grid-cols-2 gap-4 h-full justify-center items-center">
          <div>
            <div className="flex items-center flex-col">
              <p className="mt-6 text-center lg:text-left text-text-50 sm:text-xl/relaxed max-w-lg">
                {t("about_text")}
              </p>
            </div>
          </div>
          <div className="lg:flex hidden justify-center items-center">
            <Image className="rounded-2xl" src={"/aboutImg.jpg"} alt={"img sportif kid"} width={280} height={360} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
