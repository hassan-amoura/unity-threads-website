import Link from "next/link";
import { ReactNode } from "react";
import { CartPill } from "@/components/layout/cart-pill";

const navLinkClasses =
  "text-sm font-medium text-ut-slate/80 hover:text-ut-slate focus-ring rounded-full px-3 py-1.5";

export function SiteHeader(): ReactNode {
  return (
    <header className="border-b border-ut-muted/40 bg-white backdrop-blur">
      <div className="container flex h-16 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 focus-ring rounded-full px-2 py-1">
          <div className="h-8 w-8 rounded-full bg-ut-primary shadow-soft" aria-hidden="true" />
          <span className="font-display text-lg tracking-tight text-ut-slate">
            Unity <span className="text-ut-primary">Threads</span>
          </span>
        </Link>
        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          <Link href="/shop" className={navLinkClasses}>
            Shop
          </Link>
          <Link href="/orders/custom" className={navLinkClasses}>
            Custom Orders
          </Link>
          <Link href="/orders/corporate" className={navLinkClasses}>
            Corporate
          </Link>
          <Link href="/orders/bulk" className={navLinkClasses}>
            Bulk
          </Link>
          <Link href="/impact" className={navLinkClasses}>
            Impact
          </Link>
          <Link href="/about" className={navLinkClasses}>
            About
          </Link>
          <Link href="/faq" className={navLinkClasses}>
            FAQ
          </Link>
          <Link href="/contact" className={navLinkClasses}>
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-3">
          <CartPill />
        </div>
      </div>
    </header>
  );
}

