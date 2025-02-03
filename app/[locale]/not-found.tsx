import Button from "@/Components/Button";

export default function Custom404() {
  return (
    <section className="bg-white w-full h-screen">
        <div className="px-4 mx-auto max-w-screen-xl flex flex-col items-center h-full justify-center lg:px-6">
            <div className="flex items-center flex-col gap-4 max-w-screen-sm text-center">
                <h1 className="text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600">404</h1>
                <p className="text-3xl tracking-tight font-bold text-gray-900 md:text-4xl">Something's missing.</p>
                <p className="text-lg font-light text-gray-500">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Button className="w-fit" variant={"primary"} href="/">Back to Homepage</Button>
            </div>   
        </div>
    </section>
  )
}
