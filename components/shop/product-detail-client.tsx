"use client";

import Image from "next/image";
import { useState } from "react";
import { Product } from "@/lib/data/products";
import { Price } from "@/components/storefront/price";
import { Badge } from "@/components/ui/badge";
import { QuantitySelector } from "@/components/storefront/quantity-selector";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/lib/store/cart-store";

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
    <div className="container py-10 md:py-14">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <section aria-label={product.name}>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl bg-ut-muted/20">
            <Image
              src={primaryImage.src}
              alt={primaryImage.alt}
              fill
              sizes="(min-width: 1024px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </section>
        <section className="space-y-6">
          <header className="space-y-3">
            <div className="flex items-center gap-2">
              <Badge variant="soft">Sensory-aware</Badge>
            </div>
            <h1 className="font-display text-2xl md:text-3xl tracking-tight">
              {product.name}
            </h1>
            <Price amount={product.price} className="text-base" />
            <p className="text-sm text-ut-muted max-w-prose">
              {product.description}
            </p>
          </header>
          <div className="space-y-4">
            {product.sizes.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-medium text-ut-muted">
                  Size
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.sizes.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => setSize(s)}
                      className={`focus-ring rounded-full border px-3 py-1 text-xs ${
                        size === s
                          ? "border-ut-slate bg-ut-slate text-white"
                          : "border-ut-muted/40 bg-white text-ut-slate"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
            {product.colors.length > 0 && (
              <div className="space-y-2">
                <p className="text-xs font-medium text-ut-muted">
                  Color
                </p>
                <div className="flex flex-wrap gap-2">
                  {product.colors.map((c) => (
                    <button
                      key={c}
                      type="button"
                      onClick={() => setColor(c)}
                      className={`focus-ring rounded-full border px-3 py-1 text-xs ${
                        color === c
                          ? "border-ut-slate bg-ut-slate text-white"
                          : "border-ut-muted/40 bg-white text-ut-slate"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>
            )}
            <div className="space-y-2">
              <p className="text-xs font-medium text-ut-muted">
                Quantity
              </p>
              <QuantitySelector value={quantity} onChange={setQuantity} />
            </div>
            <div className="pt-2">
              <Button
                type="button"
                className="w-full sm:w-auto"
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
          <section className="space-y-3 border-t border-ut-muted/40 pt-4 text-sm">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-ut-muted">
                Fit notes
              </h2>
              <p className="mt-1 text-ut-muted">{product.fitNotes}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-ut-muted">
                Materials
              </h2>
              <p className="mt-1 text-ut-muted">{product.materials}</p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.22em] text-ut-muted">
                Impact
              </h2>
              <p className="mt-1 text-ut-muted">
                A portion of this piece supports autistic-led organizations and community-centered
                programming. Learn more on our Impact page.
              </p>
            </div>
          </section>
        </section>
      </div>
    </div>
  );
}

