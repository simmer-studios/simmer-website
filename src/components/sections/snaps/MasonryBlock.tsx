import { motion, Variants } from "motion/react";
import Link from "next/link";
import { FC, HTMLProps } from "react";

import CMSMedia from "@/components/CMSMedia";
import { useMagneticHover } from "@/hooks/useMagneticHover";
import { getAspectRatio } from "@/lib/utils";
import { Media } from "@/payload-types";

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
> = ({ name, slug, media }) => {
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
      className="group relative block break-inside-avoid"
      style={{
        aspectRatio: getAspectRatio(media.width, media.height) ?? 16 / 9
      }}
    >
      <Link href={`/snap/${slug}`}>
        <CMSMedia
          media={media}
          className="w-full border-2 border-black object-cover"
          controls={false}
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

export default MasonryBlock;
