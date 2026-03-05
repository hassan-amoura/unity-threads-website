import { Suspense } from "react";
import { ShopPageClient } from "@/components/shop/shop-page-client";

export const metadata = {
  title: "Shop",
  description:
    "Explore Unity Threads’ boutique collection of sensory-aware tees and crew neck sweaters designed for autistic people, families, and advocates."
};

function ShopFallback() {
  return (
    <div className="container py-10 md:py-14">
      <div className="h-8 w-48 animate-pulse rounded-lg bg-ut-muted/30" />
      <div className="mt-4 h-4 w-full max-w-xl animate-pulse rounded bg-ut-muted/30" />
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<ShopFallback />}>
      <ShopPageClient />
    </Suspense>
  );
}


