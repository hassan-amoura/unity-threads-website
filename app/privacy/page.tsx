export const metadata = {
  title: "Privacy",
  description:
    "How Unity Threads approaches privacy, data, and respectful communication with our community."
};

export default function PrivacyPage() {
  return (
    <div className="container py-12 md:py-16 max-w-3xl space-y-8">
      <header className="space-y-3">
        <h1 className="font-display text-2xl md:text-3xl tracking-tight">
          Privacy, with care and clarity.
        </h1>
        <p className="text-sm text-ut-muted max-w-prose">
          This page outlines how we currently think about privacy in this demo experience. In a
          full production launch, this language would be expanded and reviewed with legal support.
        </p>
      </header>
      <section className="space-y-3 text-sm text-ut-muted">
        <div>
          <h2 className="text-sm font-semibold text-ut-slate">
            What this demo does—and doesn’t—collect
          </h2>
          <p className="mt-1">
            This prototype does not process real payments or store data in a production database.
            Any information you enter is used for interface behavior only (for example, showing
            confirmation screens) and may be logged in your local development environment.
          </p>
        </div>
        <div>
          <h2 className="text-sm font-semibold text-ut-slate">
            A future, production-ready policy
          </h2>
          <p className="mt-1">
            In a live environment, we would clearly document what data we collect, how long we keep
            it, who we share it with (if anyone), and how you can request access or deletion. We
            commit to explaining this in plain language and centering the safety of autistic people
            and families.
          </p>
        </div>
      </section>
    </div>
  );
}

