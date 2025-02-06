import { Suspense } from "react";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Activities from "@/sections/Activities";
import Places from "@/sections/Places";
import TextTicker from "@/sections/TextTicker";
import Downloads from "@/sections/Downloads";
import Services from "@/sections/Services";
import Tours from "@/sections/Tours";
import Opnion from "@/sections/Opnion";
import Features from "@/sections/Features";

const LoadingFallback = () => <p className="w-full h-screen flex justify-center items-center">Loading...</p>;

export default function Home() {
  return (
    <div className="bg-background-50">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Features/>
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Activities />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Services />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <TextTicker />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Places />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Tours />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Opnion />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Downloads />
      </Suspense>
    </div>
  );
}
