"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CustomOrderConfirmedContent() {
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId") ?? "UT-CUSTOM-DEMO";

  return (
    <div className="container py-12 md:py-16 max-w-2xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted">
          Thank you for trusting us
        </p>
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your custom request is in gentle motion.
        </h1>
      </header>
      <p className="text-sm text-ut-muted">
        This demo has safely received your details. In our full studio workflow, a team member
        reviews each request with care, then follows up with clarifying questions, sketches, and a
        transparent quote.
      </p>
      <div className="rounded-2xl border border-ut-muted/30 bg-white p-4 text-sm">
        <p className="font-medium text-ut-slate">Request ID</p>
        <p className="mt-1 text-xs text-ut-muted">{requestId}</p>
        <p className="mt-3 text-xs text-ut-muted">
          We recommend saving this ID somewhere that works for your memory and routines. You can
          reference it in any follow-up conversations with our team.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <Link href="/shop">Browse ready-to-wear pieces</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/impact">Read about our impact</Link>
        </Button>
      </div>
    </div>
  );
}
