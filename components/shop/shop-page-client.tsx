"use client";

import { products, type ProductCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/storefront/product-card";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useMemo } from "react";
import { typography } from "@/lib/design-tokens";

const categoryLabels: Record<ProductCategory, string> = {
  "tshirt-short": "T Shirts · Short sleeve",
  "tshirt-long": "T Shirts · Long sleeve",
  crewneck: "Crew neck sweaters"
};

export function ShopPageClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const query = searchParams.get("q")?.toLowerCase() ?? "";
  const category = searchParams.get("category") as ProductCategory | null;

  const filtered = useMemo(
    () =>
      products.filter((product) => {
        const matchesCategory = category ? product.category === category : true;
        const matchesQuery = query
          ? product.name.toLowerCase().includes(query) ||
            product.description.toLowerCase().includes(query) ||
            product.tags.some((t) => t.toLowerCase().includes(query))
          : true;
        return matchesCategory && matchesQuery;
      }),
    [category, query]
  );

  const updateParam = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) params.set(key, value);
    else params.delete(key);
    router.replace(`/shop?${params.toString()}`);
  };

  const handleSelectChange =
    (field: "category") => (e: ChangeEvent<HTMLSelectElement>) => {
      updateParam(field, e.target.value);
    };

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateParam("q", e.target.value);
  };

  return (
    <div className="container py-section md:py-section-lg space-y-10">
      <header className="space-y-4 max-w-2xl">
        <h1 className={typography.section}>
          Boutique pieces for everyday advocacy
        </h1>
        <p className={typography.body + " text-ut-muted"}>
          Sensory-aware tees and crew necks designed with autistic people, families, and advocates.
          Filter gently, explore slowly, and choose what feels good on your body.
        </p>
      </header>

      <section
        aria-label="Shop filters"
        className="flex flex-wrap items-center gap-4 rounded-boutique-lg bg-ut-surface p-5 shadow-soft-sm"
      >
        <Input
          type="search"
          placeholder="Search by name, feeling, or tag"
          defaultValue={query}
          onChange={handleSearchChange}
          aria-label="Search products"
          className="max-w-xs"
        />
        <div className="flex flex-wrap items-center gap-3">
          <label className="flex items-center gap-2 text-sm text-ut-muted">
            <span className="whitespace-nowrap">Category</span>
            <select
              className="h-10 rounded-full border border-ut-muted/30 bg-ut-bg px-4 text-sm text-ut-slate focus-ring transition-colors"
              value={category ?? ""}
              onChange={handleSelectChange("category")}
            >
              <option value="">All</option>
              <option value="tshirt-short">T Shirts · Short sleeve</option>
              <option value="tshirt-long">T Shirts · Long sleeve</option>
              <option value="crewneck">Crew neck sweaters</option>
            </select>
          </label>
        </div>
      </section>

      <section aria-label="Products" className="space-y-8">
        {category ? (
          <p className={typography.label}>
            {categoryLabels[category]}
          </p>
        ) : null}
        {filtered.length === 0 ? (
          <p className={typography.body + " text-ut-muted"}>
            No pieces match your filters yet. Try easing your search or exploring a different
            category.
          </p>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
