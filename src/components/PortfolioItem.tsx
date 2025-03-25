"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";

import { useMagneticHover } from "@/hooks/useMagneticHover";
import { isValidImage } from "@/lib/utils";
import { Media, Project } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  slug: string;
  name: string;
  category: string;
  image: Project["thumbnail"];
}

const PortfolioItem: React.FC<Props> = ({ slug, name, category, image }) => {
  const magneticRef = useMagneticHover(100);

  useEffect(() => {
    // Reset transform when component unmounts or when screen size/hover support changes
    return () => {
      if (magneticRef.current) {
        magneticRef.current.style.transform = "translate(-50%, -50%)";
      }
    };
  }, []);

  if (typeof image === "number") {
    return null;
  }

  return (
    <Link
      href={`/works/${slug}`}
      className="group relative block aspect-square overflow-hidden bg-black transition duration-300 ease-in-out"
      scroll={true}
    >
      <CMSMedia
        className="will-change-scale absolute h-full w-full transform-gpu object-cover transition-all duration-300 ease-in-out will-change-transform group-hover:scale-110 group-hover:opacity-90"
        controls={false}
        media={image}
      />
      <div
        ref={magneticRef}
        className="will-change-opacity pointer-events-none absolute bottom-0 left-0 right-0 top-auto transform-gpu border-t-[2px] border-black bg-simmer-white px-14 py-6 text-center transition-all duration-300 ease-out will-change-transform md:invisible md:bottom-auto md:left-1/2 md:right-auto md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:border-[3px] md:opacity-0 md:group-hover:visible md:group-hover:opacity-100"
      >
        <span className="pointer-events-none block font-adelle-mono text-2xl font-bold uppercase tracking-tight text-black">
          {name}
        </span>
        <span className="pointer-events-none block font-adelle-mono font-bold uppercase tracking-tight text-black">
          {category}
        </span>
      </div>
    </Link>
  );
};

export default PortfolioItem;
