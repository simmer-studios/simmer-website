import Image from "next/image";
import { FC, HTMLProps, ImgHTMLAttributes } from "react";

import FLIPMEOVERLG from "@/assets/about/flip-me-over.svg";
import FLIPMEOVERSM from "@/assets/about/sm_flip-me-over.svg";
import TICKET from "@/assets/about/ticket.svg";
import { cn } from "@/lib/utils";

interface MemberCardProps {
  number: number;
  name: string;
  role: string;
  avatar: ImgHTMLAttributes<HTMLImageElement>["src"];
  photo: ImgHTMLAttributes<HTMLImageElement>["src"];
  catchPhrase?: string;
}

const MemberCard: FC<HTMLProps<HTMLDivElement> & MemberCardProps> = ({
  avatar,
  photo,
  name,
  role,
  catchPhrase,
  number,
  className,
  ...props
}) => {
  return (
    <div
      className={cn("card aspect-[51.233333333333/77.11]", className)}
      {...props}
    >
      {/* <div className="front-face relative flex h-full w-full flex-col justify-between gap-5 rounded-3xl border-2 border-black bg-simmer-white xl:rounded-[3rem]">
        <div className="absolute -top-2.5 left-4 flex aspect-[9/17] w-12 items-end justify-center xl:left-8 xl:w-[70px]">
          <Image src={TICKET} alt="" fill className="object-contain" />
          <div className="z-10 mb-2 max-w-[5ch] text-center font-adelle-mono text-[10px] leading-none text-simmer-white xl:mb-4 xl:text-[14px]">
            ORDER{" "}
            <span className="text-[25px] font-bold xl:text-4xl">
              {number < 10 ? `0${number}` : number}
            </span>
          </div>
          <Image
            src={FLIPMEOVERSM}
            alt="Flip me over"
            className="absolute -bottom-[22%] w-full translate-x-3 scale-150 xl:hidden"
          />
          <Image
            src={FLIPMEOVERLG}
            alt="Flip me over"
            className="absolute -bottom-[22%] hidden w-full translate-x-3 scale-150 xl:block"
          />
        </div>
        <div className="flex items-center justify-end px-2 py-4">
          <div className="relative aspect-square w-20 lg:w-28 min-[1537px]:w-40">
            {avatar && (
              <Image src={avatar} alt="" fill className="object-contain" />
            )}
          </div>
        </div>
        <div className="space-y-1.5 px-5 pb-5 xl:space-y-3 xl:px-10 xl:pb-10">
          <span className="inline-block font-adelle-mono text-2xl font-bold uppercase tracking-tight md:text-3xl xl:text-5xl">
            {name}
          </span>
          <span className="block max-w-[6ch] font-articulat text-xl font-medium capitalize leading-none md:text-[1.3rem] lg:text-2xl lg:font-normal lg:leading-none xl:text-4xl xl:font-medium xl:leading-none">
            {role}
          </span>
        </div>
      </div> */}
      <div className="back-face relative flex h-full w-full justify-center overflow-hidden rounded-3xl border-2 border-black bg-simmer-white xl:rounded-[3rem]">
        <Image
          src={photo || "/images/sample_member-photo-1.jpg"}
          alt="SJ"
          fill
          className="object-cover object-center"
        />
        {catchPhrase && (
          <div className="absolute bottom-0 z-10 mb-10 bg-simmer-white px-2">
            {catchPhrase}
          </div>
        )}
      </div>
    </div>
  );
};

export default MemberCard;
