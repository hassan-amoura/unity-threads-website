import { Suspense } from "react";
import { CheckoutConfirmedContent } from "./confirmed-content";

export default function CheckoutConfirmedPage() {
  return (
    <Suspense
      fallback={
        <div className="container py-12 md:py-16 max-w-2xl">
          <div className="h-8 w-64 animate-pulse rounded-lg bg-ut-muted/30" />
        </div>
      }
    >
      <CheckoutConfirmedContent />
    </Suspense>
  );
}
