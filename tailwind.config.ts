import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/theme/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: ["col-span-2", "col-span-3"],

  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "2rem",
        xl: "0rem",
        "2xl": "0rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        background: {
          DEFAULT: "var(--background)",
          2: "var(--background-2)",
          3: "var(--background-3)",
          4: "var(--background-4)",
        },
        foreground: "var(--foreground)",
        card: { DEFAULT: "var(--card)", 2: "var(--card-2)" },
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          foreground: "var(--accent-foreground)",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      animation: {
        "fade-in-up": "fade-in-up",
      },
      transitionDuration: {
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms",
        "5000": "5000ms",
        "6000": "6000ms",
      },
      transitionDelay: {
        "2000": "2000ms",
        "3000": "3000ms",
        "4000": "4000ms",
        "5000": "5000ms",
        "6000": "6000ms",
      },

      keyframes: {
        "fade-in-up": {
          "0%": { transform: "translateY(50px)", opacity: "0" },
          "20%": { transform: "translateY(0px)", opacity: "1" },
          "80%": { transform: "translateY(0px)", opacity: "1" },
          "90%": { transform: "translateY(0px)", opacity: "0" },
          "100%": { transform: "translateY(0px)", opacity: "0" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
export default config
