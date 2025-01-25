const HeroDivider = () => {
  return (
    <div className="relative flex">
      <div className="absolute bottom-0 flex min-h-[40vw] w-full bg-[url(/images/img_hero-divider-mobile.svg)] bg-cover bg-bottom bg-no-repeat lg:min-h-[20vw] lg:bg-[url(/images/img_hero-divider.svg)]"></div>
    </div>
  );
};

export default HeroDivider;
