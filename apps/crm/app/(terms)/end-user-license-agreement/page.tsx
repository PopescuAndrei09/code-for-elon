import * as React from "react"
import type { Metadata } from "next"

import { EndUserLicenseAgreementView } from "@/app/(terms)/end-user-license-agreement/end-user-license-agreement"
import { siteMetadata } from "@/components/metadata"

export const metadata: Metadata = {
  title: `${siteMetadata.title} - End User License Agreement`
}

const EndUserLicenseAgreementPage = (): React.JSX.Element => {
  return <EndUserLicenseAgreementView />
}

export default EndUserLicenseAgreementPage
