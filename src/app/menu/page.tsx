import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuForm from "@/components/MenuForm";
import Hero from "@/components/sections/menu/Hero";
import StickySidebar from "@/components/StickySidebar";
import { Suspense } from "react";

export function generateMetadata() {
  return {
    title: "Menu | Simmer Studios",
    description: ""
  };
}

/* MENU PAGE */
export default function MenuPage() {
  return (
    <>
      <Header theme="dark" />
      <main>
        <Hero />
        <ContentWrapper className="border-b-2 border-black bg-simmer-white">
          <StickySidebar theme="dark" className="border-0" />
          <div className="basis-full">
            <Suspense fallback={<p>Loading form...</p>}>
              <MenuForm />
            </Suspense>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
