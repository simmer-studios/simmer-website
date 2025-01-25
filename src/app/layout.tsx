import "./globals.css";

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Readonly<Props>) {
  return (
    <html lang="en-PH">
      <body className="antialiased">{children}</body>
    </html>
  );
}
