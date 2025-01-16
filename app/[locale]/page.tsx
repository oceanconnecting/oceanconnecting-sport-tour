import { Suspense } from 'react'

import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Activities from "@/sections/Activities";
import Places from "@/sections/Places";
import Choose from "@/sections/choose";
import TextTicker from "@/sections/TextTicker";


export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>loading . . .</p>}>
        <Hero/>
        <About/>
        <Choose/>
        <Activities/>
        <TextTicker/>
        <Places/>
      </Suspense>
    </div>
  );
}
