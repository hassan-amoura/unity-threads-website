export const metadata = {
  title: "Terms",
  description:
    "High-level terms for using the Unity Threads demo experience and a preview of future store policies."
};

export default function TermsPage() {
  return (
    <div className="container py-12 md:py-16 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Gentle, plain-language terms.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          This is a prototype of the Unity Threads storefront. These terms describe how to use this
          demo and hint at what a fuller set of store policies could include.
        </p>
      </header>
      <section className="space-y-3 text-sm text-ut-muted">
        <div>
          <h2 className="text-sm font-semibold text-ut-slate">Demo only</h2>
          <p className="mt-1">
            No real orders are processed here. Any &ldquo;orders&rdquo; you place are for interface
            testing and exploration only. Prices, timelines, and policies shown are placeholders.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ut-slate">
            Respectful use and community safety
          </h2>
          <p className="mt-1">
            Unity Threads is rooted in autism acceptance and anti-ableist values. We reserve the
            right, in a real deployment, to refuse collaborations or messaging that conflict with
            those values or that could cause harm to autistic people and families.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ut-slate">
            Future, production-ready terms
          </h2>
          <p className="mt-1">
            A live version of Unity Threads would include detailed information about purchases,
            shipping, returns, intellectual property, and dispute resolution—all written in
            accessible language and reviewed by legal counsel.
          </p>
        </div>
      </section>
    </div>
  );
}

