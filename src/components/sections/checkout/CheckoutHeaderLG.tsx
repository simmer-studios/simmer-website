"use client";

import { HTMLMotionProps, motion } from "framer-motion";
import Image from "next/image";
import { FC } from "react";

import ORDER from "@/assets/checkout/order.svg";
import STARTHERE from "@/assets/checkout/start-here.svg";
import { cn } from "@/lib/utils";

interface CheckoutHeaderLGProps extends HTMLMotionProps<"div"> {
  className?: string;
}

const CheckoutHeaderLG: FC<CheckoutHeaderLGProps> = ({
  className,
  ...props
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "relative flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white bg-simmer-yellow",
        className
      )}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="px-16 py-10"
      >
        <Image src={STARTHERE} alt="Start Here" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Image
          src={ORDER}
          alt=""
          className="absolute right-12 top-[50%] hidden !border-0 lg:block"
        />
      </motion.div>
    </motion.div>
  );
};

export default CheckoutHeaderLG;
