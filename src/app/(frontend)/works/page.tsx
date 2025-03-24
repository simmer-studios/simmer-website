import config from "@payload-config";
import { Metadata } from "next";
import { BasePayload, getPayload } from "payload";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedContent from "@/components/sections/works/AnimatedContent";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 1 day

async function getWorksPage(payload: BasePayload) {
  return payload.findGlobal({ slug: "works-global" });
}

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const { seo } = await getWorksPage(payload);
  return getMetadata(seo);
}

async function getPageData() {
  const payload = await getPayload({ config });

  const worksPagePromise = getWorksPage(payload);

  const projectsPromise = payload.find({
    collection: "projects",
    limit: 1000,
    sort: ["-date"]
  });

  const [projects, worksPage] = await Promise.all([
    projectsPromise,
    worksPagePromise
  ]);

  const featuredProjects =
    Array.isArray(worksPage.featuredProjects) &&
    worksPage.featuredProjects.every((item) => typeof item !== "number")
      ? worksPage.featuredProjects
      : [];

  return {
    projects: projects.docs,
    featuredProjects,
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
