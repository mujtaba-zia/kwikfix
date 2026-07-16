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
          mist: "#e8f4f1",
        },
      },
      fontFamily: {
        sans: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-outfit)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(15, 23, 42, 0.04), 0 8px 24px -12px rgba(20, 28, 54, 0.12)",
        card: "0 1px 2px rgba(15, 23, 42, 0.05), 0 16px 40px -16px rgba(20, 28, 54, 0.18)",
        lift: "0 12px 40px -12px rgba(20, 28, 54, 0.25)",
      },
      backgroundImage: {
        /* Contained dark panel (FinalCTA) */
        "gradient-panel": "linear-gradient(160deg, #141c36 0%, #1c2744 45%, #24366f 100%)",
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
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.65s ease-out both",
        "fade-in": "fade-in 0.5s ease-out both",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
