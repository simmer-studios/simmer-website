import config from "@payload-config";
import Image from "next/image";
import { getPayload } from "payload";

import DIGIN from "@/assets/branding/dig-in.svg";
import BrandingForm from "@/components/BrandingForm";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";

export function generateMetadata() {
  return {
    title: "Branding Questionnaire | Simmer Studios",
    description: ""
  };
}

export default async function BrandingPage() {
  const payload = await getPayload({ config });

  const brandingPage = await payload.findGlobal({
    slug: "brand-questionnaire"
  });

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
                {brandingPage.description ? (
                  <p className="text-sm tracking-wide sm:text-lg lg:text-xl">
                    {brandingPage.description}
                  </p>
                ) : (
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Necessitatibus amet quas tempore, ad fugiat alias minus
                    commodi modi sapiente exercitationem.
                  </p>
                )}
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
