import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import Content from "@/components/Content";
import ContentWrapper from "@/components/ContentWrapper";
import DetailedPageHero from "@/components/DetailedPageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // 1 hour

export default async function SimmerSnapsInvidiualPage({ params }: Props) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const snaps = await payload.find({
    collection: "snaps",
    where: {
      slug: {
        equals: slug
      }
    }
  });

  const snap = snaps.docs[0];

  if (!snap) {
    return notFound();
  }

  const content = snap.content;

  return (
    <>
      <Header
        theme="dark"
        disableLogoBorder
        className="absolute top-0 z-50 w-full border-b-0 bg-black/45 lg:static lg:z-0 lg:bg-black"
      />
      <main className="border-b-2 border-black bg-black">
        <ContentWrapper>
          <StickySidebar theme="dark" className="mt-32 border-r-0" />
          <div className="basis-full space-y-20 overflow-hidden bg-simmer-white pb-20 lg:rounded-tl-[8rem]">
            <DetailedPageHero
              thumbnail={snap.thumbnail}
              cover={snap.cover}
              name={snap.name}
              brand={snap.brand}
              project={snap.project}
              date={snap.date}
              description={snap.description}
              websiteUrl={snap.websiteUrl}
              featuredServices={snap.featuredServices}
              services={snap.services}
            />
            <Content name={snap.name} content={content} />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
