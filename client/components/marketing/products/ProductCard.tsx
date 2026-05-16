import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

// Replace with your actual product type from mock-data
type Product = {
  id: string | number;
  name: string;
  description: string;
  image: StaticImageData;
  unit: string;
  category: string;
};

export function ProductCard({ product: p }: { product: Product }) {
  return (
    <article className="group rounded-xl overflow-hidden border border-border bg-card shadow-card hover:shadow-brand transition-all">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={p.image}
          alt={p.name}
          width={400}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </div>
      <div className="p-5">
        <Badge variant="secondary" className="mb-2 text-[10px]">{p.category}</Badge>
        <h3 className="font-bold text-lg">{p.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{p.description}</p>
        <div className="mt-4 flex items-end justify-between">
          <div>
            {/* <div className="text-xl font-bold text-primary">KSh {p.price.toLocaleString()}</div> */}
            <div className="text-xs text-muted-foreground">{p.unit}</div>
          </div>
          <Link href="/order">
            <Button size="sm">Request quote</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}