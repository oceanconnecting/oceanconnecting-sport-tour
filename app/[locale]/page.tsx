import { Suspense } from 'react'

import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Activities from "@/sections/Activities";
import Places from "@/sections/Places";
import Choose from "@/sections/choose";
import TextTicker from "@/sections/TextTicker";
import Downloads from '@/sections/Downloads';
import Services from '@/sections/Services';
import Opnion from '@/sections/Opnion';

export default function Home() {
  return (
    <div>
      <Suspense fallback={<p>loading . . .</p>}>
        <Hero/>
        <About/>
        <Choose/>
        <Activities/>
        <Services/>
        <TextTicker/>
        <Places/>
        <Opnion/>
        <Downloads/>
        </Suspense>
    </div>
  );
}
