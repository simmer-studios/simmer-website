import config from "@payload-config";
import { getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/sections/snaps/Hero";
import MasonrySnaps from "@/components/sections/snaps/MasonrySnaps";
import StickySidebar from "@/components/StickySidebar";

export const dynamic = "force-dynamic";

export default async function SimmerSnapsPage() {
  const payload = await getPayload({ config });

  const snapsPage = await payload.findGlobal({
    slug: "snaps-global"
  });

  const snaps = await payload.find({
    collection: "snaps"
  });

  return (
    <>
      <Header theme="light" />
      <main className="bg-simmer-white">
        <Hero pageData={snapsPage} />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar className="border-0" theme="dark" />
          <MasonrySnaps snaps={snaps.docs} />
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
