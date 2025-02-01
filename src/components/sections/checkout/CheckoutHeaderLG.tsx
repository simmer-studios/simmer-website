import Image from "next/image";
import { FC, HTMLProps } from "react";
import { cn } from "@/lib/utils";

import STARTHERE from "@/assets/checkout/start-here.svg";
import ORDER from "@/assets/checkout/order.svg";

const CheckoutHeaderLG: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "relative flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white bg-simmer-yellow",
        className
      )}
      {...props}
    >
      <div className="px-16 py-10">
        <Image src={STARTHERE} alt="Start Here" />
      </div>
      <Image
        src={ORDER}
        alt=""
        className="absolute right-12 top-[50%] hidden !border-0 lg:block"
      />
    </div>
  );
};

export default CheckoutHeaderLG;
