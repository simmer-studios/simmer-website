import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import WelcomePage from "@/components/sections/welcome/WelcomePage";
import { getMetadata } from "@/lib/utils/metadata";

export const revalidate = 86400; // 1 day

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const { seo } = await payload.findGlobal({
    slug: "brand-questionnaire",
    select: {
      seo: true
    }
  });
  return getMetadata(seo);
}

export default async function BrandQuestionnairePage() {
  const payload = await getPayload({ config });
  const brandQuestionnaire = await payload.findGlobal({
    slug: "brand-questionnaire"
  });

  return <WelcomePage brandingPage={brandQuestionnaire} />;
}
