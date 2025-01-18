import * as React from "react"
import { Analytics } from "@vercel/analytics/react"

import "@/styles/globals.css"

import type { Metadata } from "next"
import { headers } from "next/headers"

import { cn, Toaster } from "@ssp/ui"

import { FooterView } from "@/components/footer"
import { siteMetadata } from "@/components/metadata"
import { NavigationBar } from "@/components/navigation"
import { AppProviders } from "@/components/providers"
import { Section } from "@/components/section"
import { TailwindIndicator } from "@/components/tailwind-indicator"
import { code, fontMono, fontSans, grotesk, sora } from "@/lib/fonts"
import TRPCReactProvider from "@/trpc/client"
// import { Background } from "@ssp/ui/components/common"
import { serverApi } from "@/trpc/server"

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = async ({ children }: RootLayoutProps): Promise<React.JSX.Element> => {
  const initialNotifications = await serverApi.notification.getNotifications.query()

  return (
    <html lang='en' suppressHydrationWarning>
      <head />
      <body
        className={cn(
          "background-grid no-scrollbar min-h-screen bg-[length:6rem_6rem] font-mono text-base antialiased",
          fontSans.variable,
          fontMono.variable,
          sora.variable,
          code.variable,
          grotesk.variable
        )}
      >
        <TRPCReactProvider headers={headers()}>
          <AppProviders>
            <NavigationBar initialData={initialNotifications} />
            <Section>{children}</Section>
            <FooterView />
          </AppProviders>
        </TRPCReactProvider>
        <Toaster />
        <TailwindIndicator />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata: Metadata = siteMetadata

export default RootLayout
