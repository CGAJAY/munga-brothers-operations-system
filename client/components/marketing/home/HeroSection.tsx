import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import hero from "@/public/hero.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={hero}
          alt=""
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>
      <div className="relative mx-auto max-w-7xl px-6 py-28 md:py-40 text-secondary-foreground">
        <span className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Trusted by 200+ contractors
        </span>
        <h1 className="mt-5 max-w-3xl text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] text-balance">
          Build bigger. <span className="text-primary">Move faster.</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-secondary-foreground/80">
          We supply construction materials, run a fleet of tipper trucks, and hire out machinery — so your site never stops.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/order">
            <Button size="lg" className="shadow-brand bg-primary hover:bg-primary/80">
              Order Materials <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <Link href="/services">
            <Button
              size="lg"
              variant="outline"
              className="border-primary/50 text-secondary-foreground bg-transparent"
            >
              Request Transport
            </Button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
          {[
            ["12+", "Years"],
            ["6,500+", "Trips"],
            ["98%", "On-time"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="text-2xl md:text-3xl font-bold text-primary">{n}</div>
              <div className="text-xs uppercase tracking-wider text-secondary-foreground/60">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}