import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";
import Image from "next/image";

import DIGIN from "@/assets/branding/dig-in.svg";
import BrandingForm from "@/components/BrandingForm";

export function generateMetadata() {
  return {
    title: "Branding Questionnaire | Simmer Studios",
    description: ""
  };
}

export default function BrandingPage() {
  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main className="bg-black">
        <ContentWrapper>
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full divide-y-2 divide-simmer-white text-simmer-white">
            <div className="bg-simmer-yellow px-5 py-5 text-black lg:px-16 lg:py-10">
              <Image src={DIGIN} alt="Dig In" />
            </div>
            <div className="grid items-end gap-5 px-5 py-5 lg:grid-cols-[1fr_40%] lg:px-16 lg:py-10">
              <div>
                <p className="text-sm tracking-wide sm:text-lg lg:text-xl">
                  We&apos;d love to know your secret recipe. Your story. We
                  start getting things simmering by obtaining our key
                  ingredients. This is how we know we&apos;re truly catering
                  designs suited to your taste. The purpose of this
                  questionnaire is to help us know you better and will serve as
                  our guideline in crafting the perfect branding recipe that is
                  true to your brand&apos;s identity
                </p>
              </div>
              <div className="flex h-full items-end lg:justify-end">
                <span className="inline-block text-lg font-bold leading-none lg:text-2xl">
                  WELCOME TO
                  <br />
                  SIMMER STUDIOS
                </span>
              </div>
            </div>
            <BrandingForm />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
