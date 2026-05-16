import Link from "next/link";
import { Logo } from "./Logo";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground mt">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        <div className="space-y-3">
          <Logo dark />
          <p className="text-sm text-secondary-foreground/70 max-w-xs">
            Reliable supply of construction materials, transport and machinery hire across the region.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Company</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li><Link href="/about" className="hover:text-primary">About</Link></li>
            <li><Link href="/services" className="hover:text-primary">Services</Link></li>
            <li><Link href="/products" className="hover:text-primary">Products</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Get in touch</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4 text-primary" />+254 700 000 000</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4 text-primary" />hello@munga.co</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4 text-primary" />Kiambu, Kenya</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Hours</h4>
          <ul className="space-y-2 text-sm text-secondary-foreground/70">
            <li>Mon – Sat: 6am – 7pm</li>
            <li>Sun: 8am – 1pm</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-5 text-xs text-secondary-foreground/60 flex flex-wrap gap-2 justify-between">
          <span>© {new Date().getFullYear()} Munga & Brothers. All rights reserved.</span>
          <span>Built for builders.</span>
        </div>
      </div>
    </footer>
  );
}