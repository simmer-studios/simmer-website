"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ComponentProps, FC, HTMLAttributes } from "react";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import FoodDome from "./icons/FoodDome";

interface Props {
  theme?: Theme;
}

const StickySidebar: FC<HTMLAttributes<HTMLElement> & Props> = ({
  theme = "light",
  className
}) => {
  const pathname = usePathname();

  return (
    <aside
      className={cn(
        "hidden min-h-[200px] border-r-2 border-t-2 border-simmer-white bg-black px-3 pb-20 xl:block",
        {
          "bg-simmer-white text-black": theme === "light",
          "bg-black text-simmer-white": theme === "dark"
        },
        className
      )}
    >
      <div className="sticky top-0 flex flex-col items-center gap-4">
        <div className="relative">
          <FoodDome
            className={cn("w-10", {
              "fill-black": theme === "light",
              "fill-simmer-white": theme === "dark"
            })}
          />
        </div>
        <div
          className={cn("flex gap-8")}
          style={{ writingMode: "vertical-lr" }}
        >
          <SidebarNavLink
            href="/"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/",
              "after:bg-black": pathname === "/" && theme === "light",
              "after:bg-simmer-white": pathname === "/" && theme === "dark"
            })}
          >
            HOME
          </SidebarNavLink>
          <SidebarNavLink
            href="/checkout"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/checkout",
              "after:bg-black": pathname === "/checkout" && theme === "light",
              "after:bg-simmer-white":
                pathname === "/checkout" && theme === "dark"
            })}
          >
            QUOTE
          </SidebarNavLink>
          <SidebarNavLink
            href="/menu"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/menu",
              "after:bg-black": pathname === "/menu" && theme === "light",
              "after:bg-simmer-white": pathname === "/menu" && theme === "dark"
            })}
          >
            MENU
          </SidebarNavLink>
          <SidebarNavLink
            href="/works"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/works",
              "after:bg-black": pathname === "/works" && theme === "light",
              "after:bg-simmer-white": pathname === "/works" && theme === "dark"
            })}
          >
            WORKS
          </SidebarNavLink>
          <SidebarNavLink
            href="/about"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/about",
              "after:bg-black": pathname === "/about" && theme === "light",
              "after:bg-simmer-white": pathname === "/about" && theme === "dark"
            })}
          >
            ABOUT
          </SidebarNavLink>
          <SidebarNavLink
            href="/snap"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/snap",
              "after:bg-black": pathname === "/snap" && theme === "light",
              "after:bg-simmer-white": pathname === "/snap" && theme === "dark"
            })}
          >
            SNAP
          </SidebarNavLink>
          {/* <SidebarNavLink
            href="/stories"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/stories",
              "after:bg-black": pathname === "/stories" && theme === "light",
              "after:bg-simmer-white":
                pathname === "/stories" && theme === "dark"
            })}
          >
            STORIES
          </SidebarNavLink> */}
          <SidebarNavLink
            href="/supply"
            className={cn({
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']":
                pathname === "/supply",
              "after:bg-black": pathname === "/supply" && theme === "light",
              "after:bg-simmer-white":
                pathname === "/supply" && theme === "dark"
            })}
          >
            SUPPLY
          </SidebarNavLink>
        </div>
      </div>
    </aside>
  );
};

const SidebarNavLink: FC<ComponentProps<typeof Link>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn(
        "flex -rotate-180 items-center justify-center font-adelle-mono hover:underline hover:decoration-2",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default StickySidebar;
