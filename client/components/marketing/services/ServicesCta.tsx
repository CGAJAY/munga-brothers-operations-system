import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ServicesCta() {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-20">
      <div className="rounded-2xl bg-secondary p-10 text-secondary-foreground text-center">
        <h2 className="text-3xl font-bold">Have a project in mind?</h2>
        <p className="mt-2 text-secondary-foreground/70">
          Tell us what you need — we'll send a tailored quote.
        </p>
        <Link href="/order" className="inline-block mt-6">
          <Button size="lg">Request a Quote</Button>
        </Link>
      </div>
    </section>
  );
}