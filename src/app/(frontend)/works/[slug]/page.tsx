import config from "@payload-config";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import CreditsBlock from "@/components/Credits";
import Footer from "@/components/Footer";
import FullWidthMedia from "@/components/FullWidthImage";
import FullWidthImageHeadingCaption from "@/components/FullWidthImageHeadingCaption";
import Header from "@/components/Header";
import IconHeadingCaptionCombo from "@/components/IconHeadingCaptionCombo";
import QuoteBlock from "@/components/Quote";
import Hero from "@/components/sections/project/Hero";
import Slideshow from "@/components/Slideshow";
import StickySidebar from "@/components/StickySidebar";
import ThreePanelGallery from "@/components/ThreePanelGallery";
import TwoImageText from "@/components/TwoImageText";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // 1 hour

export default async function IndividualProject({ params }: Props) {
  const { slug } = await params;

  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects",
    where: {
      slug: {
        equals: slug
      }
    }
  });

  const project = projects.docs[0];

  if (!project) {
    return notFound();
  }

  const content = project.content;

  return (
    <>
      <Header
        theme="dark"
        disableLogoBorder
        className="absolute top-0 z-50 w-full border-b-0 bg-black/45 lg:static lg:z-0 lg:bg-black"
      />
      <main className="bg-black">
        <ContentWrapper>
          <StickySidebar theme="dark" className="mt-32 border-r-0" />
          <div className="basis-full space-y-20 overflow-hidden bg-simmer-white pb-10 lg:rounded-tl-[8rem]">
            <Hero
              thumbnail={project.thumbnail}
              cover={project.cover}
              name={project.name}
              brand={project.brand}
              project={project.project}
              date={project.date}
              description={project.description}
              websiteUrl={project.websiteUrl}
              featuredServices={project.featuredServices}
              services={project.services}
            />
            {content?.map((c) => {
              if (c.blockType === "FullWidthImage") {
                return <FullWidthMedia key={c.id} media={c.image} />;
              }

              if (c.blockType === "HeadingDescription") {
                return (
                  <IconHeadingCaptionCombo
                    key={c.id}
                    icon={c.icon}
                    heading={c.heading}
                    caption={c.description}
                  />
                );
              }

              if (c.blockType === "ThreeImages") {
                <ThreePanelGallery
                  key={c.id}
                  firstImage={c.first}
                  secondImage={c.second}
                  thirdImage={c.third}
                />;
              }

              if (c.blockType === "Carousel") {
                return <Slideshow key={c.id} images={c.images} />;
              }

              if (c.blockType === "Quote") {
                return (
                  <QuoteBlock
                    key={c.id}
                    quote={c.text}
                    author={c.author}
                    authorDetails={c.role}
                  />
                );
              }

              if (c.blockType === "TwoImageText") {
                return (
                  <TwoImageText key={c.id} first={c.first} second={c.second} />
                );
              }

              if (c.blockType === "Creatives") {
                return (
                  <CreditsBlock
                    key={c.id}
                    title={project.name}
                    creatives={c.creatives}
                  />
                );
              }

              if (c.blockType === "ImageText") {
                return (
                  <FullWidthImageHeadingCaption
                    key={c.id}
                    image={c.image}
                    title={c.title}
                    description={c.description}
                  />
                );
              }
            })}
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
