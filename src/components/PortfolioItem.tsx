"use client";

import Image from "next/image";
import Link from "next/link";

import { useMagneticHover } from "@/hooks/useMagneticHover";

interface Props {
  slug: string;
  name: string;
  category: string;
  imageUrl?: string;
}

const PortfolioItem: React.FC<Props> = ({
  slug,
  name,
  category,
  imageUrl = "/images/img_placeholder.jpg"
}) => {
  const magneticRef = useMagneticHover(100);

  return (
    <Link
      href={`/works/${slug}`}
      className="group relative block aspect-square overflow-hidden bg-gray-100 transition duration-300 ease-in-out"
    >
      <Image
        className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        src={imageUrl}
        alt={name}
        fill
      />
      <div
        ref={magneticRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black bg-simmer-white px-14 py-6 text-center transition-all duration-300 ease-out will-change-transform md:invisible md:opacity-0 md:group-hover:visible md:group-hover:opacity-100"
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
