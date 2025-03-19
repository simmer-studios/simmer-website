import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";
import { Suspense } from "react";

import AnimatedMain from "@/components/AnimatedMain";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MenuForm from "@/components/MenuForm";
import Hero from "@/components/sections/menu/Hero";
import StickySidebar from "@/components/StickySidebar";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 1 day

async function getMenu() {
  const payload = await getPayload({ config });

  return payload.findGlobal({
    slug: "menu",
    showHiddenFields: true
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getMenu();

  return getMetadata({
    title: seo.title,
    description: seo.description,
    image: seo.image
  });
}

export default async function MenuPage() {
  const menu = await getMenu();

  return (
    <>
      <Header theme="dark" />
      <AnimatedMain>
        <Hero />
        <ContentWrapper className="border-b-2 border-black bg-simmer-white">
          <StickySidebar theme="dark" className="border-0" />
          <div className="basis-full">
            <Suspense fallback={<p>Loading form...</p>}>
              {menu && (
                <MenuForm
                  chefsChoice={menu.chefsChoice}
                  executions={menu.executions}
                  identity={menu.identity}
                  strategy={menu.strategy}
                />
              )}
            </Suspense>
          </div>
        </ContentWrapper>
      </AnimatedMain>
      <Footer />
    </>
  );
}
