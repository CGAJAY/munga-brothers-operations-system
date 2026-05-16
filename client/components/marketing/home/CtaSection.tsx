import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section className="mx-auto max-w-7xl px-6 pt-10">
      <div className="rounded-2xl bg-gradient-hero p-10 md:p-14 text-primary-foreground shadow-brand flex flex-col md:flex-row md:items-center md:justify-between gap-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-balance">
            Need materials on site today?
          </h2>
          <p className="mt-2 text-primary-foreground/80">
            Place an order and we'll dispatch within 24 hours.
          </p>
        </div>
        <Link href="/order">
          <Button size="lg" variant="secondary" className="shadow-lg">
            Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </section>
  );
}