"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CheckoutConfirmedContent() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId") ?? "UT-DEMO";

  return (
    <div className="container py-12 md:py-16 max-w-2xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted">
          Thank you
        </p>
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your order is gently confirmed.
        </h1>
      </header>
      <p className="text-sm text-ut-muted">
        This is a demo experience. In a live setting, you&apos;d receive an email with your
        confirmation details, tracking information, and ways to stay involved with our autism
        advocacy partners.
      </p>
      <div className="rounded-2xl border border-ut-muted/30 bg-white p-4 text-sm">
        <p className="font-medium text-ut-slate">Order ID</p>
        <p className="mt-1 text-xs text-ut-muted">{orderId}</p>
        <p className="mt-3 text-xs text-ut-muted">
          We recommend saving this ID somewhere that feels comfortable for you. If you have any
          questions or access needs, our team is here to support you with care.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <Link href="/shop">Return to shop</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/impact">Explore our impact</Link>
        </Button>
      </div>
    </div>
  );
}
