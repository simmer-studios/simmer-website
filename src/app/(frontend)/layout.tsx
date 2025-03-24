import "./globals.css";

import { Metadata } from "next";

import SmoothScroll from "@/components/SmoothScroll";
import { DEFAULT_METADATA_IMAGE, WEBSITE_URL } from "@/constants";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { CartProvider } from "@/contexts/CartContext";
import { PostHogProvider } from "@/providers/PostHogProvider";

// Global metadata
// Can be overridden by individual pages
export const metadata: Metadata = {
  metadataBase: new URL(WEBSITE_URL),
  title: "Simmer Studios",
  openGraph: {
    siteName: "Simmer Studios",
    type: "website",
    images: [DEFAULT_METADATA_IMAGE]
  }
};

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <AnimationProvider>
          <PostHogProvider>
            <CartProvider>
              <SmoothScroll>{children}</SmoothScroll>
            </CartProvider>
          </PostHogProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
