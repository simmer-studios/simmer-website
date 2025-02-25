"use client";

import Fireworks from "fireworks-js";
import {
  FC,
  forwardRef,
  HTMLProps,
  useEffect,
  useImperativeHandle,
  useRef
} from "react";

import { cn } from "@/lib/utils";

export type FireworksContainerRef = {
  start: () => void;
};

const FireworksContainer = forwardRef<
  FireworksContainerRef,
  HTMLProps<HTMLDivElement>
>(({ children, className }, ref) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fireworksRef = useRef<Fireworks>(null);

  useEffect(() => {
    if (containerRef.current) {
      const fireworks = new Fireworks(containerRef.current, {
        hue: {
          min: 0,
          max: 360
        },
        acceleration: 1.0,
        brightness: {
          min: 63,
          max: 73
        },
        decay: {
          min: 0.0144,
          max: 0.0405
        },
        delay: {
          min: 30,
          max: 60
        },
        explosion: 10,
        flickering: 39.13,
        intensity: 32.42,
        friction: 0.97,
        autoresize: true,
        gravity: 2.07,
        lineStyle: "round",
        lineWidth: {
          explosion: {
            min: 1.0,
            max: 4.0
          },
          trace: {
            min: 0.1,
            max: 1.0
          }
        },
        opacity: 0.5,
        particles: 60,
        traceLength: 2.96,
        traceSpeed: 17,
        rocketsPoint: {
          min: 45,
          max: 51
        }
        // sound: {
        // 	files: [],
        //   enabled: true,
        //   volume: {
        //     min: 59,
        //     max: 59
        //   }
        // },
      });

      fireworksRef.current = fireworks;

      return () => {
        fireworks.stop();
      };
    }
  }, []);

  const handleStart = () => {
    if (fireworksRef.current) {
      fireworksRef.current.start();
    }
  };

  useImperativeHandle(ref, () => ({
    start: handleStart
  }));

  return (
    <div
      ref={containerRef}
      className={cn("absolute left-0 right-0 top-0 h-full", className)}
    >
      {children}
    </div>
  );
});

FireworksContainer.displayName = "FireworksContainer";

export default FireworksContainer;
