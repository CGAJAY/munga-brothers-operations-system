import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { ServicesHero } from "@/components/marketing/services/ServicesHero";
import { ServicesGrid } from "@/components/marketing/services/ServicesGrid";
import { ServicesCta } from "@/components/marketing/services/ServicesCta";



export const metadata: Metadata = {
  title: "Services — Munga & Brothers",
  description:
    "Materials supply, transport services, and machinery hire for construction projects.",
};
 
export default function ServicesPage() {
  return (
    <MarketingLayout>
      <ServicesHero />
      <ServicesGrid />
      <ServicesCta />
    </MarketingLayout>
  );
}