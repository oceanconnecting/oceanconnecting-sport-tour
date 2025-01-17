import Button from "@/Components/Button"
import Tag from "@/Components/Tag"
import CardDownloadButtonImage from "@/Components/CardDownloadButtonImage"


function Downloads() {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col h-fit py-16 w-full justify-center container items-center">
        <Tag>Downloads</Tag>
        <div className="mt-5 flex justify-center w-full flex-col gap-5 items-center">
          <p className="px-44 leading-7 text-center text-pretty">
            Our company offer for you all the information you're going to need for your unique tour with us, Throughout, ocean sport and tours takes care of everything, from the day you land, until the moment we say goodbye at the airport.
            About here, you will come across Everything concerning Tariff and schedule of your tours, trips, travels, accommodation… that you can download easy and fast.
          </p>
          <div className="flex flex-row w-full justify-center items-center gap-10">
            <CardDownloadButtonImage image="/places/souss-massa.jpg" >

              <h2 className="text-2xl font-bold text-primary-950 mb-2">Download 7days<br/> planning</h2>
              <Button className="mt-7 w-fit" variant="primary" href="/planning/7days planning watermark.pdf" download>download</Button>
            
            </CardDownloadButtonImage>
            <CardDownloadButtonImage image="/places/souss-massa.jpg" >
            
              <h2 className="text-2xl font-bold text-primary-950 mb-2">Download 10days <br/> planning</h2>              
              <Button className="mt-7 w-fit" variant="primary"  href="/planning/10days planning watermark.pdf" download>Download</Button>
            
            </CardDownloadButtonImage>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads