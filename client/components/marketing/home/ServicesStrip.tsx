import { Package, Truck, Wrench } from "lucide-react";

const services = [
  { icon: Package, title: "Materials Supply", desc: "Sand, ballast and more — delivered to site." },
  { icon: Truck, title: "Transport Services", desc: "10-ton tippers ready for short and long hauls." },
  { icon: Wrench, title: "Machinery Hire", desc: "Tractors and equipment with skilled operators." },
];

export function ServicesStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 -mt-12 relative z-10">
      <div className="grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-xl border border-border bg-card p-6 shadow-card hover:shadow-brand transition-all"
          >
            <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{s.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{s.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}