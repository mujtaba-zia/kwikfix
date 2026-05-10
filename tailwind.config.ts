import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#34499E",
          "blue-dark": "#2a3b82",
          "blue-deep": "#24366f",
          navy: "#141c36",
          "navy-mid": "#1c2744",
          green: "#65C3A6",
          "green-dark": "#52a88f",
          "green-bright": "#7ad4b8",
          teal: "#5aaa9a",
          ice: "#dceaf2",
          cream: "#f2ebe3",
          mist: "#e8f4f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px -4px rgba(52, 73, 158, 0.12)",
        elegant: "0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 24px -8px rgba(52, 73, 158, 0.1)",
        card: "0 8px 32px -8px rgba(52, 73, 158, 0.15)",
        lift: "0 12px 40px -12px rgba(52, 73, 158, 0.2), 0 4px 16px -4px rgba(101, 195, 166, 0.14)",
        premium:
          "0 4px 6px -1px rgba(20, 28, 54, 0.08), 0 20px 40px -12px rgba(52, 73, 158, 0.22), 0 0 0 1px rgba(255,255,255,0.06)",
        glow: "0 0 0 1px rgba(101, 195, 166, 0.35), 0 12px 40px -8px rgba(101, 195, 166, 0.25)",
        "btn-primary": "0 4px 14px -2px rgba(52, 73, 158, 0.45), 0 8px 24px -4px rgba(52, 73, 158, 0.35)",
        "btn-green": "0 4px 14px -2px rgba(101, 195, 166, 0.5), 0 8px 24px -4px rgba(82, 168, 143, 0.35)",
      },
      backgroundImage: {
        "gradient-brand": "linear-gradient(135deg, #34499E 0%, #2a3b82 45%, #65C3A6 100%)",
        "gradient-brand-soft":
          "linear-gradient(135deg, rgba(52, 73, 158, 0.12) 0%, rgba(101, 195, 166, 0.14) 100%)",
        /* Sections use the global `bg-page` canvas; use these for cards and accents only */
        "gradient-navy": "linear-gradient(160deg, #141c36 0%, #1c2744 40%, #24366f 100%)",
        "gradient-cta": "linear-gradient(135deg, #141c36 0%, #34499E 42%, #2a3b82 72%, #1c2744 100%)",
        "gradient-card-shine":
          "linear-gradient(135deg, rgba(255,255,255,0.88) 0%, rgba(255,255,255,0.42) 50%, rgba(101,195,166,0.12) 100%)",
        "gradient-surface":
          "linear-gradient(180deg, #ffffff 0%, #f1f6fb 45%, #e8f4f1 100%)",
        "gradient-band-navy":
          "linear-gradient(160deg, #141c36 0%, #1c2744 35%, #24366f 55%, #1a2340 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out both",
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
