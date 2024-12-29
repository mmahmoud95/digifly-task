import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#49BD88",
        secondary: "#6D5CBC",
        fontcolor: "#1a1a1a",
        black600: "var(--black-black-600)",
        black50: "var(--black-black-50)",
        black20: "var(--black-black-20)",
        black400: "var(--black-black-400)",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)"],
        tajwal: ["var(--font-tajwal)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
