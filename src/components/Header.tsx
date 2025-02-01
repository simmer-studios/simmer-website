"use client";

import { Theme } from "@/lib/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, HTMLProps } from "react";
import { FaCaretRight } from "react-icons/fa";
import FoodDome from "./icons/FoodDome";
import HeaderHamburger from "./icons/HeaderHamburger";
import Logo from "./Logo";
import { cn } from "@/lib/utils";

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

  return (
    <header
      className={cn(
        "border-b-2 border-black bg-simmer-white px-5 font-adelle-mono text-base lg:px-0 lg:pr-20 lg:text-xl",
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
              "group flex h-full items-center justify-center hover:bg-simmer-yellow lg:min-w-[224px] lg:border-r-2 lg:border-black",
              {
                "hover:bg-simmer-white lg:border-simmer-white":
                  theme === "dark",
                "lg:border-r-0": disableLogoBorder
              }
            )}
          >
            <Logo
              className={cn("h-[40px] lg:h-[50px]", {
                "fill-simmer-white group-hover:fill-black": theme === "dark"
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
          <div className="flex h-full items-center">
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
          <Link
            href="#"
            className={cn(
              "group hidden h-full items-center justify-center bg-simmer-white hover:brightness-95 lg:flex lg:w-[140px] lg:border-x-2 lg:border-black",
              {
                "bg-black hover:bg-simmer-white lg:border-simmer-white":
                  theme === "dark"
              }
            )}
          >
            <FoodDome
              className={cn("h-[50px]", {
                "fill-simmer-white group-hover:fill-black": theme === "dark"
              })}
            />
          </Link>
          <button className="block lg:hidden">
            <HeaderHamburger
              className={cn("h-[40px]", {
                "stroke-simmer-white": theme === "dark"
              })}
            />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
