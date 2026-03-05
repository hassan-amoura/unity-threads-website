import { Suspense } from "react";
import { BulkOrderConfirmedContent } from "./confirmed-content";

export default function BulkOrderConfirmedPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-12 md:py-16 max-w-2xl">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-ut-muted/30" />
        </div>
      }
    >
      <BulkOrderConfirmedContent />
    </Suspense>
  );
}
