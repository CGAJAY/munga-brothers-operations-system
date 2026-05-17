import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { ProductsCatalog } from "@/components/marketing/products/ProductsCatalog";

export const metadata: Metadata = {
  title: "Products — Munga & Brothers",
  description: "Browse construction materials, transport and machinery hire pricing.",
};

export default function ProductsPage() {
  return (
    <MarketingLayout>
      <ProductsCatalog />
    </MarketingLayout>
  );
}