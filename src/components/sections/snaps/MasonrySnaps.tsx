"use client";

import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC, HTMLProps, PropsWithChildren } from "react";

import CMSMedia from "@/components/CMSMedia";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import { cn, getMediaType, isValidImage } from "@/lib/utils";
import { Media, Snap } from "@/payload-types";

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
      bounce: 0.3
    }
  }
};

interface MasonryBlockProps {
  name: string;
  slug: string;
  media: Media | number;
}

const MasonryBlock: FC<
  Omit<HTMLProps<HTMLDivElement>, "media"> & MasonryBlockProps
> = ({ name, slug, media, height, className, ...props }) => {
  const magneticRef = useMagneticHover(100);

  if (typeof media === "number") {
    return null;
  }

  return (
    <motion.div
      variants={item}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="group relative break-inside-avoid"
    >
      <Link href={`/snap/${slug}`}>
        <CMSMedia
          media={media}
          className="w-full border-2 border-black object-cover"
          controls={false}
          width={462}
          height={height}
          loading="lazy"
        />
      </Link>
      <div
        ref={magneticRef}
        className="pointer-events-none invisible absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[2px] border-black bg-simmer-white px-5 py-3 text-center will-change-transform group-hover:visible"
      >
        <span className="pointer-events-none block max-w-max font-adelle-mono text-2xl font-bold uppercase leading-7 tracking-tight">
          {name}
        </span>
      </div>
    </motion.div>
  );
};

const MasonryContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="show"
      className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4"
      id="masonry-snaps"
    >
      {children}
    </motion.div>
  );
};

interface MasonrySnapsProps {
  snaps: Snap[];
}

const MasonrySnaps: FC<MasonrySnapsProps> = ({ snaps }) => {
  return (
    <div className="basis-full border-t-2 border-black px-4 py-4">
      <MasonryContainer>
        {snaps
          .map((snap) =>
            typeof snap.thumbnail !== "number" ? (
              <MasonryBlock
                key={snap.id}
                slug={snap.slug}
                name={snap.name}
                media={snap.thumbnail}
                height={snap.thumbnail.height as number}
              />
            ) : null
          )
          .filter((item) => item !== null)}
      </MasonryContainer>
    </div>
  );
};

export default MasonrySnaps;
