"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (to: string) =>
    to === "/" ? pathname === "/" : pathname === to;

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
        <Logo />

        <nav className="hidden md:flex items-center gap-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              className={
                isActive(n.to)
                  ? "px-3 py-2 text-sm font-medium text-foreground rounded-md bg-muted"
                  : "px-3 py-2 text-sm font-medium text-muted-foreground rounded-md hover:text-foreground hover:bg-muted transition-colors"
              }
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-2">
          <Link href="/login">
            <Button variant="ghost" size="sm">Sign in</Button>
          </Link>
          <Link href="/order">
            <Button size="sm" className="shadow-brand">Order Now</Button>
          </Link>
        </div>

        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background px-4 py-3 space-y-1">
          {nav.map((n) => (
            <Link
              key={n.to}
              href={n.to}
              onClick={() => setOpen(false)}
              className={`block px-3 py-2 text-sm font-medium rounded-md hover:bg-muted ${
                isActive(n.to) ? "text-foreground bg-muted" : "text-muted-foreground"
              }`}
            >
              {n.label}
            </Link>
          ))}
          <div className="pt-2 flex gap-2">
            <Link href="/login" className="flex-1">
              <Button variant="outline" className="w-full">Sign in</Button>
            </Link>
            <Link href="/order" className="flex-1">
              <Button className="w-full">Order</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}