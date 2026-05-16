import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, Clock, Award } from "lucide-react";
import ballast from "@/public/ballast.jpg";
import sand from "@/public/sand.jpg";
import truck from "@/public/truck.png";
import hardcore from "@/public/hardcore.jpg";

const products = [
  { id: "p1", name: "River Sand", category: "Materials", unit: "per ton",  image: sand, description: "Clean, well-graded river sand ideal for plastering and concrete work." },
  { id: "p2", name: "Ballast", category: "Materials", unit: "per ton",  image: ballast, description: "Crushed stone aggregate for foundations and concrete mixes." },
  { id: "p4", name: "Hardcore", category: "Materials", unit: "per ton",  image: hardcore, description: "Coarse stone for sub-base filling and hardstanding." },
  { id: "p5", name: "Tipper Truck Hire", category: "Transport", unit: "per trip (20km)",  image: truck, description: "10-ton tipper trucks for material delivery and removals." },
  { id: "p6", name: "Tractor Hire", category: "Machinery", unit: "per day", image: truck, description: "Tractors with operator for site preparation and haulage." },
];
const features = [
  { icon: ShieldCheck, t: "Verified quality", d: "Every batch tested for grade and consistency." },
  { icon: Clock, t: "Same-day delivery", d: "Fleet dispatched within 24 hours of order." },
  { icon: Award, t: "Driver-rewarded", d: "Top-performing drivers earn bonuses — you get reliability." },
];

export function WhyUsSection() {
  const featured = products.slice(0, 3);

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Why us</p>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold text-balance">
            A logistics partner that moves with your timeline.
          </h2>
          <p className="mt-4 text-muted-foreground">
            From a single ton of sand to recurring multi-truck deliveries, we keep contractors stocked and projects on schedule.
          </p>
          <div className="mt-8 space-y-4">
            {features.map((f) => (
              <div key={f.t} className="flex gap-4">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{f.t}</h4>
                  <p className="text-sm text-muted-foreground">{f.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {featured.map((p) => (
            <div key={p.id} className="rounded-xl overflow-hidden border border-border bg-card shadow-card">
              <Image
                src={p.image}
                alt={p.name}
                width={300}
                height={128}
                className="h-32 w-full object-cover"
              />
              <div className="p-4">
                <p className="text-sm font-semibold">{p.name}</p>
               
              </div>
            </div>
          ))}
          <Link
            href="/products"
            className="rounded-xl bg-secondary text-secondary-foreground p-6 flex flex-col justify-between hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <span className="font-semibold">Browse full catalog</span>
            <ArrowRight className="h-5 w-5 self-end" />
          </Link>
        </div>
      </div>
    </section>
  );
}