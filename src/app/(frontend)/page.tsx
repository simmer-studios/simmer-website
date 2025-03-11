import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CompanyDescription from "@/components/sections/home/CompanyDescription";
import EggSpawner from "@/components/sections/home/EggSpawner";
import Hero from "@/components/sections/home/Hero";
import HeroDivider from "@/components/sections/home/HeroDivider";
import RoundedLinks from "@/components/sections/home/RoundedLinks";
import SecretIngredientReveal from "@/components/sections/home/SecretIngredientReveal";
import Services from "@/components/sections/home/Services";
import StickySidebar from "@/components/StickySidebar";

export const metadata: Metadata = {
  title: "Simmer Studios",
  description: ""
};

export default async function HomePage() {
  const payload = await getPayload({ config });

  const homepage = await payload.findGlobal({
    slug: "homepage"
  });

  return (
    <>
      <Header theme="light" />
      <main className="bg-black" id="hero-wrap">
        <Hero />
        <HeroDivider />
        <ContentWrapper className="border-b-2 border-black pt-10 lg:pt-16">
          <StickySidebar theme="dark" />
          <div className="basis-full">
            <CompanyDescription intro={homepage.intro} />
            <SecretIngredientReveal />
            <Services services={homepage.services} />
            <RoundedLinks />
            <EggSpawner />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
