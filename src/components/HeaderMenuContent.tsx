import { motion } from "motion/react";
import Link from "next/link";
import { FC, HTMLProps } from "react";
import { FaCaretRight } from "react-icons/fa";

import { cn } from "@/lib/utils";

import Cross from "./icons/Cross";
import Logo from "./Logo";

interface Props {
  currentPath?: string;
  onClose: () => void;
}

const HeaderMenuContent: FC<HTMLProps<HTMLDivElement> & Props> = ({
  currentPath,
  onClose,
  ...props
}) => {
  return (
    <div
      className="min-h-screen divide-y-2 divide-simmer-white font-adelle-mono text-simmer-white"
      {...props}
    >
      <div className="flex h-[100px] items-center px-5">
        <div className="flex">
          <Link
            href="/"
            className={"group flex h-full items-center justify-center"}
          >
            <Logo className="h-[40px] fill-simmer-white" />
          </Link>
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-1">
            <FaCaretRight className="h-[24px]" />
            {currentPath === "/" ? (
              <span className="uppercase">HOME</span>
            ) : (
              <Link href="/" className="uppercase" onClick={onClose}>
                BACK TO HOME
              </Link>
            )}
          </div>
        </div>
        <div className="flex flex-shrink-0 px-2">
          <motion.button
            whileTap={{ scale: 1.2 }}
            onClick={onClose}
            className="inline-block aspect-square w-[50px] p-2"
          >
            <Cross className="h-full w-full stroke-simmer-white" />
          </motion.button>
        </div>
      </div>
      <div className="row">
        <div className="container flex divide-x-2 divide-simmer-white">
          <div className="flex flex-1 items-center gap-2 px-5 py-1.5">
            <Link
              href="/"
              className="inline-block pt-2.5 font-articulat text-7xl leading-none"
              onClick={onClose}
            >
              HOME
            </Link>
            {currentPath === "/" && (
              <FaCaretRight className="h-[70px] rotate-180" />
            )}
          </div>
          <div className="flex items-center justify-center px-5">
            <span className="w-[6ch] leading-none">SIMMER GROUP INC.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container flex items-center gap-2 px-5 py-1.5">
          <Link
            href="/works"
            className="inline-block pt-2.5 font-articulat text-7xl font-medium leading-none"
            onClick={onClose}
          >
            WORKS
          </Link>
          {currentPath === "/works" && (
            <FaCaretRight className="h-[70px] rotate-180" />
          )}
        </div>
      </div>
      <div className="row">
        <div className="container flex divide-x-2 divide-simmer-white">
          <div className="flex flex-1 items-center gap-2 px-5 py-1.5">
            <Link
              href="/menu"
              className="inline-block pt-2.5 font-articulat text-7xl font-extralight italic leading-none"
              onClick={onClose}
            >
              MENU
            </Link>
            {currentPath === "/menu" && (
              <FaCaretRight className="h-[70px] rotate-180" />
            )}
          </div>
          <div className="flex flex-shrink-0 items-center justify-center px-5">
            <span className="w-[8ch] leading-none">OUR SERVICES</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container flex gap-2 px-5 py-1.5">
          <Link
            href="/about"
            className="inline-block pt-2.5 font-articulat text-7xl font-bold leading-none"
            onClick={onClose}
          >
            ABOUT
          </Link>
          {currentPath === "/about" && (
            <FaCaretRight className="h-[70px] rotate-180" />
          )}
        </div>
      </div>
      <div className="row">
        <div className="container flex items-center gap-2 px-5 py-1.5">
          <Link
            href="/checkout"
            className="inline-block pt-2.5 font-articulat text-7xl font-extralight leading-none"
            onClick={onClose}
          >
            QUOTE
          </Link>
          {currentPath === "/checkout" && (
            <FaCaretRight className="h-[70px] rotate-180" />
          )}
        </div>
      </div>
      <div className="row">
        <div className="container flex divide-x-2 divide-simmer-white">
          <div className="flex basis-[25%] items-center justify-start px-5">
            <span className="w-[4ch] font-adelle-mono leading-none">
              PROD ARM
            </span>
          </div>
          <div className="flex items-center gap-2 px-5 py-1.5">
            <Link
              href="/snap"
              className="inline-block pt-2.5 font-articulat text-7xl font-medium leading-none"
              onClick={onClose}
            >
              SNAP
            </Link>
            {currentPath === "/snap" && (
              <FaCaretRight className="h-[70px] rotate-180" />
            )}
          </div>
        </div>
      </div>
      <div className="row !border-b-2 border-simmer-white">
        <div className="container flex divide-x-2 divide-simmer-white">
          <div className="flex basis-[25%] items-center justify-start px-5">
            <span className="w-[4ch] font-adelle-mono leading-none">
              OUR STUDIO
            </span>
          </div>
          <div className="flex-1 divide-y-2 divide-simmer-white">
            <div className="flex px-5">
              <Link
                href="#space"
                className="pt-1.5 font-articulat text-2xl font-semibold italic"
              >
                SPACE
              </Link>
            </div>
            <Link
              href="#supply"
              className="flex items-center justify-between px-5"
            >
              <span className="pt-1.5 font-articulat text-2xl">SUPPLY</span>
              <span className="inline-block">MERCH</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderMenuContent;
