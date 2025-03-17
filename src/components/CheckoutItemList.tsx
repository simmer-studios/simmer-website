"use client";

import { AnimatePresence, HTMLMotionProps, motion } from "motion/react";
import Link from "next/link";
import { FC, HTMLProps } from "react";

import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

import RemoveOrderIcon from "./icons/RemoveOrderIcon";

const CheckoutItemList: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { items: orders, removeItem, isDiscounted } = useCart();

  return (
    <div
      className={cn(
        "flex basis-full flex-col border-t-2 border-simmer-white",
        className
      )}
      data-lenis-prevent
    >
      <AnimatePresence mode="popLayout">
        <motion.div
          layout="size"
          className="max-h-[calc(60px*7)] divide-y-2 divide-simmer-white overflow-y-auto overflow-x-hidden xl:max-h-[calc(95px*5)]"
          transition={{
            duration: 0.5,
            ease: "easeInOut",
            staggerChildren: 0.1
          }}
        >
          {orders.map((order) => (
            <Order
              serviceName={order}
              key={order}
              onRemove={() => removeItem(order)}
            />
          ))}
        </motion.div>
        <motion.div
          layout="size"
          key="checkout-order-controls"
          className={cn(
            "grid min-h-[60px] flex-1 items-center overflow-hidden overflow-x-hidden border-y-2 border-simmer-white text-2xl leading-none sm:text-3xl lg:min-h-[calc(95px*2)] lg:grid-cols-[70px_1fr] lg:divide-x-2 lg:divide-simmer-white lg:text-2xl",
            {
              "border-y-0 lg:divide-x-0": orders && orders.length < 1
            }
          )}
        >
          {orders && orders.length > 0 && (
            <motion.div
              layout="size"
              className="hidden h-full basis-full lg:block"
            />
          )}
          <motion.div
            layout="position"
            className={cn(
              "col-span-full flex h-full w-full basis-full items-center justify-between lg:items-end lg:justify-end",
              {
                "col-span-1": orders && orders.length > 0,
                "lg:justify-between": isDiscounted
              }
            )}
          >
            {isDiscounted && (
              <div className="px-5 py-2 text-sm sm:text-base lg:px-7 lg:py-4 lg:text-xl">
                *5% Discount Applied
              </div>
            )}
            <Link
              href="/menu"
              className="inline-block min-w-max px-5 py-2 font-adelle-mono-flex text-sm text-simmer-yellow hover:underline hover:underline-offset-4 sm:text-base lg:px-7 lg:py-4 lg:text-xl xl:text-2xl"
            >
              ADD MORE
            </Link>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

interface OrderProps {
  serviceName: string;
  onRemove: () => void;
}

const Order: FC<HTMLMotionProps<"div"> & OrderProps> = ({
  serviceName,
  onRemove,
  className,
  ...props
}) => {
  return (
    <motion.div
      layout="preserve-aspect"
      initial={{ opacity: 0, x: "-100%" }}
      animate={{ opacity: 1, x: "0%" }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className={cn(
        "grid grid-cols-[70px_1fr] divide-x-2 divide-simmer-white",
        className
      )}
      {...props}
    >
      <button
        type="button"
        className="group flex items-center justify-center hover:bg-white/5"
        onClick={onRemove}
      >
        <RemoveOrderIcon className="group-active:fill-white" />
      </button>
      <div className="flex min-h-[60px] items-center px-5 py-2 xl:min-h-[95px]">
        <span className="inline-block pt-2 font-articulat text-2xl font-medium uppercase sm:text-4xl lg:text-3xl lg:tracking-tight xl:text-5xl xl:font-normal">
          {serviceName}
        </span>
      </div>
    </motion.div>
  );
};

export default CheckoutItemList;
