import Link from "next/link";
import { ReactNode } from "react";
import { CartPill } from "@/components/layout/cart-pill";

const navLinkClasses =
  "text-sm font-medium text-ut-slate/90 hover:text-ut-primary focus-ring rounded-full px-4 py-2 transition-colors duration-200";

export function SiteHeader(): ReactNode {
  return (
    <header className="border-b border-ut-muted/20 bg-ut-surface/80 backdrop-blur-md">
      <div className="container flex h-18 min-h-[4.5rem] items-center justify-between gap-8">
        <Link
          href="/"
          className="flex items-center gap-2.5 focus-ring rounded-full px-2 py-2 -ml-2"
          aria-label="Unity Threads home"
        >
          <div
            className="h-9 w-9 rounded-full bg-ut-primary shadow-soft-sm"
            aria-hidden="true"
          />
          <span className="font-display text-xl tracking-tight text-ut-slate">
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
        <div className="flex items-center gap-2">
          <CartPill />
        </div>
      </div>
    </header>
  );
}
