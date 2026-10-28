import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {
    colors: { ink: "#06080d", panel: "#0b0f18", brand: "#1d4ed8", accent: "#22d3ee", muted: "#8b95a9" },
    fontFamily: { sans: ["var(--font-inter)", "system-ui", "sans-serif"], mono: ["var(--font-mono)", "monospace"] },
    maxWidth: { wrap: "1200px" },
  } },
  plugins: [],
} satisfies Config;
