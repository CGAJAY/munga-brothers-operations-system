import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";


export const metadata: Metadata = {
  title: "Munga & Brothers — Construction Materials, Transport & Machinery",
  description:
    "Reliable supply of sand, ballast, cement, plus truck transport and machinery hire across Kenya.",
  openGraph: {
    title: "Munga & Brothers",
    description: "Construction materials, transport & machinery hire.",
  },
};

export default function Home() {
  return (
    <MarketingLayout>
      <h1 className="text-4xl font-bold text-center mt-20">Welcome to Munga & Brothers</h1>
    </MarketingLayout>
  );
}