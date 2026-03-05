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
      padding: "1.5rem"
    },
    extend: {
      colors: {
        ut: {
          primary: "rgb(var(--ut-primary) / <alpha-value>)",
          bg: "rgb(var(--ut-bg) / <alpha-value>)",
          muted: "rgb(var(--ut-muted) / <alpha-value>)",
          slate: "rgb(var(--ut-slate) / <alpha-value>)"
        }
      },
      borderRadius: {
        lg: "1rem",
        md: "0.75rem",
        sm: "0.5rem"
      },
      boxShadow: {
        soft: "0 18px 45px rgba(15, 23, 42, 0.08)"
      },
      fontFamily: {
        display: ["system-ui", "ui-sans-serif", "sans-serif"],
        body: ["system-ui", "ui-sans-serif", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
