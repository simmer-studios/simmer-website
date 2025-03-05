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
            <div className="h-full w-full columns-4">
              <div className="relative mb-4 min-h-[500px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[200px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[400px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[600px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[300px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[100px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[400px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[320px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[550px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative mb-4 min-h-[300px] w-full">
                <Image
                  alt=""
                  src="/images/img_placeholder.jpg"
                  fill
                  className="object-cover"
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
