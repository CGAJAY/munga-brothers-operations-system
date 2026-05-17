"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
        toast.success("Message sent — we'll get back to you shortly.");
      }}
      className="rounded-xl border border-border bg-card p-7 shadow-card space-y-4"
    >
      <h2 className="text-2xl font-bold">Send us a message</h2>
      <div className="grid gap-2">
        <Label>Name</Label>
        <Input required maxLength={100} />
      </div>
      <div className="grid gap-2">
        <Label>Email</Label>
        <Input type="email" required maxLength={255} />
      </div>
      <div className="grid gap-2">
        <Label>Phone</Label>
        <Input type="tel" maxLength={20} />
      </div>
      <div className="grid gap-2">
        <Label>Message</Label>
        <Textarea rows={5} required maxLength={1000} />
      </div>
      <Button type="submit" className="w-full shadow-brand" size="lg">
        {sent ? "Sent ✓" : "Send message"}
      </Button>
    </form>
  );
}