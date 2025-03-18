import config from "@payload-config";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getPayload } from "payload";

import Content from "@/components/Content";
import ContentWrapper from "@/components/ContentWrapper";
import DetailedPageHero from "@/components/DetailedPageHero";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";
import { isValidImage } from "@/lib/utils";

interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export const revalidate = 3600; // 1 hour

async function getProject(slug: string) {
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

  return project;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProject(slug);

  const images = isValidImage(project.cover)
    ? [
        {
          url: project.cover.url,
          width: project.cover.width ?? "",
          height: project.cover.height ?? "",
          alt: project.cover.alt ?? ""
        }
      ]
    : [];

  return {
    title: project.name,
    description: project.description,
    openGraph: {
      title: project.name,
      description: project.description,
      images
    }
  };
}

export default async function IndividualProject({ params }: Props) {
  const { slug } = await params;
  const project = await getProject(slug);
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
            <DetailedPageHero
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
            <Content name={project.name} content={content} />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
