import { cn } from "@/lib/utils";
import Link from "next/link";
import { ComponentProps, FC, HTMLProps } from "react";

const RoundedLinks: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "flex min-h-[200px] items-center justify-center border-y-2 border-black bg-simmer-white py-10 lg:py-20",
        className
      )}
      {...props}
    >
      <div className="relative flex min-h-max w-[300px] flex-wrap justify-center gap-3 lg:min-h-[100px] lg:min-w-[500px]">
        <Pill href="#" className="lg:absolute lg:left-[-40px] lg:top-0">
          THERE&apos;S MORE?
        </Pill>
        <Pill href="/menu" className="lg:absolute lg:left-[215px] lg:top-0">
          ORDER
        </Pill>
        <Pill
          href="/works"
          className="lg:absolute lg:left-[130px] lg:top-[65px]"
        >
          OUR WORKS
        </Pill>
        <Pill
          href="/about"
          className="lg:absolute lg:left-[340px] lg:top-[35px]"
        >
          ABOUT
        </Pill>
      </div>
    </section>
  );
};

const Pill: FC<ComponentProps<typeof Link>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <Link
      {...props}
      className={cn(
        "inline-block h-[40px] content-center rounded-full border-2 border-black bg-simmer-yellow px-4 text-center font-adelle-mono leading-none hover:bg-black hover:text-simmer-white active:brightness-95 lg:h-[50px] lg:px-5 lg:text-2xl",
        className
      )}
    >
      {children}
    </Link>
  );
};

export default RoundedLinks;
