import ContentWrapper from "@/components/ContentWrapper";
import CreditsBlock from "@/components/Credits";
import Footer from "@/components/Footer";
import FullWidthImage from "@/components/FullWidthImage";
import FullWidthImageHeadingCaption from "@/components/FullWidthImageHeadingCaption";
import Header from "@/components/Header";
import IconHeadingCaptionCombo from "@/components/IconHeadingCaptionCombo";
import BuildingTheBrand from "@/components/icons/BuildingTheBrand";
import QuoteBlock from "@/components/Quote";
import Hero from "@/components/sections/snaps/project/Hero";
import Slideshow from "@/components/Slideshow";
import StickySidebar from "@/components/StickySidebar";
import ThreePanelGallery from "@/components/ThreePanelGallery";
import TwoImageText from "@/components/TwoImageText";

export default function SimmerSnapsInvidiualPage() {
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
            <Hero />
            <FullWidthImage src={"/images/img_placeholder.jpg"} alt="" />
            <IconHeadingCaptionCombo
              icon={<BuildingTheBrand />}
              heading="Building the Brand For The Dapper Bro"
              caption="The Bourbon Bros combines premium quality with a fun and approachable personality, making it an excellent choice for those looking for a high-quality bourbon that doesn't take itself too seriously. The Bourbon Bros combines premium quality with a fun and approachable personality, making it an excellent choice for those looking for a high-quality bourbon that doesn't take itself too seriously."
            />
            <ThreePanelGallery
              items={[
                {
                  id: "1",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "2",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "3",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                }
              ]}
            />
            <TwoImageText
              items={[
                {
                  id: 1,
                  subtext: "SKETCHING FOR THE BROS",
                  description:
                    "We make sure to create all assets from scratch. Simmer enjoys creating and producing key visuals that would match all the brands materials."
                },
                {
                  id: 2,
                  subtext: "SKETCHING FOR THE BROS",
                  description:
                    "We make sure to create all assets from scratch. Simmer enjoys creating and producing key visuals that would match all the brands materials."
                }
              ]}
            />
            <Slideshow
              images={[
                {
                  id: "1",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "2",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "3",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "4",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "5",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "6",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                }
              ]}
            />
            <QuoteBlock
              quote="How would you feel if you were in the zone of the bros? How would you feel if you were in the zone of the bros?"
              author="John Doe"
              authorDetails="CEO OF THE BOURBON BROS"
            />
            <FullWidthImageHeadingCaption />
            <CreditsBlock
              title="BOURBON BROS"
              people={[
                { title: "Creative Director", name: "R.K. Dela Rosa" },
                { title: "Designer", name: "Jena Hernandez" }
              ]}
            />
            <ThreePanelGallery
              items={[
                {
                  id: "1",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "2",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                },
                {
                  id: "3",
                  url: "/images/img_placeholder.jpg",
                  altText: "Bourbon"
                }
              ]}
            />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
