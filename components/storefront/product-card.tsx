"use client";

import Link from "next/link";
import Image from "next/image";
import { Product } from "@/lib/data/products";
import { Badge } from "@/components/ui/badge";
import { Price } from "@/components/storefront/price";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const primaryImage = product.images[0];

  return (
    <article className="group flex flex-col rounded-3xl border border-ut-muted/30 bg-white p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-soft focus-within:shadow-soft">
      <Link
        href={`/shop/${product.slug}`}
        className="focus-ring rounded-2xl outline-none"
      >
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl bg-ut-muted/20">
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            sizes="(min-width: 1024px) 25vw, 50vw"
            className="object-cover transition duration-500 group-hover:scale-[1.03]"
          />
        </div>
      </Link>
      <div className="mt-3 flex flex-1 flex-col gap-2 px-1 pb-1">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-sm font-medium leading-snug">
            <Link
              href={`/shop/${product.slug}`}
              className="focus-ring rounded-md outline-none"
            >
              {product.name}
            </Link>
          </h2>
          <Price amount={product.price} />
        </div>
        <p className="line-clamp-2 text-xs text-ut-muted">
          {product.description}
        </p>
        <div className="mt-auto flex flex-wrap gap-1 pt-2">
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

