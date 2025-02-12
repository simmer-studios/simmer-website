import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLProps } from "react";

import PEEKHERE from "@/assets/snap/peek-here.svg";
import POST from "@/assets/snap/post.svg";
import SIMMERING from "@/assets/snap/simmering.svg";
import PHOTO from "@/assets/snap/photo.svg";
import ARROW_DOWN from "@/assets/snap/arrow-down.svg";
import VIDEO from "@/assets/snap/video.svg";
import CLICK_ONE from "@/assets/snap/click-one.svg";
import SNAPS from "@/assets/snap/snaps.svg";
import PRODUCTS from "@/assets/snap/products.svg";
import FILTER from "@/assets/snap/filter.svg";
import PORTRAITS from "@/assets/snap/portraits.svg";

const HeroContentLG: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-black", className)} {...props}>
      <div className="row">
        <div className="debug-outline container flex">
          <div className="flex-1"></div>
          <div className="flex items-center justify-center border-x-2 border-black">
            <div className="debug-outline px-5 py-5">
              <Image src={PEEKHERE} alt="Peek here" />
            </div>
          </div>
          <div className="flex-1"></div>
        </div>
      </div>
      <div className="row">
        <div className="debug-outline container flex">
          <div className="basis-[19%]"></div>
          <div className="flex justify-center border-x-2 border-black">
            <div className="px-5 py-5">
              <Image src={POST} alt="Post" />
            </div>
          </div>
          <div className="flex-1"></div>
          <div className="flex justify-center border-x-2 border-black">
            <div className="px-5 py-5">
              <Image src={SIMMERING} alt="Simmering" />
            </div>
          </div>
          <div className="basis-[6.6%]"></div>
        </div>
      </div>
      <div className="row">
        <div className="flex divide-x-2 divide-black">
          <div className="left debug-outline flex flex-1 flex-col divide-y-2 divide-black">
            <div className="basis-full">
              <div className="debug-outline ml-auto flex max-w-[calc(1536px-600px)]">
                <div className="flex border-r-2 border-black px-5 py-5">
                  <Image src={PHOTO} alt="Photo" />
                </div>
                <div className="flex flex-1 items-center justify-start px-5 py-5">
                  <Image src={ARROW_DOWN} alt="" />
                </div>
              </div>
            </div>
            <div className="basis-full">
              <div className="debug-outline ml-auto flex max-w-[calc(1536px-600px)]">
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
          <div className="right debug-outline flex max-w-[calc(600px)]">
            <div className="debug-outline flex">
              <div className="flex px-5 py-8">
                <Image src={SNAPS} alt="Snaps" />
              </div>
            </div>
          </div>
          <div className="debug-outline flex-1"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentLG;
