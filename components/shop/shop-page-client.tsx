"use client";

import { products, type ProductCategory } from "@/lib/data/products";
import { ProductCard } from "@/components/storefront/product-card";
import { Input } from "@/components/ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import { ChangeEvent, useMemo } from "react";

const categoryLabels: Record<ProductCategory, string> = {
  "tshirt-short": "T shirts · Short sleeve",
  "tshirt-long": "T shirts · Long sleeve",
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
    <div className="container py-10 md:py-14 space-y-8">
      <header className="space-y-3 max-w-2xl">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Boutique pieces for everyday advocacy.
        </h1>
        <p className="text-sm text-ut-muted">
          Sensory-aware tees and crew necks designed with autistic people, families, and advocates.
          Filter gently, explore slowly, and choose what feels good on your body.
        </p>
      </header>

      <section
        aria-label="Shop filters"
        className="flex flex-wrap items-center gap-3 rounded-2xl border border-ut-muted/30 bg-white p-4"
      >
        <Input
          type="search"
          placeholder="Search by name, feeling, or tag"
          defaultValue={query}
          onChange={handleSearchChange}
          aria-label="Search products"
          className="w-full max-w-xs"
        />
        <div className="flex flex-wrap gap-3 text-xs text-ut-muted">
          <label className="flex items-center gap-2">
            <span className="whitespace-nowrap">Category</span>
            <select
              className="h-9 rounded-full border border-ut-muted/40 bg-white px-3 text-xs text-ut-slate"
              value={category ?? ""}
              onChange={handleSelectChange("category")}
            >
              <option value="">All</option>
              <option value="tshirt-short">T shirts · Short sleeve</option>
              <option value="tshirt-long">T shirts · Long sleeve</option>
              <option value="crewneck">Crew neck sweaters</option>
            </select>
          </label>
        </div>
      </section>

      <section aria-label="Products" className="space-y-6">
        {category ? (
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted">
            {categoryLabels[category]}
          </p>
        ) : null}
        {filtered.length === 0 ? (
          <p className="text-sm text-ut-muted">
            No pieces match your filters yet. Try easing your search or exploring a different
            category.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

