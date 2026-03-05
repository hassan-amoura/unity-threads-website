"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";

export function CartPill() {
  const itemCount = useCartStore((s) =>
    s.items.reduce((acc, item) => acc + item.quantity, 0)
  );

  return (
    <Link
      href="/cart"
      className="focus-ring inline-flex items-center gap-1.5 rounded-full border border-ut-muted/40 bg-white px-3 py-1.5 text-sm text-ut-slate"
      aria-label={itemCount ? `View cart with ${itemCount} items` : "View cart"}
    >
      <span aria-hidden="true">🛒</span>
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="ml-0.5 inline-flex h-5 min-w-[1.5rem] items-center justify-center rounded-full bg-ut-primary/10 text-xs font-medium text-ut-primary">
          {itemCount}
        </span>
      )}
    </Link>
  );
}

