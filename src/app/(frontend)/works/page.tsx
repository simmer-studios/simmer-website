import config from "@payload-config";
import { getPayload } from "payload";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedContent from "@/components/sections/works/AnimatedContent";

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
    },
    sort: ["-year"]
  });

  const featuredProjects = await payload.find({
    collection: "projects",
    limit: 2,
    where: {
      featured: {
        equals: true
      }
    }
  });

  const worksPage = await payload.findGlobal({
    slug: "works-global"
  });

  return (
    <>
      <Header theme="light" />
      <AnimatedContent
        projects={projects.docs}
        featuredProjects={featuredProjects.docs}
        categories={worksPage.categories}
      />
      <Footer />
    </>
  );
}
