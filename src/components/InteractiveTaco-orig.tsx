"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const InteractiveTaco: FC = () => {
  const eyesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // animate the taco's eyes to follow the cursor
    window.addEventListener("mousemove", (event) => {
      const x = (event.clientX - window.innerWidth / 2) / 50;
      const y = (event.clientY - window.innerHeight / 2) / 50;

      if (eyesRef.current) {
        eyesRef.current.style.transform = `translateY(${y}px) translateX(${x}px)`;
      }
    });
  }, []);

  return (
    <div className="relative h-52 w-64 content-center lg:h-60 lg:w-72">
      {/* body */}
      <Image
        src="/images/img_taco-body.svg"
        alt="Taco"
        fill
        className="z-30 object-fill"
      />
      {/* eyes */}
      <div
        className="absolute left-0 right-0 z-20 mx-auto -mt-2 h-5 max-w-max -translate-x-0.5 scale-95 lg:h-9"
        ref={eyesRef}
      >
        <Image
          src="/images/img_taco-eyes.svg"
          alt="Taco Eyes"
          width={78}
          height={78}
        />
      </div>
      <span className="absolute left-[0] right-[0] z-10 mx-auto -mt-2 h-10 w-24 bg-white"></span>
    </div>
  );
};

export default InteractiveTaco;
