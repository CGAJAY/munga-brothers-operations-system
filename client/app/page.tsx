import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { HeroSection } from "@/components/marketing/home/HeroSection";
import { CtaSection } from "@/components/marketing/home/CtaSection";
import { WhyUsSection } from "@/components/marketing/home/WhyUsSection";
import { ServicesStrip } from "@/components/marketing/home/ServicesStrip";


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
      <HeroSection />
      <CtaSection />
      <WhyUsSection />
      <ServicesStrip />
    </MarketingLayout>
  );
}