"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, HTMLProps, useState } from "react";
import { FaCaretRight } from "react-icons/fa";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import CartButtonFallback from "./CartButtonFallback";
import HeaderMenuContent from "./HeaderMenuContent";
import HeaderHamburger from "./icons/HeaderHamburger";
import SimmerLogo from "./SimmerLogo";

const HeaderCartButton = dynamic(() => import("./HeaderCartButton"), {
  ssr: false,
  loading: () => <CartButtonFallback theme="light" />
});

interface HeaderProps extends HTMLProps<HTMLElement> {
  theme: Theme;
  disableLogoBorder?: boolean;
}

interface ReturnHomeLinkProps {
  path: string;
}

interface HeaderCheckoutButtonProps {
  theme: Theme;
}

const Header: FC<HeaderProps> = ({
  className,
  theme = "light",
  disableLogoBorder = false,
  ...props
}) => {
  const path = usePathname();

  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  return (
    <header
      className={cn(
        "relative border-b-2 border-black bg-simmer-white font-adelle-mono text-base lg:px-0 lg:pr-0 lg:text-xl",
        {
          "border-simmer-white bg-black text-simmer-white": theme === "dark"
        },
        className
      )}
      {...props}
    >
      <div className="flex h-[80px] items-center sm:h-[100px] lg:h-[110px]">
        <SimmerLogo theme={theme} disableLogoBorder={disableLogoBorder} />
        <ReturnHomeLink path={path} />
        <div className="flex h-full items-center pr-3 lg:pr-0">
          <HeaderCheckoutButton theme={theme} />
          <HeaderCartButton theme={theme} />
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1.2 }}
            className="flex w-[50px] items-center justify-center lg:w-[80px]"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            <HeaderHamburger
              className={cn("h-[40px] w-[40px] xl:hidden", {
                "stroke-simmer-white": theme === "dark"
              })}
            />
          </motion.button>
        </div>
      </div>
      {dropdownOpen && (
        <div
          className={cn(
            "fixed bottom-0 left-0 right-0 top-0 z-50 hidden min-h-[100vh] bg-black",
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

const ReturnHomeLink: FC<ReturnHomeLinkProps> = ({ path }) => {
  return (
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
  );
};

const HeaderCheckoutButton: FC<HeaderCheckoutButtonProps> = ({ theme }) => {
  return (
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
  );
};

export default Header;
