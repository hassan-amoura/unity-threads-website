"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/data/products";
import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/storefront/price";
import { typography } from "@/lib/design-tokens";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images[0];

  return (
    <article className="group flex flex-col rounded-boutique-lg bg-ut-surface shadow-soft-sm transition-all duration-300 hover:shadow-soft focus-within:shadow-soft overflow-hidden">
      <Link
        href={`/shop/${product.slug}`}
        className="focus-ring block flex-1 overflow-hidden rounded-t-boutique-lg outline-none"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden bg-ut-bg-alt/50">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-2">
          <h2 className={typography.productTitle + " leading-snug"}>
            <Link
              href={`/shop/${product.slug}`}
              className="focus-ring rounded outline-none hover:text-ut-primary transition-colors"
            >
              {product.name}
            </Link>
          </h2>
          <Price amount={product.price} />
        </div>
        <p className={typography.subtle + " line-clamp-2"}>
          {product.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-2">
          {product.tags.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="soft">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </article>
  );
}
