import { Suspense } from "react";
import About from "@/sections/About";
import Hero from "@/sections/Hero";
import Activities from "@/sections/Activities";
import Places from "@/sections/Places";
import Choose from "@/sections/choose";
import TextTicker from "@/sections/TextTicker";
import Downloads from "@/sections/Downloads";
import Services from "@/sections/Services";
import Tours from "@/sections/Tours";
import Opnion from "@/sections/Opnion";

const LoadingFallback = () => <p>Loading...</p>;

export default function Home() {
  return (
    <div className="space-y-10">
      <Suspense fallback={<LoadingFallback />}>
        <Hero />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<LoadingFallback />}>
        <Choose />
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
