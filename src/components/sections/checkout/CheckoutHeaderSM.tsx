"use client";

import { HTMLMotionProps, motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

import START from "@/assets/checkout/sm_start.svg";
import WORKWITHUS from "@/assets/checkout/sm_work-with-us.svg";
import { cn } from "@/lib/utils";

interface CheckoutHeaderSMProps extends HTMLMotionProps<"div"> {
  className?: string;
}

const CheckoutHeaderSM: FC<CheckoutHeaderSMProps> = ({
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white bg-simmer-yellow",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="px-5 py-5"
      >
        <Image src={START} alt="Start" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="px-5 py-5"
      >
        <Image src={WORKWITHUS} alt="Work with us" />
      </motion.div>
    </motion.div>
  );
};

export default CheckoutHeaderSM;
