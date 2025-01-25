import type { Config } from "tailwindcss";
const { fontFamily } = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cabin: ["var(--font-cabin-sans)", ...fontFamily.sans],
        jersey: ["var(--font-jersey-20)", ...fontFamily.sans],
      },
      colors: {
        "pale-purple": "#F2E7FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
