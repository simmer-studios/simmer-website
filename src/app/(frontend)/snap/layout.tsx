import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Snaps | Simmer Studios",
  description: ""
};

export default function SnapsLayout({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
