import CheckoutForm from "@/components/CheckoutForm";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StickySidebar from "@/components/StickySidebar";
import CheckoutHeaderLG from "@/components/sections/checkout/CheckoutHeaderLG";

import CheckoutHeaderSM from "@/components/sections/checkout/CheckoutHeaderSM";

export function generateMetadata() {
  return {
    title: "Checkout | Simmer Studios",
    description: ""
  };
}

/* CHECKOUT PAGE */
export default function CheckoutPage() {
  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main>
        <ContentWrapper className="bg-black">
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full">
            <CheckoutHeaderSM className="flex lg:hidden" />
            <CheckoutHeaderLG className="hidden lg:flex" />
            <CheckoutForm />
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
