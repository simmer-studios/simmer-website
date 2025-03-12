import "./globals.css";

import { AnimationProvider } from "@/context/AnimationContext";
import { CartProvider } from "@/contexts/CartContext";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en-PH">
      <body className="antialiased">
        <AnimationProvider>
          <CartProvider>{children}</CartProvider>
        </AnimationProvider>
      </body>
    </html>
  );
}
