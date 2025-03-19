import config from "@payload-config";
import { Metadata } from "next";
import { BasePayload, getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/sections/snaps/Hero";
import MasonrySnaps from "@/components/sections/snaps/MasonrySnaps";
import StickySidebar from "@/components/StickySidebar";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 1 day

async function getSnapPage(payload: BasePayload) {
  return payload.findGlobal({
    slug: "snaps-global"
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const { seo } = await getSnapPage(payload);

  return getMetadata({
    title: seo.title,
    description: seo.description,
    image: seo.image
  });
}

async function getPageData() {
  const payload = await getPayload({ config });

  const snapPagePromise = getSnapPage(payload);

  const snapsPromise = payload.find({
    collection: "snaps",
    sort: ["-date"]
  });

  const [snapPage, snaps] = await Promise.all([snapPagePromise, snapsPromise]);

  return {
    snapPage,
    snaps
  };
}

export default async function SimmerSnapPage() {
  const { snapPage, snaps } = await getPageData();

  return (
    <>
      <Header theme="light" />
      <main className="bg-simmer-white">
        <Hero pageData={snapPage} />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar className="border-0" theme="dark" />
          <MasonrySnaps snaps={snaps.docs} />
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
