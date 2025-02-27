import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Url } from "url";

interface Props {
  link: string;
}

const CompanyDescription: FC<Props> = ({ link }) => {
  return (
    <section className="mx-auto mb-[24.82px] bg-black px-10 @container/cards-section md:px-20 xl:mb-8 xl:max-w-[1837px]">
      <div className="flex flex-col gap-6 @[75rem]/cards-section:flex-row">
        {/* card 1 */}
        <div className="rounded-b-2xl bg-[url('/images/img_wavy-card.svg')] bg-cover bg-top md:min-w-[544px] md:rounded-b-[20px] lg:pt-10">
          <div className="flex justify-between gap-5 pt-[28px]">
            <div className="flex items-center rounded-r-full bg-black px-8 py-2 md:px-16 md:py-4">
              <p className="font-adelle-mono-flex leading-none text-simmer-white md:text-[1.5rem]">
                EXPLORE
              </p>
            </div>
            <div className="mr-8 flex items-center">
              <Link
                href={link}
                className="font-adelle-mono leading-none md:hidden"
              >
                TAP &<br />
                KNOW MORE
              </Link>
              <Link
                href={link}
                className="hidden font-adelle-mono leading-none md:inline-block md:text-[1.5rem]"
              >
                CLICK &<br />
                KNOW MORE
              </Link>
            </div>
          </div>
          <div className="px-[24px] pb-[42px] pt-[48px] font-adelle-mono text-[2rem] leading-none md:px-[64px] md:pt-[9px] md:text-[4rem] md:leading-tight">
            <div className="flex border-b-2 border-black py-4 md:py-[1.5rem]">
              <Link
                href={"#"}
                className="relative flex items-center gap-5 after:inline-block after:aspect-square after:w-[20px] after:rounded-full after:bg-simmer-yellow after:content-[''] hover:text-black/80 md:after:w-[30px]"
              >
                STUDIO
              </Link>
            </div>
            <div className="flex border-b-2 border-black py-4">
              <Link href={"#"} className="hover:text-black/80">
                CLIENTS
              </Link>
            </div>
            <div className="flex border-b-2 border-black py-4">
              <Link href={"#"} className="hover:text-black/80">
                IDEAS
              </Link>
            </div>
            <div className="flex border-b-2 border-black py-4">
              <Link href={"#"} className="hover:text-black/80">
                SIMMER
              </Link>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div className="w-full space-y-8 rounded-tr-[100px] bg-simmer-white px-[24px] py-[42px] @container/card-2 @[1400px]/cards-section:rounded-tr-[420px] md:relative md:flex md:min-h-[641px] md:flex-col md:justify-between md:px-[64px] md:pb-[64px] md:pt-[74px]">
          <h2 className="font-articulat text-[2rem] font-bold leading-none md:text-[4rem]">
            We are a<br />
            creative kitchen.
          </h2>
          <div className="right-0 top-0 flex justify-center @[850px]/card-2:absolute">
            <div className="relative aspect-video w-full @[850px]/card-2:h-[263.71px] @[850px]/card-2:w-[402px]">
              <Image
                src="/images/img_wine-glass.svg"
                className="object-contain"
                alt=""
                fill
              />
            </div>
          </div>
          <p className="text-pretty font-articulat text-[0.937rem] font-bold leading-[1.47rem] md:text-[2rem] md:leading-[2.5rem]">
            From start-ups, local, international, personal brands, communities,
            corporations, businesses and government agencies— our services has
            no creative limits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompanyDescription;
