"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Product } from "@/lib/data/products";
import { Price } from "@/components/storefront/price";
import { Badge } from "@/components/ui/badge";
import { QuantitySelector } from "@/components/storefront/quantity-selector";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import { typography } from "@/lib/design-tokens";

interface ProductDetailClientProps {
  product: Product;
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  const [size, setSize] = useState<string | undefined>(product.sizes[0]);
  const [color, setColor] = useState<string | undefined>(product.colors[0]);
  const [quantity, setQuantity] = useState(1);
  const addItem = useCartStore((s) => s.addItem);

  const primaryImage = product.images[0];

  return (
    <div className="container py-section md:py-section-lg">
      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
        <section aria-label={product.name}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-boutique-xl bg-ut-bg-alt/50 shadow-soft">
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </section>
        <section className="space-y-8">
          <header className="space-y-4">
            <div className="flex items-center gap-2">
              <Badge variant="soft">Sensory-aware</Badge>
            </div>
            <h1 className={typography.section}>
              {product.name}
            </h1>
            <Price amount={product.price} className="text-lg font-medium text-ut-slate" />
            <p className={typography.body + " text-ut-muted"}>
              {product.description}
            </p>
          </header>

          <div className="space-y-6">
            {product.sizes.length > 0 && (
              <div className="space-y-3">
                <p className={typography.label}>Size</p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        size === s
                          ? "bg-ut-primary text-white shadow-soft-sm"
                          : "bg-ut-surface border border-ut-muted/30 text-ut-slate hover:border-ut-primary/50"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.colors.length > 0 && (
              <div className="space-y-3">
                <p className={typography.label}>Color</p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`focus-ring rounded-full px-4 py-2 text-sm font-medium transition-all duration-200 ${
                        color === c
                          ? "bg-ut-primary text-white shadow-soft-sm"
                          : "bg-ut-surface border border-ut-muted/30 text-ut-slate hover:border-ut-primary/50"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-3">
              <p className={typography.label}>Quantity</p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
            <div className="pt-2">
              <Button
                type="button"
                className="w-full sm:w-auto min-w-[180px]"
                onClick={() =>
                  addItem({
                    product,
                    size: size as any,
                    color,
                    quantity
                  })
                }
              >
                Add to cart
              </Button>
            </div>
          </div>

          {/* Why this product matters — storytelling section */}
          <section
            className="rounded-boutique-lg bg-ut-bg-alt/50 p-6 md:p-8 space-y-6 border border-ut-muted/10"
            aria-labelledby="why-matters-heading"
          >
            <h2 id="why-matters-heading" className={typography.heading}>
              Why this product matters
            </h2>
            <div className="space-y-5 text-sm">
              <div>
                <h3 className={typography.label + " mb-1"}>Fit notes</h3>
                <p className="text-ut-muted leading-relaxed">{product.fitNotes}</p>
              </div>
              <div>
                <h3 className={typography.label + " mb-1"}>Materials</h3>
                <p className="text-ut-muted leading-relaxed">{product.materials}</p>
              </div>
              <div>
                <h3 className={typography.label + " mb-1"}>Shipping & returns</h3>
                <p className="text-ut-muted leading-relaxed">
                  Free shipping on orders over $75. Easy returns within 30 days. We want you to love how it fits and feels.
                </p>
              </div>
              <div>
                <h3 className={typography.label + " mb-1"}>Impact</h3>
                <p className="text-ut-muted leading-relaxed">
                  A portion of this piece supports autistic-led organizations and community-centered
                  programming. <Link href="/impact" className="text-ut-primary underline underline-offset-2 hover:text-ut-primary/90">Learn more on our Impact page</Link>.
                </p>
              </div>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}
