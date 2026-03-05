import { typography } from "@/lib/design-tokens";

export const metadata = {
  title: "About",
  description:
    "Learn about Unity Threads, a boutique clothing brand centering autism acceptance, sensory-friendly design, and community care."
};

export default function AboutPage() {
  return (
    <div className="container py-12 md:py-16 space-y-10">
      <section className="max-w-3xl space-y-4">
        <h1 className={typography.heading}>About Unity Threads</h1>
        <p className={typography.body + " text-ut-muted"}>
          Unity Threads began as a conversation between caregivers, autistic adults, and designers
          who were tired of clothing that spoke about autism without listening to autistic people.
          We set out to build a boutique label where comfort, dignity, and self-expression could
          live together in every stitch.
        </p>
        <p className={typography.body + " text-ut-muted"}>
          Our pieces are intentionally small-batch and slowly made. We prioritize soft, breathable
          fabrics, gentle finishes, and silhouettes that feel safe on sensory-sensitive days and
          special enough for milestone moments. We collaborate with autistic artists, advocates, and
          families to ensure our designs reflect real stories, not stereotypes.
        </p>
      </section>
    </div>
  );
}

