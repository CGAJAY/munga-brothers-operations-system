import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { Award, Users, Truck, Building2 } from "lucide-react";


export const metadata: Metadata = {
  title: "About — Munga & Brothers",
  description: "Family-run construction supply company serving contractors across the region for over a decade.",
};

export default function AboutPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">About us</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold max-w-3xl text-balance">A family business built on every load we deliver.</h1>
        <div className="mt-10 grid md:grid-cols-2 gap-10 max-w-5xl">
          <p className="text-muted-foreground leading-relaxed">
            Munga & Brothers started in 2013 with a single tipper truck and a promise: deliver on time, every time. Twelve years on, we run a fleet of trucks, supply premium materials to over 200 contractors, and hire out machinery on sites across the region.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We're proudly family-owned and operator-led — every driver in our fleet is part of a performance and rewards program that keeps service standards high. When you order from us, you're working with a team that takes the job personally.
          </p>
        </div>
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Building2, n: "12+", l: "Years in business" },
            { icon: Truck, n: "20", l: "Trucks in fleet" },
            { icon: Users, n: "200+", l: "Contractor clients" },
            { icon: Award, n: "98%", l: "On-time delivery" },
          ].map((s) => (
            <div key={s.l} className="rounded-xl bg-card border border-border p-6 shadow-card">
              <s.icon className="h-6 w-6 text-primary" />
              <div className="mt-3 text-3xl font-bold">{s.n}</div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </section>
    </MarketingLayout>
  );
}
