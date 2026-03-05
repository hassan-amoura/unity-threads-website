import { Suspense } from "react";
import { CustomOrderConfirmedContent } from "./confirmed-content";

export default function CustomOrderConfirmedPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-12 md:py-16 max-w-2xl">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-ut-muted/30" />
        </div>
      }
    >
      <CustomOrderConfirmedContent />
    </Suspense>
  );
}
