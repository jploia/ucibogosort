import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Cabin", "sans-serif"],
        jersey: ["Jersey 20", "sans-serif"],
      },
      colors: {
        "pale-purple": "#F2E7FF",
      },
    },
  },
  plugins: [],
} satisfies Config;
