import Footer from "@/components/Footer";
import Header from "@/components/Header";
import AnimatedContent from "@/components/sections/works/AnimatedContent";
import data from "@/lib/mockdata.json";

export function generateMetadata() {
  return {
    title: "Works | Simmer Studios",
    description: ""
  };
}

export default function PortfolioPage() {
  const projects = data.portfolios;

  return (
    <>
      <Header theme="light" />
      <AnimatedContent projects={projects} />
      <Footer />
    </>
  );
}
