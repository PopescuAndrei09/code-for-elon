import type { Config } from "tailwindcss"
import { fontFamily } from "tailwindcss/defaultTheme"

const config: Config = {
  darkMode: "class",
  content: ["../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"],
  // custom tailwind colors and other theme variables
  theme: {
    container: {
      padding: "2rem",
      screens: {
        "2xl": "1400px"
      },
      center: true
    },
    extend: {
      animation: {
        fadeIn: "fade-in 0.2s cubic-bezier(0.46, 0.03, 0.52, 0.96) forwards;"
      },
      backgroundImage: (_theme: any) => ({
        "background-home": "url('/images/homepage.png')"
      }),
      backdropFilter: {
        none: "none",
        blur: "blur(20px)"
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        sora: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)"
      },
      colors: {
        artdevium: {
          amethyst: "#AC6AFF",
          azure: "#0081FF",
          spring: "#ADFA1D",
          rose: "#FF2A6D",
          blue: "#1792A2",
          cyan: "#D1F7FF",
          bittersweet: "#E96D5E",
          tangerine: "#FF9760",
          vanilla: "#FFE69D",
          resada: "#6A7E6A",
          delft: "#393F5F",
          charcoal: "#464555",
          olive: "#444939"
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        sidebar: "hsl(var(--sidebar))",

        primary: "hsl(var(--primary))",
        "primary-foreground": "hsl(var(--primary-foreground))",

        secondary: "hsl(var(--secondary))",
        "secondary-foreground": "hsl(var(--secondary-foreground)",

        accent: "hsl(var(--accent))",
        "accent-foreground": "hsl(var(--accent-foreground)",

        muted: "hsl(var(--muted))",
        "muted-foreground": "hsl(var(--muted-foreground)",

        card: "hsl(var(--card))",
        "card-foreground": "hsl(var(--card-foreground)",

        popover: "hsl(var(--popover))",
        "popover-foreground": "hsl(var(--popover-foreground)",

        warning: "hsl(var(--warning))",
        "warning-foreground": "hsl(var(--warning-foreground)",

        destructive: "hsl(var(--destructive))",
        "destructive-foreground": "hsl(var(--destructive-foreground)",

        border: "hsl(var(--border))",
        input: "hsl(var(--input))",

        gray: "rgba(255, 255, 255, 0.7)"
      },
      borderRadius: {
        lg: `var(--radius)`,
        md: `calc(var(--radius) - 2px)`,
        sm: "calc(var(--radius) - 4px)"
      },
      margin: {
        section: "margin:24"
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/postcss7-compat"),
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-filters")
  ]
}

export default config
