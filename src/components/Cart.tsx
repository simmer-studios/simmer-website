"use client";

import Link from "next/link";
import { FC, HTMLProps } from "react";

import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

import Cross from "./icons/Cross";
import { ScrollArea } from "./ui/ScrollArea";

const Cart = () => {
  const { items, removeItem } = useCart();
  return (
    <div className="">
      <span className="block border-b-2 border-black px-3 py-3 font-adelle-mono-flex text-4xl tracking-tighter">
        {items.length > 0 ? "YOU ORDERED" : "NO ORDERS"}
      </span>
      <ScrollArea className="h-[276px] scroll-smooth px-3" data-lenis-prevent>
        <div className="py-3">
          {items.map((item) => (
            <div className="mb-2" key={item}>
              <CartItem item={item} onRemoveItem={() => removeItem(item)} />
            </div>
          ))}
        </div>
      </ScrollArea>
      {items.length > 0 ? (
        <div className="border-t-2 border-black px-3 py-3">
          <Link href="/checkout" className="mx-2 font-adelle-mono text-xl">
            GET QUOTE
          </Link>
        </div>
      ) : (
        <div className="px-3 py-3">
          <Link
            href="/menu"
            className="inline-block rounded-full border-2 border-black bg-simmer-white px-8 py-2 font-adelle-mono text-lg tracking-tight text-black"
          >
            VIEW MENU
          </Link>
        </div>
      )}
    </div>
  );
};

interface CartItemProps {
  item: string;
  onRemoveItem: () => void;
}

const CartItem: FC<HTMLProps<HTMLDivElement> & CartItemProps> = ({
  item,
  className,
  onRemoveItem,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex max-w-max items-center justify-between gap-4 rounded-full border-2 border-black bg-simmer-white py-2 pl-5 pr-3 font-adelle-mono text-black",
        className
      )}
      {...props}
    >
      <span className="inline-block h-[1.5rem] max-w-[17.5ch] overflow-clip whitespace-nowrap uppercase">
        {item}
      </span>
      <button
        onClick={onRemoveItem}
        className="group flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full hover:bg-black"
      >
        <Cross className="h-3 group-hover:stroke-simmer-white" />
      </button>
    </div>
  );
};

export default Cart;
