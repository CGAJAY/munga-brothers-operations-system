import { Package, Truck, Wrench, Check } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Construction Materials",
    desc: "Wholesale and retail supply of sand, ballast, hardcore and aggregate — sourced from approved quarries.",
    bullets: ["Quality-tested aggregates", "Bulk pricing available", "Same-day delivery"],
  },
  {
    icon: Truck,
    title: "Truck Transport",
    desc: "A fleet of 10-ton tipper trucks for material delivery, debris removal and site logistics across the region.",
    bullets: ["10-ton tipper fleet", "GPS tracked deliveries", "Per-trip or contract rates"],
  },
  {
    icon: Wrench,
    title: "Machinery Hire",
    desc: "Tractors and construction machinery available with experienced operators on daily, weekly or project terms.",
    bullets: ["Tractors with operators", "Site clearance equipment", "Flexible hire periods"],
  },
];

export function ServicesGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 grid gap-6 md:grid-cols-3">
      {services.map((s) => (
        <article key={s.title} className="rounded-xl border border-border bg-card p-7 shadow-card">
          <div className="grid h-12 w-12 place-items-center rounded-lg bg-primary text-primary-foreground">
            <s.icon className="h-6 w-6" />
          </div>
          <h2 className="mt-5 text-xl font-bold">{s.title}</h2>
          <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
          <ul className="mt-5 space-y-2">
            {s.bullets.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm">
                <Check className="h-4 w-4 text-primary mt-0.5" />
                {b}
              </li>
            ))}
          </ul>
        </article>
      ))}
    </section>
  );
}