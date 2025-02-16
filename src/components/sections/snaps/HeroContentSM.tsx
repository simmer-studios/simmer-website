import Image from "next/image";
import { FC, HTMLProps } from "react";

import CLICKONE from "@/assets/snap/sm_click-one.svg";
import FILTER from "@/assets/snap/sm_filter.svg";
import PHOTO from "@/assets/snap/sm_photo.svg";
import PORTRAITS from "@/assets/snap/sm_portraits.svg";
import PRODUCTS from "@/assets/snap/sm_products.svg";
import SIMMERSNAP from "@/assets/snap/sm_simmer-snap.svg";
import SNAPS from "@/assets/snap/sm_snaps.svg";
import VIDEO from "@/assets/snap/sm_video.svg";
import { cn } from "@/lib/utils";

const HeroContentSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-black", className)} {...props}>
      <div className="row flex">
        <div className="left flex-1 divide-y-2 divide-black border-r-2 border-black">
          <div className="video-row flex">
            <div className="border-r-2 border-black px-2 py-2">
              <Image src={VIDEO} alt="Video" />
            </div>
            <div className="flex-1"></div>
          </div>
          <div className="photo-row flex">
            <div className="flex-1"></div>
            <div className="border-x-2 border-black px-2 py-2">
              <Image src={PHOTO} alt="Photo" />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
        <div className="right basis-[20%]"></div>
      </div>
      <div className="row flex">
        <div className="left flex basis-[18%] justify-center border-r-2 border-black px-2 py-5">
          <Image src={SIMMERSNAP} alt="Simmer Snap" />
        </div>
        <div className="right flex flex-1 flex-col divide-y-2 divide-black">
          <div className="basis-full"></div>
          <div className="flex basis-full">
            <div className="basis-[30%] border-r-2 border-black"></div>
            <div className="px-2 py-2">
              <Image src={CLICKONE} alt="Click one" />
            </div>
          </div>
        </div>
      </div>
      <div className="row flex">
        <div className="px-5 py-5">
          <Image src={SNAPS} alt="Snaps" />
        </div>
      </div>
      <div className="row flex">
        <div className="left flex basis-[18%] items-end justify-start border-r-2 border-black px-5 py-3">
          <Image src={FILTER} alt="Filter" />
        </div>
        <div className="flex flex-1 flex-col divide-y-2 divide-black bg-simmer-yellow">
          <div className="flex basis-full divide-x-2 divide-black">
            <div className="basis-[30%]"></div>
            <div className="flex-1 px-2 py-2">
              <Image src={PRODUCTS} alt="Products" />
            </div>
          </div>
          <div className="flex basis-full divide-x-2 divide-black">
            <div className="flex-1 px-2 py-2">
              <Image src={PORTRAITS} alt="Portraits" />
            </div>
            <div className="basis-[30%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSM;
