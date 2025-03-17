import { HTMLMotionProps, motion } from "motion/react";
import Link from "next/link";
import { configToJSONSchema } from "payload";
import { ComponentProps, FC, HTMLProps } from "react";
import { FaCaretRight } from "react-icons/fa";

import { cn } from "@/lib/utils";

import Cross from "./icons/Cross";
import ReturnHomeLink from "./ReturnHomeLink";
import SimmerLogo from "./SimmerLogo";

interface Props {
  currentPath?: string;
  onClose: () => void;
}

const HeaderMenuContent: FC<HTMLMotionProps<"div"> & Props> = ({
  currentPath,
  onClose,
  ...props
}) => {
  return (
    <motion.div
      initial={{ y: "-100%" }}
      animate={{ y: "0%" }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      layout="position"
      className="min-h-dvh divide-y-2 divide-simmer-white font-adelle-mono text-simmer-white"
      {...props}
    >
      <div className="flex h-[80px] items-center sm:h-[100px]">
        <SimmerLogo theme="dark" disableLogoBorder />
        <ReturnHomeLink path={currentPath} />
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
            <MenuLink
              active={currentPath === "/"}
              href="/"
              className="font-articulat"
              onClick={onClose}
            >
              HOME
            </MenuLink>
          </div>
          <div className="flex items-center justify-center px-5">
            <span className="w-[6ch] leading-none">SIMMER GROUP INC.</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container flex items-center gap-2 px-5 py-1.5">
          <MenuLink
            active={currentPath === "/works"}
            href="/works"
            className="font-articulat font-medium"
            onClick={onClose}
          >
            WORKS
          </MenuLink>
        </div>
      </div>
      <div className="row">
        <div className="container flex divide-x-2 divide-simmer-white">
          <div className="flex flex-1 items-center gap-2 px-5 py-1.5">
            <MenuLink
              active={currentPath === "/menu"}
              href="/menu"
              className="font-articulat font-extralight italic"
              onClick={onClose}
            >
              MENU
            </MenuLink>
          </div>
          <div className="flex flex-shrink-0 items-center justify-center px-5">
            <span className="w-[8ch] leading-none">OUR SERVICES</span>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container flex gap-2 px-5 py-1.5">
          <MenuLink
            active={currentPath === "/about"}
            href="/about"
            className="font-articulat font-bold"
            onClick={onClose}
          >
            ABOUT
          </MenuLink>
        </div>
      </div>
      <div className="row">
        <div className="container flex items-center gap-2 px-5 py-1.5">
          <MenuLink
            active={currentPath === "/checkout"}
            href="/checkout"
            className="font-articulat font-extralight"
            onClick={onClose}
          >
            QUOTE
          </MenuLink>
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
            <MenuLink
              active={currentPath === "/snap"}
              href="/snap"
              className="font-articulat"
              onClick={onClose}
            >
              SNAP
            </MenuLink>
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
                href="https://simmerspace.com/"
                target="_blank"
                className="pt-1.5 font-articulat text-2xl font-semibold italic"
              >
                SPACE
              </Link>
            </div>
            <Link
              href="https://simmerspace.com/"
              target="_blank"
              className="flex items-center justify-between px-5"
            >
              <span className="pt-1.5 font-articulat text-2xl">SUPPLY</span>
              <span className="inline-block">MERCH</span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface MenuLinkProps {
  active: boolean;
}

const MenuLink: FC<ComponentProps<typeof Link> & MenuLinkProps> = ({
  active,
  children,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn(
        "inline-flex items-center pt-2.5 text-7xl leading-none",
        className
      )}
    >
      {children}
      {active && (
        <motion.span
          initial={{ x: 20 }}
          animate={{ x: ["0%", "-10%", "0%"] }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
            ease: "easeInOut"
          }}
          className="inline-block"
        >
          <FaCaretRight className="aspect-square h-[70px] w-full -translate-y-2 rotate-180" />
        </motion.span>
      )}
    </Link>
  );
};

export default HeaderMenuContent;
