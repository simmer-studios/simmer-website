import Logo from "./Logo";

const FooterCopyright = () => {
  return (
    <div className="grid grid-cols-[1fr_auto] items-center gap-6 px-2">
      <Logo className="flex h-full w-full basis-full justify-self-end border-r-2 border-simmer-white fill-simmer-white pr-5" />
      <div className="space-y-2 font-adelle-mono">
        <p className="font-bold leading-none">
          ALL
          <br />
          RIGHTS
          <br />
          RESERVED
        </p>
        <p className="text-[2.4rem] font-bold leading-none tracking-tighter">
          (2024)
        </p>
      </div>
    </div>
  );
};

export default FooterCopyright;
