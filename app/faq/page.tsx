import { Accordion } from "@/components/ui/accordion";

export const metadata = {
  title: "FAQ",
  description:
    "Answers to common questions about Unity Threads, sizing, sensory-friendly design, and custom orders."
};

export default function FaqPage() {
  return (
    <div className="container py-12 md:py-16 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Gentle answers to common questions.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          If you don&apos;t see your question here, you&apos;re always welcome to reach out.
          We&apos;ll respond with care and as much clarity as we can.
        </p>
      </header>
      <Accordion
        items={[
          {
            id: "sensory-design",
            title: "What makes Unity Threads pieces sensory-aware?",
            content: (
              <p>
                We prioritize soft fabrics, smooth interior finishes, minimized tags, and seams that
                avoid high-friction areas where possible. Many pieces are tagless or use printed
                care labels, and we regularly invite feedback from autistic people about what feels
                comfortable—or not.
              </p>
            )
          },
          {
            id: "sizing",
            title: "How does sizing work?",
            content: (
              <p>
                Our current sizing follows familiar unisex ranges (XS–2XL) with fit notes on each
                product page. We&apos;re working toward expanded sizing and clearer visual size
                guides. If you&apos;re between sizes or unsure, we generally suggest choosing the
                size that allows a bit more ease and movement.
              </p>
            )
          },
          {
            id: "shipping-returns",
            title: "Do you offer returns or exchanges?",
            content: (
              <p>
                In a full launch, we&apos;d offer a thoughtful return and exchange policy that
                accommodates sensory needs—for example, understanding that someone may need to try
                a piece at home over time to know if it&apos;s truly comfortable. This demo doesn&apos;t
                process real orders, but the policy you see here is a placeholder for that future
                flow.
              </p>
            )
          },
          {
            id: "custom-vs-corporate",
            title: "What’s the difference between custom, corporate, and bulk orders?",
            content: (
              <p>
                Custom orders are often highly personal—marking a moment, honoring a story, or
                creating one-of-a-kind pieces. Corporate orders support teams, events, or
                organizations who want sensory-aware apparel. Bulk orders focus on larger quantities
                for schools, community groups, or fundraisers, with flexible price structures.
              </p>
            )
          },
          {
            id: "autism-language",
            title: "How do you talk about autism in your designs?",
            content: (
              <p>
                We listen closely to autistic people and aim to avoid deficit-based language,
                puzzle-piece imagery, and &ldquo;fix it&rdquo; narratives. We lean toward identity-first
                language (autistic person) while also respecting that individuals describe
                themselves in different ways.
              </p>
            )
          }
        ]}
      />
    </div>
  );
}

