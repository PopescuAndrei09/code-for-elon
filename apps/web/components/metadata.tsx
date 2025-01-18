import type { Metadata } from "next"

import { AUTH_URL } from "@/config/constants"

const siteMetadata: Metadata = {
  metadataBase: new URL(AUTH_URL),
  title: "Stiri si Pacanele {CRM}",
  description:
    "Discover the power of streamlined customer relationship management with Stiri si Pacanele {CRM}. Revolutionize your business interactions, enhance customer satisfaction, and boost productivity with our intuitive and feature-rich CRM solution.",
  alternates: { canonical: AUTH_URL },
  applicationName: "Stiri si Pacanele {CRM}",
  authors: [{ name: "Stiri si Pacanele Team", url: AUTH_URL }],
  generator: "Next.js",
  keywords:
    "CRM solution, customer relationship management, sales tracking, contact management, business growth, productivity, customer satisfaction, relationship building, CRM software, streamlined processes, user-friendly interface, sales automation, data management, team collaboration, business efficiency, growth opportunities, client engagement, performance analytics, integrated communication, innovative technology",
  referrer: "origin",
  creator: "Stiri si Pacanele Team",
  publisher: "Stiri si Pacanele Team",
  manifest: "/favicons/site.webmanifest",
  openGraph: {
    type: "website",
    url: AUTH_URL,
    title: "Stiri si Pacanele {CRM}",
    description:
      "Discover the power of streamlined customer relationship management with Stiri si Pacanele {CRM}. Revolutionize your business interactions, enhance customer satisfaction, and boost productivity with our intuitive and feature-rich CRM solution.",
    siteName: "Stiri si Pacanele {CRM}",
    images: [
      {
        url: "/favicons/android-chrome-512x512.png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@site",
    creator: "@creator",
    images: "/favicons/android-chrome-512x512.png"
  },
  appleWebApp: { capable: true, title: "Stiri si Pacanele {CRM}", statusBarStyle: "black-translucent" },
  icons: [
    { rel: "shortcut icon", url: "/favicons/favicon.ico" },
    { rel: "apple-touch-icon", url: "/favicons/apple-touch-icon.png" },
    { rel: "mstile", sizes: "150x150", url: "/favicons/mstile-150x150.png" },
    { rel: "mask-icon", url: "/favicons/safari-pinned-tab.svg", color: "#f7a418" },
    { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicons/favicon-16x16.png" },
    { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicons/favicon-32x32.png" },
    { rel: "android-chrome", type: "image/png", sizes: "192x192", url: "/favicons/android-chrome-192x192.png" },
    { rel: "android-chrome", type: "image/png", sizes: "512x512", url: "/favicons/android-chrome-512x512.png" }
  ]
}

export { siteMetadata }
