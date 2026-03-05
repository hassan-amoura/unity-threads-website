"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CorporateOrderConfirmedContent() {
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId") ?? "UT-CORP-DEMO";

  return (
    <div className="container py-12 md:py-16 max-w-2xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted">
          Thank you for partnering with us
        </p>
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your corporate request is on our radar.
        </h1>
      </header>
      <p className="text-sm text-ut-muted">
        This demo has recorded your details. In a live studio flow, we&apos;d now review your
        quantities, access needs, and branding guidelines, then reply with curated product
        suggestions and timelines.
      </p>
      <div className="rounded-2xl border border-ut-muted/30 bg-white p-4 text-sm">
        <p className="font-medium text-ut-slate">Request ID</p>
        <p className="mt-1 text-xs text-ut-muted">{requestId}</p>
        <p className="mt-3 text-xs text-ut-muted">
          Save this ID for your records and share it with anyone else on your team who may reach
          out to us about this collaboration.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <Link href="/shop">Preview ready-to-wear pieces</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/impact">See how we give back</Link>
        </Button>
      </div>
    </div>
  );
}
