import Link from "next/link";
import Image from "next/image";
import { typography } from "@/lib/design-tokens";
import { siteContent } from "@/data/siteContent";
import { ProductCard } from "@/components/storefront/product-card";
import { NewsletterForm } from "@/components/newsletter-form";
import { products, type ProductCategory } from "@/lib/data/products";

const FEATURED_COUNT = 4;
const categoryMeta: Record<ProductCategory, { label: string; slug: string }> = {
  "tshirt-short": { label: "T Shirts · Short Sleeve", slug: "tshirt-short" },
  "tshirt-long": { label: "T Shirts · Long Sleeve", slug: "tshirt-long" },
  crewneck: { label: "Crew Neck Sweaters", slug: "crewneck" },
};

const impactCards = [
  {
    title: "Supporting autism families",
    description: "A portion of every sale goes to programs that support autistic individuals and their families in our community.",
    icon: "❤️"
  },
  {
    title: "Partnering with local nonprofits",
    description: "We work with Nebraska-based organizations focused on acceptance, advocacy, and inclusive opportunities.",
    icon: "🤝"
  },
  {
    title: "Promoting autism acceptance",
    description: "Our designs and messaging center autistic voices and celebrate neurodiversity in everyday life.",
    icon: "🌈"
  },
  {
    title: "Creating community conversations",
    description: "Wear the message. Start the conversation. We’re here to help shift the narrative, one thread at a time.",
    icon: "💬"
  }
];

export default function HomePage() {
  const featured = products.slice(0, FEATURED_COUNT);
  const lifestyleProducts = products.slice(2, 4);

  const {
    heroHeadline,
    heroSubtext,
    heroImagePath,
    heroLabel,
    heroCtaPrimary,
    heroCtaSecondary,
    missionImagePath,
    lifestyleImagePath,
    categoryImagePaths,
  } = siteContent.homepage;

  return (
    <div className="flex flex-col">
      {/* Hero — image above headline; copy and image paths from data/siteContent.ts */}
      <section className="relative overflow-hidden bg-ut-bg-alt">
        <div className="container py-10 md:py-14">
          <div className="flex flex-col gap-10 md:gap-14">
            <div className="relative w-full aspect-[2/1] md:aspect-[21/9] overflow-hidden rounded-boutique-xl shadow-soft">
              <Image
                src={heroImagePath}
                alt=""
                fill
                sizes="(min-width: 768px) 1200px, 100vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="max-w-2xl space-y-6">
              <p className={typography.label}>{heroLabel}</p>
              <h1 className={typography.hero + " whitespace-pre-line"}>
                {heroHeadline}
              </h1>
              <p className={typography.body + " text-ut-muted"}>{heroSubtext}</p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/shop"
                  className="focus-ring inline-flex items-center justify-center rounded-full bg-ut-primary px-8 py-3.5 text-base font-medium text-white shadow-soft transition-all duration-200 hover:bg-ut-primary/90 hover:shadow-soft-md"
                >
                  {heroCtaPrimary}
                </Link>
                <Link
                  href="/impact"
                  className="focus-ring inline-flex items-center justify-center rounded-full border-2 border-ut-primary/40 bg-transparent px-8 py-3.5 text-base font-medium text-ut-primary transition-all duration-200 hover:bg-ut-primary/10 hover:border-ut-primary"
                >
                  {heroCtaSecondary}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="bg-ut-bg py-section-lg" aria-labelledby="featured-heading">
        <div className="container">
          <header className="mb-12 max-w-2xl">
            <h2 id="featured-heading" className={typography.section + " mb-3"}>
              Featured pieces
            </h2>
            <p className={typography.bodySm + " text-ut-muted"}>
              Bestsellers and new arrivals—sensory-friendly, community-minded, made to last.
            </p>
          </header>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featured.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/shop"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-ut-muted/40 bg-ut-surface px-6 py-2.5 text-sm font-medium text-ut-slate transition-colors duration-200 hover:bg-ut-primary hover:text-white hover:border-ut-primary"
            >
              View all products
            </Link>
          </div>
        </div>
      </section>

      {/* Advocacy mission — two column */}
      <section className="bg-ut-surface py-section-lg" aria-labelledby="mission-heading">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="relative aspect-[4/5] max-h-[500px] overflow-hidden rounded-boutique-xl shadow-soft">
              <Image
                src={missionImagePath}
                alt="Unity Threads community and advocacy—people first."
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="space-y-6">
              <h2 id="mission-heading" className={typography.section}>
                Wear the message. Support the community.
              </h2>
              <p className={typography.body + " text-ut-muted"}>
                We’re a small-batch studio in Nebraska partnering with local nonprofits to support
                autism advocacy, families, and inclusive communities. Every piece is designed for
                sensory-friendly comfort and quiet confidence—because acceptance starts with how we
                show up.
              </p>
              <Link
                href="/impact"
                className="focus-ring inline-flex items-center justify-center rounded-full bg-ut-primary px-6 py-3 text-sm font-medium text-white shadow-soft-sm transition-all duration-200 hover:bg-ut-primary/90"
              >
                Our impact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Community impact — four cards */}
      <section className="bg-ut-bg py-section-lg" aria-labelledby="impact-heading">
        <div className="container">
          <header className="mb-12 max-w-2xl">
            <h2 id="impact-heading" className={typography.section + " mb-3"}>
              Our commitments
            </h2>
            <p className={typography.bodySm + " text-ut-muted"}>
              5% of each collection supports autistic-led organizations and mutual aid. Here’s how we show up.
            </p>
          </header>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {impactCards.map((card) => (
              <div
                key={card.title}
                className="rounded-boutique-lg bg-ut-surface p-6 shadow-soft-sm transition-shadow duration-200 hover:shadow-soft"
              >
                <span className="text-2xl" aria-hidden="true">{card.icon}</span>
                <h3 className="mt-4 font-display text-lg font-semibold tracking-tight text-ut-slate">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm text-ut-muted leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link
              href="/impact"
              className="text-sm font-medium text-ut-primary underline underline-offset-4 hover:text-ut-primary/90"
            >
              Discover our impact commitments
            </Link>
          </div>
        </div>
      </section>

      {/* Lifestyle showcase — image + two products */}
      <section className="bg-ut-bg-alt py-section-lg" aria-labelledby="lifestyle-heading">
        <div className="container">
          <h2 id="lifestyle-heading" className={typography.section + " mb-10"}>
            Made for real life
          </h2>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr] lg:gap-12">
            <div className="relative aspect-[4/5] overflow-hidden rounded-boutique-xl shadow-soft">
              <Image
                src={lifestyleImagePath}
                alt="Unity Threads in everyday wear—comfort and style."
                fill
                sizes="(min-width: 1024px) 55vw, 100vw"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-6">
              {lifestyleProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Shop categories */}
      <section className="bg-ut-bg py-section-lg" aria-labelledby="categories-heading">
        <div className="container">
          <h2 id="categories-heading" className={typography.section + " mb-10"}>
            Shop by style
          </h2>
          <div className="grid gap-6 sm:grid-cols-3">
            {(Object.keys(categoryMeta) as ProductCategory[]).map((cat) => {
              const meta = categoryMeta[cat];
              const imagePath = categoryImagePaths[cat];
              return (
                <Link
                  key={cat}
                  href={`/shop?category=${meta.slug}`}
                  className="group relative aspect-[4/5] overflow-hidden rounded-boutique-xl shadow-soft-sm transition-all duration-300 hover:shadow-soft focus-ring"
                >
                  <Image
                    src={imagePath}
                    alt={meta.label}
                    fill
                    sizes="(min-width: 640px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ut-slate/80 via-ut-slate/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <span className="font-display text-lg font-semibold text-white drop-shadow-md">
                      {meta.label}
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-ut-surface py-section-lg" aria-labelledby="newsletter-heading">
        <div className="container max-w-xl text-center">
          <h2 id="newsletter-heading" className={typography.section + " mb-3"}>
            Join the community
          </h2>
          <p className={typography.body + " text-ut-muted mb-8"}>
            Gentle updates on new collections, impact stories, and ways to support the autism community. No spam—just warmth.
          </p>
          <div className="mx-auto max-w-sm">
            <NewsletterForm />
          </div>
        </div>
      </section>
    </div>
  );
}
