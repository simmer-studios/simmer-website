"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FC, HTMLProps } from "react";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import Logo from "./Logo";

interface Props extends HTMLProps<HTMLDivElement> {
  theme: Theme;
  disableLogoBorder?: boolean;
}

const SimmerLogo: FC<Props> = ({
  theme,
  disableLogoBorder = false,
  ...props
}) => {
  const path = usePathname();

  const styles = {
    logoContainer: cn(
      "group flex h-full items-center justify-center lg:min-w-[224px] lg:border-r-2 lg:border-black",
      {
        "hover:bg-simmer-yellow": theme === "light",
        "lg:border-r-0": disableLogoBorder
      }
    ),
    logoSVG: cn("h-[30px] lg:h-[50px]", {
      "fill-simmer-white": theme === "dark"
    })
  };

  if (path === "/") {
    return (
      <div className={cn(styles.logoContainer, "hover:bg-transparent")}>
        <Logo className={styles.logoSVG} />
      </div>
    );
  }

  return (
    <Link href="/" className={styles.logoContainer}>
      <Logo className={styles.logoSVG} />
    </Link>
  );
};

export default SimmerLogo;
