import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedContent from "@/components/sections/works/AnimatedContent";
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
      <AnimatedContent projects={projects} />
      <Footer />
    </>
  );
}
