"use client";

import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, HTMLProps, useState } from "react";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import CartButtonFallback from "./CartButtonFallback";
import HeaderMenuContent from "./HeaderMenuContent";
import HeaderHamburger from "./icons/HeaderHamburger";
import ReturnHomeLink from "./ReturnHomeLink";
import SimmerLogo from "./SimmerLogo";

const HeaderCartButton = dynamic(() => import("./HeaderCartButton"), {
  ssr: false,
  loading: () => <CartButtonFallback theme="light" />
});

interface HeaderProps extends HTMLProps<HTMLDivElement> {
  theme: Theme;
  disableLogoBorder?: boolean;
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
        "sticky top-0 z-50 border-b-2 border-black bg-simmer-white font-adelle-mono text-base lg:px-0 lg:pr-0 lg:text-xl",
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
      <AnimatePresence>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className={cn(
              "fixed bottom-0 left-0 right-0 top-0 z-50 hidden min-h-[100vh] bg-black",
              {
                block: dropdownOpen
              }
            )}
          >
            <HeaderMenuContent
              key="header-menu-content"
              currentPath={path}
              onClose={() => setDropdownOpen(false)}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
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
