"use client";

import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/lib/utils";
import React from "react";

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center before:inline-block before:h-7 before:w-0.5 before:bg-simmer-white before:content-[''] after:inline-block after:h-7 after:w-0.5 after:bg-simmer-white after:content-[''] md:before:h-10 md:after:h-10",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-0.5 w-full grow overflow-hidden rounded-full bg-white">
      <SliderPrimitive.Range className="absolute h-full" />
    </SliderPrimitive.Track>
    <SliderPrimitive.Thumb className="block h-10 w-6 border-2 border-white bg-simmer-yellow hover:cursor-grab focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 md:h-14 md:w-8" />
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export default Slider;
