"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";
import ballast from "@/public/ballast.jpg";
import sand from "@/public/sand.jpg";
import truck from "@/public/truck.png";
import hardcore from "@/public/hardcore.jpg";
import tractor from "@/public/tractor.jpg";

const products = [
  { id: "p1", name: "River Sand", category: "Materials", unit: "per ton",  image: sand, description: "Clean, well-graded river sand ideal for plastering and concrete work." },
  { id: "p2", name: "Ballast", category: "Materials", unit: "per ton",  image: ballast, description: "Crushed stone aggregate for foundations and concrete mixes." },
  { id: "p4", name: "Hardcore", category: "Materials", unit: "per ton",  image: hardcore, description: "Coarse stone for sub-base filling and hardstanding." },
  { id: "p5", name: "Tipper Truck Hire", category: "Transport", unit: "per trip (20km)",  image: truck, description: "10-ton tipper trucks for material delivery and removals." },
  { id: "p6", name: "Tractor Hire", category: "Machinery", unit: "per day", image: tractor, description: "Tractors with operator for site preparation and haulage." },
];

const cats = ["All", "Materials", "Transport", "Machinery"] as const;
type Category = (typeof cats)[number];

export function ProductsCatalog() {
  const [cat, setCat] = useState<Category>("All");
  const list = cat === "All" ? products : products.filter((p) => p.category === cat);

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">Catalog</p>
          <h1 className="mt-2 text-4xl md:text-5xl font-bold">Products & Pricing</h1>
          <p className="mt-3 text-muted-foreground max-w-xl">
            Transparent rates for materials, transport and machinery hire.
          </p>
        </div>
        <div className="flex gap-2">
          {cats.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat === c
                  ? "bg-primary text-primary-foreground shadow-brand"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  );
}