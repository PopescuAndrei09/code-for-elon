import * as React from "react"
import type { Metadata } from "next"

import { CookiePolicyView } from "@/app/(terms)/cookie-policy/cookie-policy"
import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Cookie Policy`
}

const CookiePolicyPage = (): React.JSX.Element => {
  return <CookiePolicyView />
}

export default CookiePolicyPage
