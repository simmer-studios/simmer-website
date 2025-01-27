import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, FC, HTMLAttributes } from "react";
import FoodDome from "./icons/FoodDome";

interface Props {
  theme?: Theme;
}

const StickySidebar: FC<HTMLAttributes<HTMLElement> & Props> = ({
  theme = "light",
  className
}) => {
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
          <SidebarNavLink href="#plate">PLATE</SidebarNavLink>
          <SidebarNavLink href="/home">HOME</SidebarNavLink>
          <SidebarNavLink href="/checkout">QUOTE</SidebarNavLink>
          <SidebarNavLink href="/menu">MENU</SidebarNavLink>
          <SidebarNavLink
            href="/works"
            className={cn(
              "flex items-center gap-[0.87rem] after:inline-block after:h-[0.68rem] after:w-[0.68rem] after:rounded-full after:content-['']",
              {
                "after:bg-black": theme === "light",
                "after:bg-simmer-white": theme === "dark"
              }
            )}
          >
            WORKS
          </SidebarNavLink>
          <SidebarNavLink href="/about">ABOUT</SidebarNavLink>
          <SidebarNavLink href="/snap">SNAP</SidebarNavLink>
          <SidebarNavLink href="/stories">STORIES</SidebarNavLink>
          <SidebarNavLink href="/supply">SUPPLY</SidebarNavLink>
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
