import "./globals.css";

import LoadingScreen from "@/app/(frontend)/loading";
import SmoothScroll from "@/components/SmoothScroll";
import { AnimationProvider } from "@/context/AnimationContext";
import { CartProvider } from "@/contexts/CartContext";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AnimationProvider>
          <CartProvider>
            <LoadingScreen />
            <SmoothScroll>{children}</SmoothScroll>
          </CartProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
