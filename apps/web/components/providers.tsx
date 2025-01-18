"use client"

import * as React from "react"
import { SessionProvider } from "next-auth/react"

import { ThemeProvider } from "@/components/theme-provider"

const AppProviders = ({ children }: { children: React.ReactNode | React.ReactNode[] }): React.JSX.Element => {
  return (
    <ThemeProvider attribute='class' defaultTheme='dark'>
      <SessionProvider>{children}</SessionProvider>
    </ThemeProvider>
  )
}

export { AppProviders }
