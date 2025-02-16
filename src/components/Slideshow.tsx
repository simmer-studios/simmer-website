"use client";

import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { FC, HTMLProps, useEffect } from "react";

import { cn } from "@/lib/utils";

import ArrowRight from "./icons/ArrowRight";

interface Props {
  images: {
    id: string;
    url: string;
    altText: string;
  }[];
}

const Slideshow: FC<HTMLProps<HTMLDivElement> & Props> = ({
  images,
  className,
  ...props
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center"
  });

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  const scrollPrev = () => {
    if (emblaApi) emblaApi.scrollPrev();
  };

  const scrollNext = () => {
    if (emblaApi) emblaApi.scrollNext();
  };

  if (!images) {
    return null;
  }

  return (
    <section className={cn("", className)}>
      <div className="block max-w-full overflow-hidden" ref={emblaRef}>
        <div className="grid auto-cols-[100%] grid-flow-col px-10 lg:gap-10 lg:px-16">
          {images.length &&
            images.map((image) => (
              <div className="relative aspect-video" key={image.id}>
                <Image
                  src={image.url || "/images/img_placeholder.jpg"}
                  className="object-cover lg:rounded-xl"
                  alt={image.altText || ""}
                  fill
                />
              </div>
            ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-[1800px] justify-between p-4">
        <button
          onClick={scrollPrev}
          className="rounded-lg px-4 py-2 hover:bg-black/10"
        >
          <ArrowRight className="w-10 rotate-180 lg:w-16" />
        </button>
        <button
          onClick={scrollNext}
          className="rounded-lg px-4 py-2 hover:bg-black/10"
        >
          <ArrowRight className="w-10 lg:w-16" />
        </button>
      </div>
    </section>
  );
};

export default Slideshow;
