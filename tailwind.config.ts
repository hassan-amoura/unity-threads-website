import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1.5rem", sm: "2rem", lg: "2.5rem" },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1280px"
      }
    },
    extend: {
      colors: {
        ut: {
          primary: "rgb(var(--ut-primary) / <alpha-value>)",
          secondary: "rgb(var(--ut-secondary) / <alpha-value>)",
          bg: "rgb(var(--ut-bg) / <alpha-value>)",
          "bg-alt": "rgb(var(--ut-bg-alt) / <alpha-value>)",
          surface: "rgb(var(--ut-surface) / <alpha-value>)",
          muted: "rgb(var(--ut-muted) / <alpha-value>)",
          slate: "rgb(var(--ut-slate) / <alpha-value>)"
        }
      },
      spacing: {
        section: "4rem",
        "section-lg": "6rem"
      },
      borderRadius: {
        "boutique": "1.25rem",
        "boutique-lg": "1.5rem",
        "boutique-xl": "2rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(61, 56, 52, 0.06)",
        "soft-md": "0 8px 24px rgba(61, 56, 52, 0.05)",
        "soft-sm": "0 4px 12px rgba(61, 56, 52, 0.04)"
      },
      fontFamily: {
        display: ["var(--font-display)", "system-ui", "ui-sans-serif", "sans-serif"],
        body: ["var(--font-body)", "system-ui", "ui-sans-serif", "sans-serif"]
      },
      fontSize: {
        "hero": ["2.75rem", { lineHeight: "1.15", letterSpacing: "-0.02em" }],
        "section": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em" }],
        "body-lg": ["1.0625rem", { lineHeight: "1.6" }]
      }
    }
  },
  plugins: []
};

export default config;
