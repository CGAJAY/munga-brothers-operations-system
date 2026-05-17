import { Phone, Mail, MapPin } from "lucide-react";

const details = [
  { icon: Phone, t: "Phone", v: "+254 700 000 000" },
  { icon: Mail, t: "Email", v: "hello@munga.co" },
  { icon: MapPin, t: "Yard", v: "Muthatari, Embu, Kenya" },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      {details.map((i) => (
        <div
          key={i.t}
          className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-card"
        >
          <div className="grid h-11 w-11 place-items-center rounded-lg bg-primary text-primary-foreground">
            <i.icon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-foreground">{i.t}</p>
            <p className="font-semibold mt-1">{i.v}</p>
          </div>
        </div>
      ))}
      <div className="aspect-video rounded-xl overflow-hidden border border-border">
        <iframe
  title="Map"
  src="https://www.openstreetmap.org/export/embed.html?bbox=37.38%2C-0.60%2C37.55%2C-0.45&layer=mapnik&marker=-0.54%2C37.45"
  className="h-full w-full"
  loading="lazy"
/>
      </div>
    </div>
  );
}