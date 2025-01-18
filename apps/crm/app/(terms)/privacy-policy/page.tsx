import * as React from "react"
import type { Metadata } from "next"

import { PrivacyPolicyView } from "@/app/(terms)/privacy-policy/privacy-policy"
import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - Privacy Policy`
}

const PrivacyPolicyPage = (): React.JSX.Element => {
  return <PrivacyPolicyView />
}

export default PrivacyPolicyPage
