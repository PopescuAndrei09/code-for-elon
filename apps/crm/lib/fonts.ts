import { JetBrains_Mono as FontMono, Inter as FontSans, Sora, Source_Code_Pro, Space_Grotesk } from "next/font/google"

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans"
})

export const fontMono = FontMono({
  subsets: ["latin"],
  variable: "--font-mono"
})

export const sora = Sora({
  weight: ["300", "400", "600"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-sora"
})

export const code = Source_Code_Pro({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-code"
})

export const grotesk = Space_Grotesk({
  weight: ["300"],
  subsets: ["latin"],
  display: "block",
  variable: "--font-grotesk"
})
