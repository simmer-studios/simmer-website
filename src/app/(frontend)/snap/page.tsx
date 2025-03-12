import Image from "next/image";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/sections/snaps/Hero";
import HeroContentSM from "@/components/sections/snaps/HeroContentSM";
import StickySidebar from "@/components/StickySidebar";

export function generateMetadata() {
  return {
    title: "Snaps | Simmer Studios",
    description: ""
  };
}

export default function SimmerSnapsPage() {
  return (
    <>
      <Header theme="light" />
      <main className="bg-simmer-white">
        <Hero />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar className="border-0" theme="dark" />
          <div className="basis-full border-t-2 border-black">
            <div
              className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4"
              id="masonry-snaps"
            >
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 11.png"
                  width={461}
                  height={643}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 8.png"
                  width={463}
                  height={463}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 9.png"
                  width={462}
                  height={438}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 5.png"
                  width={462}
                  height={344}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 10.png"
                  width={462}
                  height={273}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4.png"
                  width={463}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 7.png"
                  width={462}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
              <div className="relative break-inside-avoid">
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4-1.png"
                  width={461}
                  height={249}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
