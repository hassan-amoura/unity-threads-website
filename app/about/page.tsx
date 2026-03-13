import Image from "next/image";
import { typography } from "@/lib/design-tokens";
import { siteContent } from "@/data/siteContent";

export const metadata = {
  title: "About",
  description:
    "Learn about Unity Threads, a boutique clothing brand centering autism acceptance, sensory-friendly design, and community care.",
};

export default function AboutPage() {
  const { founderImagePath, founderHeading, founderBody } = siteContent.about;

  return (
    <div className="container py-section md:py-section-lg">
      <section className="grid gap-10 lg:grid-cols-[1fr_auto] lg:gap-16 lg:items-start">
        <div className="max-w-3xl space-y-6 order-2 lg:order-1">
          <h1 className={typography.section}>About Unity Threads</h1>
          <h2 className="text-lg font-semibold tracking-tight text-ut-slate">
            {founderHeading}
          </h2>
          {founderBody.map((paragraph, i) => (
            <p key={i} className={typography.body + " text-ut-muted"}>
              {paragraph}
            </p>
          ))}
        </div>
        <div className="relative w-full aspect-[3/4] max-w-md mx-auto lg:mx-0 lg:max-w-sm lg:flex-shrink-0 order-1 lg:order-2 overflow-hidden rounded-boutique-xl shadow-soft">
          <Image
            src={founderImagePath}
            alt="Unity Threads founder"
            fill
            sizes="(min-width: 1024px) 384px, 100vw"
            className="object-cover"
            priority
          />
        </div>
      </section>
    </div>
  );
}
