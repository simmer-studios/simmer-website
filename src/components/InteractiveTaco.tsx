"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, useEffect, useRef, useState } from "react";

const MAX_DISTANCE = 10;

const InteractiveTaco: FC = () => {
  /*  const eyesRef = useRef<HTMLImageElement>(null);
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });

  const moveEyes = (e: MouseEvent) => {
    if (eyesRef.current) {
      

      const dy = e.clientY - anchorPoint.y;
      const dx = e.clientX - anchorPoint.x;

      // Calculate the distance from the center
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance <= MAX_DISTANCE) {
        setEyePosition(anchorPoint);
      } else {
        const angle = Math.atan2(dy, dx);
        const limitedX = anchorPoint.x + MAX_DISTANCE * Math.cos(angle);
        const limitedY = anchorPoint.y + MAX_DISTANCE * Math.sin(angle);
        setEyePosition({ x: limitedX, y: limitedY });
      }
    }
  };

  useEffect(() => {
    if (eyesRef.current) {
      const { width, height, left, top } =
        eyesRef.current.getBoundingClientRect();
      setAnchorPoint({ x: left + width / 2, y: top + height / 2 });
    }
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", moveEyes);

    return () => {
      window.removeEventListener("mousemove", moveEyes);
    };
  }, []); */

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
        className="absolute left-0 right-0 z-20 mx-auto -mt-2 h-8 max-w-max -translate-x-0.5 lg:h-9"
        // ref={eyesRef}
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
