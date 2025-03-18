import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import WelcomePage from "@/components/sections/welcome/WelcomePage";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 24 hours

async function getBrandQuestionnaire() {
  const payload = await getPayload({ config });

  return payload.findGlobal({
    slug: "brand-questionnaire"
  });
}

export async function generateMetadata(): Promise<Metadata> {
  const { seo } = await getBrandQuestionnaire();

  return getMetadata({
    title: seo.title,
    description: seo.description,
    image: seo.image
  });
}

export default async function BrandQuestionnairePage() {
  const brandQuestionnaire = await getBrandQuestionnaire();

  return <WelcomePage brandingPage={brandQuestionnaire} />;
}
