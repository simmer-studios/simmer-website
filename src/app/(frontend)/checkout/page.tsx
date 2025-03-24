import config from "@payload-config";
import { Metadata } from "next";
import { getPayload } from "payload";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";
import { getMetadata } from "@/lib/utils/metadata";

import { CheckoutContent } from "./CheckoutContent";

export const revalidate = 86400; // 1 day

export async function generateMetadata(): Promise<Metadata> {
  const payload = await getPayload({ config });
  const { seo } = await payload.findGlobal({ slug: "checkout" });
  return getMetadata(seo);
}

export default function CheckoutPage() {
  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main>
        <ContentWrapper className="bg-black">
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full" id="checkout-body">
            <CheckoutContent />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
