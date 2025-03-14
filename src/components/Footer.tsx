"use client";

import { motion, useInView } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

import FooterCopyright from "./FooterCopyright";
import InteractiveFooterButtons from "./InteractiveFooterButtons";
import InteractiveTaco from "./InteractiveTaco";
import MarqueeText from "./MarqueeText";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemLeft = {
    hidden: { opacity: 0, x: -20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const itemRight = {
    hidden: { opacity: 0, x: 20 },
    show: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <footer className="bg-black font-adelle-mono text-simmer-white">
      <MarqueeText />
      <div className="flex flex-col gap-10 pb-12 pt-10 lg:px-20 lg:py-24">
        {/* taco icon row */}
        <div className="flex items-center justify-center lg:order-2">
          <InteractiveTaco />
        </div>
        {/* button row */}
        <div className="flex items-center justify-center lg:order-1 lg:justify-end">
          <Link
            href="/menu"
            className="inline-flex h-12 items-center justify-center rounded-full bg-simmer-white px-10 text-xl text-black hover:border-2 hover:border-simmer-white hover:bg-black hover:text-simmer-white"
          >
            ADD TO PLATE
          </Link>
        </div>
        {/* button + copyright row */}
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          className="order-3 mt-32 flex flex-col items-center gap-20 lg:mt-0 lg:flex-row lg:items-end lg:justify-between"
        >
          <motion.div
            variants={itemLeft}
            className="flex flex-col items-center gap-5 lg:items-start"
          >
            <span className="inline-block max-w-max text-center text-xl leading-none lg:text-left">
              READY TO&nbsp;
              <br />
              COOK WITH US?
            </span>
            <InteractiveFooterButtons />
          </motion.div>
          <motion.div variants={itemRight}>
            <FooterCopyright />
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
