import config from "@payload-config";
import { getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ClientList from "@/components/sections/about/ClientList";
import Hero from "@/components/sections/about/Hero";
import MemberCards from "@/components/sections/about/MemberCards";
import StickySidebar from "@/components/StickySidebar";

export const revalidate = 3600; // 1 hour

const getPageData = async () => {
  const payload = await getPayload({ config });

  const aboutPagePromise = payload.findGlobal({
    slug: "about"
  });

  const creativesPromise = payload.find({
    collection: "creatives",
    sort: ["+order"]
  });

  const clientsPromise = payload.find({
    collection: "clients",
    showHiddenFields: true,
    sort: ["-name"]
  });

  const [aboutPage, creativesData, clientsData] = await Promise.all([
    aboutPagePromise,
    creativesPromise,
    clientsPromise
  ]);

  return {
    aboutPage,
    clients: clientsData.docs,
    creatives: creativesData.docs
  };
};

export function generateMetadata() {
  return {
    title: "About | Simmer Studios",
    description: "Simmer Studios is a creative agency."
  };
}

export default async function AboutPage() {
  const { aboutPage, clients, creatives } = await getPageData();

  return (
    <>
      <Header
        theme="dark"
        disableLogoBorder
        className="absolute top-0 z-50 w-full border-b-0 bg-black/45 lg:static lg:z-0 lg:bg-black"
      />
      <main className="bg-black">
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar theme="dark" className="mt-32 border-r-0" />
          <div className="basis-full space-y-10 overflow-hidden bg-simmer-white pb-20 lg:rounded-tl-[8rem]">
            <Hero
              banner={aboutPage.banner}
              thumbnail={aboutPage.thumbnail}
              cover={aboutPage.cover}
              tagline={aboutPage.tagline}
              description={aboutPage.description}
            />
            <MemberCards creatives={creatives} />
            <ClientList
              clients={clients}
              description={aboutPage.clientsDescription}
            />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
