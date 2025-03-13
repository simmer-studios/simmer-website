"use client";

import { confetti, ConfettiOptions } from "@tsparticles/confetti";
import { AnimatePresence, motion, useInView } from "motion/react";
import dynamic from "next/dynamic";
import { FC, HTMLProps, useEffect, useRef, useState } from "react";

import MagicInput from "@/components/MagicInput";
import { cn } from "@/lib/utils";

const ApplyDiscountButton = dynamic(
  () => import("@/components/ApplyDiscountButton"),
  {
    ssr: false
  }
);

const images = [
  {
    src: "/images/confetti-1.png",
    width: 50,
    height: 50
  },
  {
    src: "/images/confetti-2.png",
    width: 50,
    height: 50
  },
  {
    src: "/images/confetti-3.png",
    width: 50,
    height: 50
  },
  {
    src: "/images/confetti-4.png",
    width: 50,
    height: 50
  },
  {
    src: "/images/confetti-5.png",
    width: 50,
    height: 50
  },
  {
    src: "/images/confetti-6.png",
    width: 50,
    height: 50
  }
];
const confettiDefaults: ConfettiOptions = {
  ticks: 100,
  count: 3,
  drift: 4,
  spread: 60,
  decay: 0.9,
  scalar: 2.5,
  shapes: ["image"],
  shapeOptions: {
    image: images
  },
  zIndex: 100
};

const SecretIngredientReveal = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const [revealDiscount, setRevealDiscount] = useState<boolean>(false);

  useEffect(() => {
    // Add style for confetti elements
    const style = document.createElement("style");
    style.textContent =
      "#confettiLeft, #confettiRight { pointer-events: none; }";
    document.head.appendChild(style);

    if (revealDiscount) {
      const confettiEffect = async () => {
        await confetti("confettiLeft", {
          ...confettiDefaults,
          angle: 60,
          position: {
            x: 0,
            y: 40
          }
        });

        await confetti("confettiRight", {
          ...confettiDefaults,
          angle: 120,
          position: { x: 100, y: 40 }
        });
      };

      const animationTime = setInterval(() => {
        requestAnimationFrame(confettiEffect);
      }, 10);

      setTimeout(() => {
        clearInterval(animationTime);
      }, 2000);
    }
  }, [revealDiscount]);

  return (
    <motion.section
      ref={containerRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative overflow-hidden"
    >
      <div className="container relative min-h-[550px] content-center px-10 lg:min-h-[850px] lg:px-20 xl:max-w-[1837px]">
        <AnimatePresence initial={false}>
          <DiscountCoupon
            className="absolute bottom-0 left-0 right-0 top-0 z-10 mx-auto min-h-[540px] lg:min-h-[850px]"
            reveal={revealDiscount}
            key="discount-coupon"
          />
          {!revealDiscount && (
            <Ticket
              className="relative z-30"
              revealDiscountSuccess={() => setRevealDiscount(true)}
              key="input-reveal"
            />
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

interface TicketProps {
  revealDiscountSuccess: () => void;
}

const Ticket: FC<HTMLProps<HTMLDivElement> & TicketProps> = ({
  className,
  revealDiscountSuccess,
  ...props
}) => {
  return (
    <motion.div
      exit={{ x: 2000, rotateY: "45deg", rotateX: "45deg" }}
      transition={{ type: "spring", duration: 3, delay: 1 }}
      className={cn(
        "relative flex flex-col gap-10 rounded-xl bg-[url('/images/img_ticket-vertical.svg')] bg-cover bg-center px-6 py-12 sm:px-10 sm:py-14 md:px-14 md:py-16 lg:rounded-3xl lg:bg-[url('/images/img_ticket-horizontal.svg')] lg:px-20 lg:py-20 xl:px-28 xl:py-24 2xl:px-32",
        className
      )}
    >
      <span className="absolute right-4 top-4 font-adelle-mono-flex lg:right-10 lg:top-10 lg:text-3xl">
        01
      </span>
      <div>
        <h2 className="text-balance font-articulat text-5xl font-medium tracking-tighter sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">
          Guess our secret ingredient for a surprise.
        </h2>
      </div>
      <div className="flex flex-col gap-6">
        <div>
          <MagicInput
            hasRevealed={() => {
              revealDiscountSuccess();
            }}
          />
        </div>
        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:text-2xl">
          <div className="-leading-[0.9] gap-1 text-center font-articulat font-bold tracking-tight sm:text-2xl md:text-3xl lg:order-2 xl:text-4xl">
            <span className="inline-block">NO WRONG ANSWERS</span>
            <br />
            <span className="inline-block -translate-y-0.5 font-lora font-semibold">
              &#91;don&apos;t think&#93;
            </span>
            &nbsp;
            <span className="inline-block">COME ON, JUST TYPE!</span>
          </div>
          <div className="flex items-center justify-center gap-2 lg:order-1">
            <span className="font-lora text-4xl font-semibold lg:text-6xl">
              &#91;our&#93;
            </span>
            <span className="translate-y-1 font-adelle-mono text-xl leading-none tracking-tight lg:text-3xl">
              SECRET
              <br />
              RECIPE
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

interface DiscountCouponProps {
  reveal: boolean;
}

const DiscountCoupon: FC<HTMLProps<HTMLDivElement> & DiscountCouponProps> = ({
  className,
  reveal,
  ...props
}) => {
  return (
    <motion.div
      layout
      className={cn(
        "container content-center bg-[url(/images/img_discount-coupon-vertical.svg)] bg-contain bg-top bg-no-repeat lg:bg-[url(/images/img_discount-coupon-horizontal.svg)] lg:bg-center",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto hidden max-w-[300px] flex-col items-center justify-center gap-4 text-center lg:max-w-max lg:gap-8",
          {
            flex: reveal
          }
        )}
      >
        <div>
          <h3 className="font-articulat text-xl font-medium lg:text-4xl">
            THANKS FOR TINKERING WITH OUR SITE
          </h3>
        </div>
        <hr className="w-[70%] border-black lg:w-[50%]" />
        <div className="">
          <h2 className="font-fionas text-5xl font-medium lg:text-9xl">
            Here&apos;s{" "}
            <span className="font-semibold underline decoration-2 underline-offset-4 lg:underline-offset-8">
              5%
            </span>{" "}
            discount
          </h2>
        </div>
        <div className="mt-4 flex lg:self-end">
          <ApplyDiscountButton />
        </div>
      </div>
    </motion.div>
  );
};

export default SecretIngredientReveal;
