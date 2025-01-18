import * as React from "react"
import type { Metadata } from "next"

import HomeView from "@/app/home"
import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Home`
}

const HomePage = async (): Promise<React.JSX.Element> => {
  return <HomeView />
}

export default HomePage
