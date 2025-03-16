"use client";

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
      <div className="max-h-[calc(60px*7)] divide-y-2 divide-simmer-white overflow-y-auto xl:max-h-[calc(95px*5)]">
        {orders.map((order) => (
          <Order
            serviceName={order}
            key={order}
            onRemove={() => removeItem(order)}
          />
        ))}
      </div>
      <div
        className={cn(
          "grid min-h-[60px] flex-1 items-center border-y-2 border-simmer-white text-2xl leading-none sm:text-3xl lg:min-h-[calc(95px*2)] lg:grid-cols-[70px_1fr] lg:divide-x-2 lg:divide-simmer-white lg:text-2xl",
          {
            "border-y-0 lg:divide-x-0": orders && orders.length < 1
          }
        )}
      >
        {orders && orders.length > 0 && (
          <div className="hidden h-full basis-full lg:block"></div>
        )}
        <div
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
            CLICK ADD MORE
          </Link>
        </div>
      </div>
    </div>
  );
};

interface OrderProps {
  serviceName: string;
  onRemove: () => void;
}

const Order: FC<HTMLProps<HTMLDivElement> & OrderProps> = ({
  serviceName,
  onRemove,
  className,
  ...props
}) => {
  return (
    <div
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
    </div>
  );
};

export default CheckoutItemList;
