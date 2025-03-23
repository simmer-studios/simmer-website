import { Metadata } from "next";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";

import { CheckoutContent } from "./CheckoutContent";

export const metadata: Metadata = {
  title: "Checkout | Simmer Studios"
};

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
