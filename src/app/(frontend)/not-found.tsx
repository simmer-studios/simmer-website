import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroAside from "@/components/HeroAside";
import Image from "next/image";

export default function NotFound() {
  return (
    <>
      <Header theme="light" />
      <main>
        <div className="grid divide-black border-b-2 border-black bg-simmer-white xl:grid-cols-[max(222px)_1fr] xl:divide-x-2">
          <div className="hidden xl:block">
            <HeroAside variant="portfolio" />
          </div>
          <div className="flex min-h-[88dvh] items-center justify-center p-12 lg:p-16 xl:p-20">
            <div className="grid items-center justify-center justify-items-center lg:grid-cols-2 lg:gap-10">
              <div className="space-y-2 lg:space-y-4">
                <h1 className="text-7xl leading-none tracking-tighter lg:max-w-[9ch] lg:text-8xl xl:text-9xl">
                  Where are you going?
                </h1>
                <p className="max-w-[10ch] font-adelle-mono leading-tight tracking-tighter lg:max-w-none lg:text-xl">
                  YOU'RE LOST.
                </p>
              </div>
              <div className="relative flex aspect-square w-full min-w-[300px] max-w-[500px] -translate-y-8 justify-center sm:translate-y-0 lg:justify-self-start">
                <Image src="/images/img_wine-glasses.svg" alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
