import Link from "next/link";
import MarqueeText from "./MarqueeText";
import Image from "next/image";
import InteractiveTaco from "./InteractiveTaco";
import InteractiveFooterButtons from "./InteractiveFooterButtons";
import FooterCopyright from "./FooterCopyright";

const Footer = () => {
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
            href="#"
            className="block h-12 content-center rounded-full bg-simmer-white px-10 text-xl text-black"
          >
            ADD TO PLATE
          </Link>
        </div>
        {/* button + copyright row */}
        <div className="order-3 mt-32 flex flex-col items-center gap-20 lg:mt-0 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col items-center gap-5 lg:items-start">
            <span className="inline-block max-w-max text-center text-xl leading-none lg:text-left">
              READY TO&nbsp;
              <br />
              COOK WITH US?
            </span>
            <InteractiveFooterButtons />
          </div>
          <div>
            <FooterCopyright />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
