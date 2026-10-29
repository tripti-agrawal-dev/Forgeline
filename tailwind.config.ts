import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#080d18", panel: "#111827", brand: "#1d4ed8", accent: "#48d6e8", gold: "#c6a878", ivory: "#f5f3ee", muted: "#9aa4b8" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"], serif: ["var(--font-serif)", "Georgia", "serif"] },
    maxWidth: { wrap: "1200px" },
  } },
  plugins: [],
} satisfies Config;
