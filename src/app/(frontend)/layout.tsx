import "./globals.css";

import { Metadata } from "next";

import SmoothScroll from "@/components/SmoothScroll";
import { AnimationProvider } from "@/contexts/AnimationContext";
import { CartProvider } from "@/contexts/CartContext";

// Global metadata
// Can be overridden by individual pages
export const metadata: Metadata = {
  title: "Simmer Studios",
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    siteName: "Simmer Studios",
    type: "website"
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
          <CartProvider>
            <SmoothScroll>{children}</SmoothScroll>
          </CartProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
