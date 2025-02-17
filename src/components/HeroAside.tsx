import Link from "next/link";
import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

import Asterisk from "./icons/Asterisk";
import ChevronDown from "./icons/ChevronDown";

interface Props {
  variant?: "default" | "portfolio" | "menu";
}

const HeroAside: FC<HTMLProps<HTMLDivElement> & Props> = ({
  variant = "default",
  className,
  ...props
}) => {
  return (
    <aside className={cn("grid bg-simmer-white", className)} {...props}>
      <div
        className={cn(
          "space-y-4 border-b-2 border-black bg-simmer-yellow py-10",
          {
            "bg-simmer-white": variant === "portfolio",
            "border-simmer-white bg-black text-simmer-white": variant === "menu"
          }
        )}
      >
        <div className="flex items-center justify-center gap-2">
          <ChevronDown
            className={cn("w-5", {
              "fill-simmer-white": variant === "menu"
            })}
          />
          <span className="font-adelle-mono text-3xl font-bold uppercase tracking-tight underline decoration-2 underline-offset-8">
            STUDIO
          </span>
          <span
            className={cn(
              "inline-block aspect-square w-[14px] translate-y-0.5 self-start rounded-full bg-black",
              {
                "bg-simmer-white": variant === "menu"
              }
            )}
          ></span>
        </div>
        <div className="flex flex-col items-center gap-3">
          <Link
            href="/works"
            className={cn(
              "inline-block h-11 w-24 content-center rounded-xl bg-black text-center font-adelle-mono text-xl text-simmer-white hover:bg-black/90",
              {
                "bg-simmer-white text-black hover:border-2 hover:border-simmer-white hover:bg-black hover:text-simmer-white":
                  variant === "menu"
              }
            )}
          >
            WORKS
          </Link>
          <Link
            href="/menu"
            className={cn(
              "inline-block h-11 w-24 content-center rounded-xl bg-black text-center font-adelle-mono text-xl text-simmer-white hover:bg-black/90",
              {
                "bg-simmer-white text-black hover:border-2 hover:border-simmer-white hover:bg-black hover:text-simmer-white":
                  variant === "menu"
              }
            )}
          >
            MENU
          </Link>
          <Link
            href="/about"
            className={cn(
              "inline-block h-11 w-24 content-center rounded-xl bg-black text-center font-adelle-mono text-xl text-simmer-white hover:bg-black/90",
              {
                "bg-simmer-white text-black hover:border-2 hover:border-simmer-white hover:bg-black hover:text-simmer-white":
                  variant === "menu"
              }
            )}
          >
            ABOUT
          </Link>
        </div>
      </div>
      <div
        className={cn("divide-y-2 divide-black border-b-2 border-black", {
          "divide-simmer-white border-simmer-white text-simmer-white":
            variant === "menu"
        })}
      >
        <Link
          href="/snap"
          className={cn(
            "group flex min-h-[65px] items-center justify-center bg-simmer-white hover:brightness-95",
            {
              "bg-black hover:bg-simmer-white hover:text-black":
                variant === "menu"
            }
          )}
        >
          <div className="w-24">
            <span className="font-adelle-mono text-3xl font-bold uppercase tracking-tight">
              SNAP
            </span>
          </div>
        </Link>
        <Link
          href="/space"
          className={cn(
            "group flex min-h-[65px] items-center justify-center bg-simmer-white hover:brightness-95",
            {
              "bg-black hover:bg-simmer-white hover:text-black":
                variant === "menu"
            }
          )}
        >
          <div className="w-24">
            <span className="font-adelle-mono text-3xl font-bold uppercase tracking-tight">
              SPACE
            </span>
          </div>
        </Link>
        <Link
          href="/stores"
          className={cn(
            "group flex min-h-[65px] items-center justify-center bg-simmer-white hover:brightness-95",
            {
              "bg-black hover:bg-simmer-white hover:text-black":
                variant === "menu"
            }
          )}
        >
          <div className="relative w-24">
            <Asterisk
              className={cn("absolute -left-5 -top-2.5 w-3.5", {
                "fill-simmer-white group-hover:fill-black": variant === "menu"
              })}
            />
            <span className="font-adelle-mono text-3xl font-bold uppercase tracking-tight">
              STORIES
            </span>
          </div>
        </Link>
        <Link
          href="/supply"
          className={cn(
            "group flex min-h-[65px] items-center justify-center bg-simmer-white hover:brightness-95",
            {
              "bg-black hover:bg-simmer-white hover:text-black":
                variant === "menu"
            }
          )}
        >
          <div className="relative w-24">
            <Asterisk
              className={cn("absolute -left-5 -top-2.5 w-3.5", {
                "fill-simmer-white group-hover:fill-black": variant === "menu"
              })}
            />
            <span className="font-adelle-mono text-3xl font-bold uppercase tracking-tight">
              SUPPLY
            </span>
          </div>
        </Link>
      </div>
    </aside>
  );
};

export default HeroAside;
