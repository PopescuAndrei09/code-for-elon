import * as React from "react"
import type { Metadata } from "next"

import { TermsConditionsView } from "@/app/(terms)/terms/terms"
import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Terms & Conditions`
}

const TermsAndConditionsPage = (): React.JSX.Element => {
  return <TermsConditionsView />
}

export default TermsAndConditionsPage
