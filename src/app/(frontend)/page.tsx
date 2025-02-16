import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CompanyDescription from "@/components/sections/home/CompanyDescription";
import EggSpawner from "@/components/sections/home/EggSpawner";
import Hero from "@/components/sections/home/Hero";
import HeroDivider from "@/components/sections/home/HeroDivider";
import PillarServices from "@/components/sections/home/PillarServices";
import RoundedLinks from "@/components/sections/home/RoundedLinks";
import SecretIngredientReveal from "@/components/sections/home/SecretIngredientReveal";
import ServiceCourses from "@/components/sections/home/ServiceCourses";
import StickySidebar from "@/components/StickySidebar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Simmer Studios",
  description: ""
};

export default function HomePage() {
  return (
    <>
      <Header theme="light" />
      <main className="bg-black">
        <Hero />
        <HeroDivider />
        <ContentWrapper className="border-b-2 border-black pt-10 lg:pt-16">
          <StickySidebar theme="dark" />
          <div className="basis-full">
            <CompanyDescription link="#" />
            <SecretIngredientReveal />
            <PillarServices />
            <ServiceCourses />
            <RoundedLinks />
            <EggSpawner />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
