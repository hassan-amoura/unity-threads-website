import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="mt-section-lg border-t border-ut-muted/20 bg-ut-bg-alt pt-16 pb-10">
      <div className="container">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4 lg:gap-16">
          <div className="space-y-4 lg:col-span-2 lg:max-w-md">
            <h2 className="font-display text-xl tracking-tight text-ut-slate">
              Unity Threads
            </h2>
            <p className="text-sm text-ut-muted leading-relaxed">
              A Nebraska-based autism awareness and acceptance clothing brand. We create soft,
              sensory-friendly apparel and partner with local nonprofits to support autism
              advocacy, families, and inclusive communities.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ut-muted">
              Quick links
            </h3>
            <nav className="flex flex-col gap-3 text-sm" aria-label="Footer navigation">
              <Link href="/shop" className="text-ut-slate hover:text-ut-primary transition-colors">
                Shop
              </Link>
              <Link href="/impact" className="text-ut-slate hover:text-ut-primary transition-colors">
                Impact
              </Link>
              <Link href="/about" className="text-ut-slate hover:text-ut-primary transition-colors">
                About
              </Link>
              <Link href="/faq" className="text-ut-slate hover:text-ut-primary transition-colors">
                FAQ
              </Link>
              <Link href="/contact" className="text-ut-slate hover:text-ut-primary transition-colors">
                Contact
              </Link>
              <Link href="/privacy" className="text-ut-slate hover:text-ut-primary transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-ut-slate hover:text-ut-primary transition-colors">
                Terms
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-ut-muted">
              Stay in the loop
            </h3>
            <p className="text-sm text-ut-muted leading-relaxed">
              Gentle updates on new collections, impact stories, and ways to support the autism
              community.
            </p>
            <NewsletterForm />
            <div className="flex gap-4 pt-2" aria-label="Social links">
              <a
                href="#"
                className="text-ut-muted hover:text-ut-primary transition-colors focus-ring rounded-full p-1"
                aria-label="Facebook"
              >
                <span aria-hidden="true">f</span>
              </a>
              <a
                href="#"
                className="text-ut-muted hover:text-ut-primary transition-colors focus-ring rounded-full p-1"
                aria-label="Instagram"
              >
                <span aria-hidden="true">📷</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-14 pt-8 border-t border-ut-muted/20 flex flex-col gap-3 text-xs text-ut-muted sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Unity Threads. Crafted with care.</p>
          <p>Designed for sensory-friendly comfort and radical inclusion.</p>
        </div>
      </div>
    </footer>
  );
}
