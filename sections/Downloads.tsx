import Button from "@/Components/Button"
import Tag from "@/Components/Tag"
import CardDownloadButtonImage from "@/Components/CardDownloadButtonImage"
import { useTranslations } from "next-intl"


function Downloads() {

  const t = useTranslations("homepage.downloads")

  return (
    <section className="flex justify-center">
      <div className="flex flex-col h-fit py-16 w-full justify-center container items-center">
        <Tag>{t("title")}</Tag>
        <div className="mt-5 flex justify-center w-full flex-col gap-5 items-center">
          <p className="px-44 leading-7 text-center text-pretty">
          {t("descr")}
          </p>
          <div className="flex flex-row w-full justify-center items-center gap-10">
            <CardDownloadButtonImage image="/places/souss-massa.jpg" >

              <h2 className="text-2xl font-bold text-primary-950 mb-2">{t("text_1")}</h2>
              <Button className="mt-7 w-fit" variant="primary" href="/planning/7days planning watermark.pdf" download>{t("button")}</Button>
            
            </CardDownloadButtonImage>
            <CardDownloadButtonImage image="/places/souss-massa.jpg" >
            
              <h2 className="text-2xl font-bold text-primary-950 mb-2">{t("text_2")}</h2>              
              <Button className="mt-7 w-fit" variant="primary"  href="/planning/10days planning watermark.pdf" download>{t("button")}</Button>
            
            </CardDownloadButtonImage>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads