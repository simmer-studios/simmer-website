"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, HTMLProps, useState } from "react";
import { FaCaretRight } from "react-icons/fa";

import { useCart } from "@/contexts/CartContext";
import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import Cart from "./Cart";
import HeaderMenuContent from "./HeaderMenuContent";
import FoodDome from "./icons/FoodDome";
import HeaderHamburger from "./icons/HeaderHamburger";
import Logo from "./Logo";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

interface Props {
  theme: Theme;
  disableLogoBorder?: boolean;
}

const Header: FC<HTMLProps<HTMLElement> & Props> = ({
  className,
  theme = "light",
  disableLogoBorder = false,
  ...props
}) => {
  const path = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);
  const { items: cartItems } = useCart();

  return (
    <header
      className={cn(
        "relative border-b-2 border-black bg-simmer-white px-5 font-adelle-mono text-base lg:px-0 lg:pr-20 lg:text-xl",
        {
          "border-simmer-white bg-black text-simmer-white": theme === "dark"
        },
        className
      )}
      {...props}
    >
      <div className="flex h-[100px] items-center lg:h-[110px]">
        {/* logo */}
        {path !== "/" ? (
          <Link
            href="/"
            className={cn(
              "group flex h-full items-center justify-center lg:min-w-[224px] lg:border-r-2 lg:border-black",
              {
                "hover:bg-simmer-yellow": theme === "light",
                "lg:border-r-0": disableLogoBorder
              }
            )}
          >
            <Logo
              className={cn("h-[40px] lg:h-[50px]", {
                "fill-simmer-white": theme === "dark"
              })}
            />
          </Link>
        ) : (
          <div
            className={cn(
              "flex h-full items-center justify-center lg:min-w-[224px] lg:border-r-2 lg:border-black",
              {
                "lg:border-simmer-white": theme === "dark",
                "lg:border-r-0": disableLogoBorder
              }
            )}
          >
            <Logo
              className={cn("h-[40px] lg:h-[50px]", {
                "fill-simmer-white": theme === "dark"
              })}
            />
          </div>
        )}
        {/* center */}
        <div className="basis-full lg:px-9">
          <div className="hidden h-full items-center sm:flex">
            {path === "/" ? (
              <div className="flex items-center gap-1">
                <FaCaretRight className="h-[28px]" />
                <span className="uppercase">HOME</span>
              </div>
            ) : (
              <Link
                href="/"
                className="flex items-center gap-1 hover:underline hover:underline-offset-2"
              >
                <FaCaretRight className="h-[28px]" />
                <span className="uppercase">BACK TO HOME</span>
              </Link>
            )}
          </div>
        </div>
        {/* right */}
        <div className="flex h-full items-center pr-5 lg:pr-0">
          <Link
            href="/checkout"
            className={cn(
              "hidden h-full items-center bg-simmer-white hover:brightness-95 lg:flex lg:w-[140px] lg:justify-center lg:border-l-2 lg:border-black",
              {
                "bg-simmer-white/0 hover:bg-simmer-white hover:text-black lg:border-simmer-white":
                  theme === "dark"
              }
            )}
          >
            <span className="max-w-min leading-none tracking-tighter">
              GET A QUOTE
            </span>
          </Link>
          <Popover>
            <PopoverTrigger asChild>
              <button
                className={cn(
                  "group relative h-full items-center justify-center bg-simmer-white px-5 hover:brightness-95 lg:flex lg:w-[140px] lg:border-x-2 lg:border-black lg:px-0",
                  {
                    "bg-black hover:bg-simmer-white lg:border-simmer-white":
                      theme === "dark"
                  }
                )}
              >
                {cartItems && cartItems.length > 0 && (
                  <span className="absolute right-8 top-9 inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-600 text-sm text-white">
                    {cartItems.length}
                  </span>
                )}
                <FoodDome
                  className={cn("h-[50px]", {
                    "fill-simmer-white group-hover:fill-black": theme === "dark"
                  })}
                />
              </button>
            </PopoverTrigger>
            <PopoverContent
              align="end"
              className="relative rounded-3xl border-2 border-black bg-simmer-yellow p-0 shadow-lg outline-none"
            >
              <div className="absolute -top-[20px] right-9 h-5 w-16 bg-[url(/images/img_cart-decoration.svg)] bg-cover bg-center"></div>
              <Cart />
            </PopoverContent>
          </Popover>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="block lg:hidden"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <HeaderHamburger
              className={cn("h-[40px]", {
                "stroke-simmer-white": theme === "dark"
              })}
            />
          </motion.button>
        </div>
      </div>
      {dropdownOpen && (
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 top-0 z-50 hidden min-h-[100vh] bg-black lg:hidden",
            {
              block: dropdownOpen
            }
          )}
        >
          <HeaderMenuContent
            currentPath={path}
            onClose={() => setDropdownOpen(false)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
