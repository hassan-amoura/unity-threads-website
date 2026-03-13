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
      className="group focus-ring inline-flex items-center gap-2 rounded-full bg-ut-bg-alt/80 px-4 py-2.5 text-sm font-medium text-ut-slate transition-colors duration-200 hover:bg-ut-primary hover:text-white"
      aria-label={itemCount ? `View cart with ${itemCount} items` : "View cart"}
    >
      <span aria-hidden="true">🛒</span>
      <span className="hidden sm:inline">Cart</span>
      {itemCount > 0 && (
        <span className="inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-ut-primary/15 px-1.5 text-xs font-semibold text-ut-primary transition-colors group-hover:bg-white/20 group-hover:text-white">
          {itemCount}
        </span>
      )}
    </Link>
  );
}
