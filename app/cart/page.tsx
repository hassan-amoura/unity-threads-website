"use client";

import Link from "next/link";
import { useCartStore } from "@/lib/store/cart-store";
import { QuantitySelector } from "@/components/storefront/quantity-selector";
import { Button } from "@/components/ui/button";
import { Price } from "@/components/storefront/price";

export default function CartPage() {
  const items = useCartStore((s) => s.items);
  const removeItem = useCartStore((s) => s.removeItem);
  const updateQuantity = useCartStore((s) => s.updateQuantity);

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container py-12 md:py-16 max-w-2xl">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Your cart is feeling light.
        </h1>
        <p className="mt-3 text-sm text-ut-muted">
          When you find pieces that feel right for your body and routines, they&apos;ll gather here.
        </p>
        <div className="mt-6">
          <Button asChild>
            <Link href="/shop">Return to shop</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-10 md:py-14 grid gap-10 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
      <section aria-label="Cart items" className="space-y-4">
        <h1 className="font-display text-2xl tracking-tight">Your cart</h1>
        <ul className="space-y-3">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col gap-3 rounded-2xl border border-ut-muted/30 bg-white p-3 sm:flex-row sm:items-center sm:justify-between"
            >
              <div>
                <p className="text-sm font-medium">{item.product.name}</p>
                <p className="mt-1 text-xs text-ut-muted">
                  {item.size && <span>Size {item.size}</span>}
                  {item.size && item.color && <span aria-hidden="true"> · </span>}
                  {item.color && <span>{item.color}</span>}
                </p>
              </div>
              <div className="flex items-center justify-between gap-3 sm:justify-end">
                <QuantitySelector
                  value={item.quantity}
                  onChange={(q) => updateQuantity(item.id, q)}
                />
                <div className="flex flex-col items-end gap-1">
                  <Price amount={item.product.price * item.quantity} />
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="text-[11px] text-ut-muted underline underline-offset-4 hover:text-ut-slate"
                  >
                    Remove
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <aside
        aria-label="Order summary"
        className="space-y-4 rounded-2xl border border-ut-muted/30 bg-white p-4 shadow-soft"
      >
        <h2 className="text-sm font-semibold tracking-tight">Order summary</h2>
        <div className="flex items-center justify-between text-sm">
          <span className="text-ut-muted">Subtotal</span>
          <Price amount={subtotal} />
        </div>
        <p className="text-xs text-ut-muted">
          Shipping and taxes are calculated at checkout. No payment will be processed on this demo
          experience.
        </p>
        <Button asChild className="w-full mt-2">
          <Link href="/checkout">Proceed to checkout</Link>
        </Button>
      </aside>
    </div>
  );
}

