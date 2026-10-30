import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#07241b", panel: "#0d3326", brand: "#065f46", accent: "#047857", gold: "#c6a878", ivory: "#f4f8f5", muted: "#52645c" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"], serif: ["var(--font-inter)", "system-ui", "sans-serif"] },
    maxWidth: { wrap: "1200px" },
  } },
  plugins: [],
} satisfies Config;
