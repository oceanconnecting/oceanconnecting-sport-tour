import Button from "@/Components/Button"
import Tag from "@/Components/Tag"
import CardDownloadButtonImage from "@/Components/CardDownloadButtonImage"


function Downloads() {
  return (
    <section>
      <div className="flex flex-col h-screen w-full justify-center container items-center">
        <Tag>Downloads</Tag>
        <div className="mt-5 flex flex-col gap-5 items-center">
          <p className="px-44 leading-7 text-center text-pretty">
            Our company offer for you all the information you're going to need for your unique tour with us, Throughout, ocean sport and tours takes care of everything, from the day you land, until the moment we say goodbye at the airport.
            About here, you will come across Everything concerning Tariff and schedule of your tours, trips, travels, accommodation… that you can download easy and fast.
          </p>
          <div className="flex flex-row w-full justify-center items-center gap-10">
            <CardDownloadButtonImage href="/planning/7days planning watermark.pdf" title="Download" descr="qsdqsdqsdqsd" image="/activities/aqua-park.jpg" button_title="Download" >
              <h2 className="text-2xl font-bold text-white mb-2">Download</h2>
              <p className="text-sm text-gray-300">sqhkjqshdkjqsdkjqsnkjqsn</p>
              <Button className="mt-7" variant="primary" href="/planning/7days planning watermark.pdf" download>click me you dumbass</Button>
            </CardDownloadButtonImage>
            <CardDownloadButtonImage href="/planning/7days planning watermark.pdf" title="Download" descr="qsdqsdqsdqsd" image="/activities/aqua-park.jpg" button_title="Download" >
              <h2 className="text-2xl font-bold text-white mb-2">Download</h2>
              <p className="text-sm text-gray-300">sqhkjqshdkjqsdkjqsnkjqsn</p>
            </CardDownloadButtonImage>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Downloads