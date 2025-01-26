import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioFeatured from "@/components/PortfolioFeatured";
import Hero from "@/components/sections/works/Hero";
import PortfolioGrid from "@/components/sections/works/PortfolioGrid";
import StickySidebar from "@/components/StickySidebar";
import data from "@/lib/mockdata.json";

export default function PortfolioPage() {
  const projects = data.portfolios;

  return (
    <>
      <Header theme="light" />
      <main>
        <Hero className="border-b-2 border-black" />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar theme="dark" className="border-0" />
          <div className="basis-full">
            <section>
              <PortfolioFeatured />
            </section>
            <PortfolioGrid projects={projects} />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
