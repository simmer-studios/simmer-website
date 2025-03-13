import config from "@payload-config";
import { getPayload, type Where } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import PortfolioFeatured from "@/components/PortfolioFeatured";
import Hero from "@/components/sections/works/Hero";
import PortfolioGrid from "@/components/sections/works/PortfolioGrid";
import StickySidebar from "@/components/StickySidebar";
import data from "@/lib/mockdata.json";
import { cn } from "@/lib/utils";
import { Project } from "@/payload-types";

export function generateMetadata() {
  return {
    title: "Works | Simmer Studios",
    description: ""
  };
}

export default async function PortfolioPage() {
  const payload = await getPayload({ config });

  const projects = await payload.find({
    collection: "projects",
    limit: 10,
    pagination: true,
    where: {
      featured: {
        equals: false
      }
    }
  });

  const featuredProjects = await payload.find({
    collection: "projects",
    where: {
      featured: {
        equals: true
      }
    }
  });

  return (
    <>
      <Header theme="light" />
      <main>
        <Hero className="border-b-2 border-black" />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar theme="dark" className="border-0" />
          <div
            className={cn("basis-full", {
              "flex min-h-dvh items-center justify-center bg-simmer-white":
                featuredProjects.docs.length < 1 && projects.docs.length < 1
            })}
          >
            {featuredProjects.docs.length > 1 && (
              <section>
                <PortfolioFeatured
                  featuredProject1={featuredProjects.docs[0]}
                  featuredProject2={featuredProjects.docs[1]}
                />
              </section>
            )}
            {projects.docs.length > 0 && (
              <PortfolioGrid projects={projects.docs} />
            )}
            {featuredProjects.docs.length < 1 && projects.docs.length < 1 && (
              <p className="font-adelle-mono uppercase">
                NOTHING TO SHOW HERE...
              </p>
            )}
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
