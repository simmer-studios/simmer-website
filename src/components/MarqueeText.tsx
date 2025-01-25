const MarqueeText = () => {
  return (
    <div className="marquee select-none space-x-1 overflow-hidden whitespace-nowrap bg-simmer-white font-adelle-mono text-[2rem] font-bold text-black">
      <div className="infinite-slider inline-block tracking-tight">
        <span className="inline-block pl-3">
          &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US
          TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
          &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
        </span>
      </div>
      <div className="infinite-slider inline-block tracking-tight">
        <span className="inline-block pl-3">
          &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US
          TACO&apos;BOUT YOUR BRAND &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
          &#47;&#47; LET US TACO&apos;BOUT YOUR BRAND
        </span>
      </div>
    </div>
  );
};

export default MarqueeText;
