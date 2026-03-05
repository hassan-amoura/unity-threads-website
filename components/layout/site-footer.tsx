import Link from "next/link";
import { NewsletterForm } from "@/components/newsletter-form";

export function SiteFooter() {
  return (
    <footer className="border-t border-ut-muted/40 bg-white pt-10 pb-8 mt-16">
      <div className="container grid gap-10 md:grid-cols-4">
        <div className="space-y-3 md:col-span-2">
          <h2 className="font-display text-lg tracking-tight text-ut-slate">Unity Threads</h2>
          <p className="text-sm text-ut-muted max-w-md">
            Boutique pieces that celebrate neurodiversity, center autistic voices, and wrap every
            body in warmth and respect.
          </p>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold">Quick links</h3>
          <nav className="flex flex-col gap-1 text-sm text-ut-muted">
            <Link href="/shop" className="hover:text-ut-slate">
              Shop
            </Link>
            <Link href="/impact" className="hover:text-ut-slate">
              Impact
            </Link>
            <Link href="/faq" className="hover:text-ut-slate">
              FAQ
            </Link>
            <Link href="/privacy" className="hover:text-ut-slate">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-ut-slate">
              Terms
            </Link>
          </nav>
        </div>
        <div className="space-y-3">
          <h3 className="text-sm font-semibold text-ut-slate">Stay in the loop</h3>
          <p className="text-sm text-ut-muted">
            Gentle updates on new collections, impact stories, and ways to support the autism
            community.
          </p>
          <NewsletterForm />
        </div>
      </div>
      <div className="container mt-8 flex flex-col gap-2 border-t border-ut-muted/40 pt-4 text-xs text-ut-muted md:flex-row md:items-center md:justify-between">
        <p>© {new Date().getFullYear()} Unity Threads. Crafted with care.</p>
        <p>Designed for sensory-friendly comfort and radical inclusion.</p>
      </div>
    </footer>
  );
}

