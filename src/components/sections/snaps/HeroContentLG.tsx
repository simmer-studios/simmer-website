"use client";

import { HTMLMotionProps, motion } from "motion/react";
import Image from "next/image";
import { FC, useState } from "react";

import ARROW_DOWN from "@/assets/snap/arrow-down.svg";
import CLICK_ONE from "@/assets/snap/click-one.svg";
import PEEKHERE from "@/assets/snap/peek-here.svg";
import PHOTO from "@/assets/snap/photo.svg";
import PORTRAITS from "@/assets/snap/portraits.svg";
import POST from "@/assets/snap/post.svg";
import PRODUCTS from "@/assets/snap/products.svg";
import SIMMERING from "@/assets/snap/simmering.svg";
import SNAPS from "@/assets/snap/snaps.svg";
import VIDEO from "@/assets/snap/video.svg";
import SnapsFilterDropdown from "@/components/SnapsFilterDropdown";
import { Filter } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SnapsGlobal } from "@/payload-types";

interface Props {
  productCategories: SnapsGlobal["productCategories"];
  portraitCategories: SnapsGlobal["portraitCategories"];
}

const HeroContentLG: FC<HTMLMotionProps<"div"> & Props> = ({
  productCategories,
  portraitCategories,
  className,
  ...props
}) => {
  const container = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  const [selectedType, setSelectedType] = useState<"product" | "portrait">(
    "product"
  );

  const productFilters = productCategories
    .filter((category) => typeof category !== "number")
    .map((filter) => ({
      label: filter.name,
      id: filter.id
    }));

  const portraitFilters = portraitCategories
    .filter((category) => typeof category !== "number")
    .map((filter) => ({
      label: filter.name,
      id: filter.id
    }));

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="show"
      className={cn("divide-y-2 divide-black", className)}
      {...props}
    >
      <motion.div variants={item} className="row">
        <div className="container flex">
          <div className="flex-1"></div>
          <div className="flex items-center justify-center border-x-2 border-black">
            <div className="px-5 py-5">
              <Image src={PEEKHERE} alt="Peek here" />
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </motion.div>
      <motion.div variants={item} className="row">
        <div className="container flex">
          <div className="basis-[19%]"></div>
          <div className="flex justify-center border-x-2 border-black">
            <div className="px-5 py-5">
              <Image src={POST} alt="Post" />
            </div>
          </div>
          <div className="flex-1 basis-[24.8%]"></div>
          <div className="flex justify-center border-x-2 border-black">
            <div className="px-5 py-5">
              <Image src={SIMMERING} alt="Simmering" />
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </motion.div>
      <motion.div variants={item} className="row">
        <div className="flex divide-x-2 divide-black">
          <div className="left flex flex-1 flex-col divide-y-2 divide-black">
            <div className="basis-full">
              <div className="ml-auto flex h-full max-w-[calc(1536px-600px)]">
                <div className="flex border-r-2 border-black px-5 py-5">
                  <Image src={PHOTO} alt="Photo" />
                </div>
                <div className="flex flex-1 items-center justify-start px-5 py-5">
                  <Image src={ARROW_DOWN} alt="" />
                </div>
              </div>
            </div>
            <div className="basis-full">
              <div className="ml-auto flex h-full max-w-[calc(1536px-600px)]">
                <div className="basis-[10%]"></div>
                <div className="flex border-x-2 border-black px-5 py-5">
                  <Image src={VIDEO} alt="Video" />
                </div>
                <div className="flex-1"></div>
                <div className="flex items-center justify-start border-l-2 border-black px-5 py-5">
                  <Image src={CLICK_ONE} alt="Click One" />
                </div>
              </div>
            </div>
          </div>
          <div className="right flex flex-1">
            <div className="flex">
              <div className="flex px-5 py-8">
                <Image src={SNAPS} alt="Snaps" />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div variants={item} className="row">
        <div className="container flex divide-x-2 divide-black">
          <div className="flex basis-[10%] justify-end px-5 py-5">
            <div className="aspect-square w-[4.5rem]"></div>
          </div>
          <div className="flex-1"></div>
        </div>
      </motion.div>
      <motion.div variants={item} className="row">
        <div className="container flex justify-center">
          <button
            className={cn("flex border-l-2 border-black bg-black", {
              "bg-simmer-yellow": selectedType === "product"
            })}
            onClick={() => setSelectedType("product")}
          >
            <div className="px-5 py-5">
              <Image src={PRODUCTS} alt="Products" />
            </div>
          </button>
          {selectedType === "product" ? (
            <SnapsFilterDropdown filters={productFilters} />
          ) : (
            <SnapsFilterDropdown filters={portraitFilters} />
          )}
          <button
            className={cn("flex border-r-2 border-black bg-black", {
              "bg-simmer-yellow": selectedType === "portrait"
            })}
            onClick={() => setSelectedType("portrait")}
          >
            <div className="px-5 py-5">
              <Image src={PORTRAITS} alt="Portraits" />
            </div>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContentLG;
