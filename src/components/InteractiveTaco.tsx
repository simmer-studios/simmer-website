"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const InteractiveTaco: FC = () => {
  const eyesRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    // animate the taco's eyes to follow the cursor
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX - window.innerWidth / 2) / 50;
      const y = (event.clientY - window.innerHeight + 1 / 2) / 50;

      if (eyesRef.current) {
        eyesRef.current.style.transform = `translateY(${y}px) translateX(${x}px)`;
      }
    });
  }, []);

  return (
    <div className="relative inline-flex h-52 w-64 items-center justify-center lg:h-60 lg:w-72">
      <Image
        src="/images/taco_eyes_bg.svg"
        alt="Taco Eyes"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 0
        }}
      />
      <Image
        src="/images/taco_eyes.svg"
        ref={eyesRef}
        alt="Taco Pupils"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 1
        }}
      />
      <Image
        src="/images/taco_body.svg"
        alt="Taco Body"
        width={100}
        height={100}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          zIndex: 2
        }}
      />
    </div>
  );
};

export default InteractiveTaco;
