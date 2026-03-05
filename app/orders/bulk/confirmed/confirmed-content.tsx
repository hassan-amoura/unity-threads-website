"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export function BulkOrderConfirmedContent() {
  const searchParams = useSearchParams();
  const requestId = searchParams.get("requestId") ?? "UT-BULK-DEMO";

  return (
    <div className="container py-12 md:py-16 max-w-2xl space-y-6">
      <header className="space-y-2">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted">
          Thanks for caring for your community
        </p>
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your bulk request is safely noted.
        </h1>
      </header>
      <p className="text-sm text-ut-muted">
        In a full studio environment, our team would now review your quantity, timeline, and size
        breakdown, then reach out with thoughtful recommendations shaped around your community&apos;s
        needs.
      </p>
      <div className="rounded-2xl border border-ut-muted/30 bg-white p-4 text-sm">
        <p className="font-medium text-ut-slate">Request ID</p>
        <p className="mt-1 text-xs text-ut-muted">{requestId}</p>
        <p className="mt-3 text-xs text-ut-muted">
          You can reference this ID when following up with us or sharing details with collaborators.
        </p>
      </div>
      <div className="flex flex-wrap gap-3 pt-2">
        <Button asChild>
          <Link href="/shop">Explore individual pieces</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/impact">Learn about our impact</Link>
        </Button>
      </div>
    </div>
  );
}
