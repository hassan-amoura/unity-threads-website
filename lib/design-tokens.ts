export const spacing = {
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1.25rem",
  lg: "2rem",
  xl: "3rem",
  "2xl": "4rem",
  section: "4rem",
  "section-lg": "6rem"
} as const;

export const typography = {
  hero: "font-display text-4xl md:text-5xl lg:text-hero tracking-tight text-ut-slate",
  display: "font-display text-3xl md:text-4xl tracking-tight text-ut-slate",
  section: "font-display text-2xl md:text-section tracking-tight text-ut-slate",
  heading: "font-display text-xl md:text-2xl tracking-tight text-ut-slate",
  body: "font-body text-base md:text-body-lg leading-relaxed text-ut-slate",
  bodySm: "font-body text-sm leading-relaxed text-ut-slate",
  subtle: "font-body text-sm text-ut-muted",
  label: "font-body text-xs font-medium uppercase tracking-widest text-ut-muted",
  productTitle: "font-display text-lg tracking-tight text-ut-slate"
} as const;
