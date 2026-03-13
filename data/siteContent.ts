/**
 * Centralized site content for easy editing.
 * Update copy and image paths here instead of inside page components.
 *
 * IMAGE PATHS:
 * - Hero image: replace the file at public/images/hero/hero.jpg (or .webp). Update hero.imagePath below if you use a different filename.
 * - Founder image: replace the file at public/images/about/founder.jpg. Update about.founderImagePath if you use a different filename.
 * - Product images: add images to public/images/products/ and update each product's images in lib/data/products.ts (see comments there).
 */

export const siteContent = {
  homepage: {
    /** Edit the main hero headline (appears below the hero image). */
    heroHeadline: "Wear the message.\nSupport the community.",
    /** Edit the short line under the headline. */
    heroSubtext:
      "Unity Threads is a Nebraska-based clothing brand centering autism acceptance and advocacy. Soft, thoughtful pieces designed for sensory-friendly comfort and everyday activism.",
    /** Hero image path: file lives in public/images/hero/. Use hero.svg until you add hero.jpg; then set to /images/hero/hero.jpg */
    heroImagePath: "/images/hero/hero.svg",
    /** Label above the headline (small caps). */
    heroLabel: "Boutique apparel for autism awareness",
    /** Primary CTA text. */
    heroCtaPrimary: "Shop the collection",
    /** Secondary CTA text. */
    heroCtaSecondary: "Learn about our impact",
    /** Advocacy mission section image (two-column block). File in public/images/homepage/ or use hero. */
    missionImagePath: "/images/hero/hero.svg",
    /** Lifestyle showcase section image. File in public/images/homepage/ when you have one. */
    lifestyleImagePath: "/images/hero/hero.svg",
    /** Category cards on homepage: image path per category. Add files to public/images/homepage/ or reuse one. */
    categoryImagePaths: {
      "tshirt-short": "/images/homepage/short-sleeve.svg",
      "tshirt-long": "/images/homepage/long-sleeve.svg",
      crewneck: "/images/homepage/crewneck.svg",
    },
  },

  about: {
    /** Founder/owner photo: file lives in public/images/about/. Use founder.svg until you add founder.jpg; then set to /images/about/founder.jpg */
    founderImagePath: "/images/about/founder.svg",
    /** Heading for the founder section (e.g. "Meet the maker" or "Our story"). */
    founderHeading: "Our story",
    /** Main body copy for the about page (founder/story section). */
    founderBody: [
      "Unity Threads began as a conversation between caregivers, autistic adults, and designers who were tired of clothing that spoke about autism without listening to autistic people. We set out to build a boutique label where comfort, dignity, and self-expression could live together in every stitch.",
      "Our pieces are intentionally small-batch and slowly made. We prioritize soft, breathable fabrics, gentle finishes, and silhouettes that feel safe on sensory-sensitive days and special enough for milestone moments. We collaborate with autistic artists, advocates, and families to ensure our designs reflect real stories, not stereotypes.",
    ],
  },
} as const;

export type SiteContent = typeof siteContent;
