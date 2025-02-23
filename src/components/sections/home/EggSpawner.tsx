"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";

import HalfEgg from "@/components/icons/HalfEgg";

const FallingEggs = dynamic(
  () => import("@/components/sections/home/FallingEggs"),
  { ssr: false }
);

const EggSpawner = () => {
  return (
    <section className="relative flex min-h-dvh overflow-hidden bg-simmer-white">
      <div className="container relative z-10 mx-auto content-center space-y-5 text-center lg:space-y-8 xl:space-y-10">
        <div className="flex flex-wrap justify-center gap-4 font-adelle-mono text-5xl font-bold sm:text-6xl md:gap-8 md:text-7xl lg:gap-10 lg:text-8xl xl:gap-16 xl:text-9xl">
          <h2 className="px-5">
            HOW{" "}
            <span className="inline-block bg-black text-simmer-white">EGG</span>
            CITING
          </h2>
        </div>
        <div>
          <button className="min-h-11 rounded-full border-2 border-black bg-simmer-white px-6 py-2 font-adelle-mono text-lg active:brightness-95">
            TAP FOR EGGS
          </button>
        </div>
      </div>
      <Suspense fallback={null}>
        <FallingEggs />
      </Suspense>
    </section>
  );
};

export default EggSpawner;
