import config from "@payload-config";
import { getPayload } from "payload";

import WelcomePage from "@/components/sections/welcome/WelcomePage";

export const revalidate = 86400; // 24 hours

export function generateMetadata() {
  return {
    title: "Branding Questionnaire | Simmer Studios",
    description: ""
  };
}

export default async function BrandingPage() {
  const payload = await getPayload({ config });

  const brandingPage = await payload.findGlobal({
    slug: "brand-questionnaire"
  });

  return <WelcomePage brandingPage={brandingPage} />;
}
