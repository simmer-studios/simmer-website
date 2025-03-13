import config from "@payload-config";
import { getPayload } from "payload";
import { Suspense } from "react";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuForm from "@/components/MenuForm";
import Hero from "@/components/sections/menu/Hero";
import StickySidebar from "@/components/StickySidebar";

export function generateMetadata() {
  return {
    title: "Menu | Simmer Studios",
    description: ""
  };
}

export default async function MenuPage() {
  const payload = await getPayload({ config });

  const menuForm = await payload.findGlobal({
    slug: "menu",
    showHiddenFields: true
  });

  return (
    <>
      <Header theme="dark" />
      <main>
        <Hero />
        <ContentWrapper className="border-b-2 border-black bg-simmer-white">
          <StickySidebar theme="dark" className="border-0" />
          <div className="basis-full">
            <Suspense fallback={<p>Loading form...</p>}>
              {menuForm && (
                <MenuForm
                  chefsChoice={menuForm.chefsChoice}
                  executions={menuForm.executions}
                  identity={menuForm.identity}
                  strategy={menuForm.strategy}
                />
              )}
            </Suspense>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
