import type { Metadata } from "next";
import { MarketingLayout } from "@/components/marketing/MarketingLayout";
import { ContactInfo } from "@/components/marketing/contact/ContactInfo";
import { ContactForm } from "@/components/marketing/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Munga & Brothers",
  description:
    "Get in touch with Munga & Brothers for materials, transport or machinery hire.",
};

export default function ContactPage() {
  return (
    <MarketingLayout>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <p className="text-xs font-semibold uppercase tracking-widest text-primary">Contact</p>
        <h1 className="mt-2 text-4xl md:text-5xl font-bold">Let's talk.</h1>
        <div className="mt-12 grid lg:grid-cols-2 gap-10">
          <ContactInfo />
          <ContactForm />
        </div>
      </section>
    </MarketingLayout>
  );
}