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
          <div className="basis-full"></div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
