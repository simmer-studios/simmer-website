import Image from "next/image";
import { FC, HTMLProps } from "react";

import START from "@/assets/checkout/sm_start.svg";
import WORKWITHUS from "@/assets/checkout/sm_work-with-us.svg";
import { cn } from "@/lib/utils";

const CheckoutHeaderSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white bg-simmer-yellow",
        className
      )}
      {...props}
    >
      <div className="px-5 py-5">
        <Image src={START} alt="Start" />
      </div>
      <div className="px-5 py-5">
        <Image src={WORKWITHUS} alt="Work with us" />
      </div>
    </div>
  );
};

export default CheckoutHeaderSM;
