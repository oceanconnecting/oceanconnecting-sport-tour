import Tag from "@/Components/Tag"
import { useTranslations } from "next-intl"
import DownloadCard from "@/Components/DownloadCard"


function Downloads() {

  const t = useTranslations("homepage.downloads")

  return (
    <section  id="downloads" className="flex justify-center">
      <div className="flex flex-col h-fit py-16 w-full justify-center container items-center">
        <Tag>{t("title")}</Tag>
        <div className="mt-5 flex justify-center w-full flex-col gap-5 items-center">
          <p className="px-3 leading-7 text-text-800 text-center text-pretty">
          {t("descr")}
          </p>
          <div className="flex px-3 mt-5 flex-col lg:flex-row w-full justify-center items-center gap-10">
            <DownloadCard title={t("text_1")} description="" fileSize="249 kb" downloadUrl="/planning/7days planning watermark.pdf"/>
            <DownloadCard title={t("text_2")} description="" fileSize="242 kb" downloadUrl="/planning/10days planning watermark.pdf"/>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads