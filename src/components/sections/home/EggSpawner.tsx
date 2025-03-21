"use client";

import dynamic from "next/dynamic";
import { Suspense, useRef } from "react";

import { FallingEggsRef } from "@/components/sections/home/FallingEggs";

const FallingEggs = dynamic(
  () => import("@/components/sections/home/FallingEggs"),
  { ssr: false }
);

const EggSpawner = () => {
  const fallingEggsRef = useRef<FallingEggsRef>(null);

  const handleClick = () => {
    if (fallingEggsRef.current) {
      const audio = new Audio("/pop.mp3");
      audio.play();
      fallingEggsRef.current.spawnEgg();
    }
  };

  return (
    <section className="relative flex min-h-dvh overflow-hidden bg-simmer-white">
      <div className="container relative mx-auto flex flex-col items-center justify-center space-y-5 text-center lg:space-y-8 xl:space-y-10">
        <div className="flex flex-wrap justify-center gap-4 font-adelle-mono text-5xl font-bold sm:text-6xl md:gap-8 md:text-7xl lg:gap-10 lg:text-8xl xl:gap-16 xl:text-9xl">
          <h2 className="px-5">
            HOW{" "}
            <span className="inline-block bg-black text-simmer-white">EGG</span>
            CITING
          </h2>
        </div>
        <div>
          <button
            onClick={handleClick}
            className="relative z-30 min-h-11 rounded-full border-2 border-black bg-simmer-white px-6 py-2 font-adelle-mono text-lg active:brightness-95"
          >
            TAP HERE FOR EGGS
          </button>
        </div>
      </div>
      <Suspense fallback={null}>
        <FallingEggs ref={fallingEggsRef} />
      </Suspense>
    </section>
  );
};

export default EggSpawner;
