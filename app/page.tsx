import Link from "next/link";
import { typography } from "@/lib/design-tokens";
import { HeroShowcase } from "@/components/home/hero-showcase";

export default function HomePage() {
  return (
    <div className="container py-12 md:py-20 space-y-20">
      <section className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] items-center">
        <div className="space-y-6">
          <p className="uppercase tracking-[0.22em] text-xs text-ut-muted">
            Boutique apparel for autism awareness
          </p>
          <h1 className={typography.display}>
            Soft, thoughtful pieces
            <br />
            for beautifully different minds.
          </h1>
          <p className={typography.body + " text-ut-muted max-w-xl"}>
            Unity Threads is a small-batch clothing studio centering autistic people, families, and
            advocates. Every piece is designed for sensory-friendly comfort, quiet confidence, and
            everyday activism.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop"
              className="focus-ring inline-flex items-center justify-center rounded-full bg-ut-primary px-6 py-2.5 text-sm font-medium text-white shadow-soft hover:bg-ut-primary/90"
            >
              Explore the shop
            </Link>
            <Link
              href="/orders/custom"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-ut-primary bg-transparent px-6 py-2.5 text-sm font-medium text-ut-primary hover:bg-ut-primary/5"
            >
              Design a custom piece
            </Link>
          </div>
          <p className="text-xs text-ut-muted">
            A portion of every purchase supports autism advocacy, sensory-friendly programming, and
            community-led initiatives.
          </p>
        </div>
        <HeroShowcase />
      </section>

      <section
        id="impact"
        className="rounded-[2rem] border border-ut-muted/30 bg-white p-6 md:p-10 shadow-soft"
        aria-labelledby="impact-heading"
      >
        <h2
          id="impact-heading"
          className="text-xs font-medium uppercase tracking-[0.22em] text-ut-muted mb-4"
        >
          Impact highlight
        </h2>
        <p className="text-sm font-medium text-ut-slate max-w-2xl mb-8">
          5% of each collection is reserved for direct support to autistic-led organizations and
          mutual aid efforts.
        </p>
        <div className="grid gap-4 sm:grid-cols-3 text-xs mb-8">
          <div className="rounded-2xl bg-ut-muted/20 p-4">
            <p className="font-semibold text-ut-slate">Sensory-aware</p>
            <p className="mt-1 text-ut-muted">
              Soft fabrics, tagless labels, and thoughtfully placed seams.
            </p>
          </div>
          <div className="rounded-2xl bg-ut-muted/20 p-4">
            <p className="font-semibold text-ut-slate">Story-first</p>
            <p className="mt-1 text-ut-muted">
              Designs shaped with input from autistic creators and families.
            </p>
          </div>
          <div className="rounded-2xl bg-ut-muted/20 p-4">
            <p className="font-semibold text-ut-slate">Community-led</p>
            <p className="mt-1 text-ut-muted">
              Collections that honor lived experiences, not stereotypes.
            </p>
          </div>
        </div>
        <Link
          href="/impact"
          className="text-sm font-medium text-ut-primary hover:text-ut-primary/90 underline underline-offset-4"
        >
          Discover our impact commitments
        </Link>
      </section>
    </div>
  );
}

