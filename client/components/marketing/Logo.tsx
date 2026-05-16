import Link from "next/link";
import { Truck } from "lucide-react";

export function Logo({ dark = false }: { dark?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2 group">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-foreground shadow-brand transition-transform group-hover:scale-105">
        <Truck className="h-5 w-5" />
      </span>
      <span className={`font-display text-lg font-bold tracking-tight ${dark ? "text-sidebar-foreground" : "text-foreground"}`}>
        Munga<span className="text-primary"> & </span>Brothers
      </span>
    </Link>
  );
}
