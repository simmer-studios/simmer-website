import config from "@payload-config";
import { Metadata } from "next";
import { BasePayload, getPayload } from "payload";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedContent from "@/components/sections/works/AnimatedContent";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 1 day

async function getWorksPage(payload: BasePayload) {
  return payload.findGlobal({
    slug: "works-global"
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });

  const worksPage = await getWorksPage(payload);

  return getMetadata({
    title: worksPage.seo.title,
    description: worksPage.seo.description,
    image: worksPage.seo.image
  });
}

async function getPageData() {
  const payload = await getPayload({ config });

  const worksPagePromise = getWorksPage(payload);

  const projectsPromise = payload.find({
    collection: "projects",
    pagination: true,
    where: {
      featured: {
        equals: false
      }
    },
    sort: ["-date"]
  });

  const featuredProjectsPromise = payload.find({
    collection: "projects",
    page: 1,
    limit: 2,
    where: {
      featured: {
        equals: true
      }
    },
    sort: ["-date"]
  });

  const [projects, featuredProjects, worksPage] = await Promise.all([
    projectsPromise,
    featuredProjectsPromise,
    worksPagePromise
  ]);

  return {
    projects: projects.docs,
    featuredProjects: featuredProjects.docs,
    categories: worksPage.categories
  };
}

export default async function WorksPage() {
  const { projects, featuredProjects, categories } = await getPageData();

  return (
    <>
      <Header theme="light" />
      <AnimatedContent
        projects={projects}
        featuredProjects={featuredProjects}
        categories={categories}
      />
      <Footer />
    </>
  );
}
