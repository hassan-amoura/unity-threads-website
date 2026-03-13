import { Accordion } from "@/components/ui/accordion";

export const metadata = {
  title: "Impact",
  description:
    "Unity Threads is committed to autism acceptance, sensory-aware design, and resourcing autistic-led organizations."
};

export default function ImpactPage() {
  return (
    <div className="container py-section md:py-section-lg space-y-12 max-w-4xl">
      <section className="space-y-4">
        <h1 className="font-display text-2xl md:text-3xl lg:text-section tracking-tight text-ut-slate">
          Impact, woven in from the first sketch.
        </h1>
        <p className="text-base text-ut-muted max-w-prose leading-relaxed">
          Unity Threads exists because autistic people, families, and advocates asked for clothing
          that speaks with them—not about them. Our impact practice centers autistic leadership,
          community care, and slow, accountable growth.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-sm font-semibold tracking-tight">
          Our current impact commitments
        </h2>
        <ul className="space-y-3 text-sm text-ut-muted">
          <li>
            <span className="font-medium text-ut-slate">
              1. Center autistic voices in every collection.
            </span>{" "}
            We seek input, feedback, and collaboration from autistic adults, youth, and caregivers
            before we release new designs.
          </li>
          <li>
            <span className="font-medium text-ut-slate">
              2. Prioritize sensory-aware materials and finishes.
            </span>{" "}
            We choose soft fabrics, minimized tags, and thoughtful seam placement to support a wide
            range of sensory needs.
          </li>
          <li>
            <span className="font-medium text-ut-slate">
              3. Invest financially in autistic-led work.
            </span>{" "}
            Each collection sets aside a portion of revenue for partners doing on-the-ground work in
            advocacy, mutual aid, and sensory-friendly programming.
          </li>
          <li>
            <span className="font-medium text-ut-slate">
              4. Tell stories that honor complexity.
            </span>{" "}
            We avoid puzzle pieces and &ldquo;fix it&rdquo; narratives, focusing instead on
            acceptance, interdependence, and joy.
          </li>
          <li>
            <span className="font-medium text-ut-slate">
              5. Design for long-term wear, not fast trends.
            </span>{" "}
            Durable construction and timeless silhouettes mean pieces can stay in wardrobes—and out
            of landfills—longer.
          </li>
        </ul>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">
          Future and current partners
        </h2>
        <p className="text-sm text-ut-muted max-w-prose">
          We&apos;re actively building a small circle of partner organizations, with a preference
          for autistic-led groups and community-based initiatives. This space will highlight
          specific partners, campaigns, and mutual aid funds as they are confirmed.
        </p>
        <div className="rounded-boutique-lg border border-dashed border-ut-muted/30 bg-ut-surface p-5 text-sm text-ut-muted">
          Partner highlight placeholder — reserve this area for logos, short partner stories, and
          transparent notes about how each purchase supports their work.
        </div>
      </section>

      <section className="space-y-3">
        <h2 className="text-sm font-semibold tracking-tight">
          Questions about impact
        </h2>
        <Accordion
          items={[
            {
              id: "how-we-choose-partners",
              title: "How do you choose which organizations to support?",
              content: (
                <p>
                  We prioritize autistic-led groups, local mutual aid networks, and organizations
                  with a clear track record of centering autistic people&apos;s own priorities. As
                  we grow, we&apos;ll publish more detail about our selection criteria and
                  long-term commitments.
                </p>
              )
            },
            {
              id: "percentages",
              title: "What percentage of sales goes to partners?",
              content: (
                <p>
                  Each collection has a dedicated allocation, typically starting at 5% of revenue,
                  with the goal of increasing that percentage as our studio becomes more stable. We
                  will share collection-specific breakdowns in our product launches and newsletters.
                </p>
              )
            },
            {
              id: "can-we-suggest",
              title: "Can I suggest an organization or project?",
              content: (
                <p>
                  Absolutely. If there&apos;s an autistic-led initiative or local program you love,
                  we&apos;d be glad to learn about it. You can share suggestions through our Contact
                  page.
                </p>
              )
            }
          ]}
        />
      </section>
    </div>
  );
}

